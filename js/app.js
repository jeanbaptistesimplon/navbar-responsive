 $(function(){
   console.log('ready jquery');
   //je clic sur le bouton
   //on ajoute la classe Show à UL
   $('#bt_menu').click(function(){
     console.log('OK');
     $('#banane ul').toggleClass('show');
   });
});
