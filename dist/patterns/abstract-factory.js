"use strict";
class FootBall {
    getPlayer1() {
        return new Mbappe();
    }
    getPlayer2() {
        return new Cristiano();
    }
}
class Basket {
    getPlayer1() {
        return new Lebron();
    }
    getPlayer2() {
        return new Durant();
    }
}
class FootballPlayer {
    constructor() {
        this.name = '';
        this.age = 0;
        this.position = '';
    }
    usefulFunction() {
        return {
            name: this.name,
            age: this.age,
            position: this.position
        };
    }
}
class Cristiano extends FootballPlayer {
    constructor() {
        super();
        this.name = 'Crisitano Ronaldo';
        this.age = 36;
        this.position = 'attack';
    }
}
class Mbappe extends FootballPlayer {
    constructor() {
        super();
        this.name = 'Mbappe';
        this.age = 22;
        this.position = 'attack';
    }
}
class BasketPlayer {
    constructor() {
        this.name = '';
        this.age = 0;
        this.team = '';
    }
    usefulFunction() {
        return {
            name: this.name,
            age: this.age,
            team: this.team
        };
    }
}
class Lebron extends BasketPlayer {
    constructor() {
        super();
        this.name = 'Lebron James';
        this.age = 37;
        this.team = 'LA Lakers';
    }
}
class Durant extends BasketPlayer {
    constructor() {
        super();
        this.name = 'Kevin Durant';
        this.age = 33;
        this.team = 'Brooklyn Nets';
    }
}
function getPlayers(sport) {
    const player1 = sport.getPlayer1();
    const player2 = sport.getPlayer2();
    console.log(player1.usefulFunction());
    console.log(player2.usefulFunction());
}
console.log('Abstract Factory test:');
getPlayers(new FootBall());
getPlayers(new Basket());
