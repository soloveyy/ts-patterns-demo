class USD {
    public usdValue(): number {
        return 50
    }
}

class EURO {
    public euroValue(): string {
        return '55'
    }
}

class Converter extends EURO{
    private usd: USD

    constructor(usd: USD) {
        super()
        this.usd = usd
    }
    public euroValue():string {
        return `It will be ${this.usd.usdValue() * 0.9} euro`
    }
}

const usd = new USD()
console.log(usd.usdValue())
const euro = new EURO()
console.log(euro.euroValue())

const currency = new Converter(usd)
console.log(currency.euroValue())