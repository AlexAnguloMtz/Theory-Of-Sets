import { elementsIn, removeLastComma } from "../util/util";

export const union = (first: string, second: string): string => {
    const firstTextElements = elementsIn(first);
    const secondTextElements = elementsIn(second);
    const allElements = firstTextElements.concat(secondTextElements);
    return Array.from(new Set(allElements)).join(',');
}