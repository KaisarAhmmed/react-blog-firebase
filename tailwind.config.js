module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#F09080",
                secondary: "#7F56D9",
            },
        },
        container: {
            center: true,
            padding: "1rem",
            screens: {
                lg: "1200px",
                xl: "1200px",
                "2xl": "1200px",
            },
        },
    },
    plugins: [require("daisyui")],
};
