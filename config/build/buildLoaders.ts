import webpack from 'webpack';
import { BuildOptions } from './types/buildOptions';
import { buildCssLoaders } from './loaders/buildCssLoaders';

export const buildLoaders = ({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] => {
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

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoaders(isDev);

  return [fileLoader, cssLoader, svgrLoader, babelLoader, typescriptLoader];
};
