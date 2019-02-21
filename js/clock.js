//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
var clockCanvas;
var clockContext;
var refSize;
var nowDate = new Object();
var timeCount;
var color0 = "#333";
var color1 = "#222";
var color2 = "#339";
var color3 = "#66c";
var color4 = "#99f";
var fontStyle = "Arial";
var textAlign = "center";
var continuous = true;
var dur = 1000;
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
function resizeCanvas(){
  //console.log("resizeCanvas");
  if(clockCanvas != undefined){
    clockCanvas.width  = getDeviceDimensions().widthWithoutScrollbar;
    clockCanvas.height  = getDeviceDimensions().heightWithScrollbar;
    if(clockCanvas.width > clockCanvas.height){
      refSize = clockCanvas.height;
    }else{
      refSize = clockCanvas.width;
    }
  }
}
//--------------------------------------------------------
function addResizeFunction(){
  $( window ).resize(function() {
    resizeCanvas();
    drawClock();
  });
}
//--------------------------------------------------------
function degToRad(deg, toUp=true){
  if(toUp){
    return ((deg-90)/180) * Math.PI;
  }
  return (deg/180) * Math.PI;
}
//--------------------------------------------------------
function getNowDate(){
  nowDate.date = new Date();
  nowDate.hours = nowDate.date.getHours();
  nowDate.minutes = nowDate.date.getMinutes();
  nowDate.seconds = nowDate.date.getSeconds();
  nowDate.milliseconds = nowDate.date.getMilliseconds();
}
//--------------------------------------------------------
function twoDig(number){
  if(number < 10){
    return "0"+ number;
  }
  return ""+ number;
}
//--------------------------------------------------------
function drawClock(myCanvas, myContext){
  //console.log("drawClock");
  if(myContext != undefined){
    getNowDate();
    var clockText0 = nowDate.date.toDateString();
    var clockText1 = twoDig(nowDate.hours) +":"+ twoDig(nowDate.minutes) +":"+ twoDig(nowDate.seconds);
    myContext.fillStyle = color0;
    myContext.strokeStyle = color1;
    myContext.lineWidth = refSize * 0.03;
    myContext.font = Math.floor(refSize /18) +"px " + fontStyle;
    myContext.textAlign = textAlign;
    //----------------------------------------------------
    myContext.fillRect(0,0,myCanvas.width,myCanvas.height);
    //----------------------------------------------------
    myContext.fillStyle = color4;
    myContext.fillText(clockText0, (myCanvas.width/2), (myCanvas.height/2));
    myContext.fillText(clockText1, (myCanvas.width/2), (myCanvas.height/2) + (refSize * 0.08));
    //----------------------------------------------------
    myContext.strokeStyle = color1;
    myContext.lineWidth = refSize * 0.001;
    myContext.beginPath();
    myContext.arc((myCanvas.width/2), (myCanvas.height/2), (refSize/3), degToRad(0), degToRad(360));
    myContext.stroke();
    myContext.beginPath();
    myContext.arc((myCanvas.width/2), (myCanvas.height/2), (refSize/3) - (refSize * 0.04), degToRad(0), degToRad(360));
    myContext.stroke();
    myContext.beginPath();
    myContext.arc((myCanvas.width/2), (myCanvas.height/2), (refSize/3) - (refSize * 0.08), degToRad(0), degToRad(360));
    myContext.stroke();
    //----------------------------------------------------
    myContext.strokeStyle = color2;
    myContext.lineWidth = refSize * 0.03;
    myContext.beginPath();
    myContext.arc((myCanvas.width/2), (myCanvas.height/2), (refSize/3), degToRad(0), degToRad(nowDate.hours * 15));
    myContext.stroke();
    myContext.strokeStyle = color3;
    myContext.lineWidth = refSize * 0.02;
    myContext.beginPath();
    myContext.arc((myCanvas.width/2), (myCanvas.height/2), (refSize/3) - (refSize * 0.04), degToRad(0), degToRad(nowDate.minutes * 6));
    myContext.stroke();
    myContext.strokeStyle = color4;
    myContext.lineWidth = refSize * 0.01;
    myContext.beginPath();
    if(continuous){
      myContext.arc((myCanvas.width/2), (myCanvas.height/2), (refSize/3) - (refSize * 0.08), degToRad(0), degToRad((nowDate.seconds+(nowDate.milliseconds/1000))*6));
    }else{
      myContext.arc((myCanvas.width/2), (myCanvas.height/2), (refSize/3) - (refSize * 0.08), degToRad(0), degToRad(nowDate.seconds * 6));
    }
    myContext.stroke();
  }
}
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
$(document).ready(function(){
  //console.log('clock');
  clockCanvas = $('#clock')[0];
  clockContext = clockCanvas.getContext('2d');
  resizeCanvas();
  addResizeFunction();
  if(continuous){
    dur = 40;
  }
  timeCount = setInterval(drawClock, dur, clockCanvas, clockContext);
});
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
