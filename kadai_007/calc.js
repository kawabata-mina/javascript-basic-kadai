// 変数(num)に1以上の正数を代入
let num = 128734; 

// 変数numの出力をする（確認用）
console.log(num);

// 変数(num)が3と5の倍数の場合、「3と5の倍数です」という文字列を出力する
if ( num % 3 === 0 && num % 5 === 0 ) {
  console.log('3と5の倍数です');
}

// 変数(n(um)が3の倍数の場合、「3の倍数です」という文字列を出力する
else if ( num % 3 === 0 ) {
  console.log('3の倍数です');
}

// 変数(num)が5の倍数の場合、「5の倍数です」という文字列を出力する
else if ( num % 5 === 0 ) {
  console.log('5の倍数です');
}

// それ以外の場合、変数(num)を出力する
else {
  console.log(num);
}

