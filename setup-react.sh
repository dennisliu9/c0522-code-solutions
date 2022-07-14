npm init -y
npm install react react-dom
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/plugin-transform-react-jsx
mkdir dist src
touch dist/index.html dist/styles.css src/index.jsx webpack.config.js
npm set-script build webpack
npm set-script buildwatch "webpack --watch --mode=development --stats=minimal --devtool=source-map"
