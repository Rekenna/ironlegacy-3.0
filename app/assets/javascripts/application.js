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
//= require Markdown.Converter
//= require Markdown.Sanitizer

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
    if($("#MarkdownToggle").hasClass("TogglePressed")){
       $(this).removeClass("TogglePressed");
       $textarea.show();
       $preview.hide();
    }else{
      $(this).addClass("TogglePressed");
      $("#PreviewToggle").removeClass("TogglePressed");
      $textarea.show();
      $preview.show();
      $preview.removeClass("full-height");
    }
  })
  $("#PreviewToggle").click(function(){
    $(this).toggleClass("TogglePressed");
    if($("#MarkdownToggle").hasClass("TogglePressed")){
      $textarea.hide();
      $preview.addClass("full-height");
      $("#MarkdownToggle").removeClass("TogglePressed");
    }else{
      $textarea.toggle();
      $preview.toggle();
      $preview.toggleClass("full-height");
    }
  })
});

$("header").addClass("fixed");

// setTimeout(function(){
//   $("nav").toggleClass("menu-shown");
//   $(".trigger").toggleClass("active");
// 	$("header").toggleClass("full-visibility");
// },7000);
//
// setTimeout(function(){
//   $("nav").toggleClass("menu-shown");
//   $(".trigger").toggleClass("active");
// 	$("header").toggleClass("full-visibility");
// },9500);

//Menu
$(".trigger").click(function(){
	$("nav").toggleClass("menu-shown");
	$("header").toggleClass("full-visibility");
});
$("article").click(function(){
	$("nav").removeClass("menu-shown");
	$("header").removeClass("full-visibility");
});
