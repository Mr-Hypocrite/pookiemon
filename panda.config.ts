import { defineConfig } from '@pandacss/dev';

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {
                fonts: {
                    logo: { value: '"Borel", serif' },
                    pixelated: { value: '"Press Start 2P", serif' }
                },
                colors: {
                    background: {
                        value: 'var(--background)'
                    },
                    foreground: {
                        value: 'var(--foreground)'
                    }
                }
            }
        }
    },
    jsxFramework: 'react',
    // The output directory for your css system
    outdir: 'styled-system'
});
