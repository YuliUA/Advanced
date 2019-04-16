let user = {
    firstName: '',
    lastName: '',
    age: '',
    setFirstName: function (name) {
        this.firstName = name
    },
    setLastName: function (surname) {
        this.lastName = surname
    },
    setAge: function(userAge){
        this.age=userAge
    },
    getFirstName: function(){
        return this.firstName
    },
    getLastName: function(){
        return this.lastName
    },
    getAge: function(){
        return this.age
    }
}
user.setFirstName('Yuliya')
user.setLastName('Hiryak')
user.setAge(18)
console.log(`Hello, my name is ${user.getFirstName()} ${user.getLastName()}, I'm ${user.getAge()} years old ;)`)