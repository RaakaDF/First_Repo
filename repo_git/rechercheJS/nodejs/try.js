//console.log("hello world");

setTimeout(()=> {
    console.log("sms après 2s");
    clearInterval(time);
}, 2000);

var time = setInterval(()=> {
    console.log("sms chauqe 500ms");
}, 500);