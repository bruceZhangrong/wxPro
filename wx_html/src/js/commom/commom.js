  
    function GoBack(){
        window.history.go(-1);
    }

    function checkIdCard(idNum) {
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
    }
    //姓名验证
    function checkNickName(nickName) {
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
