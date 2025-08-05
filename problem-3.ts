{

    function filterEvenNumbers(numbers: number[]): number[] {
        let evenNumbers: number[] = [];
        for (const number of numbers) {
            if ((number % 2) === 0) {
                evenNumbers.push(number)
            }
        }
        return evenNumbers;
    }
    const numbers: number[] = [1, 2, 3, 4, 5, 6];

    const findEven = filterEvenNumbers(numbers)

    console.log(findEven);

}