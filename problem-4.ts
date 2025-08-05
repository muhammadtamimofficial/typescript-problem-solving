function reverseArray<T>(reverseItem: T[]): T[] {

    return reverseItem.reverse();

}

const reverseItem: any[] = [8, 43, 45, 53, 234, 23];

const getReverse: any[] = reverseArray(reverseItem);
console.log(getReverse);

