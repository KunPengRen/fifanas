var c=0
  var t=0
 function timedCount()
 {
    $('#timeCount').text("请稍等" +(15-t)+"秒")
    c=c+1
    console.log(t)
    if(17-t<=0){
      clearTimeout(t);

      $('#timeCount').text("")
    }
    t=setTimeout("timedCount()",1000)
    if(17-t<=0){
      clearTimeout(t);

      $('#timeCount').text("")
    }
    
 }
