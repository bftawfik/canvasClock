var dimentions = {
  widthWithoutScrollbar: 0,
  widthWithScrollbar: 0,
  widthOfScreen: 0,
  widthOfBody: 0,
  //-----------------
  heightWithoutScrollbar: 0,
  heightWithScrollbar: 0,
  heightOfScreen: 0,
  heightOfBody: 0,
}
//------------------------------------------------------------------------------
function getDeviceDimensions(){
  //console.log('getDeviceDimensions');
  dimentions.widthWithoutScrollbar = $("body").prop("clientWidth");
  if(window.innerWidth > 0){
    dimentions.widthWithScrollbar = window.innerWidth;
  }else{
    dimentions.widthWithScrollbar = screen.width;
  }
  dimentions.widthOfScreen = screen.width;
  dimentions.widthOfBody = $("body").prop("scrollWidth");
  dimentions.heightWithoutScrollbar = $("body").prop("clientHeight");
  if(window.innerHeight > 0){
    dimentions.heightWithScrollbar = window.innerHeight;
  }else{
    dimentions.heightWithScrollbar = screen.height;
  }
  dimentions.heightOfScreen = screen.height;
  dimentions.eightOfBody = $("body").prop("scrollHeight");
  return dimentions;
}
//------------------------------------------------------------------------------
