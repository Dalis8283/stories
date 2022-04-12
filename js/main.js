let text="Bạn nghĩ bản thân mình có nghu không?";
let result=text.fontsize(10);
document.body.innerHTML=result;

let clicked=0;

function btn1onclick(){
	clicked+=1;
	// alert("ok i got it!");
	if (clicked==1){
		document.getElementById("btn_1").innerHTML="Không, dĩ nhiên";
	}
	if (clicked>1){
		alert("ok we got it!")
	}
	}