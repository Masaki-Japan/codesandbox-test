/**
 * const,let等の変数宣言
 */

// var vall = "var変数";
// console.log(vall);

// // var変数は上書き可能
// vall = "var変数を上書き"
// console.log(vall);

// // var変数は再宣言可能
// var vall = "var変数を再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// var val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き"

// const変数は再宣言も不可
// const val3 = "const変数を再宣言"

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "あいうえお",
//   age: 28,
// };

// val4.name = "かきくけこ";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "Masaki";
// const age = 28;

//私の名前はMasakiです。年齢は28歳です。

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は"　 + age + "です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数1
// function func1(str){
//    return str;
//  }

//従来の関数2
// const func1 = function (str) {
//   return str;
// };

//アロー関数
// const func2 = (str) => {
//   return str;
// };

//上と同じ処理の別の記載。returnの記載しない方法
// const func2 = (str) => str;

// const func3 = (num1 , num2) => {
//   return num1 + num2;
// };

//上と同じ条件の別の記載方法。returnを記載しない
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "masaki",
//   age: 47
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["Masa", 48];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name , age]= myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数なそ
 */

// const sayHello = (name = "Matsu") => console.log(`こんにちは${name}さん`);
// sayHello("masa");

/**
 * スプレッド構文 ...
 */

//配列の展開
// const arr1 = [1, 4];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10 , 20];
// const arr5 = [30 , 40];

// const arr6 = [...arr4];
// arr6[0] = 110;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4 , ...arr5];
// console.log(arr7);

//単純に代入すると参照渡しのため、元の配列(arr4)の値も変わってしまう
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * Mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田", "松岡"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index　+ 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name , index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //奇数の条件
// }) ;
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "松岡"){
//     return name
//   } else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */

//ある条件？　　条件がTrueの時　：　条件がfalseの時
// const val1 = 1 < 0 ? "Trueです" : "Falseです";
// console.log(val1);

// const num = 1500;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) =>{
//   return num1 + num2 > 100 ? '100を超えてます！' : '許容範囲内です';
// }
// console.log(checkSum(50,10));

/**
 * 論理演算子の本当の意味を知ろう　&& \\
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はTruneになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もTruneになります");
// }

// ｜｜は左側がfalseなら右側を返す。左がtrue なら左側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がTrueなら右側を返す。左がfalse なら左側を返す
const num2 = 100;
const fee2 = num2 && "金額未設定です";
console.log(fee2);
