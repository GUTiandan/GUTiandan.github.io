window.onload=function(){

	var seckill=document.getElementsByTagName('span');
	function timer(){  
        	var ts = (new Date(2018, 11, 11, 9, 0, 0)) - (new Date());//计算剩余的毫秒数  
        	// var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数  
        	var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数  
        	var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数  
        	var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数  
        	// dd = checkTime(dd);  
        	hh = checkTime(hh);  
        	mm = checkTime(mm);  
        	ss = checkTime(ss);  
        	seckill[0].innerHTML = hh;
        	seckill[1].innerHTML = mm;
        	seckill[2].innerHTML = ss;     
    }  
    setInterval(timer,1000);
    function checkTime(i){    
           	if (i < 10) {    
                i = "0" + i;    
            }    
               return i;    
            }     




}