interface ISport1 {
    getPlayer1(): IFootballPlayer | IBasketPlayer;
    getPlayer2(): IFootballPlayer | IBasketPlayer;
}

class FootBall implements ISport1 {
    public getPlayer1(): IFootballPlayer {
        return new Mbappe()
    }
    public getPlayer2(): IFootballPlayer {
        return new Cristiano()
    }
}

class Basket implements ISport1 {
    public getPlayer1(): IBasketPlayer {
        return new Lebron()
    }
    public getPlayer2(): IBasketPlayer {
        return new Durant()
    }
}

interface IFootballPlayer {
    name: string;
    age: number;
    position: string;
    usefulFunction(): personal
}

interface IBasketPlayer {
    name: string;
    age: number;
    team: string;
    usefulFunction(): personalBasketPlayer
}

interface IFootballPlayerSkills {
    speed: number,
    dribling: number,
    shoot: number
}

type personal = {
    name: string
    age: number
    position: string
}

type personalBasketPlayer = {
    name: string
    age: number
    team: string
}

class FootballPlayer implements IFootballPlayer {
    name = ''
    age = 0
    position = ''
    usefulFunction(): personal {
        return {
            name: this.name,
            age: this.age,
            position: this.position
        }
    }
}

class Cristiano extends FootballPlayer {
    constructor(){
        super()
        this.name ='Crisitano Ronaldo'
        this.age = 36
        this.position = 'attack'
    }
}

class Mbappe extends FootballPlayer {
    constructor(){
        super()
        this.name ='Mbappe'
        this.age = 22
        this.position = 'attack'
    }
}

class BasketPlayer implements IBasketPlayer {
    name = ''
    age = 0
    team = ''
    usefulFunction(): personalBasketPlayer {
        return {
            name: this.name,
            age: this.age,
            team: this.team
        }
    }
}

class Lebron extends BasketPlayer {
    constructor(){
        super()
        this.name ='Lebron James'
        this.age = 37
        this.team = 'LA Lakers'
    }
}

class Durant extends BasketPlayer {
    constructor(){
        super()
        this.name ='Kevin Durant'
        this.age = 33
        this.team = 'Brooklyn Nets'
    }
}

function getPlayers(sport: ISport1) {
    const player1 = sport.getPlayer1()
    const player2 = sport.getPlayer2()

    console.log(player1.usefulFunction());
    console.log(player2.usefulFunction());
}

console.log('Abstract Factory test:');
getPlayers(new FootBall());
getPlayers(new Basket());