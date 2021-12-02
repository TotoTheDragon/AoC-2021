import { readFile } from "fs/promises";

export abstract class AoCPart {

    abstract getAnswer(): Promise<string>;
    abstract getPath(): string;

    async getLines(): Promise<string[]> {
        const file = await readFile(`${this.getPath()}/input.txt`);
        return file.toString().split(/\r?\n/);
    }

    async getLinesAsInt(): Promise<number[]> {
        const lines = await this.getLines();
        return lines.map(str => parseInt(str));
    }

    async getParts(): Promise<string[][]> {
        const file = await readFile(`${this.getPath()}/input.txt`);
        return file.toString().split(/\r?\n\r?\n/).map(part => part.split(/\r?\n/));
    }
}