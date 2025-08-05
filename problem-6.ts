{
    type Book = {
        title: string;
        author: string;
        publishedYear: number;
    }

    function isRecentBook(book: Book): boolean {
        const currentYear = new Date().getFullYear();

        if (book.publishedYear >= currentYear - 5) {
            return true;
        }
        else {
            return false;
        }
    }
    const book1: Book = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2022
    };

    const chackIsRecentBook = isRecentBook(book1);
    console.log(chackIsRecentBook);

}