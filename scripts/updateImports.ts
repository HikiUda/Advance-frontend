import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

function isAbsolute(value: string) {
    const layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];
    return layers.some((layers) => value.startsWith(layers));
}

const files = project.getSourceFiles();

files.forEach((sourceFile) => {
    const importDeclorations = sourceFile.getImportDeclarations();
    importDeclorations.forEach((importDecloration) => {
        const value = importDecloration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDecloration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
