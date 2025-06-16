const person = {
    firstName: "John",
    lastName: "Doe",
    fn: function () {
        return this;
    }
};
console.log(person.fn());