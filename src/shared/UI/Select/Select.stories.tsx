import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {
  label: 'Enter text',
  options: [
    { value: '1', content: 'Select 1' },
    { value: '2', content: 'Select 2' },
    { value: '3', content: 'Select 3' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Enter text',
  options: [
    { value: '1', content: 'Select 1' },
    { value: '2', content: 'Select 2' },
    { value: '3', content: 'Select 3' },
  ],
  readonly: true,
};

export const Dark = Template.bind({});
Dark.args = {
  label: 'Enter text',
  options: [
    { value: '1', content: 'Select 1' },
    { value: '2', content: 'Select 2' },
    { value: '3', content: 'Select 3' },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
