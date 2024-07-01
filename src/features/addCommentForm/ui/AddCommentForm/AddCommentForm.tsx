import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/UI/Button/Button';
import { Input } from 'shared/UI/Input/Input';
import { classnames } from 'shared/lib/classnames/classnames';
import {
  DynamicModuleLoader,
  ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment?: (value: string) => void;
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};
const AddCommentForm: FC<AddCommentFormProps> = memo(
  (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value));
      },
      [dispatch]
    );

    const onSendHandler = useCallback(() => {
      if (text) {
        onSendComment?.(text);
      }
      dispatch(addCommentFormActions.setText(''));
    }, [dispatch, onSendComment, text]);

    return (
      <DynamicModuleLoader reducers={reducers}>
        <div className={classnames(cls.AddCommentForm, {}, [className])}>
          <Input
            placeholder={t('Введите текст комментария')}
            value={text}
            onChange={onCommentTextChange}
          />
          <Button onClick={onSendHandler}>{t('Отправить')}</Button>
        </div>
      </DynamicModuleLoader>
    );
  }
);

export default AddCommentForm;
