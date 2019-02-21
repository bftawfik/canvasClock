var mylog = console.log;
var console = {
  logState: 'on',
  log: function(msg){
    if(console.logState == 'on'){
      mylog(msg);
    }
  }
};
