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

/*
16번
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, 
array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (array, n) => {
//   let count = 0;
//   for (let value of array) {
//     if (value === n) {
//       count++;
//     }
//   }
//   return count;
// };
// const solution = (array, n) => {
//   const Array = array.filter((item) => item === n);
//   const ArrayLength = Array.length;
//   return ArrayLength;
// };
// let array = [1, 2, 3, 4, 5, 6, 7, 1, 5, 4];
// let n = 1;
// console.log(solution(array, n));

/*
17번
어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 
처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (n, t) => {
//   const result = n * Math.pow(2, t);
//   return result;
// };

// console.log(solution(5, 5));

/*
18번
문자열 my_string이 매개변수로 주어집니다. 
my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (my_string) => {
//   //문자열을 일단 배열로 바꾼다. 문자열 자체를 뒤집는 메소드는 존재하지 않음
//   //split메소드를 사용하여 split("")를 기준으로 배열로 변환
//   const strarr = my_string.split("");

//   //문자열을 배열로 변환 후 배열 뒤집는 reverse()메소드를 사용하여 뒤집는다.
//   const reverseStrArr = strarr.reverse();

//   //문자열을 배열로 변환 후 뒤집은 후에 배열을 다시 문자열로 합치려면 join("") 메소드를 사용
//   const string = reverseStrArr.join("");
//   return string;
// };

// console.log(solution("Hello"));

/*
19번
정수가 담긴 리스트 num_list가 주어질 때, 
num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (num_list) => {
//   let box1 = [];
//   let box2 = [];
//   num_list.map((item) => {
//     if (item % 2 === 0) {
//       box1.push(item);
//     } else {
//       box2.push(item);
//     }
//   });
//   let answer = [box1.length, box2.length];
//   return answer;
// };

// console.log(solution([2, 4, 2, 1, 2, 4, 6, 8, 12, 10, 11]));

/*
20번
머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 
양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 
정수 n과 k가 매개변수로 주어졌을 때, 
양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (n, k) => {
//   let 양꼬치가격 = 12000;
//   let 음료수가격 = 2000;
//   if (n % 10 === 0) {
//     k++;
//   }
//   let 양꼬치 = n * 양꼬치가격;
//   let 음료수 = k * 음료수가격;

//   let result = 양꼬치 + 음료수;
//   return result;
// };
// console.log(solution(12, 2));

/*
21번
머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 
머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 
머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (array, height) => {
//   let count = 0;
//   for (i of array) {
//     if (height > i) {
//       count++;
//     }
//   }
//   return count;
// };
// const array = [152, 164, 155, 182, 165];
// console.log(solution(array, 161));

/*
22번
정수 배열 numbers가 매개변수로 주어집니다. 
numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (numbers) => {
//   let answer = numbers.reduce((acc, cur) => [...acc, cur * 2], []);
//   return answer;
// };
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
23번
중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 
예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 
정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (array) => {
//   let arraySort = array.sort((a, b) => a - b);
//   let middle = Math.floor(arraySort.length / 2);
//   let answer = array[middle];
//   return answer;
// };
// console.log(solution([1, 2, 7, 10, 11]));

/*
24번
정수 n이 매개변수로 주어질 때,
n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (n) => {
//   let arr = [];
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 1) {
//       arr.push(i);
//     }
//   }
//   let sortArr = arr.sort((a, b) => a - b);
//   return sortArr;
// };
// console.log(solution(11));

/*
25번
머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 
피자를 나눠먹을 사람의 수 n이 주어질 때, 
모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.
n	result
7	  1
1	  1
15	3
*/

// const solution = (n) => {
//   return Math.ceil(n / 7);
// };
// console.log(solution(20));
