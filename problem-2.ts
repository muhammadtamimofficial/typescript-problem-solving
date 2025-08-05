{

    function findLargestNumber(numbers: number[]): number {

        let largest = numbers[0];
        for (const number of numbers) {
            if (largest < number) {
                largest = number;
            }

        }
        return largest;
    }



    const numbers: number[] = [10, 5, 8, 20, 3];
    const getLargest = findLargestNumber(numbers);

    console.log(getLargest);



}