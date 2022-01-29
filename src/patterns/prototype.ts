interface IPrototype {
    name: string
    age: number
}

class Prototype implements IPrototype {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public clone(): any {
        return new Prototype(this.name, this.age)
    }
}

const p1 = new Prototype('bob', 12)
console.log(p1)
const p2 = p1.clone()
console.log(p1 === p2)
const p3 = new Prototype('john', 20)
console.log(p3)
const p4 = p1.clone()
console.log(p4)
const p5 = p3.clone()
console.log(p5)