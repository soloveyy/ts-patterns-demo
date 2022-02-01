class Abstraction {
    protected implementation: Implementation
    constructor(implementation: Implementation) {
        this.implementation = implementation
    }
    operation(): string {
        const data = this.implementation.operation()
        return `This is a general abstraction of ${data}`
    }
}

class AdditionAbstraction extends Abstraction {
    operation(): string {
        const data = this.implementation.operation()
        return `This is a addition abstraction of ${data}`
    }
}

class Implementation {
    operation(): string {
        return 'This is Implementetion'
    }
}

const implement = new Implementation()
const abstraction = new Abstraction(implement)
const adAbstraction = new AdditionAbstraction(implement)

// Output
console.log(implement.operation())  // "This is Implementetion"
console.log(abstraction.operation())  // "This is a general abstraction of This is Implementetion"
console.log(adAbstraction.operation())  // "This is a addition abstraction of This is Implementetion" 