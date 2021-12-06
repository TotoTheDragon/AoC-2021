import { AoCPart } from "../common/AoCPart";

export default class Part1 extends AoCPart {

    getPath = () => __dirname;

    async getAnswer(): Promise<string> {
        const lines = await this.getLines();

        const start = lines.map(line => line.split(" -> ")[0].split(",").map(num => +num));

        const end = lines.map(line => line.split(" -> ")[1].split(",").map(num => +num));

        const coords = {};

        for (let i = 0; i < start.length; i++) {
            const [x1, y1] = start[i];
            const [x2, y2] = end[i];
            if (x1 != x2 && y1 != y2)
                continue;

            if (x1 == x2) {
                const highestY = Math.max(y1, y2);
                const lowestY = Math.min(y1, y2);

                for (let j = lowestY; j <= highestY; j++) {
                    const coord = `${x1},${j}`;
                    if (!(coord in coords))
                        coords[coord] = 0;

                    coords[coord]++;
                }
            }
            else if (y1 == y2) {
                const highestX = Math.max(x1, x2);
                const lowestX = Math.min(x1, x2);
                for (let j = lowestX; j <= highestX; j++) {
                    const coord = `${j},${y1}`;
                    if (!(coord in coords))
                        coords[coord] = 0;

                    coords[coord]++;
                }
            }



        }
        return Array.from(Object.values(coords)).filter(val => val >= 2).length.toString();
    }

}