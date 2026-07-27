class User{

    name: string | number;
    age: number;
    firstName: string = "John";
    isAdult: boolean;


    constructor(name: string, age: number, firstName: String, isAdult: boolean){
        this.name = name;
        this.age = age;
        this.isAdult = isAdult;
    }

    sayHello(){
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }




}