'use strict'

const account = {
    owner: "Amad",
    mouvements: [200, 300, 400],

    get latest(){
        return this.mouvements.slice(-1).pop()
    },

    set latest(mov){
        this.mouvements.push(mov)
    }
}

console.log(account.latest) 
account.latest = 500
console.log(account.latest)