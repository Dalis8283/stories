// let text="Bạn nghĩ bản thân mình có ngu không?";
// let result=text.font("helvetica");
// document.body.innerHTML=result;


let clicked=0;

function btn1onclick(){
	clicked+=1;
	// alert("ok i got it!");
	if (clicked==1){
		document.getElementById("main-text").textContent="Có, chắc chắn";
	}
	if (clicked>1){
		alert("Ok chúng tôi xác nhận điều đó!")
	}
}

function btn2onclick(){
	alert("Ừ tôi biết điều đó!");
}