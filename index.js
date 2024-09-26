/*
1번
정수 num1과 num2가 매개변수로 주어집니다. 
두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
*/
// const solution = (num1, num2) => {
//   return num1 === num2 ? 1 : -1;
// };
// console.log(solution(1, 2));

/*
2번
머쓱이는 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 
2024년 기준 선생님의 나이 age가 주어질 때, 선생님의 출생 연도를 return 하는 solution 함수를 완성해주세요
*/

// const solution = (age) => {
//   const BirthDay = 2024 - age + 1;
//   return BirthDay;
// };
// console.log(solution(34));

/*
3번
정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.
*/

const solution = (num1, num2) => {
  const minus = num1 - num2;
  return minus;
};
console.log(solution(3, 5));
