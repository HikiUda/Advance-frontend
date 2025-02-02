import { ScrollSaveScheme } from '../types/scrollSaveScheme';
import { scrollSaveActions, scrollSaveReducer } from './scrollSaveSlice';

describe('scrollSaveSlice', () => {
    it('add scroll', () => {
        const state: DeepPartial<ScrollSaveScheme> = { scroll: {} };
        expect(
            scrollSaveReducer(
                state as ScrollSaveScheme,
                scrollSaveActions.setScrollPosition({ path: 'main', postion: 222 }),
            ),
        ).toEqual({
            scroll: {
                main: 222,
            },
        });
    });
});
