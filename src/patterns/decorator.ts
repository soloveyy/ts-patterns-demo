interface IComponent {
    method(): string
}

class Component implements IComponent {
    method():string {
        return 'This is Component'
    }
}

class Decorator implements IComponent {
    #component: IComponent

    constructor(component: IComponent) {
        this.#component = component
    }
    method(): string {
        return (`This is Decorator of ${this.#component.method()}`)
    }
}

const component = new Component()
console.log(component.method())

const decorator1 = new Decorator(component)
console.log(decorator1.method())

const decorator2 = new Decorator(decorator1)
console.log(decorator2.method())