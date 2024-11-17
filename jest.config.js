module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
    collectCoverageFrom: [
      "src/**/*.{ts,tsx}",
      "!src/**/*.d.ts"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    coverageDirectory: 'coverage'
}