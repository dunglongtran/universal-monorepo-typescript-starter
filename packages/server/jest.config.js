module.exports = {
  ...require('../../jest.config'),
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  roots: [`<rootDir>`,`<rootDir>/../../module-database/`],
  preset: 'ts-jest'

};
