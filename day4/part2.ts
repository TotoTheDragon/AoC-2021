import { AoCPart } from "../common/AoCPart";
import { BingoSystem, BingoCard } from "./bingo";

export default class Part2 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();

        const system = new BingoSystem(lines);

        let lastWins: BingoCard[];
        let num: number;
        while (system.checkWins().length < system.cards.length) {
            lastWins = system.checkWins();
            num = system.drawNumber();
        }

      
        const currentWins = system.checkWins();
        for(let i = 0;i < currentWins.length;i++){
            if(lastWins.includes(currentWins[i]))
            continue;
            return (num * currentWins[i].calculateSumOfUnmarked(system.numbersDrawn)).toString();
        }
    }

}