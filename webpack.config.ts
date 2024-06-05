import path from 'path';
import 'webpack-dev-server';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, BuildPats } from './config/build/types/buildOptions';

const paths: BuildPats = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  output: path.resolve(__dirname, 'build'),
};

const mode = 'production';
const isDev = mode === 'production';

const config = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
