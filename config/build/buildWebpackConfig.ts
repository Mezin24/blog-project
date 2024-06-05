import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/buildOptions';

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const { mode, isDev, paths } = options;
  return {
    mode,
    devtool: 'inline-source-map',
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.output,
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(paths),
  };
};
