/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"], // Ensuring dark mode is class-based
    content: [
      "./index.html", // Including the index.html
      "./src/**/*.{js,ts,jsx,tsx}", // Including your source files for React, TypeScript, etc.
    ],
    theme: {
      extend: {
        // Customizing borderRadius for your project
        borderRadius: {
          lg: 'var(--radius)', // Large radius with CSS variable
          md: 'calc(var(--radius) - 2px)', // Medium radius adjusted with variable
          sm: 'calc(var(--radius) - 4px)', // Small radius adjusted with variable
        },
        // Customizing colors for your brand
        colors: {
           // Custom brand color
          'brand-hover': '#1E38E0', // Darker version for hover states
          'brand-light': '#4C66FF', // Lighter variation for UI elements
          'color-1': 'hsl(var(--color-1))', // Custom color 1 using CSS variable
          'color-2': 'hsl(var(--color-2))', // Custom color 2 using CSS variable
          'color-3': 'hsl(var(--color-3))', // Custom color 3 using CSS variable
          'color-4': 'hsl(var(--color-4))', // Custom color 4 using CSS variable
          'color-5': 'hsl(var(--color-5))', // Custom color 5 using CSS variable
        },
        // Custom font size (32px) added to the theme
        fontSize: {
          'custom-size': '18px', // Custom font size of 32px
        },
        // Custom keyframes for animation (Aurora)
        keyframes: {
          'aurora-border': {
            '0%, 100%': {
              borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%',
            },
            '25%': {
              borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%',
            },
            '50%': {
              borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%',
            },
            '75%': {
              borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%',
            },
          },
          // Other animations (aurora-1, aurora-2, aurora-3, aurora-4)
          'aurora-1': {
            '0%, 100%': {
              top: '0',
              right: '0',
            },
            '50%': {
              top: '50%',
              right: '25%',
            },
            '75%': {
              top: '25%',
              right: '50%',
            },
          },
          'aurora-2': {
            '0%, 100%': {
              top: '0',
              left: '0',
            },
            '60%': {
              top: '75%',
              left: '25%',
            },
            '85%': {
              top: '50%',
              left: '50%',
            },
          },
          'aurora-3': {
            '0%, 100%': {
              bottom: '0',
              left: '0',
            },
            '40%': {
              bottom: '50%',
              left: '25%',
            },
            '65%': {
              bottom: '25%',
              left: '50%',
            },
          },
          'aurora-4': {
            '0%, 100%': {
              bottom: '0',
              right: '0',
            },
            '50%': {
              bottom: '25%',
              right: '40%',
            },
            '90%': {
              bottom: '50%',
              right: '25%',
            },
          },
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"), // Tailwind animate plugin for custom animations
    ],
    prefix: 'tw-', // Using a custom prefix for consistency (e.g., tw-text-xl)
  };
  