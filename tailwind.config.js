/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "pattern-top": "url('/images/bg-pattern-top.svg')",
                "pattern-bottom": "url('/images/bg-pattern-bottom.svg')",
            },
        },
    },
    plugins: [],
}
