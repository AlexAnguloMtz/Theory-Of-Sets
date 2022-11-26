import { removeLastComma, repeatedElements, uniqueElements } from "../util/util";

export const intersection = (first: string, second: string): string => {
    const uniqueFirstTextElements: Set<string> = uniqueElements(first);
    const uniqueSecondTextElements: Set<string> = uniqueElements(second);
    const intersection: string[] = repeatedElements(uniqueFirstTextElements, uniqueSecondTextElements);
    return removeLastComma(intersection.join(','));
}

