/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                // redhd: ["Red Hat Display", "sans-serif"],
                "kumbh-sans": ["Kumbh Sans", "sans-serif"],
            },

            colors: {
                // Primary
                "dark-cyan": "hsl(var(--dark-cyan))",
                "very-dark-desaturated-blue":
                    "hsl(var(--very-dark-desaturated-blue))",
                "dark-grayish-blue": "hsl(var(--dark-grayish-blue))",

                // Neutral
                "dark-gray": "hsl(var(--dark-gray))",
            },
        },
    },
    plugins: [],
}
