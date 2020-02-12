 $(document).ready(ocitavanjestrane);

function ocitavanjestrane(){
	$("#sakriveno1").hide();
	$("#sakriveno2").hide();
	$("#sakriveno3").hide();

	$("#dugme1").click(function(){

		$("#sakriveno1").stop().slideToggle(500);
	});
	$("#dugme2").click(function(){

		$("#sakriveno2").stop().slideToggle(500);
	});
	$("#dugme3").click(function(){

		$("#sakriveno3").stop().slideToggle(500);
	});

	$("#kuca").hide();
	$("#zgrada").hide();
	

	$("#slika1").mouseover(function(){

		$("#slika1").hide();
		$("#kuca").show();
	});
	$("#kuca").mouseleave(function(){

		$("#kuca").hide();
		$("#slika1").show();
	});



	$("#slika2").mouseover(function(){

		$("#slika2").hide();
		$("#zgrada").show();
	});
	$("#zgrada").mouseleave(function(){

		$("#zgrada").hide();
		$("#slika2").show();
	});


	$(".slike2").hide();

	$("#right").click(function(){
		$(".slike2").show("slow");
		$(".slike1").hide("slow");

	});
	$("#left").click(function(){
		$(".slike1").show("slow");
		$(".slike2").hide("slow");

	});

	$("#galerija a").vanillabox();
	

	$(".nesto").text("Copyright © 2020 Vuk Zdravkovic. All Rights Reserved. Credits: Vuk Zdravković  ")

	$("#slicica").hover(
		function(){
		$("#slicica").stop().animate({ cursor:"pointer", width:"150px", height:"150px"} , 500);
		},
		function(){
		$("#slicica").stop().animate({ width:"100px", height:"100px"} , 500);
		}
		);

		$("#upis tbody tr:even").css({"background-color": "#a1a1a1" , "color" : "#fff"});

		$(".drustvenemreze").html("<a href='https://facebook.com'><i class='fab fa-facebook fa-2x text-light'></i></a> <a href='https://instagram.com'><i class='fab fa-instagram fa-2x text-light'></i></a> <a href='sitemap.xml'><i class='fas fa-sitemap fa-2x text-light'></i></a>");

		$("#prijava").on({

			mouseover : function(){
				$("#prijava").stop().animate({padding:"0px 65px"} , 300);
			},
			mouseleave : function(){
				$("#prijava").stop().animate({padding:"0px 10px"} , 300);
			}

		});


}