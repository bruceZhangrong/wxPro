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
    formatMoney(num, retain = 2) {
        if(typeof num != 'number') {
            alert('请输入数字');
            return;
        }
        let str = [];
        let arr = [];
        let decimal = [];
        let intNum = '';
        num = num.toString();
        if (num.includes('.')) {
            intNum = num.split('.')[0];
            decimal = Array.from(num.split('.')[1]);
        } else {
            intNum = num;
        }
        for (let k = 0; k < retain; k++) {
            if (decimal[k] == undefined || decimal[k] == '') {
                decimal[k] = '0';
            }
        }
        decimal = decimal.join('');
        intNum = Array.from(intNum).reverse();
        for (let i = 0, j = 0; i < intNum.length; i++ , j++) {
            if (i % 3 == 0 && i > 0) {
                arr[j] = ',';
                j++;
            }
            arr[j] = intNum[i];
        }
        return `${arr.reverse().join('')}.${decimal}`;
    }
}

export default util



