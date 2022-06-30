$(document).ready(function() {
    select2Init();

    // header dropdown toggle
    $('.js-btn-slide').click(function(){
        $('.main-appeal').addClass('is-hide');
    });

    // select2 init
    function select2Init() {
        if ($('.js-select-init')[0]){
            $('.js-select-init').select2({
                minimumResultsForSearch: Infinity,
                width: '100%'
            });
        }
    }

    $('.js-btn-slide').click(function(){
        $('.main-appeal, .main-form').slideToggle(450);
    });

    // show textarea form
    $('.js-check-sanctions-yes').click(function(){
        $(this).parent('.input-area__radio-group').next('.textarea-el').removeClass('is-hide');       
    });

    $('.js-check-sanctions-no').click(function(){
        $(this).parent('.input-area__radio-group').next('.textarea-el').addClass('is-hide');       
    });

    $('.js-check').click(function(){
        $(this).parent('.input-area__radio-group').addClass('is-active');       
    });
});