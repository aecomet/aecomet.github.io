
$(function(){$(".button-collapse").sideNav();controlPagePosition();getAnime();});function controlPagePosition(){var pageTopBtn=$('#page-top');var height=150;if($(this).scrollTop()<height){pageTopBtn.hide();}
$(window).scroll(function(){($(this).scrollTop()>height)?pageTopBtn.fadeIn():pageTopBtn.fadeOut();});pageTopBtn.on('click',function(e){$("html,body").animate({scrollTop:0},500,'swing');});}
function getAnime(){var date=new Date();var year=date.getFullYear();var month=date.getMonth()+1;var cour='';if(9<month&&month<13)
cour=1;if(0<month&&month<4)
cour=2;if(3<month&&month<7)
cour=3;if(6<month&&month<10)
cour=4;var $ul=document.querySelector('#anime-list');var fragment=document.createDocumentFragment();$.getJSON('http://api.moemoe.tokyo/anime/v1/master/'+year+'/'+4).done(function(data){for(var i=0;i<data.length;i++){var $li=document.createElement('li');$li.innerHTML=data[i].title;fragment.appendChild($li);}
$ul.appendChild(fragment);}).fail(function(data){console.error(data.statusText);});}
function initMap(){var POSITIONS=[{id:"map-koriyama",center:{lat:34.648078,lng:135.790295}},{id:"map-hitachi",center:{lat:36.590654,lng:140.662153}}];for(var i=0;i<POSITIONS.length;i++){var map=new google.maps.Map(document.getElementById(POSITIONS[i].id),{zoom:16,center:POSITIONS[i].center});var marker=new google.maps.Marker({position:POSITIONS[i].center,map:map});}}