const util = {

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
    },
    //改变title
    changeTitle(title) {
        wx.showNavigationBarLoading();
        wx.setNavigationBarTitle({
            title: title,
            complete: () => { wx.hideNavigationBarLoading(); }
        })
    },
    //校验身份证
    checkIdCard(idNum) {
        if(idNum == '') {
            return false;
        }
        if(typeof idNum != 'string') {
            idNum = idNum.toString();
        }
        let regEighteen = new RegExp(/^[1-9]\d{0,16}[\dXx]$/);
        let regFifteen = new RegExp(/^[1-9]\d{0,14}$/);
        if(regEighteen.test(idNum) || regEighteen.test(idNum)) {
            return true;
        } else {
            return false;
        }
    },
    //姓名验证
    checkNickName(nickName) {
        if(nickName == '') {
            return false;
        }
        let reg1 = new RegExp(/^[\u4e00-\u9fa5]{2,}$/);
        let reg2 = new RegExp(/^[a-zA-Z]{2,}$/);
        if (reg1.test(nickName) || reg2.test(nickName)) {
            return true;
        } else {
            return false;
        }
    }
}

export default util



