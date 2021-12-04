export class BingoSystem {

    numberOrder: number[];
    numbersDrawn: object;
    cards: BingoCard[]

    constructor(data: string[]) {
        this.numbersDrawn = {}
        this.numberOrder = data.shift().split(",").map(num => +num);

        const cardDate: string[][] = data.slice(1).join("\n").split(/\r?\n\r?\n/).map(part => part.split(/\r?\n/));
        this.cards = cardDate.map(data => new BingoCard(data));
    }

    drawNumber():number {
        const num = this.numberOrder.shift();
        this.numbersDrawn[num] = true;
        return num;
    }

    checkWins(): BingoCard[] {
        return this.cards.filter(card => card.findBingo(this.numbersDrawn));
    }

}

export class BingoCard {

    rows: number[][];
    columns: number[][];

    constructor(data: string[]) {
        this.rows = data.map(line => line.trim().split(/ +/).map(num => +num));
        this.columns =transpose(this.rows);
    }

    findBingo(numsFound: object) {
        /*
            Check rows
        */
        for (let i = 0; i < this.rows.length; i++) {
            if (this.rows[i].every(num => numsFound[num]))
                return true;
        }

        /*
            Check columns
        */
        for (let i = 0; i < this.columns.length; i++) {
            if (this.columns[i].every(num => numsFound[num]))
                return true;
        }
        return false;
    }

    findWinningRow(numsFound: object): number[]{
              /*
            Check rows
        */
            for (let i = 0; i < this.rows.length; i++) {
                if (this.rows[i].every(num => numsFound[num]))
                    return this.rows[i];
            }
    
            /*
                Check columns
            */
            for (let i = 0; i < this.columns.length; i++) {
                if (this.columns[i].every(num => numsFound[num]))
                    return this.columns[i];
            }
    }

    calculateSumOfUnmarked(numsFound:object):number{
        let count = 0;

        const allNums: number[] = this.rows.flatMap(num => num);
        for(let i = 0; i< allNums.length;i++){
            if(!numsFound[allNums[i]])
            count+= allNums[i];
        }

        return count;
    }
}

const transpose = (matrix) => {
    let [row] = matrix
    return row.map((value, column) => matrix.map(row => row[column]))
  }