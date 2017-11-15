
$(function(){



});

$("#vaca").hide();

$("#cerdo").hide('4500','linear',function(){$("#mensaje").text("Cerdo")});

$("#gallina").toggle();

$("#oveja").toggle('500',function(){$("#mensaje").text("Oveja")});
