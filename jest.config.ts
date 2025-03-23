import type { Config } from 'jest';

export default {
    preset: 'jest-preset-angular',
    coverageReporters: ["lcovonly"],
    coverageDirectory: './coverage',
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/node_modules/intl-tel-input/build/js/utils.js']
} satisfies Config;
