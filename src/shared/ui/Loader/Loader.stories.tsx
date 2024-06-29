import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

const meta = {
  title: 'shared/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    story => <div style={{ paddingLeft: 20 }}>{story()}</div>,
    ThemeDecorator(Theme.LIGHT),
  ],
};

export const Dark: Story = {
  decorators: [
    story => <div style={{ paddingLeft: 20 }}>{story()}</div>,
    ThemeDecorator(Theme.DARK),
  ],
};
