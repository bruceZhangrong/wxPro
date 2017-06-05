//finances javascript

$('.btn-next').on('click', function() {
  var phoneValue = $('#phoneValue').val();
    if (!checkIdCard(phoneValue)){
      layer.msg('请输入您的手机号码！');
      return;
    }
    window.location.href = '../scanlogin/scanlogin.html';
});