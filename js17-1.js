// 好想電影院規定除非完全沒有客人買票，否則就算只有一位顧客也照常播放電影。
// 讓使用者輸入客人的人數，並用「!」判斷人數，不為零顯示「照常播放電影」。


function a (){
    console.log("歡迎光臨好想電影院")
    console.log("請問你想買幾張電影票？")

    process.stdin.setEncoding('utf8');
    process.stdin.once('data',function(data){
        if(data !== 0){
            // console.log("我進來了");
            console.log("好的沒問題～請進！電影放印中");
            process.exit();
        }
    }
    )
}
a()