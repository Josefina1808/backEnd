class User {
    constructor(name, lastname, books, pets){
        this.name = name
        this.lastname = lastname
        this.books = books
        this.pets = pets
    }

    getFullName() {
        return console.log(`${this.name} ${this.lastname}`)
    }

    addPet(string) {
        this.pets.push(string)
    }

    countPets() {
        return this.pets.length
    }

    addBook(name, author) {
        this.books.push({nombre: name, autor:author})
    }

    getBookName() {
        this.books.map(x => x.nombre)
    }
}

let userTest = new User("Pedro", "Esnaola")
userTest.getFullName()
userTest.addPet("Toto")
userTest.addPet("Bruno")
userTest.countPets()
userTest.addBook("Los 4 acuerdos", "Miguel Ruiz")
userTest.addBook("Harry Potter", "J. K. Rolling")
userTest.getBookName()