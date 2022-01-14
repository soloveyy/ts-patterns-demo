let numberVar: number;
let stringVar: string;
let boolVar: boolean;
let stringsArray: string[];

numberVar = 12345
stringVar = "Hello World"
boolVar = true
stringsArray = ['1', '2', 'hello']

// functions
const firstFunction = (x: string, y: number): void => {
    console.log(Number(x)*y)
}

firstFunction('1', 2)