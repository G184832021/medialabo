let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);    
let kaisu = 0;
let a = document.querySelector('#print');
a.addEventListener('click', hantei);
function hantei() {
    let i = document.querySelector('input[name="hantei"]');
	let hantei = i.value;
    let yoso = Number(hantei); 
    kaisu=kaisu+1;   
let re = document.querySelector('span#result');
let k = document.querySelector('span#kaisu');
k.textContent = kaisu+'回目の予想 '+yoso;


if(kotae===yoso&&kaisu<4){
   re.textContent = '正解です.おめでとう！!';
    kaisu=4;
}
if(kotae<yoso&&kaisu<3){
    re.textContent = 'まちがい．答えはもっと小さいですよ';
}
else if(kotae>yoso&&kaisu<3){
    re.textContent = 'まちがい．答えはもっと大きいですよ';
}
else if(kotae!==yoso&&kaisu===3){
    re.textContent = 'まちがい．残念でした答えは'+kotae+'です．';
}
else if(kotae!==yoso&&kaisu>3||kotae===yoso&&kaisu>4){
    re.textContent = '答え'+kotae+'はでした すでにゲームは終わっています';
}
}
