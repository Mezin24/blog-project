import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SelectCurrency } from './SelectCurrency';

export default {
  title: 'entities/SelectCurrency',
  component: SelectCurrency,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SelectCurrency>;

const Template: ComponentStory<typeof SelectCurrency> = (args) => (
  <SelectCurrency {...args} />
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
