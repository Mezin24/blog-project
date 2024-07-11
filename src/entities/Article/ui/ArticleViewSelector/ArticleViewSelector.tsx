import { FC, memo } from 'react';
import { Button, ButtonTheme } from 'shared/UI/Button/Button';
import { Icon } from 'shared/UI/Icon/Icon';
import ListIcon from 'shared/assets/icons/list.svg';
import TilesIcon from 'shared/assets/icons/tiles.svg';
import { classnames } from 'shared/lib/classnames/classnames';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onChangeView: (view: ArticleView) => void;
}

const viewItems = [
  { Icon: ListIcon, view: ArticleView.BIG },
  { Icon: TilesIcon, view: ArticleView.SMALL },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
  (props: ArticleViewSelectorProps) => {
    const { className, view, onChangeView } = props;

    return (
      <div className={classnames(cls.ArticleViewSelector, {}, [className])}>
        {viewItems.map((item) => (
          <Button
            key={item.view}
            theme={ButtonTheme.CLEAR}
            onClick={() => onChangeView(item.view)}
          >
            <Icon
              Svg={item.Icon}
              className={classnames('', {
                [cls.notSelected]: view !== item.view,
              })}
            />
          </Button>
        ))}
      </div>
    );
  }
);
