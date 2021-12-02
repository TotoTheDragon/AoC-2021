import { AoCPart } from "../common/AoCPart";

export default class Part2 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();
        let horizontal = 0;
        let depth = 0;
        let aim = 0;
        for (const line of lines) {
            let [direction, amount] = line.split(" ");

            switch (direction) {
                case "forward": {
                    horizontal += +amount;
                    depth += aim * +amount;
                    break;
                }
                case "up": {
                    aim -= +amount;
                    break;
                }
                case "down": {
                    aim += +amount;
                    break;
                }
            }
        }

        return (horizontal * depth).toString();
    }

}