module.exports = {
    colors: {
        red: "#cf3232",
        blue: "#0088ff",
    },
    gray: {
        90: "#181818",
        40: "#757575",
    },
    fonts: {
        display: "'Markazi Text', 'Constantia', serif", //400,500,600,700
        body: "'Lato', 'Raleway', sans-serif", //100,300,400,700,900
    },
    breakpoints: {
        SM: "24em",
        MD: "36em",
        LG: "48em",
        XL: "60em",
        mobile: "425px",
        tablet: "768px",
    },
    spacer: (multiplier) => {
        return `${multiplier*8}px`
    },
    zindex: (type, step) => {
        let typeMap = {
            overlay: 1000,
            modal: 800,
            content: 100,
            background: -100
        }
        return typeMap[type]? (typeMap[type] + step) : (step)
    },
}