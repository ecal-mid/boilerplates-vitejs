export default class MyClass {
    constructor(a) {
        this.a = a
        console.log(`Hello from class instance with param "${a}"`);
    }

    tellSomething() {
        console.log(`Hello from a method of class instance "${this.a}"`);
    }
}