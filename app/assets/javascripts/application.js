// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require forem
//= require_tree .

$(".trigger").html("<i class='fa fa-bars'></i>");
$(".floating").html("<i class='fa fa-plus'></i>").attr("data-hint", 'Create Post');

$(".error").click(function(){
	$(".error").slideUp();
});


$(".trigger").click(function(){
	console.log("Clicked Trigger!");
	$("main").toggleClass("menu-shown");
	$("footer").toggleClass("menu-shown");
	$("nav").toggleClass("menu-shown");
	if($("main").hasClass("menu-shown")){
		$(".trigger").html("<i class='fa fa-close'></i>");
	}else{
		$(".trigger").html("<i class='fa fa-bars'></i>");
	}
});

$(document).ready(function(){
                  $('.tooltipped').tooltip();
                });
