import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classnames } from 'shared/lib/classnames/classnames';
import cls from './[FTName].module.scss';

interface [FTName]Props {
   className?: string;
}

export const [FTName]: FC<[FTName]Props> = (props) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <div className={classnames(cls.[FTName | camelcase], {}, [className])}>

      </div>
   );
}