//console.log("Hello Typescript")

//function debug(message: any) : void {
    //console.log( (new Date()) + message   )
    //no return here
//}

// function debug(message: any) : void {
//     console.log(message)
//     //no return here
// }
//debug(222)

let firstName: string = "Gerly"
let age: number = 35
let good: boolean = true

//firstName = 7// not valid

let fruits: string[] = [
    "banana", 
    "apple"
]

console.log(`
First Name: ${firstName}
Your age: ${age}
you have many ${fruits}
`)


enum taxForm {
    standard = "1040", 
    childCredit = "1065", 
    SCorp = "1121s", 
    CCorp = "1120"
}

console.log(`
you need form${taxForm.childCredit}
`)


function getFruit(index: number): string {
    return fruits[index]

} //get Fruits then a number and return a string 

// function debug(message: string) : void {
//     console.log(message)
//     //no return here
// }

//debug("OMG No return")

let chosenFruit: string =getFruit(0)


console.log(` you choose an ${getFruit(0)}`)

interface teacher {
    name: string, 
    years: number, 
    subject: string[], 
    age: number

}

let damian: teacher = {
    name: "damian",
    years: 20, 
    subject: ["javascript", "typescript"] 
    age: 49
}