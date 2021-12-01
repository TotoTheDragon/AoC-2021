import { AoCPart } from "./common/AoCPart";

(async () => {

    const day: number = parseInt(process.argv[2]) || new Date().getDate();

    console.log(`Advent of Code 2021: Day ${day}\n`);

    console.log("Part 1");
    try {
        const part1: AoCPart = new (require(`./day${day}/part1`).default)();
        console.log(`Answer: ${await part1.getAnswer()}\n`);
    } catch (err) {
        console.log(`Error: ${err.message}\n`);
    }

    console.log("Part 2");
    try {
        const part2: AoCPart = new (require(`./day${day}/part2`).default)();
        console.log(`Answer: ${await part2.getAnswer()}\n`);
    } catch (err) {
        console.log(`Error: ${err.message}\n`);
    }

})();

process