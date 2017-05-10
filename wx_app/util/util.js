const util = {

    //时间补全两位(ES7)  mb:ES6不支持
    // Str, cover='0', num=2 参数
    padStartStr(num) {
        // if(typeof Str !== 'string') {
        //     Str = Str.toString();
        // } 
        // return Str.padStart(num, cover);
        if(num < 10) {
            num = '0' + num;
        }
        return num;
    },

    //格式化时间
    formatTime(param) {
        // console.log(param)
       let year = param.getFullYear();
       let month = this.padStartStr(param.getMonth() + 1);  
       let day = this.padStartStr(param.getDate());  

       let hour = this.padStartStr(param.getHours());
       let minute = this.padStartStr(param.getMinutes());
       let second = this.padStartStr(param.getSeconds());
       let text = `${year}-${month}-${day}  ${hour}:${minute}:${second}`;
       return text
    //    console.log(text);
    },

    //格式化money
    formatMoney(num) {
        if(typeof num != 'number' ) {
            alert('请输入数字');
            return;
        }
        let str = [];
        let arr = [];
        if(num.include('.')) {
            num = num.toStrong();
            str.push(num.split('.')[0]);
            str.push(num.spit('.')[1]);
            arr[0] = Array.from(str[0]);
            for(let i = arr[0].length/3; i > 0; i += 3) {
                
            }
        }
    }

    
}

export default util



