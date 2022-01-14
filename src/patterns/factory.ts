abstract class Sport {
    public abstract getName(): string;
    public abstract getRules(): Rules;
    public someRules(): string {
        const name = this.getName()
        const game = this.getRules()
        return `Here the one of the ${name} rules: ${game.rules()}`;
    }
}

interface Rules {
    rules(): string
}

class Football extends Sport {
    public getName(): string {
        return 'Football'
    }
    public getRules(): Rules {
        return new FootballRule1()
    }
}

class Basketball extends Sport {
    public getName(): string {
        return 'Basketball'
    }
    public getRules(): Rules {
        return new BasketBallRules1()
    }
}

class Tennis extends Sport {
    public getName(): string {
        return 'Tennis'
    }
    public getRules(): Rules {
        return new TennisRule1()
    }
}

class FootballRule1 implements Rules {
    public rules(): string {
        return 'A match consists of two 45 minutes halves with a 15 minute rest period in between';
    }
}

class BasketBallRules1 implements Rules {
    public rules(): string {
        return 'The player must bounce, or dribble, the ball with one hand while moving both feet';
    }
}

class TennisRule1 implements Rules {
    public rules(): string {
        return 'Players/teams cannot carry the ball or catch it with the racquet.';
    }
}

function clientCode(sport: Sport) {
    console.log(sport.someRules());
}

clientCode(new Football());
clientCode(new Basketball());
clientCode(new Tennis());