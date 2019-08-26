module.exports = {
    ...require('../../jest.config'),
    moduleFileExtensions: [
        "js",
        "json",
        "ts"
    ],
    rootDir: "src",
    testRegex: ".spec.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    coverageDirectory: "../coverage",
    testEnvironment: "node",
    projects: []
}
