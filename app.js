let clock=document.querySelector('.clock');
let start=document.querySelector('.bStart');
let flag=0;


// let porneste=()=>{
//     let now = new Date().getTime();
//     let t = deadline - now;
//     let minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//     let secunde = Math.floor((t % (1000 * 60)) / 1000);
//     clock.innerHTML = minute + "m " + secunde + "s ";
//         if (t < 0) {
//             clearInterval(x);
//             clock.innerHTML = "Gata!";
//         }
//     };
//
// let aux=new Date();
// let deadline1 = new Date();
// deadline1.setMinutes(aux.getMinutes()+25);
// deadline1.setSeconds(aux.getSeconds()+2);
// let deadline = new Date(deadline1).getTime();
// let x;

const minutesPomodoro=25;
let time=minutesPomodoro*60;
let i;


let doSomePomodoroAction=()=>{
    let minutes=Math.floor(time/60);
    let seconds=Math.floor(time%60);
    clock.textContent=`${minutes} M : ${seconds} S`;
    time--;
    if(time===0){
        alert("timpul a expirat!")
    }

};




let executeFlag=(fl)=>{
    if(fl===0){
        start.innerHTML="Stop";
        i=setInterval(()=>{let minutes=Math.floor(time/60);
            let seconds=Math.floor(time%60);
            clock.textContent=`${minutes} M : ${seconds} S`;
            time--;
            if(time===-1){
                clock.textContent=`0 M : 0 S`;
                time=minutesPomodoro*60;
                start.innerHTML="Reluati";
                clearInterval(i);
            }},1000);
       
    }
    else{
        start.innerHTML="Start";
        clearInterval(i);
    }
};


start.addEventListener('click',()=>{
    if(flag===0){
        executeFlag(0);
        flag=1;
    }
    else if (flag===1){
        executeFlag(1);
        flag=0;
    }

});

        


 