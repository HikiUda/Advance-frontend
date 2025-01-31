import type { Meta, StoryObj } from '@storybook/react';

import { Article, ArticleView } from 'entities/Article';
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator';
import { EntityId } from '@reduxjs/toolkit';
import ArticlePage from './ArticlePage';

const meta: Meta<typeof ArticlePage> = {
    title: 'page/ArticlePage',
    component: ArticlePage,

    tags: ['autodocs'],
};

const ids: EntityId[] = ['1', '2', '3', '4', '5'];
const article = {
    id: '1',
    title: 'Javascript news Javascript news Javascript news Javascript news Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'wendwe',
        avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    },
    type: ['IT', 'SCIENCE', 'ECONOMIC', 'IT', 'IT'],
    blocks: [
        {
            id: 1,
            type: 'TEXT',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        { id: 2, type: 'CODE', code: '' },
    ],
} as Article;

const articles = new Array(5).fill(0).map((item, index) => ({ ...article, id: String(index) }));
const entities = {
    1: articles[0],
    2: articles[1],
    3: articles[2],
    4: articles[3],
    5: articles[4],
};
export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Tiled: Story = {
    decorators: [StoreProviderDecorator({ articlePage: { ids, entities } })],
};
export const List: Story = {
    decorators: [StoreProviderDecorator({ articlePage: { ids, entities, view: ArticleView.BIG } })],
};
export const TiledIsLoading: Story = {
    decorators: [StoreProviderDecorator({ articlePage: { ids, entities, isLoading: true } })],
};
export const ListIsLoading: Story = {
    decorators: [
        StoreProviderDecorator({ articlePage: { ids, entities, view: ArticleView.BIG, isLoading: true } }),
    ],
};
