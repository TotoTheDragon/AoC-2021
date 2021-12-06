import { AoCPart } from "../common/AoCPart";

export default class Part2 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();

        const fishes: number[] = lines[0].split(",").map(str => +str);

        let fishMap: Map<number, number> = new Map(); // Days left : Amount

        for (const fish of fishes) {
            fishMap.set(fish, (fishMap.get(fish) || 0) + 1);
        }

        for (let day = 1; day <= 256; day++) {
            const newFishMap: Map<number, number> = new Map();
            for (const [fish, count] of Array.from(fishMap.entries())) {
                if (fish == 0) {
                    newFishMap.set(6, (newFishMap.get(6) || 0) + count);
                    newFishMap.set(8, (newFishMap.get(8) || 0) + count);
                } else {
                    newFishMap.set(fish - 1, (newFishMap.get(fish - 1) || 0) + count);
                }
            }
            fishMap = newFishMap;
        }
        return Array.from(fishMap.values()).reduce((a, b) => a + b).toString();
    }

}