/* JQuery functions for HTML conversions of HTL editions */

$(document).ready(function(){

    /* Function to show and hide elements depending on which checkboxes are checked */
    function show_hide() {   
        /* Sandhi-nosandhi */
        if ( $('#input-sandhi').is(':checked') && $('#input-metrical').is(':checked') ) {
            $('.sandhi').show();
            $('.nosandhi').hide();
            $('.joined').show();
            $('.split').hide();
        };
        if ( $('#input-sandhi').is(':checked') && $('#input-wordbreaks').is(':checked') ) {
            $('.sandhi').show();
            $('.nosandhi').hide();
            $('.joined').hide();
            $('.split').show();
        };
        if ( $('#input-nosandhi').is(':checked') ) {
            $('.joined').hide();
            $('.split').show();
            $('.sandhi').hide();
            $('.nosandhi').show();
        };
        /* Metrical breaks - word breaks */
        if ( $('#input-metrical').is(':checked') ) {
            $('.mb').html('&nbsp;');
            $('.wb').hide();
        };
        if ( $('#input-wordbreaks').is(':checked') ) {
            if ( $('#input-also-metrical').is(':checked') ) {
                $('.mb').html('/');
            } else {
                $('.mb').html('');
            }
            $('.wb').show();
        };
    };

    /* Default display */
    $(".collapsible-content").hide();
    $('#input-horizontal').prop('checked',true);
    $('#input-Deva').prop('checked',true);
    $('#input-Taml').prop('checked',true);
    $('#input-sandhi').prop('checked',true);
    $('#input-metrical').prop('checked',true);
    $('#suboption-also-metrical').hide();
    $('#input-variants').prop('checked',true);
    $('#input-notes').prop('checked',true);
    $('#input-quotes').prop('checked',true);
    $('#input-translation').prop('checked',true);
    $('.Latn').hide();
    $('.nosandhi').hide();
    $('.split').hide();
    $('.mb').html('&nbsp;')
    $('.wb').hide();
    /* If document also contains edition, hide stanza numbers in translation */
    if ($('.htl-edition').length > 0) {
        $('.translation .number').css('visibility', 'hidden');
      }

    $(".collapsible-label").click(function() {
        $(this).toggleClass("active");
        $(this).next(".collapsible-content").toggle();
    });

    /* vertical-horizontal */
    $('#input-vertical').on('change', function(){
        $('.main-content').toggleClass('grid');
    });
    $('#input-horizontal').on('change', function(){
        $('.main-content').toggleClass('grid');
    });

    /* toggle script */

    $('#input-Deva').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.Deva').show();
            $('.Latn').hide();
        }
    });
    $('#input-Taml').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.Taml').show();
            $('.Latn').hide();
        }
    });
    $('#input-Latn').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.Latn').show();
            $('.Deva').hide();
            $('.Taml').hide();
        }
    });

    /* sandhi-nosandhi */
    $('#input-sandhi').on('change', show_hide);
    $('#input-nosandhi').on('change', show_hide);

    /* metrical breaks - word breaks */
    $('#input-metrical').on('change', function(){
        $('#suboption-also-metrical').hide();
        show_hide();
    });
    $('#input-wordbreaks').on('change', function(){
        $('#suboption-also-metrical').show();
        show_hide();
    });
    $('#input-also-metrical').on('change', show_hide);

    /*variants*/
    $('#input-variants').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.apparatus').show();
            $('.app-anchor').css('text-decoration', 'underline dotted');
        } else {
            $('.apparatus').hide();
            $('.app-anchor').css('text-decoration', 'none');
        }
    });

    /* notes in translation*/
    $('#input-notes').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.translation .notes').show();
            $('.translation sup').show();
        } else {
            $('.translation .notes').hide();
            $('.translation sup').hide();
        }
    });

    /*translation*/
    $('#input-translation').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.translation').show();
        } else {
            $('.translation').hide();
        }
    });

    /*translation*/
    $('#input-quotes').on('change', function(){
        if ( $(this).is(':checked') ) {
            $('.quote').show();
        } else {
            $('.quote').hide();
        }
    });

    /* Highlight variant readings */
    $('.app-anchor, .app-entry').hover(function() {
        if (  $('#input-variants').is(':checked') ) {
            const id = $(this).attr('id');
            $(`.app-anchor#${id}`).toggleClass('highlight');
            $(`.app-entry#${id}`).toggleClass('highlight');
        }
    });

    /* Test: Highlight corresponding words/phrases in original text and translation */
    $('.w').hover(function() {
        const id = $(this).attr('id');
        const corresp_ids = $(`.phr[id*="${id}"]`).attr('id').split(' ')
        corresp_ids.forEach(id => {
            $(`.w[id="${id}"]`).toggleClass('highlight');
        });
        $(`.phr[id*="${id}"]`).toggleClass('highlight');
    });

    $('.phr').hover(function() {
        const id = $(this).attr('id');
        const ids = $(this).attr('id').split(' ');
        $(`.phr[id="${id}"]`).toggleClass('highlight');
        ids.forEach(id => {
            $(`.w[id="${id}"]`).toggleClass('highlight');
        });
    });

});