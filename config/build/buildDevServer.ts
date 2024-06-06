import { Configuration } from 'webpack-dev-server';
import { BuildOptions } from './types/buildOptions';

export const buildDevServer = ({ port }: BuildOptions): Configuration => {
  return {
    port,
    open: false,
    historyApiFallback: true
  };
};
