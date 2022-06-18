// let text="Bạn nghĩ bản thân mình có ngu không?";
// let result=text.font("helvetica");
// document.body.innerHTML=result;
// const name = window.prompt("Tên của bạn là gì?");

const email = "quangdv8283@gmail.com";

// console.log(name.toUpperCase());
// if (name.toUpperCase()==="QUANG"){
// 	confirm("Bạn nói thật chứ? Được đấy!!!");
// }
const newTitle = "Stupidity Test";
document.title = newTitle;

const b = document.getElementById("btn_3");
b.addEventListener("mouseover", moveHover);

function moveHover(){
	const i = Math.floor(Math.random()*300)+10;
	const j = Math.floor(Math.random()*300)+10;

	b.style.left = -i+"px";
	b.style.right = i+"px";
	b.style.top = j+"px";
	b.style.bottom= -j+"px";
}

let clicked=0;

function btn1onclick(){
	clicked+=1;
	// alert("ok i got it!");
	if (clicked==1){
		document.getElementById("main-text").textContent="Có, chắc chắn";
	}
	if (clicked>1){
		alert("Bạn nhận ra được điều này thì bạn còn khôn đấy...!!!");
	}
}

function btn2onclick(){
	if (confirm("Bạn có bộ não của thằn lằn à?")){
		alert("Chúng tôi xác nhận điều này...");
	}
	else{
		alert("Sao bạn lại phủ định điều này? Không nên...");
	}
}
function txtclick(){
	alert("OK được rồi, bạn hãy xuống phía dưới trang web đi!!!");
}

function btn3onclick(){
	alert("Chớt òi, bấm lại đi bạn");
}

function linkonclick(){
	alert("Ok chúng tôi biết mà:))");
}
let click = 0;
function link2onclick(){
	// let a = document.createElement("a");
	// a.setAttribute("href","https://www.meme-arsenal.com/memes/b31a9a96ad5ee99bf46e599167634eb0.jpg");
	// a.setAttribute("target","_BLANK");
	// a.innerHTML = "Xin lỗi đây mới là link!!!";
	// document.getElementsByClassName("container_3")[0].appendChild(a);
	// a.setAttribute("margin-left","400px");

	click+=1;
	const l = document.getElementById("trollLink");
	if (click == 1){
		l.innerHTML = "Xin lỗi link đây";
		l.setAttribute("href","https://youtu.be/dQw4w9WgXcQ");
		click == 1;
	}
	if (click > 1){
		// l.innerHTML = "Xin l";
		l.setAttribute("href","https://www.meme-arsenal.com/memes/b31a9a96ad5ee99bf46e599167634eb0.jpg");
	}
	
	
}