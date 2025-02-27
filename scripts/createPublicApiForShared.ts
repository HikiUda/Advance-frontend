// createPublicApiForShared.ts
import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

function isAbsolute(value: string) {
    const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
    return layers.some((layers) => value.startsWith(layers));
}

const files = project.getSourceFiles();
const uiPath = path.resolve(__dirname, '..', 'src', 'shared', 'ui');
const sharedDirectory = project.getDirectory(uiPath);
const componentsDirs = sharedDirectory?.getDirectories();

componentsDirs?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);

    if (!indexFile) {
        const sourceCode = `export * from './${directory.getBaseName()}';`;
        const file = directory.createSourceFile(indexFilePath, sourceCode, { overwrite: true });
        file.save();
    }
});

files.forEach((sourceFile) => {
    const importDeclorations = sourceFile.getImportDeclarations();
    importDeclorations.forEach((importDecloration) => {
        const value = importDecloration.getModuleSpecifierValue();
        const valueWithoutAlias = value.replace('@/', '');

        const segment = valueWithoutAlias.split('/');

        const isSharedLayaer = segment?.[0] === 'shared';
        const isUiSlice = segment?.[1] === 'ui';

        if (isAbsolute(valueWithoutAlias) && isSharedLayaer && isUiSlice) {
            const result = segment.slice(0, 3).join('/');
            importDecloration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
