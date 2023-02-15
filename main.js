$(document).ready(function(){

    /* sandhi-nosandhi*/
    $('.nosandhi').hide();
    $('.word-break').hide();
    $('#input-sandhi').prop('checked',true);
    $('#input-sandhi').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.sandhi').show();
            $('.metrical-break').show();
            $('.nosandhi').hide();
            $('.word-break').hide();
        }
    });
    $('#input-nosandhi').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.sandhi').hide();
            $('.metrical-break').hide();
            $('.nosandhi').show();
            $('.nosandhi').css("fontSize", "100%");
            $('.nosandhi').css("margin-top", "0");
            $('.nosandhi').css("margin-bottom", "0");
            $('.word-break').show();
            $('.word-break').css("fontSize", "100%");
        }
    });
    $('#input-interlinear').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.sandhi').show();
            $('.metrical-break').show();
            $('.nosandhi').show();
            $('.nosandhi').css("fontSize", "75%");
            $('.nosandhi').css("margin-top", "0.1em");
            $('.nosandhi').css("margin-bottom", "0.3em");
            $('.word-break').show();
            $('.word-break').css("fontSize", "75%");
        }
    });

    /* tamil-roman */
    $('.roman').hide();
    $('#input-tamil').prop('checked',true);
    $('#input-tamil').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.tamil').show();
            $('.roman').hide();
        }
    });
    $('#input-roman').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.roman').show();
            $('.tamil').hide();
        }
    });


});