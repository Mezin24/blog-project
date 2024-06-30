import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  width: '100%',
  height: '200px',
};

export const Circle = Template.bind({});
Circle.args = {
  width: '150px',
  height: '150px',
  border: '50%',
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  width: '100%',
  height: '200px',
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  width: '150px',
  height: '150px',
  border: '50%',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
