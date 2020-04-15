const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
    prefix: "",
    theme: {
        colors: {
            ...colors,
            gray: {
                100: '#f4f5f7',
                200: '#e5e7eb',
                300: '#d2d6dc',
                400: '#9fa6b2',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
                800: '#252f3f',
                900: '#161e2e',
            },
            indigo: {
                100: "#e5edff",
                200: "#cddbfe",
                300: "#b4c6fc",
                400: "#8da2fb",
                500: "#6875f5",
                600: "#5850ec",
                700: "#5145cd",
                800: "#42389d",
                900: "#362f78",
            },
            blue: {
                100: "#e1effc",
                200: "#bfdcfc",
                300: "#8bc2f8",
                400: "#3c91ec",
                500: "#3c91ec",
                600: "#1c74d8",
                700: "#1e5898",
                800: "#1e4c80",
                900: "#1c3c63",
            },
            red: {
                100: "#fde7e9",
                200: "#fbd4d5",
                300: "#f7b1b1",
                400: "#f19393",
                500: "#e85e5e",
                600: "#b41e1f",
                700: "#b41e1f",
                800: "#9b1313",
                900: "#890e10",
            },
        },
    },
    variants: {},
    plugins: [],
    corePlugins: {}
};
