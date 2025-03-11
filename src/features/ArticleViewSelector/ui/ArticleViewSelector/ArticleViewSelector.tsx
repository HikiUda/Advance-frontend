import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import TiledSvg from '@/shared/assets/icon/tiled.svg';
import ListSvg from '@/shared/assets/icon/list.svg';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    { view: ArticleView.SMALL, icon: TiledSvg },
    { view: ArticleView.BIG, icon: ListSvg },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view = ArticleView.SMALL, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon
                        Svg={viewType.icon}
                        width={24}
                        hanging={24}
                        className={classNames(
                            cls.viewBtn,
                            { [cls.notSelected]: viewType.view !== view },
                            [],
                        )}
                    />
                </Button>
            ))}
        </div>
    );
});
