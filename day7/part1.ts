import { AoCPart } from "../common/AoCPart";

export default class Part1 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();

        const nums: number[] = lines[0].split(",").map(num => +num);

        const obj = {};
        const max = nums.reduce((a, b) => Math.max(a, b));
        for (let i = 0; i <= max; i++) {
            let fuel = 0;
            for (let j = 0; j < nums.length; j++) {
                fuel += Math.abs(i - nums[j]);
            }
            obj[i] = fuel;
        }

        const entries = Object.entries(obj);
        let minEntry = entries[0];
        for (const entry of entries) {
            if (entry[1] < minEntry[1])
                minEntry = entry;
        }

        return minEntry[1].toString();
    }

}