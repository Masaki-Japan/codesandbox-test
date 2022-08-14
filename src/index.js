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
const name = "Masaki";
const age = 28;

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
const func1 = function (str) {
  return str;
};

//アロー関数
// const func2 = (str) => {
//   return str;
// };

//上と同じ処理の別の記載。returnの記載しない方法
const func2 = (str) => str;

// const func3 = (num1 , num2) => {
//   return num1 + num2;
// };

//上と同じ条件の別の記載方法。returnを記載しない
const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));
