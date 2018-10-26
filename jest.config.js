module.exports = {
    roots: [
        "<rootDir>/src"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "((\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupTestFrameworkScriptFile: "<rootDir>/setupEnzyme.ts",
    globals: {
        "ts-jest": {
            diagnostics: {
                ignoreCodes: [151001] // https://github.com/kulshekhar/ts-jest/issues/748
            }
        }
    }
}
