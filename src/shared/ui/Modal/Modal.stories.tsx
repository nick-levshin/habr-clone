import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, hic! Repudiandae unde provident veritatis, nam iusto voluptatibus fugit quo cum, earum culpa laboriosam repellendus? Odio, cupiditate officia consequatur aperiam assumenda quis fugit quibusdam unde minus quaerat sapiente eum cum quos, alias iste dolorem corrupti magni omnis obcaecati vero quidem repellat.',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, hic! Repudiandae unde provident veritatis, nam iusto voluptatibus fugit quo cum, earum culpa laboriosam repellendus? Odio, cupiditate officia consequatur aperiam assumenda quis fugit quibusdam unde minus quaerat sapiente eum cum quos, alias iste dolorem corrupti magni omnis obcaecati vero quidem repellat.',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
