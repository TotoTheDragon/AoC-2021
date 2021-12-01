import { readFile } from "fs/promises";
import { dirname } from "path";

export abstract class AoCPart {

    abstract getAnswer(): Promise<string>;
    abstract getPath(): string;

    async getLines(): Promise<string[]> {
        const file = await readFile(`${this.getPath()}/input.txt`);
        return file.toString().split(/\r?\n/);
    }

}