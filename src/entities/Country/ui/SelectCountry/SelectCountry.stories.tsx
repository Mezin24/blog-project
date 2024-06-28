import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SelectCountry } from './SelectCountry';

export default {
  title: 'entities/SelectCountry',
  component: SelectCountry,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SelectCountry>;

const Template: ComponentStory<typeof SelectCountry> = (args) => (
  <SelectCountry {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  readonly: true,
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
