$(document).ready(function () {
    $('.click-menu').click(function() {
        $('.left-content').addClass('hide-sideBar');
        $('.wrapper-hide').css('display', 'block');
    });

    $('.click-hide').click(function() {
        $('.left-content').removeClass('hide-sideBar');
        $('.wrapper-hide').css('display', 'none');
    });


    $('.btn-js').focus(function() {
        $(this)
            .parent()
            .find('.copy-address')
            .addClass('adress-active');
    });

    $('.btn-js').on('blur', function() {
        setTimeout(() => {
            $(this)
                .parent()
                .find('.copy-address')
                .removeClass('adress-active');
        }, 100);
    });


    $('.copy-clipboard-js').on('click', function() {
        let el = $(this)
            .closest('.form-setting')
            .find('.btn-js')[0];

        el.select();

        document.execCommand('copy');
    });


    $('.fade_open').on('click', function() {
        $(".wrapper-account").addClass("overflow");
        $('#fade').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
                $(".wrapper-account").removeClass("overflow");
            }
        });
    });
    $('.sign_open').on('click', function() {
        $(".wrapper-account").addClass("overflow");
        $('#sign').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
                $(".wrapper-account").removeClass("overflow");
            }
        });
    });
    $('.holder_open').on('click', function() {
        $(".wrapper-account").addClass("overflow");
        $('#holder').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
                $(".wrapper-account").removeClass("overflow");
            }
        });
    });
    $('.fade_deposit_open').on('click', function() {
        $(".wrapper-account").addClass("overflow");
        $('#fade_deposit').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
                $(".wrapper-account").removeClass("overflow");
            }
        });
    });
    $('.fade_jackpot_open').on('click', function() {
        $(".wrapper-account").addClass("overflow");
        $('#fade_jackpot').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
                $(".wrapper-account").removeClass("overflow");
            }
        });
    });

    $("#click_down_1").on("click", function(){
        $("#info_block_1").css('display', 'block');
    });

    $('#click_dropdown').on('click', function(){
        $('.dropdown-profile').toggleClass('active-profile');

    });



    $('.drop_down').click(function() {
        $(this)
            .closest('.display-change')
            .find('.dropdown-info-block')
            .slideToggle(300);
        $(this)
            .toggleClass('active-chewron')
    });

    $('.click-bitcoin').click(function() {
        $(this)
            .closest('.bitcoin-block')
            .find('.dropdown-bitcoin-block')
            .slideToggle(300);
        $(this)
            .toggleClass('active-profile-chewron')
    });
    $('.submit-rules').click(function () {
        $(this).css('display', 'none');
        $('.accept').css('display', 'block');
    });


    var time = 60;
    var initialOffset = '380';
    var i = 1

    /* Need initial run as interval hasn't yet occured... */
    $('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

    var interval = setInterval(function() {
        $('h5').text(i);
        if (i == time) {
            clearInterval(interval);
            return;
        }
        $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
        i++;
    }, 1000);
    
    
    $('.deposit').click(function () {
        $().toastmessage('showSuccessToast', "You have successfully added 32 BTC’s to your Wallet.");
    });
    $('#save_change').click(function () {
        $().toastmessage('showErrorToast', "Withdraw Error.");
    });
    $('#campaing_save').click(function () {
        $().toastmessage('showSuccessToast', "You have successfully added 32 BTC’s to your Wallet.");
    });
    $('#affiliate_save').click(function () {
        $().toastmessage('showErrorToast', "Withdraw Error.");
    });
    $('.hit').click(function () {
        $().toastmessage('showErrorToast', "Withdraw Error.");
    });
    $('.stand').click(function () {
        $().toastmessage('showSuccessToast', "You have successfully added 32 BTC’s to your Wallet.");
    });
    $("#scale").slider({
        value: 50,
        slide: function( event, ui ) {
            $('#normal').css('width', ui.value + '%');
        }
    });
    $( ".slider-progress" ).slider({
        animate: true,
        range: "min",
        value: 70,
        min: 1,
        max: 100,
        step: 1,

        change: function(event, ui) {
            $('#place').attr('value', ui.value);
        }

    });
    $(".show").click(function(){
        $("#bg").show();
        $("#"+($(this).attr("box"))).slideDown("fast");
    });
    $(".close").click(function(){
        $("#bg").hide();
        $(".hiddenBlock").slideUp("fast");
        return false; //чтобы не активировалась форма, в которой кнопка закрытия
    });
    var delay_popup = 3000;
    setTimeout("document.getElementById('modal-info-green').style.display='block'", delay_popup);
    $('.btn-close-modal-2').click(function () {
        $('.modal-info-green').fadeOut();
    });
    var delay_popup = 6000;
    setTimeout("document.getElementById('modal-info').style.display='block'", delay_popup);
    $('.btn-close-modal').click(function () {
        $('.modal-info').fadeOut();
    });

    $('.holder_crash_close').click(function(){
        $('#holder_crash').css('display', 'none');

    });

    //---------------------------tabs---------------------//

    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active-btn)', function() {
            $(this)
                .addClass('active-btn').siblings().removeClass('active-btn')
                .closest('div.tabs').find('div.tabs__content').removeClass('active-btn').eq($(this).index()).addClass('active-btn');
        });

    });
    setTimeout(function () {
        $(".update-tools").toggleClass("open-update");
    }, 3000);
    setTimeout(function () {
        $(".error-tools").toggleClass("open-update");
    }, 5000);
});
