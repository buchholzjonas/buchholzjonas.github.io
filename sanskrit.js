$(document).ready(function(){

    /* orig-reg*/
    $('.orig').hide();
    $('#input-reg').prop('checked',true);
    $('#input-reg').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.reg').show();
            $('.orig').hide();
        } else {
            $('.reg').hide();
            $('.orig').show();
        }
    });
    
    /* sic-corr*/
    $('.sic').hide();
    $('#input-corr').prop('checked',true);
    $('#input-corr').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.corr').show();
            $('.sic').hide();
        } else {
            $('.corr').hide();
            $('.sic').show();
        }
    });

    /* devanagari-roman */
    $('.roman').hide();
    $('#input-devanagari').prop('checked',true);
    $('#input-devanagari').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.devanagari').show();
            $('.roman').hide();
        }
    });
    $('#input-roman').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.roman').show();
            $('.devanagari').hide();
        }
    });


});