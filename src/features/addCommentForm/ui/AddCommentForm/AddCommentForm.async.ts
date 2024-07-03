import { AddCommentFormProps } from 'features/addCommentForm/ui/AddCommentForm/AddCommentForm';
import { FC, lazy } from 'react';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () =>
    new Promise((res) =>
      setTimeout(() => {
        // @ts-ignore
        res(import('./AddCommentForm'));
      }, 1000)
    )
);
