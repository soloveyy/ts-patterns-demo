class ScoresTable {
    static instance: ScoresTable
    #table: { [id: number]: string } = {}

    constructor() {
        if (ScoresTable.instance) {
            return ScoresTable.instance
        }
        ScoresTable.instance = this
    }

    public addPlayer(scores: number, name: string): void {
        this.#table[scores] = name
    }
    public showTable(): void {
        for (const key in this.#table) {
            console.log(`${key} --- ${this.#table[key]}`)
        }
        console.log('-------------------------------------');  
    }
}

interface IPlayer {
    addPlayer(scores: number, name: string): void
}

class Player1 implements IPlayer {
    scorestable: ScoresTable

    constructor() {
        this.scorestable = new ScoresTable()
    }

    addPlayer(scores: number, name: string): void {
        this.scorestable.addPlayer(scores, name)
    }
}

class Player2 implements IPlayer {
    scorestable: ScoresTable

    constructor() {
        this.scorestable = new ScoresTable()
    }

    addPlayer(scores: number, name: string): void {
        this.scorestable.addPlayer(scores, name)
    }
}

class Player3 implements IPlayer {
    scorestable: ScoresTable

    constructor() {
        this.scorestable = new ScoresTable()
    }

    addPlayer(scores: number, name: string): void {
        this.scorestable.addPlayer(scores, name)
    }
}

const PLAYER1 = new Player1()
PLAYER1.addPlayer(24, 'C.Ronaldo')

const PLAYER2 = new Player2()
PLAYER2.addPlayer(31, 'Leo Messi')

const PLAYER3 = new Player3()
PLAYER3.addPlayer(27, 'R. Lewandowski')

PLAYER1.scorestable.showTable()
PLAYER2.scorestable.showTable()
PLAYER3.scorestable.showTable()