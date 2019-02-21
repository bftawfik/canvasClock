//console.log('Mobile Device Checker');
//------------------------------------------------------------------------------
var isMobilePhone, deviceType;
//------------------------------------------------------------------------------
function checkIfMobilePhone(){
  isMobilePhone = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return isMobilePhone;
}
//------------------------------------------------------------------------------
function checkDeviceType(){
  if(/Android/i.test(navigator.userAgent)){
    deviceType = 'Android';
  }else if(/webOS/i.test(navigator.userAgent)){
    deviceType = 'webOS';
  }else if(/iPhone/i.test(navigator.userAgent)){
    deviceType = 'iPhone';
  }else if(/iPad/i.test(navigator.userAgent)){
    deviceType = 'iPad';
  }else if(/iPod/i.test(navigator.userAgent)){
    deviceType = 'iPod';
  }else if(/BlackBerry/i.test(navigator.userAgent)){
    deviceType = 'BlackBerry';
  }else if(/IEMobile/i.test(navigator.userAgent)){
    deviceType = 'IEMobile';
  }else if(/Opera Mini/i.test(navigator.userAgent)){
    deviceType = 'Opera Mini';
  }
  return deviceType;
}
//------------------------------------------------------------------------------
if(checkIfMobilePhone()){
  //console.log("this is a Mobile");
}else{
  //console.log("this isn't a mobile");
}
