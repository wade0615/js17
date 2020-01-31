// 使用者輸入兩個整數，將它們分別除以 3 
// 判斷餘數是否相同，若相同，則於螢幕上顯示「餘數相同」。

remainder()
// b()

function remainder(){
    console.log("我會幫你判斷兩個數字的餘數是不是一樣喔");
    console.log("這邊請你輸入第一個數字:");

    process.stdin.setEncoding('utf8'); // 設定從可讀流讀取的字符編碼為utf8

    process.stdin.on('data',function(data){

        var PositiveInteger = /^([1-9][0-9]*)$/; // var 一個正則表達式為判別是否為 正整數
        var StrToNun = parseInt(data, 10); // 將輸入的值從 字串string 轉乘 數字number,並指定為10進位

        console.log("???");
        if(!PositiveInteger.test(StrToNun)){
            console.log("請勿輸入0,負數或是其他字母！");
        }else{
            console.log("輸入正確");
            // process.exit();
            b();
        }
    }
    )
}

function b(){
    console.log("接下來請輸入第二個數字：");
    process.stdin.on('data',function(data2){
        var PositiveInteger = /^([1-9][0-9]*)$/;
        var StrToNun = parseInt(data2, 10);
        if(!PositiveInteger.test(StrToNun)){
            console.log("喔喔！再試一次囉！");
        }else{
            console.log("我收到兩個正確的數啦～掰囉～");
            console.log(data2);
            process.exit();
        }
    })
}

