import theme from './../../theme';


const content = (en, ar) => {
    let result = theme.direction === "ltr" ? en : ar 
    return result;
};

export default content;