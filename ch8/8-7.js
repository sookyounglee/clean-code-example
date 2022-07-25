export function reportYoungestAgeAndTotalSalary(people) {
  // 함수 호이스팅으로 인해 return을 위로 올릴 수 있다.
  return `youngestAge: ${youngest()}, totalSalary: ${totalSalary()}`;

  function youngest() {
    return Math.min(people.map((p) => p.age));
  }

  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }
}
