import { once } from "events";
import { AoCPart } from "../common/AoCPart";

export default class Part2 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();

        let oxygen = lines.slice();

        let co2 = lines.slice();

        for (let i = 0; i < lines[0].length; i++) {
            /*
                Go through index i of every number
            */
            let zeroCount = 0;
            let oneCount = 0;
            for (let j = 0; j < oxygen.length; j++) {
                if (oxygen[j][i] == "0")
                    zeroCount++;
                else if (oxygen[j][i] == "1")
                    oneCount++;
            }

            const mcm = oneCount >= zeroCount ? "1" : "0";

            oxygen = oxygen.filter(str => str[i] == mcm);

            if (oxygen.length == 1) break;
        }

        for (let i = 0; i < lines[0].length; i++) {
            /*
                Go through index i of every number
            */
            let zeroCount = 0;
            let oneCount = 0;
            for (let j = 0; j < co2.length; j++) {
                if (co2[j][i] == "0")
                    zeroCount++;
                else if (co2[j][i] == "1")
                    oneCount++;
            }
            const lcm = oneCount >= zeroCount ? "0" : "1";

            co2 = co2.filter(str => str[i] == lcm);

            if (co2.length == 1) break;
        }

        return (parseInt(oxygen[0], 2) * parseInt(co2[0], 2)).toString();
    }

}