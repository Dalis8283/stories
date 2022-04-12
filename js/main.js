// let text="Bạn nghĩ bản thân mình có ngu không?";
// let result=text.font("helvetica");
// document.body.innerHTML=result;
const name = window.prompt("Tên của bạn là gì?");

let clicked=0;

function btn1onclick(){
	clicked+=1;
	// alert("ok i got it!");
	if (clicked==1){
		document.getElementById("main-text").textContent="Có, chắc chắn";
	}
	if (clicked>1){
		alert("Bạn nhận ra được điều này thì bạn còn khôn đấy bạn "+name+" !!!");
	}
}

function btn2onclick(){
	if (confirm("Bạn có bộ não của thằn lằn à?")){
		alert("Chúng tôi xác nhận điều này...");
	}
	else{
		alert("Sao bạn lại phủ định điều này?");
	}
}