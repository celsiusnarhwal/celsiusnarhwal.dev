/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
        require("@tailwindcss/typography"),
    ],
    daisyui: {
            themes: [
                {
                    narhwal: {

                        "primary": "#03cb98",

                        "secondary": "#828DF8",

                        "accent": "#F471B5",

                        "neutral": "#1D283A",

                        "base-100": "#303136",

                        "info": "#0CA6E9",

                        "success": "#2BD4BD",

                        "warning": "#F4C152",

                        "error": "#FB6F84",
                    },
                },
            ],
    }
}
