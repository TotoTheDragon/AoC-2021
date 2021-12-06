import { AoCPart } from "../common/AoCPart";

export default class Part1 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();

        const fish: number[] = lines[0].split(",").map(str => +str);

        for(let day = 1; day <= 80; day++){
            const fishLength = fish.length;
            for(let i = 0;i<fishLength;i++){
                fish[i]--;
                if(fish[i] == -1){
                    fish[i] = 6;
                    fish.push(8);
                }
            }
        }

        return fish.length.toString();
    }

}