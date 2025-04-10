 const stringConcat = (text, length) => {
    if (typeof text !== "string") {
        return "";
    }
    if (text.length > length) {
        return text.substring(0, length) + "...";
    }
    return text;
};

export { stringConcat };