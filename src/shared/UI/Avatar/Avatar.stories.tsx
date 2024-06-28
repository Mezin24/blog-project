import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarImg from 'shared/assets/tests/avatar.jpg';
import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Light = Template.bind({});
Light.args = {
  src: AvatarImg,
  size: 150,
};

export const Dark = Template.bind({});
Dark.args = {
  src: AvatarImg,
  size: 150,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightSmall = Template.bind({});
LightSmall.args = {
  src: AvatarImg,
  size: 50,
};

export const DarkSmall = Template.bind({});
DarkSmall.args = {
  src: AvatarImg,
  size: 50,
};
DarkSmall.decorators = [ThemeDecorator(Theme.DARK)];
