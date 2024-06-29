import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  const storybookConfig = {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules.map((rule: RuleSetRule) => {
          if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
          }

          return rule;
        }),
        buildSvgLoader(),
        buildCssLoader(true),
      ],
    },
    resolve: {
      ...config.resolve,
      modules: [...(config.resolve.modules || []), paths.src],
      extensions: [...(config.resolve.extensions || []), '.ts', '.tsx'],
      alias: {
        ...config.resolve.alias,
        '@': paths.src,
      },
    },
  };

  return storybookConfig;
};
