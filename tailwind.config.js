const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: 'media',
    theme: {
        screens: {
            ...defaultTheme.screens,
            '3xl': '1800px',
        },
        container: {
            center: true,
        },
        fontSize: {
            ...defaultTheme.fontSize,
            sxl: '100pt',
            mxl: '140pt',
            xxl: '170pt',
        },
        extend: {
            fontFamily: {
                sans: ['Gill Sans', ...defaultTheme.fontFamily.sans],
                helvetica: ['Helvetica', ...defaultTheme.fontFamily.sans],
                arial: ['Arial', ...defaultTheme.fontFamily.sans],
                candara: ['Candara', ...defaultTheme.fontFamily.sans],
                georgia: ['Georgia', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'dark-green': '#001A11',
                'mid-green': '#003C29',
                green: '#00854D',
                'light-green': '#38BC32',
                'dark-grey': '#3F4042',
                // 'light-grey': '#737477',
                'light-grey': '#3F4042',
                'dark-orange': '#DD2C00',
                orange: '#FF4800',
                yellow: '#FD9F0A',
                lilac: '#E8B0FF',
                blue: '#007DE3',
                secondary: '#999999',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('daisyui'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
    daisyui: {
        themes: [], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: 'dark', // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
        prefix: 'dui-', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    },
}
