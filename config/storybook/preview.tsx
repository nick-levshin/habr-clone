import type { Preview } from '@storybook/react';
import '@/app/styles/index.scss';
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '@/shared/config/storybook/TranslationDecorator/TranslationDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [RouterDecorator, TranslationDecorator],
};

export default preview;
