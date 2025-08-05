{

    interface Student {
        name: string;
        age: number;
        grades: number[];
    }
    function calculateAverageGrade(student: Student): number {
        const gradesLength = student.grades.length;
        if (gradesLength === 0) {
            return 0;
        }
        const totalGrades = student.grades.reduce((firstSub, nextSub) => firstSub + nextSub)

        const avearageGrade = totalGrades / gradesLength;
        return avearageGrade;
    }
    const student1: Student = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    }

    const averageGradeForBob = calculateAverageGrade(student1);

    console.log(averageGradeForBob);

}