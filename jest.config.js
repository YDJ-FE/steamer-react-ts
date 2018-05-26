module.exports = {
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "<rootDir>/test/spec/**/?(*.)(spec|test).ts?(x)"
  ],
  verbose: true
}