import { AoCPart } from "../common/AoCPart";

export default class Part1 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const nums = await this.getLinesAsInt();

        let count = 0;
        let prevNum = 0;
        let currentNum = 0;
        for (let i = 0; i < nums.length; i++, currentNum = nums[i], prevNum = nums[i - 1])
            if (currentNum > prevNum) count++;

        return count.toString();
    }

}