import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Light = Template.bind({});
Light.args = {
  comments: [
    { id: '1', text: 'Comment 1', user: { id: '1', username: 'Mezin' } },
    { id: '2', text: 'Comment 2', user: { id: '1', username: 'Mezin' } },
    { id: '3', text: 'Comment 3', user: { id: '1', username: 'Mezin' } },
  ],
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};
