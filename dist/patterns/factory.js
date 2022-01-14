"use strict";
class Sport {
    someRules() {
        const name = this.getName();
        const game = this.getRules();
        return `Here the one of the ${name} rules: ${game.rules()}`;
    }
}
class Football extends Sport {
    getName() {
        return 'Football';
    }
    getRules() {
        return new FootballRule1();
    }
}
class Basketball extends Sport {
    getName() {
        return 'Basketball';
    }
    getRules() {
        return new BasketBallRules1();
    }
}
class Tennis extends Sport {
    getName() {
        return 'Tennis';
    }
    getRules() {
        return new TennisRule1();
    }
}
class FootballRule1 {
    rules() {
        return 'A match consists of two 45 minutes halves with a 15 minute rest period in between';
    }
}
class BasketBallRules1 {
    rules() {
        return 'The player must bounce, or dribble, the ball with one hand while moving both feet';
    }
}
class TennisRule1 {
    rules() {
        return 'Players/teams cannot carry the ball or catch it with the racquet.';
    }
}
function clientCode(sport) {
    console.log(sport.someRules());
}
clientCode(new Football());
clientCode(new Basketball());
clientCode(new Tennis());
