//Task 4

class Account {
    constructor(name, balance, id) {
        this.name = name;
        this.balance = balance;
        this._id = id;
    }

    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
    get id(){
        return this._id;
    }

    credit(amount) {
        this.balance = this.balance + amount;
        return this.balance;
    }
    
    debit(amount) {
       return (amount < this.balance) ? this.balance - amount : alert("Amount exceeded balance.")
    }

    transferTo(anotherAccount, amount){
        return (amount < this.balance) ? anotherAccount.balance = this.balance = this.balance - amount : alert("Amount exceeded balance.");
    }

    static identifyAmmount(accountFirst, accountSecond) {
        return (accountFirst.id === accountSecond.id) ? true : false;
    }

    toString() {
        return JSON.stringify(this);
    }
}

