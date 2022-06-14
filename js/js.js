  $(document).ready(function() {
    $(document).on("scroll", function() {
      if ($(window).scrollTop() > 100) {
        console.log("hide");
        $('nav').addClass('white');
        document.getElementById('list').style.backgroundColor = "rgba(67, 82, 120, 0.8)";
      } else {
        console.log("show");
        $('nav').removeClass('white');
        document.getElementById('list').style.backgroundColor = "rgba(225, 225, 225, 0.2)"; 
      }
    });
  });

  $(document).ready(function(){
    const phrases = [

      '',
      'ATUALIZAÇÕES PERIÓDICAS E DE RELEASE',
      'CUSTOMIZAÇÃO',
      'IMPLANTAÇÃO',
      'TREINAMENTO'
    ];
    let index = 0;
    setInterval(function () {
      if(index == 4){
        index = 0;
      }
      $("#text").fadeOut(1000);
      setTimeout(function(){
        
      document.getElementById('text').innerHTML = phrases[index];
      },1000);
      $("#text").fadeIn(1000);
      index ++;

    }, 3000);
  });

  $("inicio").click(function() {
    $('html,body').animate({
        scrollTop: $(".first").offset().top},
        'slow');
});

  