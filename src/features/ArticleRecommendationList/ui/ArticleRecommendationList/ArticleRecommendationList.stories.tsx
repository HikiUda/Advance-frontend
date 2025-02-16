import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { ArticleType } from 'entities/Article';
import { Article, ArticleBlockType } from 'entities/Article/model/types/article';
import { f } from 'msw/lib/core/HttpResponse-5Sn2vNaJ';
import { ArticleRecommendationList } from './ArticleRecommendationList';

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: '',
    views: 1022,
    user: { id: '1', username: 'wendsew', avatar: '' },
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: 1,
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
};

const meta: Meta<typeof ArticleRecommendationList> = {
    title: 'features/ArticleRecommendationList',
    component: ArticleRecommendationList,

    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationList>;

export const Primary: Story = {
    parameters: {
        msw: {
            handlers: [
                http.get(
                    `${__API__}/articles`,
                    ({ request }) => {
                        const url = new URL(request.url);
                        url.searchParams.set('_limit', '3');
                        return HttpResponse.json([article, { ...article, id: '2' }, { ...article, id: '3' }]);
                    },
                    // eslint-disable-next-line function-paren-newline
                ),
            ],
        },
    },
};
