// 輸入 n 印出 1+2-3+4-5+6…n 的算式與總和

// console.log("我會幫你計算 1+2-3+4-5+6…n 的總和");
console.log("我會幫你計算 1+2+3+4+5+6…n 的總和");
console.log("這邊請你輸入 n 的項次:");
main();

function main() {
    ReadInput();
}

async function ReadInput() {
    process.stdin.setEncoding('utf8'); // 設定從可讀流讀取的字符編碼為utf8
    var f = await process.stdin.once('data', function (inputnum) {
        let StrToNun = parseInt(inputnum, 10); // 將輸入的值從 字串string 轉乘 數字number,並指定為10進位

        var n = judgment(StrToNun);
        console.log('計算結果為：');
        
        var a = calculate(n);
        console.log(a);
        process.exit();
    });
}

function judgment(data) {
    var PositiveInteger = /^([1-9][0-9]*)$/; // var 一個正則表達式為判別是否為 正整數

    if (!PositiveInteger.test(data)) {
        console.log("請勿輸入0,負數或是其他字母！");
        ReadInput();
    } else {
        console.log("輸入正確");
        // console.log(data);
        return data;
    }
}

function calculate(n) {
    answer = n*(n + 1)/2;
    return answer;
}