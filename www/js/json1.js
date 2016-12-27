 
	$(document).ready(function()
	{
		//var url="http://phonegappro.esy.es/test/json.php";
		var url="http://localhost/bis_web/json.php";
		$.getJSON(url,function(result){
			console.log(result);
	        $.each(result, function(i, field){
	        	var id_kat=field.id_kat;
	        	var nama=field.nama;
	        	
	           // $("#listview").append("<a class='item' href='form.html?id="+id+"&title="+title+"&duration="+duration+"&price="+price+"'><span class='item-note'>$"+price+"</span><h2>"+ title + " </h2><p>"+ duration +"</p></a>");
	         $("#list").append("<ul><li class='accordion-item'><a href='#' class='item-link item-content'><div class='item-inner'> <div class='item-title'>"+ nama +"</div></div></a> </li></ul>");
		   });
    	});
	});
