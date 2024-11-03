import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.L,
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.XL,
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Background: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Square: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Disabled: Story = {
  args: {
    children: 'Loading...',
    disabled: true,
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
