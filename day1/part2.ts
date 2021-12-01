import { AoCPart } from "../common/AoCPart";

export default class Part2 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const nums = await this.getLinesAsInt();

        let count = 0;

        let num1;
        let num2;
        let num3;
        let num4;

        for (let i = 0; i < nums.length - 3; i++, num1 = nums[i], num2 = nums[i + 1], num3 = nums[i + 2], num4 = nums[i + 3]) {
            const windowA = num1 + num2 + num3;
            const windowB = num2 + num3 + num4;
            if (windowB > windowA)
                count++;
        }

        return count.toString();
    }

}