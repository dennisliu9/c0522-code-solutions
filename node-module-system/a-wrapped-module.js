// exports should be an object
console.log('typeof exports: ', typeof exports);
console.log('exports: ', exports);

// require should be a function
console.log('typeof require: ', typeof require);
console.log('require: ', require);

// module should be an object with an exports property and a require method
// also should have properties __dirname and __filename
console.log('typeof module: ', typeof module);
console.log('module: ', module);

// __filename should be a string, should be a path to this a-wrapped-module.js file
// /workspaces/c0522-code-solutions/node-module-system/a-wrapped-module.js
console.log('typeof __filename: ', typeof __filename);
console.log('__filename: ', __filename);

// __dirname should be a string, should be a path to the folder that holds this file
// /workspaces/c0522-code-solutions/node-module-system
console.log('typeof __dirname: ', typeof __dirname);
console.log('__dirname: ', __dirname);
