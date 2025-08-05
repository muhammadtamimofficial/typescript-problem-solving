{
    function repeatString(Word: string, Count: number): string {

        if (Count <= 0) {
            return '';
        }
        else {
            return Word.repeat(Count);
        }


    }

    const repeatedWord = repeatString("Hello!", 3);
    console.log(repeatedWord)
}