// 策略模式（Strategy Pattern）指的是定义一系列的算法，把它们一个个封装起来，目的就是将算法的使用与算法的实现分离开来
// 策略类，策略类封装了具体的算法，并负责具体的计算过程
// 环境类Context，Context 接受客户的请求，随后 把请求委托给某一个策略类
var strategy = {
  isNotEmpty: function (value, errorMsg) {
    if (value === '') {
      return errorMsg;
    }
  },
  // 限制最小长度
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  // 手机号码格式
  mobileFormat: function (value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  }
};
var Validator = function () {
  this.cache = []; // 保存效验规则
};
Validator.prototype.add = function (dom, rule, errorMsg) {
  var str = rule.split(":");
  this.cache.push(function () {
    // str 返回的是 minLength:6 
    var strategy = str.shift();
    str.unshift(dom.value); // 把input的value添加进参数列表
    str.push(errorMsg); // 把errorMsg添加进参数列表
    return strategys[strategy].apply(dom, str);
  });
};
Validator.prototype.start = function () {
  for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
    var msg = validatorFunc(); // 开始效验 并取得效验后的返回信息
    if (msg) {
      return msg;
    }
  }
};
var validateFunc = function () {
  var validator = new Validator(); // 创建一个Validator对象
  /* 添加一些效验规则 */
  validator.add(registerForm.userName, 'isNotEmpty', '用户名不能为空');
  validator.add(registerForm.password, 'minLength:6', '密码长度不能小于6位');
  validator.add(registerForm.userName, 'mobileFormat', '手机号码格式不正确');

  var errorMsg = validator.start(); // 获得效验结果
  return errorMsg; // 返回效验结果
};
var registerForm = document.getElementById("registerForm");
registerForm.onsubmit = function () {
  var errorMsg = validateFunc();
  if (errorMsg) {
    alert(errorMsg);
    return false;
  }
}