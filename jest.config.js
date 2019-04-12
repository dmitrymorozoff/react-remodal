const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
    setupFiles: ["<rootDir>/jest.setup.js"],
    snapshotSerializers: ["<rootDir>/node_modules/enzyme-to-json/serializer"],
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.jest.json",
        },
    },
    testRegex: TEST_REGEX,
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
