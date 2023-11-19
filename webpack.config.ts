import webpack from "webpack";
import path from "path";
import { buildWebpackConfig } from "./config/builld/buildWebpackConfig";
import { BuildPath } from "./config/builld/types/config";

const paths: BuildPath = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const mode = "development";
const isDev = mode === "development";

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
