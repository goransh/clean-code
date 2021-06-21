export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/tests/**/*.spec.ts"],
  coveragePathIgnorePatterns: ["node_modules"],
};
