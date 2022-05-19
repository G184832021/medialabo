let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);    
let kaisu = 0;
hantei();
function hantei() {
    let yoso = 4; 
    kaisu=kaisu+1;   
let answer = (kaisu+`回目の予想`+yoso);
let s = document.querySelector('span#answer');
s.textContent = answer;
}
if(kotae===yoso&&kaisu<4){
    
   console.log (`正解です.おめでとう！`);
    kaisu=4;
}
if(kotae<yoso&&kaisu<3){
    console.log  (`まちがい．答えはもっと小さいですよ`);
}
if(kotae>yoso&&kaisu<3){
    lconsole.log  (`まちがい．答えはもっと大きいですよ`);
}
if(kotae!==yoso&&kaisu===3){
    console.log  (`まちがい．残念でした答えは`+kotae+`です．`);
}
if(kotae!==yoso&&kaisu>3||kotae===yoso&&kaisu>4){
    console.log  (`答え`+kotae+`はでした すでにゲームは終わっています`);
}
