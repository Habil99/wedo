
$(document).ready(function () {

    $('select').niceSelect();

    //$('.categories #all').click(function () {
    //    if ($(this).prop('checked')) {
    //        $('.categories .child-category').prop('checked', true);
    //        $('.categories .child-category').prev().css('transform', 'rotateX(180deg)');
    //        $('.categories .child-category').next().next().addClass('d-block');


    //    } else {
    //        $('.categories #all').prop('checked', false);
    //        $('.categories .child-category').prop('checked', false);
    //        $('.categories .child-category').prev().css('transform', 'rotateX(360deg)');
    //        $('.categories .child-category').next().next().removeClass('d-block');
    //        $('.categories .child-category').next().next().addClass('d-none');



    //    }
    //})
    $('.child-cat').click(function () {
        console.log("salam")
        if (!$(this).prop('checked')) {
            $(this).parent().parent().prev().prev().prop('checked', false)
            console.log("false")

        } 
    })
    let loweCat = $(".categories .child-category").next().next();
    $('.categories .child-category').click(function () {
         loweCat = $(this).next().next();
        if ($(this).prop('checked')) {
            $(this).prev().css('transform', 'rotateX(180deg)');
            loweCat.addClass('d-block');
        } else {

            $(this).prev().css('transform', 'rotateX(360deg)');
            loweCat.removeClass('d-block');
            loweCat.addClass('d-none');

        }
    })
    if ($(".categories .child-category").prop('checked')) {
        $(".categories .child-category").prev().css('transform', 'rotateX(180deg)');
        loweCat.addClass('d-block');
    } else {

        $(this).prev().css('transform', 'rotateX(360deg)');
        loweCat.removeClass('d-block');
        loweCat.addClass('d-none');

    }
    
    let checkedCat = [];
    function filterAjax() {
        console.log()
        $('.tasks-area').empty();
        checkedCat = Array.from(document.querySelectorAll("input[type=checkbox][name=child-cat]:checked")).map(e => e.value)
        $.ajax({
            type: "get",
            url: "/Task/FilterWork/",
            data: {
                "search": $('#task-search').val(),
                "sort": $('.sort-order').val(),
                "place": $('#placeSearch').val(),
                "placeService": $('input[name="placeservice"]:checked').val(),
                "categoriesId": checkedCat.toString(),


            },
            success: function (res) {
                $('.tasks-area').append(res);
            }
        })
    }
    function filter() {
        //window.localStorage.clear();
        //window.localStorage.setItem('for-time', $('.for-time').val());
        //window.localStorage.setItem('for-price', $('.for-price').val());
        //window.localStorage.setItem('filter-category', $('.filter-category').val());
        //window.localStorage.setItem('place-search', $('#placeSearch').val());


        
        $(document).on('change', ".sort-order", function () {

            filterAjax()
        })
        $(document).on('change', ".placeservice", function () {

            filterAjax()
        })

        $(document).on('click', ".filter-category", function () {
            /*window.localStorage.setItem('filter-category', $(this).val());*/
            filterAjax();
        })
        $(document).on('keyup', "#placeSearch", function () {
            /*window.localStorage.setItem('place-search', $(this).val());*/
            filterAjax();
        })
        $(document).on('keyup', "#task-search", function () {
            filterAjax();
        })
        $(document).on('click', ".page-number", function () {
            /*window.localStorage.setItem('place-search', $(this).val());*/
            filterAjax();
        })

    }
    filter();
    //console.log($('.for-time').val());
    //console.log($('.for-price').val());
    //console.log($('.filter-category').val());




})