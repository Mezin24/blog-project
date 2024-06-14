import { Configuration } from 'webpack-dev-server';
import { BuildOptions } from './types/buildOptions';

export const buildDevServer = ({ port }: BuildOptions): Configuration => ({
  port,
  open: false,
  historyApiFallback: true,
  hot: true,
});
