module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '\\.tsx?$': ['babel-jest', {configFile: './babel-jest.config.js'}],
  },
};
