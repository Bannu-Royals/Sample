var [h,m,s] = [0,0,0]
var timer = null;

            function Stopwatch(){
                s++
                if(s==60){
                    m++
                    s=0
                    if(m==60){
                        h++
                        m=0
                    }
                }

                let hrs = h<10 ? `0${h}`:`${h}`
                let min = m<10 ? `0${m}`:`${m}`
                let sec = s<10 ? `0${s}`:`${s}`
                document.getElementById("Timer").innerHTML = `${hrs} : ${min} : ${sec}`
            }

            function Start(){
                if(timer!=null){
                    clearInterval(timer)
                }
                timer = setInterval(Stopwatch,1000);
            }


            function Stop(){ 
                clearInterval(timer)
            }


            function Reset(){
                
                clearInterval(timer);
                [h,m,s] = [0,0,0];
                document.getElementById("Timer").innerHTML = `00 : 00 : 00`
            }