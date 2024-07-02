import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Card } from './Card';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

const text =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis magnam, voluptatem nesciunt deserunt quod repellat unde recusandae. Tempore, odio commodi!';

export const Normal = Template.bind({});
Normal.args = {
  children: text,
};

export const Dark = Template.bind({});
Dark.args = {
  children: text,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
