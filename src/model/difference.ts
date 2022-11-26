import { removeLastComma, uniqueElements } from "../util/util";

export const difference = (first: string, second: string): string => {
    const uniqueFirstTextElements: Set<string> = uniqueElements(first);
    const uniqueSecondTextElements: Set<string> = uniqueElements(second);
    const difference: string[] = notRepeatedElements(uniqueFirstTextElements, uniqueSecondTextElements);
    return removeLastComma(difference.join(','));
}

function notRepeatedElements(first: Set<string>, second: Set<string>): string[] {
    const notRepeatedElements: string[] = [];
    first.forEach(string => {
        if (!second.has(string)) {
            notRepeatedElements.push(string);
        }
    });
    return notRepeatedElements;
}

