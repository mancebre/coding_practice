function BookManager() {
    this.books = [];
  
    this.createBook = function (id, title) {
      id = parseInt(id);
      // TODO: return false if the book id already exists
      for(let key in this.books) {
          if(this.books[key].id === id) {
              return false;
          }
      }
  
      let book = new Object();
      book.id = id;
      book.title = title;
      this.books = [...this.books, book];
      return true;
    };
  
    this.updateBook = function (id, title) {
      // TODO: return false if the book doesn't exist
  
      id = parseInt(id);
      if(!this.bookExists(id)) {
          return false;
      }
      
      let bookIndex = this.books.findIndex((book => book.id === id));
      this.books[bookIndex].title = title;
      return true;
    };
  
    this.deleteBook = function (id) {
      id = parseInt(id);
      // TODO: return false if the book doesn't exist
      if(!this.bookExists(id)) {
        return false;
      }
  
      let bookIndex = this.books.findIndex((book => book.id === id));
      delete this.books[bookIndex];
      return true;
    };
  
    this.findBookById = function (id) {
      id = parseInt(id);
      let book = this.books.find(book => book.id === parseInt(id));

      return book ? book : null;
    };
  
    this.findBookByTitle = function (title) {
      book = this.books.find(book => book.title === title);

      return book ? book : null;
    };

    this.bookExists = function (id) {
        id = parseInt(id);

        let bookExist = false;
        for(let key in this.books) {
            if(this.books[key].id === id) {
                bookExist = true;
            }
        }
        
        if(!bookExist) {
            return false;
        } else {
            return true;
        }
    }
  }
  
  // Do NOT edit the code below this comment.
  // You should be able to complete this test without editing below this comment.
  
  const bookManager = new BookManager();
  
  function bookManagementRefactor(operations) {
    // Calls corresponding methods of bookManager based on the input
    return operations.map(operation => {
      const [methodName, ...params] = operation;
      let result = bookManager[methodName].call(bookManager, ...params);
      return result === undefined ? "null" : JSON.stringify(result);
    });
  }

  console.log("createBook", bookManager.createBook(1, "one"));
  console.log("createBook", bookManager.createBook(2, "22222wewe"));
//   console.log("updateBook", bookManager.updateBook(1, "new_1_one"));
  console.log("deleteBook", bookManager.deleteBook(2));
//   console.log("findBookById", bookManager.findBookById(2));
//   console.log("findBookById", bookManager.findBookById(1));
//   console.log("findBookByTitle", bookManager.findBookByTitle("one"));
//   console.log("findBookByTitle", bookManager.findBookByTitle("new_1_one"));


  console.log(bookManager.books);
  
