import webpack from 'webpack';
import { BuildOptions } from './types/buildOptions';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;
  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpg|gif|woff|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        options: {},
      },
    ],
  };

  const babelLoader = buildBabelLoader(options);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoaders(isDev);

  return [fileLoader, cssLoader, svgrLoader, babelLoader, typescriptLoader];
};
