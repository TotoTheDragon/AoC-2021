import { AoCPart } from "../common/AoCPart";
import { BingoCard, BingoSystem } from "./bingo";

export default class Part1 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();

        const system = new BingoSystem(lines);

        let foundCard: BingoCard;
        let num: number;
        while (foundCard == undefined) {
            num = system.drawNumber();
            foundCard = system.checkWins()[0];
        }
        return (num * foundCard.calculateSumOfUnmarked(system.numbersDrawn)).toString();
    }

}