import type { Preview } from '@storybook/react';
import '@/app/styles/index.scss';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouterDecorator],
};

export default preview;
