import { Article, ArticleView } from '@/entities/Article';

import { ArticlePageScheme } from '../types/article';
import { articlesPageActions, articlesPageReducer } from './articlePageSlice';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

describe('articlePageSlice', () => {
    it('init view', () => {
        const state: DeepPartial<ArticlePageScheme> = { _inited: false, view: ArticleView.BIG, limit: 1 };
        expect(articlesPageReducer(state as ArticlePageScheme, articlesPageActions.initState())).toEqual({
            view: ArticleView.SMALL,
            limit: 9,
            _inited: true,
        });
    });
    it('setView', () => {
        const state: DeepPartial<ArticlePageScheme> = { view: ArticleView.SMALL };
        expect(
            articlesPageReducer(state as ArticlePageScheme, articlesPageActions.setView(ArticleView.BIG)),
        ).toEqual({
            view: ArticleView.BIG,
        });
    });
    it('get articles', () => {
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
        const state: DeepPartial<ArticlePageScheme> = {
            ids: [],
            entities: {},
            isLoading: true,
            limit: 4,
            hasMore: true,
        };
        expect(
            articlesPageReducer(state as ArticlePageScheme, fetchArticlesList.fulfilled([article], '', {})),
        ).toEqual({
            ids: ['1'],
            entities: {
                1: article,
            },
            limit: 4,
            isLoading: false,
            hasMore: false,
        });
    });
});
