// preloader
setTimeout(function () {
    document.getElementById('preloader').remove();
}, 1100);

$(document).ready(function() {
    select2Init();

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
        $('.main-appeal--main, .main-form').slideToggle(450).toggleClass('is-active');
    });

    $('.js-btn-slide-info').click(function(e){
        $('.main-appeal--main, .main-appeal--info').slideToggle(450).toggleClass('is-active');
        e.preventDefault();
    });

    $('.js-btn-slide-view').click(function(e){
        $('.main-form, .main-appeal--info').slideToggle(450).toggleClass('is-active');
        e.preventDefault();
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