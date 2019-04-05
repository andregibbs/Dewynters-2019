// match bootstrap sizes, also add xxl
const sizes = {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px"
};

const fontSizeBase = 1;

const font = {
    family: {
        base: "Proxima Nova Regular",
        bold: "Proxima Nova Bold",
        body: `"Proxima Nova Regular", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
    },
    size: {
        base: `${fontSizeBase * .875}rem`, // 14px
        sm: `${fontSizeBase * .75}rem`, // 12px
        md: `${fontSizeBase}rem`, // 16px
        lg: `${fontSizeBase * 1.25}rem`, // 20px
        xl: `${fontSizeBase * 1.5}rem` // 24px
    },
    lineHeight: {
        sm: 1.5,
        base: 1.7,
        headings: 1.2
    },
    h1: {
        size: `${fontSizeBase * 2.5}rem`
    },
    h2: {
        size: `${fontSizeBase * 2}rem`
    },
    h3: {
        size: `${fontSizeBase * 1.75}rem`
    },
    h4: {
        size: `${fontSizeBase * 1.5}rem`
    },
    h5: {
        size: `${fontSizeBase * 1.25}rem`
    },
    h6: {
        size: `${fontSizeBase}rem`
    }
}

export default {
    sizes,
    font,
    transitionBase: "all .4s ease-in-out",
    colors: {
        white: "#ffffff",
        black: "#000000",
        blackOff: "#292929",
        blue: "#516CBE",
        grey: "#ABABAB",
        greyMedium: "#C9C6C6",
        pink: "#E84261",
        purple: "#702283",
        purpleDark: "#42145F",
        yellow: "#FFB624",
        turquoise: "#00e4e1"
    }
};