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

    
}

export default util



