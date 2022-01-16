class Product  {
    steps: string[] = []
}

interface IBuilder {
    step1(): void
    step2(): void
    step3(): void
    step4(): void
}

class Builder implements IBuilder {
    product: Product

    constructor() {
        this.product = new Product()
    }

    step1(): void {
        this.product.steps.push('buy bread')
    }
    step2(): void {
        this.product.steps.push('cut into peaces')
    }
    step3(): void {
        this.product.steps.push('butter bread')
    }
    step4(): void {
        this.product.steps.push('eat')
    }
    getResult(): any {
        return this.product.steps.map((step, idx)=>`${idx+1}. ${step}`)
    }
}


class Director {
    builder: Builder
    constructor(builder: Builder) {
        this.builder = builder
    }
    buildSteps(): void {
        this.builder.step1();
        this.builder.step2();
        this.builder.step3();
        this.builder.step4();
    }
}

const SUPER_BREAKFAST = new Director(new Builder)
SUPER_BREAKFAST.buildSteps()
console.log('THis is a steps how to make the best breakfast and have energy per day:')
console.log(SUPER_BREAKFAST.builder.getResult())