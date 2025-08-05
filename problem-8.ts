{
    class Car {
        constructor(public brand: string, public model: string, public year: number) {
        }
        carDetail(): string {
            return `Your car model is:  ${this.year} ${this.brand} ${this.model}`
        }
    }

    const myCar = new Car("Toyota", "Corolla", 2020).carDetail();

    console.log(myCar);

}