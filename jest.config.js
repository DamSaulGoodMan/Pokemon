// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  "transform": {
    "^.+\.(t|j)s$": "ts-jest"
  },
  "moduleFileExtensions": [
    "js",
    "json",
    "ts"
  ],
  "rootDir": ".",
  "testRegex": "spec.ts$",
  "testEnvironment": "node"
};
