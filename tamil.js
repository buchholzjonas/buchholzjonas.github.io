$(document).ready(function(){

    $('#input-tamil').prop('checked',true);
    $('#input-sandhi').prop('checked',true);
    $('#input-metrical').prop('checked',true);
    $('.suboption-also-metrical').hide();
    $('#input-variants').prop('checked',false);
    $('#input-translation').prop('checked',false);
    $('.suboption-notes').hide()
    $('#input-notes').prop('checked',true);

    $('.roman').hide();
    $('.nosandhi').hide();
    $('.split').hide();
    $('.u-elision').hide();
    $('.wb').hide();
    $('.app-anchor').hide();
    $('.lem').css("text-decoration", "none");
    $('.translation').hide();
    $('.diff-nosandhi').hide();
    $('.diff-wb').hide();

    /* tamil-roman */
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

    /* sandhi-nosandhi */
    $('#input-sandhi').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.sandhi').show();
            $('.nosandhi').hide();
            $('.diff-nosandhi').hide();
            if ( $('#input-metrical').is(':checked') ) {
                $('.joined').show();
                $('.split').hide();
                $('.u-elision').hide();
                $('.diff-wb').hide();
            } else {
                $('.u-elision').show();
                $('.diff-wb').show();
            }
        }
    });
    $('#input-nosandhi').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.sandhi').hide();
            $('.nosandhi').show();
            $('.joined').hide();
            $('.split').show();
            $('.u-elision').hide();
            $('.diff-nosandhi').show();
        }
    });

    /* metrical breaks - word breaks*/
    $('#input-metrical').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.suboption-also-metrical').hide()
            $('.mb').show();
            $('.mb').text(' ');
            $('.wb').hide();
            $('.diff-wb').hide();
            if ( $('#input-sandhi').is(':checked') ) {
                $('.joined').show();
                $('.split').hide();
                $('.u-elision').hide();
            } else {
                $('.diff-nosandhi').show();
            }
        }
    });
    $('#input-wordbreaks').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.suboption-also-metrical').show()
            $('.wb').show();
            $('.diff-wb').show();
            if ( $('#input-sandhi').is(':checked') ) {
                $('.joined').hide();
                $('.split').show();
                $('.u-elision').show();
            }
            if ( $('#input-also-metrical').is(':checked') ) {
                $('.mb').show();
                $('.mb').text('/');
            } else {
                $('.mb').hide();
            }
        }
    });
    $('#input-also-metrical').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.mb').show();
            $('.mb').text('/');
        } else {
            $('.mb').hide();
            $('.mb').text(' ');

        }
    });

    /*variants*/
    $('#input-variants').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.app-anchor').show();
            $('.lem').css("text-decoration", ""); /*reset to default defined in CSS*/
        } else {
            $('.app-anchor').hide();
            $('.lem').css("text-decoration", "none");
        }
    });

    /*translation*/
    $('#input-translation').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.translation').show();
            $('.suboption-notes').show()

        } else {
            $('.translation').hide();
            $('.suboption-notes').hide()
        }
    });
    $('#input-notes').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.note-anchor').show();
            $('.note-target').css("text-decoration", ""); /*reset to default defined in CSS*/
        } else {
            $('.note-anchor').hide();
            $('.note-target').css("text-decoration", "none");
        }
    });
 
});