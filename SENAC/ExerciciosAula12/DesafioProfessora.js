let biblioteca = {
    scifi: [],
    terror: [],
    comedia: [],
    fantasia: [],
    addBook: function(bookName, genre, author, publicationYear){
        this.book = {bookName, author, publicationYear}
        switch(genre){
            case "scifi":
                this.scifi.push(this.book)
                break;
            case "terror":
                this.terror.push(this.book)
                break;
            case "comedia":
                this.comedia.push(this.book)
                break;
            case "fantasia":
                this.fantasia.push(this.book)
                break;
            default:
                return -1            
        }
        delete this.book 
    }
}

biblioteca.addBook("O Chamado do Cthulhu", "terror", "Lovecraft", 1926)
biblioteca.addBook("Eragon", "fantasia", "Christopher Paolini", 2002)
biblioteca.addBook("20 Mil Léguas Submarinas", "scifi", "Júlio Verne", 1869)
console.log(biblioteca);