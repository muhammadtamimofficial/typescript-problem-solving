function logString(input: unknown): string {
    if (typeof input === "string") {
        return input;
    }
    else {
        return "Input is not a string."
    }
}

const message = "Hello, TypeScript!";
const isString = logString(message);

console.log(isString);
