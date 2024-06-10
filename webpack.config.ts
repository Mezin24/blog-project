import path from 'path';
import 'webpack-dev-server';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPats } from './config/build/types/buildOptions';

export default (env: BuildEnv) => {
  const paths: BuildPats = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
