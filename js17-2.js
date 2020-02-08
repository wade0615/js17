// 使用者輸入兩個整數，將它們分別除以 3 
// 判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。
process.stdin.setEncoding('utf8'); // 設定從可讀流讀取的字符編碼為utf8
console.log("我會幫你判斷兩個數字的餘數是不是一樣喔");
console.log("這邊請你輸入第一個數字:");
// main(0);

// function subFunction(i, number, N1) {
//     if (i === 1) {
//         console.log('請輸入第二個數字');
//         var N1 = number;
//         main(i, N1);
//     } else if (i === 2) {
//         var N2 = number;
//         console.log('輸入的兩個數字分別為：');
//         console.log(N1);
//         console.log(N2);
//         if (N1 % 3 === N2 % 3) {
//             console.log('餘數一樣');
//         } else {
//             console.log('餘數不一樣');
//         }
//         process.exit();
//     }
// }

main(0);
function main(counter, input_1_num) {
    process.stdin.once('data', function (input_curr_string) {
        let input_curr_num = parseInt(input_curr_string, 10); // 將輸入的值從 字串string 轉乘 數字number,並指定為10進位
        var PositiveInteger = /^([1-9][0-9]*)$/; // var 一個正則表達式為判別是否為 正整數

        if (!PositiveInteger.test(input_curr_num)) {
            console.log("請勿輸入0,負數或是其他字母！");
            main(counter, input_1_num);
            return;
        } 

        console.log("輸入正確");
        counter++;
        if (counter === 1) {
            console.log('請輸入第二個數字');
            main(counter, input_curr_num);
        } else if (counter === 2) {
            var input_2_num = input_curr_num;
            reportResult(input_1_num, input_2_num);
            process.exit();
        }
    });
}

function isRemainderOfDivisionTheSame(input_1_num, input_2_num) {
    return input_1_num % 3 === input_2_num % 3;
}

function reportResult(input_1_num, input_2_num) {
    console.log('輸入的兩個數字分別為：', input_1_num, input_2_num);
    console.log(isRemainderOfDivisionTheSame(input_1_num, input_2_num) ? '餘數一樣' : '餘數不一樣');
}
// function judgment(i, data, N1) {
//     var PositiveInteger = /^([1-9][0-9]*)$/; // var 一個正則表達式為判別是否為 正整數

//     if (!PositiveInteger.test(data)) {
//         console.log("請勿輸入0,負數或是其他字母！");
//         main(i, N1);
//     } else {
//         console.log("輸入正確");
//         i++;
//         // console.log(data);
//         subFunction(i, data, N1);
//     }
// }

// 泰坦建議：
    // 拆開i=2
    // NaN 檢測是否為數字，可能可以不用自己寫正規表達式
    // 流程化方程式
    // 參數命名

// Mango
//     count命名計數用的變數

// Chris神蹟
    // 兩個同層級的才用if，