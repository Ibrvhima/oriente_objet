'use strict'

const str = 'Hello'

console.log(Array.from(str))

class Person{
    constructor(fullName, birthYear){
        this.fullName = fullName
        this.birthYear = birthYear
    }
    
    calcAge(){
        console.log(2024 - this.birthYear)
    }

    get (){
        return this._fullName
    }

    set fullName(name){
        if(name.includes(' ')) this.fullName = name
        else alert('Le nom complet doit inclure un espace.') 
    }

    static greet = function(){
        console.log('Bonjour!')
    }
}

Person.greet()

