import { once } from "events";
import { AoCPart } from "../common/AoCPart";

export default class Part1 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();

        const nums = lines.map(line => line.split(''));

        let gamma = "";
        let epsilon = "";

        for (let i = 0; i < nums[0].length; i++) {
            let zeroCount = 0;
            let oneCount = 0;
            for (let j = 0; j < nums.length; j++) {
                if (nums[j][i] == "0")
                    zeroCount++;
                else if (nums[j][i] == "1")
                    oneCount++;
            }

            const mcm = oneCount >= zeroCount ? "1" : "0";
            const lcm = oneCount >= zeroCount ? "0" : "1";

            gamma += mcm;
            epsilon += lcm;
        }

        return (parseInt(gamma, 2) * parseInt(epsilon, 2)).toString();
    }

}