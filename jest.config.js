export default {
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js'],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  reporters: [
    "default",
    ["@thesheps/jest-md-reporter",
    {
      "filename": "test-report.md",
      "publicPath": "./tests/reports"
    }]
  ]
};