$(document).ready(function(){

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

    /* metrical breaks - word breaks - metrical and word breaks*/
    $('.split').hide();
    $('.wb').hide();
    $('#input-metrical').prop('checked',true);
    $('#input-metrical').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.joined').show();
            $('.split').hide();
            $('.mb').show();
            $('.mb').text(' ');
            $('.wb').hide();   
        }
    });
    $('#input-wordbreaks').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.split').show();
            $('.joined').hide();
            $('.wb').show();
            $('.mb').hide();
        }
    });
    $('#input-metrical-wordbreaks').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.split').show();
            $('.joined').hide();
            $('.wb').show();
            $('.mb').show();
            $('.mb').text('/');
        }
    });

    /*variants*/
    $('.rdg').hide();
    $('.lem').css('height', '1.7em');
    $('#input-variants').prop('checked',false);
    $('#input-variants').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.rdg').show();
            $('.lem').css('height', '2.7em');
        } else {
            $('.rdg').hide();
            $('.lem').css('height', '1.7em');
        }
    }); 
 
});