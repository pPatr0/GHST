module.exports = {
    mode: 'jit',
    content: [
        "./assets//.css",
        "./components/.{vue,js}",
        "./components//.{vue,js}",
        "./pages/.vue",
        "./pages//*.vue",
        "./plugins//.{js,ts}",
        "./.{vue,js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    theme: {
        colors: ({ colors }) => ({
            primary: '#42A5F5',
            secondary: '#FFD100',
            gray: '#EEEEEE',
            light: '#B3DBFB',
            inherit: colors.inherit,
            current: colors.current,
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            neutral: colors.neutral
        }),
        container: {
            padding: '0.75rem'
        },
        fontFamily: {
            sans: ['Unbounded', 'Arial', 'sans-serif'],
            serif: ['Space Grotesk', 'Arial', 'sans-serif']
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1520px'
        },
        transitionDuration: {
            DEFAULT: '300ms'
        },
        extend: {
            spacing: {
                '25v': '25vh',
                '50v': '50vh',
                '75v': '75vh',
                'nav': '136px'
            },
            zIndex: {
                '1': '1',
                '2': '2'
            }
        }
    }
}