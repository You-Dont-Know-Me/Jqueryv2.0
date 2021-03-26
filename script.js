 // Ready document
 $(document).ready(function () {

    // Exercise 1
    $('.scroll-top').on('click', function () {
         $('html').animate({ scrollTop: 0 }, 'slow');
    });

    // Exercise 2
    $('.accept').on('click', function () {
         if ($('.submit-btn').is(':disabled')) {
              $('.submit-btn').removeAttr('disabled');
         } else {
              $('.submit-btn').attr('disabled', 'disabled');
         }
    });

    // Exercise 3
    $('table').addClass('table-striped');

    // Excercise 4
    $('.text-box').on('keyup', function () {
         $('.r-chars').text(15 - $(this).val().length);
    });

    // Exercise 5
    $('.add-option').on('click', function () {
         $('.dropdown').append('<option value="' + $('.text-box').val() + '">' + $('.text-box').val() + '</option>');
    });

    ////////// Exercise 6 //////////
    $('.remove-option').on('click', function () {
         $('.dropdown option[value="' + $('.dropdown').val() + '"]').remove();
    });

    ////////// Exercise 7 //////////
    $(".text-box").on('keyup', function () {
         $('.display').text($(this).val());
    }); 

    ////////// Exercise 8 //////////
    $(".change").on('click', function () {
         if ($(".change").val() == "Good Morning") {
              $(".change").val("Good Evening");
         } else {
              $(".change").val("Good Morning");
         }
    }); 

    ////////// Exercise 9 //////////
    $('.recolor').on('click', function () {
         $('table').removeClass('table-primary').addClass('table-dark');
    }); 

    ////////// Exercise 10 //////////
    $('.numbers').on('keyup', function () {
         this.value = this.value.replace(/[^0-9\.]/g, '');
    }); 

    ////////// Exercise 11 //////////
    $('.animate').on('click', function () {
         $(".jquery").animate({
              width: "70%",
              opacity: 0.4,
              marginLeft: "0.6in",
              fontSize: "3em",
              borderWidth: "10px"
         }, 1500);
    }) ;
   

    ////////// Exercise  //////////
    $('.right').on('click', function () {
         $('.block').animate({ left: '+=50px' }, 'slow');
    });

    $('.left').on('click', function () {
         $('.block').animate({ left: '-=50px' }, 'slow');
    });

    $('.up').on('click', function () {
         $('.block').animate({ top: '-=50px' }, 'slow');
    });

    $('.down').on('click', function () {
         $('.block').animate({ top: '+=50px' }, 'slow');
    }) ;
}) ;

////////// Disable right click menu //////////
$(document).bind("contextmenu", function (e) {
     return false;
 })
 
 ////////// Remove Inspect Element //////////s
 document.onkeydown = function (e) {
     if (event.keyCode == 123) {
          return false;
     }
     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
          return false;
     }
     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
          return false;
     }
     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
          return false;
     }
     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
          return false;
     }
 }
