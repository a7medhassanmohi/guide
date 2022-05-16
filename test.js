console.log(Math.abs((81 % 5) - 5));

function gradingStudents(grades) {
  // Write your code here
  return grades.map((it) => {
    if (it < 38) {
      return it;
    } else if (it % 5 == 0) {
      return it;
    } else if (it % 5 !== 0) {
      return it + Math.abs((it % 5) - 5) - it < 3
        ? it + Math.abs((it % 5) - 5)
        : it;
    }
  });
}
console.log(gradingStudents([37, 39, 74, 75, 76]));
