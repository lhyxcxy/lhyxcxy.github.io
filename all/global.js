var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
var isWeiXin=(u.toLowerCase().match(/MicroMessenger/i) == 'micromessenger');
//var isQQ=(u.toLowerCase().match(/MQQBrowser/i) == 'mqqbrowser');
var isQQ=(u.toLowerCase().match(/QQ/i) == 'qq');
var thisObj;

//获取id对象
function getId(obj) {
  return document.getElementById(obj);
}

//打开弹框
function openTip(url) {
	alert("openTip")
  if (isWeiXin || isQQ) { //微信、QQ浏览器
	 alert("微信、QQ浏览器")
    if (isiOS) {  //ios终端
      thisObj = getId('iosTip');
      thisObj.style.display = 'block';
    } else {  //android终端
      thisObj = getId('androidTip');
      thisObj.style.display = 'block';
    }
  } else {  //非微信、QQ浏览器
    //window.open(url);
	  alert("非微信、QQ浏览器")
	window.location.href=url
  }
}

//隐藏弹框
function closeTip() {
  thisObj = getId('iosTip');
  thisObj.style.display = 'none';
  thisObj = getId('androidTip');
  thisObj.style.display = 'none';
}
