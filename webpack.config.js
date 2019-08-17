const path = require("path");

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },
  {
    test: /\.css/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: { url: false }
      }
    ]
  }
];
module.exports = {
  target: "node",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: { rules },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: "./",
    port: 5000
  }
};
