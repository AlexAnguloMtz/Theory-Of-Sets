export const elementsIn = (text: string): string[] => {
    return removeLastComma(text).split(/[ ,]+/);
}

export const removeLastComma = (text: string): string => {
    return endsWith(',', text) ? withoutLastChar(text) : text;
}

export const endsWith = (char: string, text: string): boolean => {
    return text[text.length - 1] === char;
}

export const withoutLastChar = (text: string): string => {
    return text.substring(0, text.length - 1);
}

export const uniqueElements = (text: string): Set<string> => {
    return new Set(elementsIn(text));
}

export const repeatedElements = (first: Set<string>, second: Set<string>): string[] => {
    const repeatedElements: string[] = [];
    first.forEach(string => {
        if (second.has(string.toLowerCase())) {
            repeatedElements.push(string);
        }
    })
    return repeatedElements;
}