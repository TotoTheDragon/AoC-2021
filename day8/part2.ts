import { AoCPart } from "../common/AoCPart";

export default class Part2 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();
        const patternList = lines.map(line => line.split(" | ")[0].split(" "));
        const numList = lines.map(line => line.split(" | ")[1].split(" "));
        let count = 0;
        for (let i = 0; i < lines.length; i++) {
            const patternMap = generatePatternMap(patternList[i]);
            const num = +numList[i].map(code => parseToDigit(code, patternMap)).join('');
            count += num;
        }
        return count.toString();
    }

}

const digitMap = {
    'abcefg': 0,
    'cf': 1,
    'acdeg': 2,
    'acdfg': 3,
    'bcdf': 4,
    'abdfg': 5,
    'abdefg': 6,
    'acf': 7,
    'abcdefg': 8,
    'abcdfg': 9
}

const parseToDigit = (num: string, patternMap: object) => digitMap[orderChars(applyPatternMap(num, patternMap))];

function generatePatternMap(pattern: string[]): object {
    const obj = {};

    const twoLength = pattern.filter(pat => pat.length == 2);
    const threeLength = pattern.filter(pat => pat.length == 3);
    const fourLength = pattern.filter(pat => pat.length == 4);
    const sixLength = pattern.filter(pat => pat.length == 6);

    const one = twoLength[0];
    const four = fourLength[0];
    const seven = threeLength[0];

    const cf: string[] = getUniqueCharacters(one);
    const bcdf: string[] = getUniqueCharacters(four);
    const acf: string[] = getUniqueCharacters(seven);
    const a: string[] = removeCharacters(acf, cf);
    const bd: string[] = removeCharacters(bcdf, cf);
    const eg: string[] = removeCharacters(invertCharacters(bcdf), a);

    const nine = sixLength
        .filter(pat => hasCharacters(getUniqueCharacters(pat), bd))
        .find(pat => !hasCharacters(getUniqueCharacters(pat), eg));
    const six = sixLength
        .filter(pat => hasCharacters(getUniqueCharacters(pat), bd))
        .find(pat => hasCharacters(getUniqueCharacters(pat), eg));

    const abcdfg: string[] = getUniqueCharacters(nine);
    const e = invertCharacters(abcdfg);
    const abdefg: string[] = getUniqueCharacters(six);
    const c = invertCharacters(abdefg);
    const zero = sixLength
        .find(pat => !hasCharacters(getUniqueCharacters(pat), bd));
    const abcefg = getUniqueCharacters(zero);
    const d = invertCharacters(abcefg);
    const b = removeCharacters(bd, d);
    const f = removeCharacters(cf, c);
    const g = removeCharacters(eg, e);
    obj[a[0]] = 'a';
    obj[b[0]] = 'b';
    obj[c[0]] = 'c';
    obj[d[0]] = 'd';
    obj[e[0]] = 'e';
    obj[f[0]] = 'f';
    obj[g[0]] = 'g';
    return obj;
}

const getUniqueCharacters = (pattern: string): string[] => Array.from(new Set(pattern.split('')));

const orderChars = (str: string): string => str.split('').sort().join('');

const removeCharacters = (chars: string[], remove: string[]): string[] => chars.filter(char => !remove.includes(char));

const hasCharacters = (chars: string[], check: string[]): boolean => check.every(char => chars.includes(char));

const invertCharacters = (chars: string[]): string[] => removeCharacters(getUniqueCharacters('abcdefg'), chars);

const applyPatternMap = (str: string, patternMap: object): string => str.replace(/[a-z]/g, (char) => patternMap[char]);