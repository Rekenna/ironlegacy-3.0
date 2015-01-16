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
//= require sweet-alert.min
//= require Markdown.Converter
//= require Markdown.Sanitizer

$(".trigger").html("<i class='fa fa-bars'></i>");
$(".floating").html("<i class='fa fa-plus'></i>").attr("data-hint", 'Create Post');

$(".trigger").click(function(){
	console.log("Clicked Trigger!");
	$("main").toggleClass("menu-shown");
  $("nav").toggleClass("menu-shown");
	if($("main").hasClass("menu-shown")){
		$(".trigger").html("<i class='fa fa-close'></i>");
	}else{
		$(".trigger").html("<i class='fa fa-bars'></i>");
	}
});

$( window ).resize(function() {
  $( "main" ).removeClass("menu-shown");
});


$(function() {
  // When using more than one `textarea` on your page, change the following line to match the one you’re after
  var $textarea = $('textarea'),
      $preview = $('<div id="preview" />').insertAfter($textarea),
      convert = new Markdown.getSanitizingConverter().makeHtml;
      $preview.hide();

  // instead of `keyup`, consider using `input` using this plugin: https://mathiasbynens.be/notes/oninput#comment-1
  $textarea.keyup(function() {
    $preview.html(convert($textarea.val()));
  }).trigger('keyup');

  $("#MarkdownToggle").click(function(){
    $(this).toggleClass("TogglePressed");
    $textarea.toggle();
    $preview.toggle();
  })
});