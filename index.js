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

/*
26번
머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (price) => {
//   let totalPrice = price;
//   if (price >= 500000) {
//     totalPrice = Math.floor(price * 0.8); // 20% 할인
//   } else if (price >= 300000) {
//     totalPrice = Math.floor(price * 0.9); // 10% 할인
//   } else if (price >= 100000) {
//     totalPrice = Math.floor(price * 0.95); // 5% 할인
//   }
//   return totalPrice; // 최종 가격 반환
// };

/*
27번
정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, 
numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (numbers, num1, num2) => {
//   let answer = numbers.splice(num1, num2);
//   return answer;
// };
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let num1 = 2;
// let num2 = 4;
// console.log(solution(numbers, num1, num2));

/*
28번
문자열 str1, str2가 매개변수로 주어집니다. 
str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (str1, str2) => {
//   return str1.includes(str2) ? 1 : 2;
// };
// let str1 = "hello world";
// let str2 = "world";
// console.log(soltuion(str1, str2));

/*
29번
머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 
아이스 아메리카노는 한잔에 5,500원입니다. 
머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 
머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (money) => {
//   let 아메리카노 = 5500;
//   let 몇잔 = Math.floor(money / 아메리카노);
//   let 잔돈 = money - 아메리카노 * 몇잔;
//   let 정답 = [몇잔, 잔돈];
//   return 정답;
// };

/*
30번
문자열 my_string이 매개변수로 주어집니다. 
my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (my_string) => {
//   return my_string
//     .split("")
//     .filter((el) => !isNaN(el))
//     .reduce((prev, cur) => prev + Number(cur), 0);
// };
// let my_string = "12jasdkj21hk3hajhskhd2318797asjdhk2j1";
// console.log(solution(my_string));

/*
31번
문자열 my_string이 매개변수로 주어질 때, 
대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (my_string) => {
//   let answer = [];
//   let res = my_string.split("");
//   res.map((str) => {
//     if (isNaN(str)) {
//       if (str === str.toUpperCase()) {
//         let uppStr = str.toLowerCase();
//         answer.push(uppStr);
//       } else if (str === str.toLowerCase()) {
//         let lowerStr = str.toUpperCase();
//         answer.push(lowerStr);
//       }
//     }
//   });
//   let arrstr = answer.join("");
//   return arrstr;
// };
// const solution = (my_string) => {
//   const res = my_string.split("");
//   let data = [];
//   res.map((el) => {
//     if (el === el.toUpperCase()) {
//       el = el.toLowerCase();
//       data.push(el);
//     } else {
//       el = el.toUpperCase();
//       data.push(el);
//     }
//   });
//   let answer = data.join("");
//   return answer;
// };
// const my_string = "MynameisApple";
// console.log(solution(my_string));

/*
32번
정수 배열 array가 매개변수로 주어질 때, 
가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (array) => {
//   let maxNum = Math.max(...array);
//   let maxIndex = array.indexOf(maxNum);
//   let answer = [maxNum, maxIndex];
//   return answer;
// };
// const array = [2, 6, 2, 4, 6, 7, 8, 9];
// console.log(solution(array));

/*
33번
정수 n과 정수 배열 numlist가 매개변수로 주어질 때, 
numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (n, numlist) => {
//   numlist.filter((e) => e % n === 0);
//   return numlist;
// };
// const numlist = [1, 2, 4, 5, 6, 7, 2, 3, 11, 1, 232, 34];
// const n = 3;
// console.log(solution(n, numlist));

/*
34번
가위는 2 바위는 0 보는 5로 표현합니다. 
가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, 
rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
*/

// const solution = (rsp) => {
//   let answer = [];
//   let res = rsp.split("");
//   res.forEach((el) => {
//     if (el === "2") {
//       answer.push(0);
//     } else if (el === "0") {
//       answer.push(5);
//     } else {
//       answer.push(2);
//     }
//   });
//   return answer.join("");
// };
// const rsp = "250";
// console.log(solution(rsp));

/*
35번
문자열 my_string과 정수 n이 매개변수로 주어질 때, 
my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (my_string, n) => {
//   let answer = "";
//   my_string.split("").forEach((el) => {
//     answer += el.repeat(n);
//   });
//   return answer;
// };
// const my_string = "hello world";
// const n = 2;
// console.log(solution(my_string, n));

/*
36번
정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. 
num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.
*/

// const solution = (num_list) => {
//   return num_list.reverse();
// };
// let num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(solution(num_list));

/*
37번
"*"의 높이와 너비를 1이라고 했을 때, 
"*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 
정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

pass...
*/

/*
38번
머쓱이네 피자가게는 피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라줍니다. 
피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, 
n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/

// const solution = (slice, n) => {
//   return Math.ceil(n / slice);
// };
// const slice = 2;
// const n = 4;
// console.log(solution(slice, n));

/*
39번
머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 
이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 
상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
box의 길이는 3입니다.
box[0] = 상자의 가로 길이
box[1] = 상자의 세로 길이
box[2] = 상자의 높이 길이
1 ≤ box의 원소 ≤ 100
1 ≤ n ≤ 50
n ≤ box의 원소
주사위는 상자와 평행하게 넣습니다.
*/

const solution = (box, n) => {};
