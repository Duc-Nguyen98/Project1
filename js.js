$(document).ready(function(){
	var stt = 0;
	
	starImg = $("img.slide:first").attr("stt");
	endImg =  $("img.slide:last").attr("stt");
	
	$("img.slide").each(function(){
        if($(this).is(':visible'))
		stt = $(this).attr("stt");
    });
    $("#next").click(function(){
		if(stt == endImg){
			stt = -1;
		}
		next = ++stt;
		$("img.slide").hide();
		$("img.slide").eq(next).show();
		});
	$("#prev").click(function(){
		if(stt == 0){
			stt = endImg;
			prev = stt++;			
			}
		prev = --stt;
		$("img.slide").hide();
		$("img.slide").eq(prev).show();
		});
		
	setInterval(function(){
		$("#next").click();
	},8000);
}); 
// code scroll 

document.addEventListener("DOMContentLoaded",function(){
	var nut0 = document.getElementById("nutslide-s");
	var khoi0 = document.getElementsByClassName("khoithongtinslide");
	nut0.onclick = function(){
		khoi0[0].classList.toggle("upforslide");
	}
	var nut1 = document.getElementById("nut1");
	var khoi1 = document.getElementsByClassName("khoitrai1");
	nut1.onclick = function(){
		khoi1[0].classList.toggle("sangtrai1");
	}
	var nut2 = document.getElementById("nut2");
	var khoi2 = document.getElementsByClassName("khoilen1");
	nut2.onclick = function(){
		khoi2[0].classList.toggle("dilen1");
	}
	var nut3 = document.getElementById("nut3");
	var khoi3 = document.getElementsByClassName("khoiphai1");
	nut3.onclick = function(){
		khoi3[0].classList.toggle("sangphai1");
	}
	var nut4 = document.getElementById("nut4");
	var khoi4 = document.getElementsByClassName("khoitrai2");
	nut4.onclick = function(){
		khoi4[0].classList.toggle("sangtrai2");
	}
	var nut5 = document.getElementById("nut5");
	var khoi5 = document.getElementsByClassName("khoilen2");
	nut5.onclick = function(){
		khoi5[0].classList.toggle("dilen2");
	}
	var nut6 = document.getElementById("nut6");
	var khoi6 = document.getElementsByClassName("khoiphai2");
	nut6.onclick = function(){
		khoi6[0].classList.toggle("sangphai2");
	}

},false)

//End chung
