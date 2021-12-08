import { AoCPart } from "../common/AoCPart";

export default class Part1 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();
        const numList = lines.map(line => line.split(" | ")[1].split(" "));
        let count = 0;
        for (const num of numList) {
            for (const digit of num) {
                switch (digit.length) {
                    case 2:
                    case 3:
                    case 4:
                    case 7:
                        count++;
                }
            }
        }
        return count.toString();
    }

}