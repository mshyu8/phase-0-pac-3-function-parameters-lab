function introduction(string) {
    let phrase = `Hi, my name is ${string}.`;
    return phrase;
}

function introductionWithLanguage(string1, string) {
    let phrase = `Hi, my name is ${string1} and I am learning to program in ${string}.`;
    return phrase;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    let phrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return phrase;
}