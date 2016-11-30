var images = new Array()
	var num = 100 ;
	function preload() {
		for (i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image()
				images[i].src = preload.arguments[i]
		}
	}
preload(
		"img/dt/slide/bai.png",
		"img/dt/slide/kong.png",
		"img/dt/slide/long.png",
		"img/dt/slide/san.png",
		"img/dt/slide/shang.png",
		"img/dt/slide/shui.png",
		"img/dt/slide/shuiyu.png",
		"img/dt/slide/wen.png",
		"img/dt/slide/yun.png",
		"img/dt/slide/zhuo.png",
		"img/dt/an.png",
		"img/dt/bj.jpg",
		"img/dt/lkt.png",
		"img/dt/xl1.png",
		"img/dt/xl2.png"
		)

var bgMap = document.getElementById("bgMap"); 
var bgWidth = bgMap.clientWidth;
var bgHeight = bgMap.clientHeight;
console.log(bgWidth,bgHeight);
$("#shuiyu").css({"left":bgWidth*0.25 + "px","top":bgHeight*0.43 + "px"});
$("#san").css({"left":bgWidth*0.29 + "px","top":bgHeight*0.50 + "px"});
$("#bai").css({"left":bgWidth* 0.35 + "px","top":bgHeight*0.42 + "px"});
$("#shang").css({"left":bgWidth*0.35  + "px","top":bgHeight*0.57 + "px"});
$("#shui").css({"left":bgWidth*0.39 + "px","top":bgHeight*0.22 + "px"});
$("#wen").css({"left":bgWidth*0.51 + "px","top":bgHeight*0.21 + "px"});
$("#long").css({"left":bgWidth*0.56+ "px","top":bgHeight*0.14 + "px"});
$("#yun").css({"left":bgWidth*0.57 + "px","top":bgHeight*0.48 + "px"});
$("#zhuo").css({"left":bgWidth*0.63 + "px","top":bgHeight*0.13 + "px"});
$("#kong").css({"left":bgWidth*0.60 + "px","top":bgHeight*0.22 + "px"});

var slideImg = document.getElementById("slideImg");
var slide = document.getElementById("slide");
var audio = document.getElementById("audio");
audio.play();

$("#shuiyu").on("click",function (){
	slide.style.display = "block";	
	slideImg.src = "img/dt/slide/shuiyu.png";	
	audio.pause();
	audio.src = "audio/shuiyu.mp3";
	audio.play();
})
$("#san").on("click",function (){
	slide.style.display = "block";	
	$("#slide").show();
	slideImg.src = "img/dt/slide/san.png";	
	audio.pause();
	audio.src = "audio/san.mp3";
	audio.play();
})
$("#bai").on("click",function (){
	slide.style.display = "block";	
	$("#slide").show();
	slideImg.src = "img/dt/slide/bai.png";	
	audio.pause();
	audio.src = "audio/bai.mp3";
	audio.play();
})
$("#shang").on("click",function (){
	slide.style.display = "block";	
	$("#slide").show();
	slideImg.src = "img/dt/slide/shang.png";	
	audio.pause();
	audio.src = "audio/shang.mp3";
	audio.play();
})
$("#shui").on("click",function (){
	slide.style.display = "block";	
	slideImg.src = "img/dt/slide/shui.png";	
	audio.pause();
	audio.src = "audio/shui.mp3";
	audio.play();
})
$("#wen").on("click",function (){
	slide.style.display = "block";	
	slideImg.src = "img/dt/slide/wen.png";	
	audio.pause();
	audio.src = "audio/wen.mp3";
	audio.play();
})
$("#long").on("click",function (){
	slide.style.display = "block";	
	slideImg.src = "img/dt/slide/long.png";	
	audio.pause();
	audio.src = "audio/long.mp3";
	audio.play();
})
$("#yun").on("click",function (){
	slide.style.display = "block";	
	slideImg.src = "img/dt/slide/yun.png";	
	audio.src = "audio/yun.mp3";
	audio.play();
})
$("#zhuo").on("click",function (){
	slide.style.display = "block";	
	slideImg.src = "img/dt/slide/zhuo.png";	
	audio.pause();
	audio.src = "audio/zhuo.mp3";
	audio.play();
})
$("#kong").on("click",function (){
	slide.style.display = "block";	
	slideImg.src = "img/dt/slide/kong.png";	
	audio.pause();
	audio.src = "audio/kong.mp3";
	audio.play();
})
$("#close").on("click",function (){
	$("#slide").hide();
	audio.pause();
	slideImg.src="";	
})

$("#lx1").on("click",function (){
	$("#luxian1").show();
	$("#luxian2").hide();
});
$("#lx2").on("click",function (){
	$("#luxian2").show();
	$("#luxian1").hide();
});

