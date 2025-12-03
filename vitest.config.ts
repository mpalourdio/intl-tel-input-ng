import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        setupFiles: ['./node_modules/intl-tel-input/build/js/utils.js'],
        coverage: {
            reportsDirectory: './coverage'
        }
    }
});
