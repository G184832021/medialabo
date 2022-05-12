let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);    
let kaisu = 0;
hantei();
hantei();
hantei();
hantei();
function hantei() {
    let yoso = 4; 
    kaisu=kaisu+1;   
console.log(kaisu+`回目の予想`+yoso);
if(kotae===yoso&&kaisu!==4){
    console.log(`正解です.おめでとう！`);
}
if(kotae<yoso&&kaisu<3){
console.log(`まちがい．答えはもっと小さいですよ`);
}
if(kotae>yoso&&kaisu<3){
    console.log(`まちがい．答えはもっと大きいですよ`);
}
if(kotae!==yoso&&kaisu===3){
    console.log(`まちがい．残念でした答えは`+kotae+`です．`);
}
if(kotae!==yoso&&kaisu>3){
    console.log(`答えは`+kotae+`でした すでにゲームは終わっています`);
}
if(kotae===yoso&&kaisu>3){
    console.log(`答えは`+kotae+`でした すでにゲームは終わっています`);
}
}