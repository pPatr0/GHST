module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  safelist: [
    'lg:rounded-tr-[10rem]',
    'rounded-tr-[7rem]',
    'lg:rounded-bl-[10rem]',
    'rounded-bl-[7rem]',
    'lg:rounded-tl-[10rem]',
    'rounded-tl-[7rem]',
    'lg:rounded-br-[10rem]',
    'rounded-br-[7rem]',
    'top-0',
    'right-0',
    'relative',
    'lg:top-60',
    'md:top-0',
    'lg:top-[30rem]',
    'lg:scale-x-[1]',
    'lg:scale-x-[-1]',
    'md:scale-x-[-1]',
    'md:scale-x-[1]',
    'scale-x-[-1]',
    'scale-x-[1]'
  ],
  theme: {
    colors: ({ colors }) => ({
      primary: '#12170F',
      secondary: '#5F2C85',
      rose: '#B796FF',
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
