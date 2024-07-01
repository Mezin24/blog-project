import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Light = Template.bind({});
Light.args = {
  comment: { id: '1', text: 'Comment 1', user: { id: '1', username: 'Mezin' } },
};

export const IsLoading = Template.bind({});
IsLoading.args = {
  isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
  comment: { id: '1', text: 'Comment 1', user: { id: '1', username: 'Mezin' } },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoadingDark = Template.bind({});
IsLoadingDark.args = {
  isLoading: true,
};
IsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
