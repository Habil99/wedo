$(document).ready(function () {
    $('select').niceSelect();


    $('.input-daterange').datepicker({
        language: 'az',
        orientation: "top auto",
        format: "mm.dd.yyyy",
    });

    $('.provision label').click(function () {
        $('.provision label').removeClass('radio-active');
        $(this).addClass('radio-active');
    })
    $('.date label').click(function () {
        $('.date label').removeClass('radio-active');
        $(this).addClass('radio-active');
    })
    $('.price label').click(function () {
        $('.price label').removeClass('radio-active');
        $(this).addClass('radio-active');
    })
    $('.nice-radio label').click(function () {
        $('.nice-radio label').removeClass('radio-active');
        $(this).addClass('radio-active');
    })

    $(".date input[type='radio']").change(function () {
        if ($(this).val()=="true") {
            $('.date-row').css('display', 'flex');
        } else {
            $('.date-row').css('display', 'none');
        }
    });

    $(".price input[type='radio']").change(function () {
        if ($(this).val() == "priceRange") {
            $('.priceRange').css('display', 'block');
            $('.priceAccurate').css('display', 'none');
        }
        if ($(this).val() == "accuratePrice") {
            $('.priceAccurate').css('display', 'block');
            $('.priceRange').css('display', 'none');
        }
        if ($(this).val() == "priceAgreement") {
            $('.priceRange').css('display', 'none');
            $('.priceAccurate').css('display', 'none');
        }
    });

});