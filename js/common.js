$(document).ready(function() {
	// // Resize bg
	// function heightDetect() {
	// 	$(".main_head").css("height", $(window).height());
	// };
	// heightDetect();
	// $(window).resize(function() {
	// 	heightDetect();
	// });
//languages ​​switch
	$("#en").click(function(){
		$(this).addClass("active");
		$("#ru").removeClass('active');
	});
	$("#ru").click(function(){
		$(this).addClass("active");
		$("#en").removeClass('active');
	});

	//slider-1
	$(".slid1").addClass('act');//Startup give class
	$(".slid1").click(function(){ // проверяем на наличие класса у всех слайдов и оставляем активными только 1 слайд / We check for the presence of a class of all slides and leave active only 1 slide
		$(this).addClass("act");
		$(".slid2").removeClass('act');
		$(".slid3").removeClass('act');
		$(".green2").removeClass('activegrin');
		$(".green3").removeClass('activegrin');
		$("#expresBtn").removeClass('activegr');
		$(".blue2").removeClass('activegrin');
		$(".blue3").removeClass('activegrin');
		$("#standartBtn").removeClass('activegr');
		$(".red2").removeClass('activegrin');
		$(".red3").removeClass('activegrin');
		$("#vipBtn").removeClass('activegr');
		$(".orang2").removeClass('activegrin');
		$(".orang3").removeClass('activegrin');
		$("#poslestroyBtn").removeClass('activegr');


	});
	$(".slid2").click(function(){
		$(this).addClass("act");
		$(".slid1").removeClass('act');
		$(".slid3").removeClass('act');
		$(".green").removeClass('activegrin');
		$(".green3").removeClass('activegrin');
		$("#expresBtn").removeClass('activegr');
		$(".blue").removeClass('activegrin');
		$(".blue3").removeClass('activegrin');
		$("#standartBtn").removeClass('activegr');
		$(".red").removeClass('activegrin');
		$(".red3").removeClass('activegrin');
		$("#vipBtn").removeClass('activegr');
		$(".orang").removeClass('activegrin');
		$(".orang3").removeClass('activegrin');
		$("#poslestroyBtn").removeClass('activegr');
	});
	$(".slid3").click(function(){
		$(this).addClass("act");
		$(".slid2").removeClass('act');
		$(".slid1").removeClass('act');
		$(".green2").removeClass('activegrin');
		$(".green").removeClass('activegrin');
		$("#expresBtn").removeClass('activegr');
		$(".blue2").removeClass('activegrin');
		$(".blue").removeClass('activegrin');
		$("#standartBtn").removeClass('activegr');
		$(".red2").removeClass('activegrin');
		$(".red").removeClass('activegrin');
		$("#vipBtn").removeClass('activegr');
		$(".orang2").removeClass('activegrin');
		$(".orang").removeClass('activegrin');
		$("#poslestroyBtn").removeClass('activegr');
	});
	$("#expresBtn").click(function(){  // при клике на кнопку активировать определленые кнопки  и убрать не нужные или добавляем нужные /	when you click on the button to activate opredellenye button and remove unnecessary or add the desired
		$(this).toggleClass("activegr");
		if($(".slid1").hasClass("act")){
			$(".green").toggleClass("activegrin");
			$(".green2").removeClass('activegrin');
			$(".green3").removeClass('activegrin');
			$(".orang").removeClass('activegrin');
			$(".orang2").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$("#poslestroyBtn").removeClass('activegr');
		}else if($(".slid2").hasClass("act")){
			$(".green2").toggleClass("activegrin");
			$(".green").removeClass('activegrin');
			$(".green3").removeClass('activegrin');
			$(".orang").removeClass('activegrin');
			$(".orang2").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$("#poslestroyBtn").removeClass('activegr');
		}else if($(".slid3").hasClass("act")){
			$(".green3").toggleClass("activegrin");
			$(".green2").removeClass('activegrin');
			$(".green").removeClass('activegrin');
			$(".orang").removeClass('activegrin');
			$(".orang2").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$("#poslestroyBtn").removeClass('activegr');
		}
	});
	$("#standartBtn").click(function(){
		$(this).toggleClass("activegr");
		if($(".slid1").hasClass("act")){
			$(".blue").toggleClass("activegrin");
			$(".blue2").removeClass('activegrin');
			$(".blue3").removeClass('activegrin');
			$(".orang").removeClass('activegrin');
			$(".orang2").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$("#poslestroyBtn").removeClass('activegr');
		}else if($(".slid2").hasClass("act")){
			$(".blue2").toggleClass("activegrin");
			$(".blue").removeClass('activegrin');
			$(".blue3").removeClass('activegrin');
			$(".orang").removeClass('activegrin');
			$(".orang2").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$("#poslestroyBtn").removeClass('activegr');
		}else if($(".slid3").hasClass("act")){
			$(".blue3").toggleClass("activegrin");
			$(".blue2").removeClass('activegrin');
			$(".blue").removeClass('activegrin');
			$(".orang").removeClass('activegrin');
			$(".orang2").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$("#poslestroyBtn").removeClass('activegr');
		}
	});
	$("#vipBtn").click(function(){
		$(this).toggleClass("activegr");
		if($(".slid1").hasClass("act")){
			$(".red").toggleClass("activegrin");
			$(".red2").removeClass('activegrin');
			$(".red3").removeClass('activegrin');
			$(".orang").removeClass('activegrin');
			$(".orang2").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$("#poslestroyBtn").removeClass('activegr');
		}else if($(".slid2").hasClass("act")){
			$(".red2").toggleClass("activegrin");
			$(".red").removeClass('activegrin');
			$(".red3").removeClass('activegrin');
			$(".orang").removeClass('activegrin');
			$(".orang2").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$("#poslestroyBtn").removeClass('activegr');
		}else if($(".slid3").hasClass("act")){
			$(".red3").toggleClass("activegrin");
			$(".red2").removeClass('activegrin');
			$(".red").removeClass('activegrin');
			$(".orang").removeClass('activegrin');
			$(".orang2").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$("#poslestroyBtn").removeClass('activegr');
		}
	});
	$("#poslestroyBtn").click(function(){ // отдельные оранживые кнопки
		$(this).toggleClass("activegr");
		if($(".slid1").hasClass("act")){
			$(".orang").toggleClass("activegrin");
			$(".orang2").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$(".red").removeClass('activegrin');
			$(".red2").removeClass('activegrin');
			$(".red3").removeClass('activegrin');
			$(".blue").removeClass('activegrin');
			$(".blue2").removeClass('activegrin');
			$(".blue3").removeClass('activegrin');
			$(".green").removeClass('activegrin');
			$(".green2").removeClass('activegrin');
			$(".green3").removeClass('activegrin');
			$("#expresBtn").removeClass('activegr');
			$("#standartBtn").removeClass('activegr');
			$("#vipBtn").removeClass('activegr');

		}else if($(".slid2").hasClass("act")){
			$(".orang2").toggleClass("activegrin");
			$(".orang").removeClass('activegrin');
			$(".orang3").removeClass('activegrin');
			$(".red").removeClass('activegrin');
			$(".red2").removeClass('activegrin');
			$(".red3").removeClass('activegrin');
			$(".blue").removeClass('activegrin');
			$(".blue2").removeClass('activegrin');
			$(".blue3").removeClass('activegrin');
			$(".green").removeClass('activegrin');
			$(".green2").removeClass('activegrin');
			$(".green3").removeClass('activegrin');
			$("#expresBtn").removeClass('activegr');
			$("#standartBtn").removeClass('activegr');
			$("#vipBtn").removeClass('activegr');
		}else if($(".slid3").hasClass("act")){
			$(".orang3").toggleClass("activegrin");
			$(".orang2").removeClass('activegrin');
			$(".orang").removeClass('activegrin');
			$(".red").removeClass('activegrin');
			$(".red2").removeClass('activegrin');
			$(".red3").removeClass('activegrin');
			$(".blue").removeClass('activegrin');
			$(".blue2").removeClass('activegrin');
			$(".blue3").removeClass('activegrin');
			$(".green").removeClass('activegrin');
			$(".green2").removeClass('activegrin');
			$(".green3").removeClass('activegrin');
			$("#expresBtn").removeClass('activegr');
			$("#standartBtn").removeClass('activegr');
			$("#vipBtn").removeClass('activegr');
		}
	});

//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		dots: true,
		center: true


	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});

jQuery(document).ready(function($){
	//portfolio - show link
	$('.bg-hover').hover(
		function () {
			$(this).animate({opacity:'1'});
		},
		function () {
			$(this).animate({opacity:'0'});
		}
	);
});