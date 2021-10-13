
$(document).ready(function () {


    var maxHeight = 0;
    var advantageMaxHeight = 0;
    var landingMaxHeight = 0;
    $(".card-content").each(function () {
        if ($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    $(".advantage-content").each(function () {
        if ($(this).height() > advantageMaxHeight) {
            advantageMaxHeight = $(this).height();
        }
    });
    $(".landing .left-content").each(function () {
        if ($(this).height() > landingMaxHeight) {
            landingMaxHeight = $(this).height();
        }
    });
    $('.landing .left-content').height(landingMaxHeight)
    $(".card-content").height(maxHeight);
    $(".advantage-content").height(advantageMaxHeight);


    $('.calendar').click(function () {
        $(this).prev().focus();
    })

    //===TESTIMONIAL CAROUSEL===//
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        margin: 20,
        dots: false,
        dotsEach: 1,
        nav: true,
        responsive: {
            0: {
                items: 1.4,
            },

            600: {
                items: 2,
            },
            1000: {
                items: 2.8,
            },
        },
    });
    /////

    $(".job-photos-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        margin: 8,
        dots: false,
        dotsEach: 1,
        nav: true,
        responsive: {
            0: {
                items: 1.4,
            },
            280: {
                items: 2.1,
            },
            340: {
                items: 2.4,
            },
            420: {
                items: 3.2,
            },
            600: {
                items: 3.5,
            },
            1000: {
                items: 3.5,
            },
        },
    });

    $(function () {
        $(".owl-carousel.header-carousel").owlCarousel({
            margin: 24,
            dots: false,
            dotsEach: 1,
            responsiveClass: true,
            // responsiveBaseElement: 'body',
            loop: true,
            responsive: {
                0: {
                    items: 1,
                },
                280: {
                    items: 2,
                },
                320: {
                    items: 2.2,
                },
                375: {
                    items: 2.6,
                },
                400: {
                    items: 2.9,
                },
                479: {
                    items: 3.5,
                },
                575: {
                    items: 4,
                },
                600: {
                    items: 4,
                },
                768: {
                    items: 5,
                },
                1000: {
                    items: 5,
                },
                1200: {
                    items: 6,
                },
            },
        });
    })



    $('.accordion-button').click(function () {
        $(this).children('.open-close').removeClass('fa-plus');
        $(this).children('.open-close').addClass('fa-minus');
        if ($(this).hasClass("collapsed")) {
            $(this).children('.open-close').addClass('fa-plus');
            $(this).children('.open-close').removeClass('fa-minus');
        } else {
            $('.open-close').addClass('fa-plus')
            $(this).children('.open-close').removeClass('fa-plus');
            $(this).children('.open-close').addClass('fa-minus');

        }
    })

    $('.nav-button').click(function () {
        $('.mobile-menu').toggleClass('transform-none');
    });

    $('.owl-next').html('<i class="fas fa-arrow-right"></i>')
    $('.owl-prev').html('<i class="fas fa-arrow-left"></i>')
    // $('.notification-popup .icon.isAuth').click(function () {
    //     $(this).toggleClass('color-main');
    //     $('.notification-area').toggleClass('d-block');
    // })

    //===TESTIMONIAL CAROUSEL===//
    $(".landing-carousel").owlCarousel({
        loop: false,
        autoplay: false,
        margin: 100,
        dots: true,
        dotsEach: 1,
        nav: true,
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 1,
            },

            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
    /////

    $(".timeline-carousel").owlCarousel({
        loop: false,
        autoplay: false,
        margin: 13,
        dots: true,
        dotsEach: 1,
        nav: false,
        animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: false,
        responsive: {
            0: {
                items: 1,
            },

            576: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });
    $(".steps-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        margin: 20,
        dots: false,
        dotsEach: 1,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            280: {
                items: 1.2,
            },
            1000: {
                items: 3,
            },
        },
    });
    $(".opinions-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        dots: false,
        dotsEach: 1,
        nav: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1,
            },
            280: {
                items: 1,
            },
            375: {
                items: 1.2,
            },
            600: {
                items: 1.3,
            },
            1000: {
                items: 3,
            },
        },
    });
    // $('select').niceSelect();
    // $('.user-login').click(function (e) {
    //     e.preventDefault();
    //     $('.user-modal').toggleClass('d-block');
    // })
    $(document).ready(function () {
        $(".hamburger").click(function () {
            $(this).toggleClass("is-active");
            $('body').toggleClass('overflow-hidden');
            // $('#overlay').removeClass('d-block');
            // $('#overlay').addClass('d-block');
        });
    });
    $('.dropdown-language button').click(function () {
        $(this).children('.fas').toggleClass('fa-angle-up');
    })

    // $('.notification-profile-link').removeClass();

    $('#filter-button').click(function () {
        $('.hidden-filter').toggleClass('d-block');
        $('#overlay').addClass('d-block');
        $('body').addClass('overflow-hidden');
    })
    $('.close-filter button').click(function () {
        $('.hidden-filter').removeClass('d-block');
        $('.hidden-filter').addClass('d-none');
        $('#overlay').removeClass('d-block');
        $('#overlay').addClass('d-none');
        $('body').removeClass('overflow-hidden');

    })


    function jqueryResize() {
        if ($(window).width() > 768) {
            $('#overlay').removeClass('d-block');
            $('body').removeClass('overflow-hidden');
            $('#overlay').addClass('d-none');
            $('.hidden-filter').addClass('d-block');
            $('.hidden-filter').removeClass('d-none');
        } else {
            $('.hidden-filter').removeClass('d-block');
            $('.hidden-filter').addClass('d-none');
        }
    }
    $(window).on('resize', jqueryResize);


    // $('select').niceSelect();

    // $(".toggle-password").click(function () {

    //     $(this).toggleClass("fa-eye fa-eye-slash");
    //     var input = $($(this).attr("toggle"));
    //     if (input.attr("type") == "password") {
    //         input.attr("type", "text");
    //     } else {
    //         input.attr("type", "password");
    //     }
    // });

    ///////////////////////////////////////////////////////
    /////////////Send message to phone/////////////////////

    //$(document).on("click", "#sendMessage", function () {
    //    let phone = $('#phoneInput').val();

    //    $.ajax({
    //        type: "get",
    //        url: "/Account/Register/",
    //        data: {
    //            "phone": phone
    //        },
    //        success: function (res) {
    //            $('#registerContent').empty();
    //            $('#registerContent').append(res);
    //        }
    //    })
    //})


    $(document).on("click", "#sendEmail", function () {

        let email = $('#reg-email-input').val();

        if (!$("#con-reg-input").prop('checked')) {
            $('#con-reg').append("Qeydiyyat üçün Şərtlərlə tanış ol");
        }
        else {

            $(this).remove()
            $('#con-reg').empty()
            $('.loader').css("display", "block")
            $.ajax({
                type: "get",
                url: "/Account/Register/",
                data: {
                    "email": email
                },
                success: function (res) {
                    $('.loader').css("display", "none")
                    $('#registerContent').empty();

                    $('#registerContent').append(res);

                }
            })
        }

    })



    /////////////////////////////////////////////////////
    ///////////Take otp message/////////////////////
    let otp = "";
    let sliceOtp = "";
    $(document).on("keyup", ".otp-number-input", function () {
        otp = ""
        $(".otp-number-input").each(function () {
            otp += $(this).val();

        })
        if (otp.length == 4) {
            $.ajax({
                type: "post",
                url: "/Account/Verify/",
                data: {
                    "otp": otp,
                    "backendOtp": $('#hiddenOtp').val()
                },
                success: function (res) {
                    $('#registerContent').empty();
                    $('#registerContent').append(res);
                }
            })
        }

    })


    $(document).on("click", "#sendAgain", function () {
        $("#timer").removeClass('d-none');
        $(this).addClass('d-none');
        jrc();
        $.ajax({
            type: "post",
            url: "/Account/SendEmailAsync/",
            data: {
                "email": $(this).next().val()
            },
            success: function (res) {
                $('#registerContent').empty();
                $('#registerContent').append(res);
            }
        })
    })
    function jrc() {
        var timeLeft = 30;
        var elem = document.getElementById('timer');

        var timerId = setInterval(countdown, 1000);

        function countdown() {
            if (timeLeft == 0) {
                clearTimeout(timerId);
                $("#timer").addClass('d-none');
                $("#sendAgain").removeClass('d-none');

            } else {
                elem.innerHTML = timeLeft + ' s';
                timeLeft--;
            }
        }
        countdown();
    }

    $(document).on('click', '#register', function () {
        let fullname = $('#fullname');
        let password = $('#regpassword');
        let repeatPassword = $('#repeatPassword');
        fullname.parent().next().children().empty();
        password.parent().next().children().empty();
        repeatPassword.parent().next().children().empty()
        if (fullname.val().trim() == "") {
            fullname.parent().next().children().append("Bow Ola Bilmez")
        }
        else if (password.val().trim() == "") {
            password.parent().next().children().append("Bow Ola Bilmez")
        }
        else if (fullname.val().trim().length < 8) {
            fullname.parent().next().children().append("Minimum 8 hərfdən ibarət olmalıdı")
        }
        else if (fullname.val().trim().length > 30) {
            fullname.parent().next().children().append("Maksimum 30 hərfdən ibarət olmalıdı")
        }
        else if (!/[a-z]/.test(password.val()) && !/[A-Z]/.test(password.val())) {
            password.parent().next().children().append("Minimum 1 boyuk 1 kicik hərfdən ibarət olmalıdı")
        }
        else if (password.val().length < 8) {
            password.parent().next().children().append("Minimum 8 karakterdən ibarət olmalıdı")

        }
        else if (password.val().length > 20) {
            password.parent().next().children().append("Maksimum 20 karakterdən ibarət olmalıdı")
        }
        else if (password.val() !== repeatPassword.val()) {
            repeatPassword.parent().next().children().append("Kod təkrarı düzgün deyil")
        }
        else {
            $.ajax({
                type: "get",
                url: "/Account/LastRegister/",
                data: {
                    "fullname": fullname.val(),
                    "password": password.val(),
                    "email": $(this).next().val()
                },
                success: function (res) {
                    if (res == "Ok") {
                        location.reload();
                    }
                    else {
                        console.log(res);
                    }
                }
            })
        }
    })

    $(document).on("click", "#login-btn", function () {
        var logPhone = $('#log-phone');
        var logPassword = $('#log-password');
        $('#log-error span').empty();

        $.ajax({
            type: "get",
            url: "/Account/Login/",
            data: {
                "password": logPassword.val(),
                "email": logPhone.val()
            },
            success: function (res) {
                if (res == "ok") {
                    location.reload();
                }
                else {
                    $('#log-error span').append(res);

                }
            }
        })
    })


    //$(document).on('keyup', '#task-search', function () {
    //    let search = $(this).val().trim();
    //    //$("#searchList li").slice(1).remove();
    //    if (search.length >= 0) {
    //        $.ajax({
    //            url: "/Task/Search?search=" + search,
    //            type: "Get",
    //            success: function (res) {
    //                $('.tasks-area').empty();
    //                $(".tasks-area").append(res);

    //                console.log(res);
    //            }
    //        })
    //    }
    //})


})
//$('.register-button').click(function (e) {
//    e.preventDefault();
//    $('#otp-number-input-1').focus();

//    $('.register-body').addClass('d-none');
//    $('.otp').addClass('d-block');
//})

$(document).on("click", '.close-login', (function () {
    $('.modal-backdrop').remove()
    //$('body').removeClass('modal-open')
    $('#loginModal').modal('hide');
    $('#registerModal').modal('show');





}));
$(document).on("click", '.close-register', (function () {
    $('.modal-backdrop').remove()

    //$('body').removeClass('modal-open')
    $('#registerModal').modal('hide');
    $('#loginModal').modal('show');



}));

$(".chat__send__btn").on("click", function (e) {
    e.preventDefault();

    $('.chat__messages').scrollTop($('.chat__messages')[0].scrollHeight + 200)
})

const accordion_btns = [...document.querySelectorAll('.faq-header')]
const accordion_contents = [...document.querySelectorAll(".faq-content")]
const accordion_icons = [...document.querySelectorAll('.faq-icon')]

accordion_btns?.forEach((btn) => {
    btn.addEventListener("click", function () {
        accordion_btns.forEach((button, index) => {
            if (button === btn && !button.classList.contains('collapsed')) {
                button.classList.add("collapsed")
                accordion_contents[index].classList.add('show')
                accordion_icons[index].animate({
                    transform: 'rotate(180deg)',
                }, 400)

                const timeout = setTimeout(() => {
                    accordion_icons[index].innerHTML = "-"
                    clearTimeout(timeout)
                }, 400)
            } else {
                button.classList.remove("collapsed")
                accordion_contents[index].classList.remove('show')
                accordion_icons[index].innerHTML = '+'
            }
        })
    })
})
