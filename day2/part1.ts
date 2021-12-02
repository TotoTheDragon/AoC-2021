import { AoCPart } from "../common/AoCPart";

export default class Part1 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();

        let horizontal = 0;
        let depth = 0;
        for (const line of lines) {
            let [direction, amount] = line.split(" ");

            switch (direction) {
                case "forward":
                    horizontal += +amount;
                    break;
                case "up":
                    depth -= +amount;
                    break;
                case "down":
                    depth += +amount;
                    break;
            }
        }

        return (horizontal * depth).toString();
    }

}