module.exports = {
  preset: 'vite-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['./cypress/', '/node_modules/'],
};
