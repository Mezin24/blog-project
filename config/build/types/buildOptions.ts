export type BuildMode = 'development' | 'production';

export interface BuildPats {
  entry: string;
  html: string;
  output: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPats;
  isDev: boolean;
}
