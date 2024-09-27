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

// const solution = (num1, num2) => {
//   const minus = num1 - num2;
//   return minus;
// };
// console.log(solution(3, 5));

/*
4번
정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
*/

// const solution = (num1, num2) => Math.floor(num1 / num2);
// console.log(solution(5, 2));

/*
5번
정수 num1, num2가 매개변수 주어집니다. 
num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.
*/

// const solution = (num1, num2) => Math.floor(num1 * num2);
// console.log(solution(2, 5));

/*
6번
정수 num1과 num2가 매개변수로 주어질 때, 
num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.
*/

// const solution = (num1, num2) => {
//   const answer = Math.floor((num1 / num2) * 1000);
//   return answer;
// };

// console.log(solution(3, 2));

/*
7번
각에서 0도 초과 90도 미만은 예각, 
90도는 직각, 90도 초과 180도 미만은 둔각 
180도는 평각으로 분류합니다. 
각 angle이 매개변수로 주어질 때 
예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (angle) => {
//   const result = angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : angle === 180 ? 4 : "해당하는 값이 없습니다.";
//   return result;
// };

// console.log(solution(20));

/*
8번
정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
*/

// const solution = (n) => {
//   let sum = 0;

//   for (let i = 1; i <= n; i++)
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   return sum;
// };

// console.log(solution(10));

/*
9번
정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.
*/

// const solution = (num1, num2) => {
//   const sum = num1 + num2;
//   return sum;
// };

// console.log(solution(2, 5));

/*
10번
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (numbers) => {
//   let sum = numbers.reduce((acc, cur) => acc + cur, 0);
//   let length = numbers.length;
//   let average = sum / length;
//   return average;
// };
// const numberArr = [1, 2, 3, 4, 5];
// console.log(solution(numberArr));

/*
11번
문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (my_string, letter) => {
//   const result = my_string.replaceAll(letter, "");
//   return result;
// };
// const solution = (my_string, letter) => {
//   const result = my_string.split(letter).join("");
//   return result;
// };
// const letter = "o";
// const my_string = "Hello World letter";

// console.log(solution(my_string, letter));

/*
12번
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
*/

// const solution = (n) => {
//   let box = n.toString();
//   let result = box.split("");
//   let sum = result.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
//   return sum;
// };
// const solution = (n) => {
//   return n
//     .toString()
//     .split("")
//     .reduce((acc, cur) => acc + Number(cur), 0);
// };

// console.log(solution(25));

/*
문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
*/

/*
13번
머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 
할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 
편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
*/

// const solution = (n) => {
//   let arr = n.split("");
//   let length = arr.length;
//   let answer = length * 2;
//   return answer;
// };

// console.log(solution("hello world"));

/*
15번
문자열 배열 strlist가 매개변수로 주어집니다. 
strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.
*/

// const solution = (string) => {
//   let data = string.map((el) => el.length);
//   return data;
// };
// let string = ["123", "12313123", "hello world"];
// console.log(solution(string));
