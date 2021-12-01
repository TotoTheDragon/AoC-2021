import { AoCPart } from "../common/AoCPart";

export default class Part2 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();

        return "";
    }

}