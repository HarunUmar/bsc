// Init App
var myApp = new Framework7({
    modalTitle: 'Powered By TarsiusLabs',
    // Enable Material theme
    material: true,
    cache : true,
    cacheDuration : 1000*60*10,
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
});
// Add another view, which is in right panel
var rightView = myApp.addView('.view-right', {
});


// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function (e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.hideIndicator();
});


/* ===== Preloader Page events ===== */
myApp.onPageInit('preloader', function (page) {
    $$('.demo-indicator').on('click', function () {
        myApp.showIndicator();
        setTimeout(function () {
            myApp.hideIndicator();
        }, 2000);
    });
    $$('.demo-preloader').on('click', function () {
        myApp.showPreloader();
        setTimeout(function () {
            myApp.hidePreloader();
        }, 2000);
    });
    $$('.demo-preloader-custom').on('click', function () {
        myApp.showPreloader('My text...');
        setTimeout(function () {
            myApp.hidePreloader();
        }, 2000);
    });
});







/* ===== Generate Content Dynamically ===== */
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-content" class="page">' +
        '    <!-- Top Navbar-->' +
        '    <div class="navbar">' +
        '      <div class="navbar-inner">' +
        '        <div class="left"><a href="#" class="back link icon-only"><i class="icon icon-back"></i></a></div>' +
        '        <div class="center">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '      </div>' +
        '    </div>' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '        <p>Go <a href="#" class="back">back</a> or generate <a href="#" class="ks-generate-page">one more page</a>.</p>' +
        '      </div>' +
        '    </div>' +
        '  </div>'
    );
    return;
}
$$(document).on('click', '.ks-generate-page', createContentPage);





myApp.onPageInit('daftar', function (page) {


  
$(document).ready(function() {

var idx = page.query.id;


       $.ajax({
            url: "http://tarsiustech.com/serv_bitung/public/daftar/"+idx+"",
            //force to handle it as text
            dataType: "json",
            //data : {id : idx},
            success:function(data){
                
                $.each(data, function(i,field){

               var id=field.id;
                var nama=field.nama;
				
	


         $("#dan").append("<ul><li class='accordion-item'><a href='lokasi.html?idl="+id+"' class='item-link item-content'><div class='item-inner'> <div class='item-title'>"+nama+"</div></div></a><div class='accordion-item-content'></div></li></ul>");
			$(".preloader").fadeOut("slow");
				
                });
              
            }


        });
		
$$('#homed').on('click', function () {
    myApp.alert("<i class='fa fa-envelope'></i> arunumar21@gmail.com");
});
	
  });



		
		
		



   
});

myApp.onPageInit('about', function (page) {

$$('#homea').on('click', function () {
    myApp.alert("<i class='fa fa-envelope'></i> arunumar21@gmail.com");
});
   
});

myApp.onPageInit('privasi', function (page) {

$$('#homep').on('click', function () {
    myApp.alert("<i class='fa fa-envelope'></i> arunumar21@gmail.com");
});
   
});




myApp.onPageInit('lokasi', function (page) {
	



$(document).ready(function() {
	
			 var idl = page.query.idl;

var data_table = "";
       $.ajax({
            url: "http://tarsiustech.com/serv_bitung/public/lokasi/"+idl+"",
            //force to handle it as text
            dataType: "json",
           // data : {id : idl},
            success:function(data){
               
                $.each(data, function(i,field){

               var idl=field.id;
                var nama=field.nama;
				var alamat = field.alamat;
				var latung = field.lat;
				var langtung = field.lang;
		$("#kepala").append(nama);
		
		
                });
              
            }
        });
		
	$(".buttons-row").append(" <a a href='maps.html?id_map="+idl+"'  class='button button-raised color-blue ' id='maps'><i class='fa fa-map-marker' style='font-size:20px; margin-top:7px;'></i></a>")
	$(".preloader").fadeOut("slow");;	
});

		$$('#mdabout').on('click', function () {
    myApp.alert("<b align='center'> Harun Umar</b> <p>FB : fb.com/gapteek</p>");
});



           

$(document).ready(function() {
	
	
var idl = page.query.idl;

$.ajax({
            url: "http://tarsiustech.com/serv_bitung/public/img/"+idl+"",
            //force to handle it as text
            dataType: "json",
            data : {id : idl},
            success:function(data){
             
                $.each(data, function(i,field){

               var idl=field.id;
               var  path=field.path;
				n = i;
				
			
		$("#img1").attr("src",""+path+"");

		 $("#nilai").append('<p id="naga'+i+'">'+path+'</p>');
		 		
			
				});
				
			
				
			}
				
				
		
  });
  
  
  
  
  
  

  
  });
  
  $("#nilai").hide();
	
   $$('.ks-pb-standalone').on('click', function () {

	   var nama = [];
	for (i=0; i<=n; i++)
	{
		
		
		nama[i] = document.getElementById("naga"+[i]+"").innerHTML;
	//	nama[i] = 'http://tarsiustech.com/bis/img/beach.jpg'
	}	
	var	photoBrowserPhotos =  nama;
	var photoBrowserLazy = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    lazyLoading: true,
    theme: 'dark'
});
                photoBrowserLazy.open();
				
				
    });
	 
	
		    $$("#hapusi").on('click', function () {
                $("#informasi").empty();
    });
  
  

  
  
  
 $('#maps').on('click', function () {

});


  
  
	 $$('.demo-picker-modal').on('click', function () {
		 
		 
		 var idl = page.query.idl;


       $.ajax({
            url: "http://tarsiustech.com/serv_bitung/public/lokasi/"+idl+"",
            //force to handle it as text
            dataType: "json",
           // data : {id : idl},
            success:function(data){
                teman = "<ol>";
                $.each(data, function(i,field){

               var idl=field.id;
                var lokasi=field.nama;
				ket = field.alamat;
				lang_lokasi  = field.lang;
				lat_lokasi  = field.lat;
				
	
            
            myApp.pickerModal('.picker-modal-demo');

		
                    

          $("#informasi").append("Alamat : "+ket+"");
$(".preloader").fadeOut("slow");
                });
              
            }
        });
		
		
    
    });

	
	$$('#homel').on('click', function () {
    myApp.alert("<i class='fa fa-envelope'></i> arunumar21@gmail.com");
});

});




myApp.onPageInit('maps', function (page) {
	var  kataku = 'coba test kata';
			 
		 var idi_map = page.query.id_map;
  
    var map;
    $(document).ready(function(){
		
		      $.ajax({
            url: "http://tarsiustech.com/serv_bitung/public/lokasi/"+idi_map+"",
   
            dataType: "json",
           // data : {id : idi_map},
            success:function(data){
              
                $.each(data, function(i,field){

                nama = field.nama;
				kataku = field.alamat;
				lang_lokasi  = field.lang;
				lat_lokasi  = field.lat;
				$("#peta").append("Maps "+nama);
	
      map = new GMaps({
        div: '#koord',
        lat: lat_lokasi,
        lng: lang_lokasi,
		zoom: 15
      });
      map.addMarker({
        lat: lat_lokasi,
        lng: lang_lokasi,
        title: 'Marker with InfoWindow',
        infoWindow: {
        content: ''+kataku+''
        }
      });
            
		
		
                });
              
            }

        });
		
		$(".preloader").fadeOut("slow");
		
		
   
	  
	  
    });
	
    
      
      
     
    $$('#homem').on('click', function () {
    myApp.alert("<i class='fa fa-envelope'></i> arunumar21@gmail.com");
});

});


	



$$(document).on('pageInit', '.page[data-page="index"]', function (e) {
    var url="http://tarsiustech.com/serv_bitung/public/info";
    $.getJSON(url,function(result){
      console.log(result);
          $.each(result, function(i, field){
            var id_info=field.id_info;
            var info=field.info;
        
   
    

    $("#info").append("<p>"+info+"</p>");
    $("#preloaderr").fadeOut("slow");


  
            
       });
      });

    var url="http://tarsiustech.com/serv_bitung/public/tampil-sub";
        $.getJSON(url,function(result){
            console.log(result);
            $.each(result, function(i, field){
                var id=field.id;
                var nama=field.nama;
           
    
         

            

       $("#tampil_sub").append("<option value="+id+">"+nama+"</option>");
   $("#loadlokasi").fadeOut("slow");


           });
        });


$$('#tampil_sub').on('change',function() {
 var titik_cari = $(this).val();





var map;


    //Parameter Google maps
    var options = {
      zoom: 10, //level zoom
    //posisi tengah peta
      center: new google.maps.LatLng(1.4278448, 125.12828030000003),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
   // Buat peta di 
    var map = new google.maps.Map(document.getElementById('peta'), options);
   // Tambahkan Marker 
  
    var infowindow = new google.maps.InfoWindow();


    var marker, i;
     /* kode untuk menampilkan banyak marker */

 





   
  var url="http://tarsiustech.com/serv_bitung/public/titik-lokasi/"+titik_cari+"";
    $.getJSON(url,function(result){
      console.log(result);

          $.each(result, function(i,field){
            var id=field.id;
            var lat=field.lat;
            var lang=field.lang;
            var marker;

              marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lang),
        map: map
      });
           


     /* menambahkan event clik untuk menampikan
       infowindows dengan isi sesuai denga
      marker yang di klik */
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() { 
  
    
        $.ajax({
          url : "http://tarsiustech.com/serv_bitung/public/titik-gambar/"+id+"",
         // data : "id=" +id ,
          success : function(data) {



              infowindow.setContent(data);
              infowindow.open(map, marker);
                $(".preloader").fadeOut("slow");
              
          }
        });   
      }
    })(marker, i));
   });
            });





});

}) 

 $(document).ready(function(){
   



 	var url="http://tarsiustech.com/serv_bitung/public/info";
		$.getJSON(url,function(result){
			console.log(result);
	        $.each(result, function(i, field){
	        	var id_info=field.id_info;
	        	var info=field.info;
	      
	           // $("#listview").append("<a class='item' href='form.html?id="+id+"&title="+title+"&duration="+duration+"&price="+price+"'><span class='item-note'>$"+price+"</span><h2>"+ title + " </h2><p>"+ duration +"</p></a>");
	        
	   $(window).load(function() {

    $("#info").append("<p>"+info+"</p>");
$("#preloaderr").fadeOut("slow");
});

	
            
		   });
    	});

    var url="http://tarsiustech.com/serv_bitung/public/tampil-sub";
        $.getJSON(url,function(result){
            console.log(result);
            $.each(result, function(i, field){
                var id=field.id;
                var nama=field.nama;
           
    
         

            

       $("#tampil_sub").append("<option value="+id+">"+nama+"</option>");
$("#loadlokasi").fadeOut("slow");


           });
        });


$$('#tampil_sub').on('change',function() {
 var titik_cari = $(this).val();





var map;


    //Parameter Google maps
    var options = {
      zoom: 10, //level zoom
    //posisi tengah peta
      center: new google.maps.LatLng(1.4278448, 125.12828030000003),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
   // Buat peta di 
    var map = new google.maps.Map(document.getElementById('peta'), options);
   // Tambahkan Marker 
  
    var infowindow = new google.maps.InfoWindow();


    var marker, i;
     /* kode untuk menampilkan banyak marker */

 





   
  var url="http://tarsiustech.com/serv_bitung/public/titik-lokasi/"+titik_cari+"";
    $.getJSON(url,function(result){
      console.log(result);

          $.each(result, function(i,field){
            var id=field.id;
            var lat=field.lat;
            var lang=field.lang;
            var marker;

              marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lang),
        map: map
      });
           



     /* menambahkan event clik untuk menampikan
       infowindows dengan isi sesuai denga
      marker yang di klik */
    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() { 
  
    
        $.ajax({
          url : "http://tarsiustech.com/serv_bitung/public/titik-gambar/"+id+"",
         // data : "id=" +id ,
          success : function(data) {



              infowindow.setContent(data);
              infowindow.open(map, marker);
                $(".preloader").fadeOut("slow");
              
          }
        });   
      }
    })(marker, i));
   });
            });





});
   
    });

$$('#home').on('click', function () {
    myApp.alert("<i class='fa fa-envelope'></i> arunumar21@gmail.com");
});
    
      
      
     
    



	
		
		











