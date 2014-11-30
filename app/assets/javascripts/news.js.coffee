# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(".about-section").hide();
$(".recruitment-section").hide();
$(".area").removeClass("hidden");

$(".tab").click ->
	$(".tab").removeClass("active")
	$(this).addClass("active")
	if($(".news").hasClass("active"))
		$(".news-section").show();
		$(".about-section").hide();
		$(".recruitment-section").hide();
	else if($(".about ").hasClass("active"))
		$(".about-section").show();
		$(".news-section").hide();
		$(".recruitment-section").hide();
	else if($(".recruitment ").hasClass("active"))
		$(".recruitment-section").show();
		$(".news-section").hide();
		$(".about-section").hide();