(function($, window, document, undefined) {

    function accordian() {
        $('.js-trigger').on('click', function() {
            var obj = $(this);
            if (obj.parent('.js-acc-item').hasClass('accordian__item--active')) {
                obj.parent('.js-acc-item').removeClass('accordian__item--active');
                if (!obj.parents('.accordian').hasClass('accordian--v2')) {
                    obj.parents('.accordian').find('.accordian__icon').removeClass('icon-decrement').addClass('icon-increment');
                }
                obj.siblings('.js-target').slideUp('300');
            } else {
                obj.parent('.js-acc-item').siblings('.js-acc-item').removeClass('accordian__item--active');
                if (!obj.parents('.accordian').hasClass('accordian--v2')) {
                    obj.parents('.accordian').find('.accordian__icon').removeClass('icon-decrement').addClass('icon-increment');
                }
                obj.parents('.accordian').find('.js-target').slideUp('300');
                obj.parent('.js-acc-item').addClass('accordian__item--active');
                if (!obj.parents('.accordian').hasClass('accordian--v2')) {
                    obj.find('.icon').removeClass('icon-increment').addClass('icon-decrement');
                }
                obj.siblings('.js-target').slideDown('300');
            }
        })
    }

    function viewAllAccordians() {
        $('.accordian__wrap--v1').each(function() {
            if ($(this).children('.accordian__item').length < 5) {
                $(this).siblings('.accordian__view-all').hide()
                $(this).siblings('.accordian__view-less').hide()
            }
        });

        $('.accordian__view-all').on('click', function(e) {
            e.preventDefault();
            $(this).siblings('.accordian__wrap').find('.accordian__item').fadeIn()
            $(this).addClass('hide').siblings('.accordian__view-less').removeClass('hide');

        })

        $('.accordian__view-less').on('click', function(e) {
            $(this).siblings('.accordian__wrap').find('.accordian__item').hide()
            $(this).siblings('.accordian__wrap').find('.accordian__item:lt(4)').fadeIn(300)
            $(this).addClass('hide').siblings('.accordian__view-all').removeClass('hide');
        })
    }


    var init = function() {
        accordian();
        viewAllAccordians()
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {
    function adBannerSlick() {

        $('.adBannerSlick').slick({
            autoplay: true,
            slidesToShow: 1,
            arrows: true,
            infinite: false,
            prevArrow: $('.slick-nav--ad-banner .slick-nav__btn--prev'),
            nextArrow: $('.slick-nav--ad-banner .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }]
        });
    }

    var init = function() {
        if ($('#adBannerSlick').length != 0) {
            adBannerSlick()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    // function likeVotes() {
    //     $('.likes').on('click', function() {
    //         var count = parseInt($(this).find('.likes__count').html().substr(0, 2));
    //         if ($(this).hasClass('likes--active')) {
    //             count -= 1;
    //             $(this).find('.likes__count').html(count + 'UpVotes')
    //             $(this).removeClass('likes--active')
    //         } else {
    //             count += 1;
    //             $(this).find('.likes__count').html(count + "UpVotes")
    //             $(this).addClass('likes--active')
    //         }
    //     });
    // }

    // function socialRedirects() {
    //     $('.share-menu__item-link--fb').on('click', function(e) {
    //         e.preventDefault();
    //         var url = window.location.href;
    //         window.location.href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
    //     })

    //     $('.share-menu__item-link--linkedin').on('click', function(e) {
    //         e.preventDefault();
    //         var url = window.location.href;
    //         window.location.href = "https://www.linkedin.com/shareArticle?mini=true&url=" + url;
    //     })

    //     $('.share-menu__item-link--twitter').on('click', function(e) {
    //         e.preventDefault();
    //         var url = window.location.href;
    //         window.location.href = "https://twitter.com/share?url=" + url;
    //     })

    //     $('.share-menu__item-link--whatsapp').on('click', function(e) {
    //         e.preventDefault();
    //         var url = window.location.href;
    //         window.location.href = "https://api.whatsapp.com/send?phone=91xxxxxxxxxx&text=Hi%20we%20need%20help%20regarding%20something";
    //     })

    // }

    var init = function() {
        //likeVotes()
        //socialRedirects()
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function articleSlick() {
        /* ---------- AllArticles  --------- */

        $('#allArticles').slick({
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            infinite: true,
            prevArrow: $('.article-list__slick-nav--all .slick-nav__btn--prev'),
            nextArrow: $('.article-list__slick-nav--all .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }]
        }).on('setPosition', function(event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });

        /* ---------- popularArticles  --------- */
        $('#popularArticles').slick({
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            infinite: true,
            prevArrow: $('.article-list__slick-nav--popular .slick-nav__btn--prev'),
            nextArrow: $('.article-list__slick-nav--popular .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }]
        }).on('setPosition', function(event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });
        
        /* ---------- likedArticles  --------- */
        $('#likedArticles').slick({
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            infinite: true,
            prevArrow: $('.article-list__slick-nav--liked-article .slick-nav__btn--prev'),
            nextArrow: $('.article-list__slick-nav--liked-article .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }]
        }).on('setPosition', function(event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });        

        /* ---------- recentlyViewedArticles  --------- */
        $('#recentlyViewedArticles').slick({
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            infinite: false,
            prevArrow: $('.article-list__slick-nav--recently-view .slick-nav__btn--prev'),
            nextArrow: $('.article-list__slick-nav--recently-view .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }]
        }).on('setPosition', function(event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });

        /* ---------- trendingArticles  --------- */
        $('#trendingArticles').slick({
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            infinite: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }]
        }).on('setPosition', function(event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });        

    }



    var init = function() {
        articleSlick()
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {


    function getSafeRanges(dangerous) {
        var a = dangerous.commonAncestorContainer;
        // Starts -- Work inward from the start, selecting the largest safe range
        var s = new Array(0),
            rs = new Array(0);
        if (dangerous.startContainer != a)
            for (var i = dangerous.startContainer; i != a; i = i.parentNode)
                s.push(i);
        if (0 < s.length)
            for (var i = 0; i < s.length; i++) {
                var xs = document.createRange();
                if (i) {
                    xs.setStartAfter(s[i - 1]);
                    xs.setEndAfter(s[i].lastChild);
                } else {
                    xs.setStart(s[i], dangerous.startOffset);
                    xs.setEndAfter(
                        (s[i].nodeType == Node.TEXT_NODE) ?
                        s[i] : s[i].lastChild
                    );
                }
                rs.push(xs);
            }

        // Ends -- basically the same code reversed
        var e = new Array(0),
            re = new Array(0);
        if (dangerous.endContainer != a)
            for (var i = dangerous.endContainer; i != a; i = i.parentNode)
                e.push(i);
        if (0 < e.length)
            for (var i = 0; i < e.length; i++) {
                var xe = document.createRange();
                if (i) {
                    xe.setStartBefore(e[i].firstChild);
                    xe.setEndBefore(e[i - 1]);
                } else {
                    xe.setStartBefore(
                        (e[i].nodeType == Node.TEXT_NODE) ?
                        e[i] : e[i].firstChild
                    );
                    xe.setEnd(e[i], dangerous.endOffset);
                }
                re.unshift(xe);
            }

        // Middle -- the uncaptured middle
        if ((0 < s.length) && (0 < e.length)) {
            var xm = document.createRange();
            xm.setStartAfter(s[s.length - 1]);
            xm.setEndBefore(e[e.length - 1]);
        } else {
            return [dangerous];
        }

        // Concat
        rs.push(xm);
        response = rs.concat(re);

        // Send to Console
        return response;
    }

    function highlightRange(range) {
        var newNode = document.createElement("div");
        newNode.classList.add('highlighted');
        range.surroundContents(newNode);
        var highlightTooltip = document.createElement("DIV");
        highlightTooltip.classList.add('highlighted__tooltip')
        highlightTooltip.innerHTML = '<span class="highlighted__icon icon icon-highlighter"></span>'
        newNode.appendChild(highlightTooltip)

        var clearHighlight = document.createElement("DIV");
        clearHighlight.classList.add("highlighted__tooltip")
        clearHighlight.classList.add("highlighted__tooltip--clear")
        clearHighlight.innerHTML = 'Clear highlight'
        newNode.appendChild(clearHighlight)
    }

    function highlightSelection() {
        var userSelection = window.getSelection().getRangeAt(0);
        if (!userSelection.collapsed) {
            var safeRanges = getSafeRanges(userSelection);
            if (safeRanges.length == 1) {
                for (var i = 0; i < safeRanges.length; i++) {
                    highlightRange(safeRanges[i]);
                    window.getSelection().empty();

                }
            }
        }

        $(document).on('click', '.highlighted__tooltip', function() {

            var tht = $(this);
            if (tht.hasClass('highlighted__tooltip--clear')) {
                tht.parent('.highlighted').removeClass('highlighted--active')
                if (tht.parent().is('.highlighted')) {
                    tht.unwrap();
                }
                var thtParent = tht.parents('.article-detail-info__p');
                tht.remove()

                var thtHtml = $.trim(thtParent.html())

                thtParent.html(thtHtml)

            } else {
                tht.parent('.highlighted').addClass('highlighted--active')
                tht.remove()

            }
        })

        $(document).on('click', '.highlighted--active', function() {
            $(this).find('.highlighted__tooltip--clear').fadeIn(200)
        })
    }



    var init = function() {
        if ($('.article-detail-info').length && $(window).width() > 1024) {
            $('.article-detail-info__p').on('mouseup', function() {
                highlightSelection()
            })
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function awardSlick() {
        $('.award-list').slick({
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            infinite: false,
            prevArrow: $('.slick-nav--award .slick-nav__btn--prev'),
            nextArrow: $('.slick-nav--award .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2.95,
                    dots: true,
                }
            }]
        });

    }

    function testimonialSlick() {
        var slides;

        var slideCount = $('.award-list--testimonials .award').length;
        if (slideCount == 3) {
            slides = 2.35;
        } else if (slideCount > 3) {
            slides = 3;
        }


        $('.award-list--testimonials').slick({
            centerMode: true,
            centerPadding: '30px',
            autoplay: true,
            slidesToShow: slides,
            arrows: true,
            infinite: true,
            prevArrow: $('.slick-nav--award-testi .slick-nav__btn--prev'),
            nextArrow: $('.slick-nav--award-testi .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2.98,
                    dots: true,
                    infinite: true,
                }
            }]
        });
    }

    var init = function() {

        if ($('.award-list').hasClass('award-list--testimonials')) {
            testimonialSlick();
        } else {
            awardSlick();
        }

    };
    $(init);
})(window.jQuery, this, this.document);
(function ($, window, document, undefined) {
    //Set the Margin top to Banner component
    function bannerHeight(windowSize) {
        var headerHeight;
        $header = $("header .col-xs-12");
        $bannerComponent = $(".banner-component");
        $banner = $(".banner");
        $headerWrapper = $(".header-wrapper");
        $mainNavWrapper = $(".main-nav-wrapper");
        $mainContent = $(".main-content");
        $companyInfo = $(".company-info");
        $bannerVariant6 = $(".banner__wrapper--v6");

        //only set the margin and padding for desktop
        if (windowSize > 1020) {
            //set the Header Height
            if ($headerWrapper.length && $mainNavWrapper.length) {
                headerHeight = 227;
            } else if ($companyInfo.length) {
                headerHeight = $('header').height();
            } else {
                headerHeight = 141;
            }

            if ($bannerComponent.length || $banner.length) {
                //set the header height to banner component
                $bannerComponent.css("margin-top", headerHeight);
            } else {
                //set top padding for main content
                if(!$("body").hasClass("abc-website")) {
                    $mainContent.css("padding-top", headerHeight);
                }
                setTimeout(function(){
                    if($('body').hasClass("post-login-website")) {
                        $mainContent.css("padding-top", $('header').height());
                    }
                },300);
            }
        } else {
            if ($bannerComponent.length || $banner.length) {
                //set the header height to banner component
                $bannerComponent.css("margin-top", 0);
            } else {
                //set top padding for main content
                $mainContent.css("padding-top", 0);
            }
        }

        //set padding to banner v6
        if (windowSize > 1020) {
            var $heroBanner = $(".hero-banner");
            var $heroBannerV6 = $heroBanner.hasClass('banner__wrapper--v6') ? 'Y' : 'N';

            $(window).load(function () {
                var $headerHeight = $("header").outerHeight(true);
                /* Fire your image resize code here */
                if ($heroBannerV6) {
                    $bannerVariant6.css('padding-top', $headerHeight + 'px')
                }
            })

        } else {
            $(".banner__wrapper--v6").css('padding-top', '0')
        }
    }

    //Get the data-d {Desktop}, data-m{Mobile} and set the data image as background image
    function setBannerBackground(windowSize) {
        var $heroBanner = $(".hero-banner");
        var $heroBannerImageDesktop = $heroBanner.data("d");
        var $heroBannerImageMobile = $heroBanner.data("m");
        var $heroBannerV6 = $heroBanner.hasClass('banner__wrapper--v6') ? 'Y' : 'N';

        if ($heroBannerV6 == 'N') {
            //set data-d if the window size is less than 768
            if (windowSize < 768) {
                $heroBanner.css(
                    "background-image",
                    "url(" + $heroBannerImageMobile + ")"
                );
            } else {
                $heroBanner.css(
                    "background-image",
                    "url(" + $heroBannerImageDesktop + ")"
                );
            }
        }


    }
    var init = function () {
        //Window Size
        $windowSize = $(window).width();

        //Set margin to Banner Component
        bannerHeight($windowSize);

        //Set image as background image to banner component
        setBannerBackground($windowSize);


    };
    $(window).resize(function () {
        //Window Size
        $windowSize = $(window).width();
        bannerHeight($windowSize);
        //Set image as background image to banner component
        setBannerBackground($windowSize);
    });
    $(init);
})(window.jQuery, this, this.document);
(function ($, window, document, undefined) {



    var init = function () {
        var toNext = $(".toNext");
        var toPrev = $(".toPrev");
        var $divider = $(".divider");
        var $win = $(window);
        var totalDivider;

        //Get Total Divider on page
        totalDivider = $divider.size() - 1;
        toNext.click(function (e) {
            e.preventDefault();
            var target;
            $(".divider").each(function (i, element) {

                target = $(element).offset().top;
                if (target - 10 > $(document).scrollTop()) {
                    //Hide next arrow if it reaches to last divider
                    if (totalDivider == i) {
                        toNext.addClass('backtotop__hide');
                    } else {
                        toNext.removeClass('backtotop__hide');
                    }
                    return false; // break
                }
            });
            $("html, body").animate({
                scrollTop: target
            }, 500);

        });
        toPrev.click(function (e) {
            e.preventDefault();

            var target;
            $(".divider").each(function (i, element) {
                current = $(element).offset().top;
                if (current + 10 > $(document).scrollTop()) {
                    if (i == 0) {
                        target = 0;
                    }
                    else {
                        target = $(".divider").eq(i - 1).offset().top
                    }
                    //Hide next arrow if it reaches to last divider

                    return false; // break
                }
            });
            $("html, body").animate({
                scrollTop: target
            }, 500);
        });

        //show previous button on first scroll
        $win.scroll(function (e) {
            toPrev.removeClass('backtotop__hide');
            toPrev.addClass('backtotop__show');
        });
        //Hide previous button if page is at top
        $win.scroll(function () {
            if ($win.scrollTop() == 0)
                toPrev.removeClass('backtotop__show');
            toPrev.addClass('backtotop__hide');
        });

        $win.scroll(function () {
            if ($(window).scrollTop() >= $(document).height() - $(window).height() - 200) {
                toNext.addClass('backtotop__hide');
            } else {
                toNext.removeClass('backtotop__hide');
            }
        });

    };
    $(init);
})(window.jQuery, this, this.document);

(function($, window, document, undefined) {

    function readMoreLess() {
        $('.benefits-ulip__button-link--read-more').on('click', function(e) {
            e.preventDefault();
            $(this).siblings('.benefits-ulip__list').find('.benefits-ulip__item').fadeIn()
            $(this).addClass('hide').siblings('.benefits-ulip__button-link--read-less').removeClass('hide');

        })

        $('.benefits-ulip__button-link--read-less').on('click', function(e) {
            $(this).siblings('.benefits-ulip__list').find('.benefits-ulip__item').hide()
            $(this).siblings('.benefits-ulip__list').find('.benefits-ulip__item:lt(3)').fadeIn(300)
            $(this).addClass('hide').siblings('.benefits-ulip__button-link--read-more').removeClass('hide');
        })
    }


    var init = function() {
        readMoreLess();
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function blogArticleHeight() {
        var articleTitleCard = $('.blog-block__right .blog-block__article-title-card').find("a");
        var articleTitleCardDivh = $('.blog-block__right .blog-block__article-title-card').height();
        $(articleTitleCard).each(function() {
            while ($(this).outerHeight() > articleTitleCardDivh) {
                $(this).text(function(index, text) {
                    return text.replace(/\W*\s(\S)*$/, '...');
                });
            }
        });

        var articleTitleLeft = $('.blog-block__left .blog-block__article-title').find("a");
        var articleTitleLeftDivh = $('.blog-block__left .blog-block__article-title').height();
        $(articleTitleLeft).each(function() {
            while ($(this).outerHeight() > articleTitleLeftDivh) {
                $(this).text(function(index, text) {
                    return text.replace(/\W*\s(\S)*$/, '...');
                });
            }
        });
    }

    var init = function() {
        blogArticleHeight();
    };
    $( window ).resize(function() {
        blogArticleHeight();
    });
  $(init);
 
  $(document).on('click', '.blog-block__article', function () { window.location.href = $(this).find("a").attr("href"); return false;});
  $(document).on('click', '.blog-block__article-card', function () { window.location.href = $(this).find("a").attr("href"); return false;});

})(window.jQuery, this, this.document);
window.mobileCheck = function () {
  let check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};


if (window.mobileCheck()) {
  $('.breadcrumb a').not(":first-child").remove()
  $($('.breadcrumb span').not(":first-child")[1]).html("......")
}

//$(".content-banner-share .share-content").css("display", "inline-block");
$(".content-banner-share .share-component .share-content").removeClass("share-content").addClass("share-content-inline").css("display", "inline-block");
$(".content-banner-share .share-wrapper .count-wrapper").empty();


$(".content-banner-share").click(function () {
  e.preventDefault();
  return false;
});

$(document).on('click', '.content-banner-share', function () {
  e.preventDefault();
   return false;
});

(function ($, window, document, undefined) {
  function showLeadForm() {
    var $contactMeButton = $("#submit-click");
    var $leadFormFiedld = $(".blog-form-wrapper #blogPost .fieldgroup");
    var $leadFormFiedCity = $(".blog-form-wrapper #blogPost .cityfield");
    var $leadFormFiedState = $(".blog-form-wrapper #blogPost .statefield");
    var $mandatoryMsg = $(".blog-form-wrapper #blogPost .mandatory-div");
    var $leadFormSubmitBtn = $(".blog-form-wrapper #blogPost .btn-wrapper");
    var $leadFormWrap = $(".lead-form-wrap");
    $contactMeButton.click(function () {
      $leadFormFiedld.css("display", "block");
      $leadFormSubmitBtn.css("display", "block");
      $mandatoryMsg.css("display", "block");
      $leadFormFiedCity.css("display", "inline-block");
      $leadFormFiedState.css("display", "inline-block");
      $leadFormWrap.removeClass("blog-post-collapsed blog-post-collapsed--mobile");
      $leadFormWrap.addClass("blog-post-expanded blog-post-expanded--mobile");

      //hide contact me button
      $contactMeButton.css("display", "none");
    });
  }

  var init = function () {
    //Lead form Terms Condition Click Starts
    //Lead form Terms Condition Click Starts
    $(".terms-anchor").click(function (e) {
      e.preventDefault();
      $(this).toggleClass("active");
      if (!$(this).hasClass("active")) {
      } else {
        $("body").addClass("popup");
        $(".terms-conditions-div").show();
      }
      var viewportWidth = $(window).width();

      if (viewportWidth < 768) {
        var ConHei = $(window).height() / 2 - 15;
        var ConWid = $(".terms-conditions-div").outerWidth() / 2;
        $(".terms-conditions-div").css("margin-top", -ConHei);
        $(".terms-conditions-div").css("margin-left", -ConWid);
      } else {
        var ConHei = $(".terms-conditions-div").outerHeight() / 2;
        var ConWid = $(".terms-conditions-div").outerWidth() / 2;
        $(".terms-conditions-div").css("margin-top", -ConHei);
        $(".terms-conditions-div").css("margin-left", -ConWid);
      }
    });
    //Lead form Terms Condition Click ENDS

    //Lead form Terms Condition Close button Click STARTS
    $(".popup-close, .terms-overlay, header").click(function (e) {
      $(".terms-conditions-div").hide();
      $("body").removeClass("popup");
      $(".terms-anchor").removeClass("active");
    });
    //Lead form Terms Condition Close button Click STARTS

    // checkbox All checked button
    $('.blog-checkbox .check-all input').on('click', function () {
      if ($(this).is(':checked')) {
        $('.blog-checkbox input:checkbox').each(function () {
          if ($(this).prop('checked') == false) {
            $(this).click();
          }
        });

      } else {
        $('.blog-checkbox input:checkbox').removeAttr('checked');
      }
    });

    $('.blog-checkbox input:checkbox:not(.checkboxAll)').each(function () {
      $(this).on('click', function () {
        $(".blog-checkbox input:checkbox:not(.checkboxAll)").removeClass("checked");
        $(this).addClass("checked");
        if ($(this).prop('checked') == false) {
          $('.blog-checkbox .check-all input:checkbox').removeAttr('checked');
        }
        var totalCount = $(".blog-checkbox input:checkbox:not(.checkboxAll)").length;
        var curCount = $('.blog-checkbox input[name=checkbox]:checked').length;

        if (totalCount == curCount) {
          $('.blog-checkbox .check-all input:checkbox').click();
        }

      });
    });

    //Show lead form on contact me click
    showLeadForm();
  };

  $(init);
})(window.jQuery, this, this.document);

(function($, window, document, undefined) {

    function historySlick() {
        $('.history-card-list').each(function(num, elem) {
            elem = $(elem)
            elem.slick({
                autoplay: true,
                slidesToShow: 3,
                arrows: true,
                infinite: false,
                prevArrow: elem.next('.slick-nav--history').find('.slick-nav__btn--prev'),
                nextArrow: elem.next('.slick-nav--history').find('.slick-nav__btn--next'),
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1.2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true,
                    }
                }]
            }).on('setPosition', function (event, slick) {
                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });
        });
    }

    function historyYearsSlick() {

        var slidesNo = $('.history-years-list .tabs__link').length - 0.25;
        if (slidesNo > 7) {
            slidesNo = 7
        }
        $('.history-years-list').slick({
            autoplay: false,
            slidesToShow: slidesNo,
            arrows: false,
            infinite: false,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 5.5,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }]

        });
    }


    var init = function() {
        historySlick()
        historyYearsSlick()

    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function wbLoginFlow() {
        var wbLoginForm = $("#buy-login-form");


        jQuery.validator.addMethod("customEmail", function (value, element) {
            // allow any non-whitespace characters as the host part
            return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
        }, "Please enter a valid email address.");

        // $.validator.addMethod("EmailOrMobileOrPolicy", function(value, element) {
        //     var flag
        //     if (value.length == 9 || value.length == 10) {
        //         if (/^[0-9]*$/.test(value)) {
        //             flag = true;
        //         } else if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
        //             flag = true
        //         } else {
        //             flag = false
        //         }
        //     } else {
        //         if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
        //             flag = true
        //         } else {
        //             flag = false
        //         }

        //     }
        //     return flag
        // }, "Sorry, I've enabled very strict email validation");

        var wbLoginValidator = $(wbLoginForm).validate({
            rules: {
                "userid": {
                    required: true,
                    EmailOrMobileOrPolicy: false
                },
                "tnc":{
                   required:true,
                   EmailOrMobileOrPolicy: false
                },
                "mobileno":{
                    required:true,
                    number:true,
                    minlength:10,
                    EmailOrMobileOrPolicy:false
                },
                "email":{
                    required:true,
                    customEmail:true,
                    EmailOrMobileOrPolicy:false
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            },
            highlight: function(element, errorList) {
                if (errorList == "error") {
                    $('.sent-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')
                }

            }
        });
        // $(wbLoginForm).find('.form-control').on('input', function() {
        //     var target = $(wbLoginForm)
        //     wbLoginValidator.element(target)
        // });

        $(".submit-agree").click(function(event) {
            event.preventDefault();
            if(wbLoginForm.valid()){
            $(this).parents('.buy-login').find('.buy-online__container').addClass('hide');
            $(this).parents('.buy-login').find('.buy-online__thanks-msg').removeClass('hide')
            }
        });

        // $('.sent-login-otp').click(function() {
        //     wbLoginForm.valid();
        //     return false
        // });

        // $('#wb-login-form .form-control').on('change', function() {
        //     if (wbLoginForm.valid()) {
        //         $('.sent-login-otp').attr('disabled', false).removeClass('wb-light-grey-bg')

        //     } else {
        //         $('.sent-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')

        //     }

        // })

        // var wbLoginOTPForm = $("#wb-otp-form");

        // var wbLoginOTPValidator = $(wbLoginOTPForm).validate({
        //     ignore: [],
        //     rules: {
        //         "login-otp-hidden": {
        //             required: true,
        //             minlength: 6,
        //             maxlength: 6
        //         }
        //     },
        //     errorElement: "span",
        //     errorPlacement: function(error, element) {
        //         error.appendTo($(element).closest(".form-group"));
        //     },
        //     highlight: function(element, errorList) {
        //         if (errorList == "error") {
        //             $('.verify-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')
        //         }
        //     }
        // });

        // $('.verify-login-otp').click(function() {
        //     wbLoginOTPForm.valid();
        //     return false
        // });

        // $('#wb-otp-form .form-control--otp').on('input', function() {

        //     if ($(this).val() != '') {
        //         $(this).next().focus()
        //     }
        //     var finalVal = "";
        //     $('#wb-otp-form .form-control--otp').each(function() {
        //         finalVal += $(this).val();
        //     })
        //     $('.login-otp-hidden').val(finalVal)

        //     if (wbLoginOTPForm.valid()) {
        //         $('.verify-login-otp').attr('disabled', false).removeClass('wb-light-grey-bg')

        //     } else {
        //         $('.verify-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')

        //     }
        // });

    }

    // function countDownTimer(otpTimer) {
    //     var timer2 = otpTimer;
    //     var interval = setInterval(function() {

    //     var timer = timer2.split(':');
    //     //by parsing integer, I avoid all extra string processing
    //     var minutes = parseInt(timer[0], 10);
    //     var seconds = parseInt(timer[1], 10);
    //     --seconds;
    //     minutes = (seconds < 0) ? --minutes : minutes;
    //     if (minutes < 0) clearInterval(interval);
    //     seconds = (seconds < 0) ? 59 : seconds;
    //     seconds = (seconds < 10) ? '0' + seconds : seconds;
    //     //minutes = (minutes < 10) ?  minutes : minutes;
    //     $('.otp-timer').html(minutes + ':' + seconds);
    //     timer2 = minutes + ':' + seconds;
    //     if(timer2 == "-1:59"){
    //         $('.otp-timer').empty();
    //         $('.otp-timer').append('0:00');
    //         return false;
    //     }
    //     }, 1000);
    // }

    var init = function() {
        // if ($('.login-birth-date').length) {
        //     datePicker("login-birth-date");

        // }
        if ($('.buy-login').length) {
            wbLoginFlow()
        }
        // if ($('.otp-timer').length != 0) {
        //     var otpTimer = $('.otp-timer').data("time");
        //     countDownTimer(otpTimer);
        // }
    };
    $(init);

})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function smoothScrollToSection() {
        $(document).on('click', '.bg-nav__nav-link', function(e) {
            e.preventDefault();
            var target = $(this).attr("href");
            console.log(target);


            $('html, body').stop().animate({
                scrollTop: $(target).offset().top
            }, 600, function() {
                location.hash = target;
            });

            return false;
        });
    }

    function scrollableNav() {
        $(window).scroll(function() {
            var scrollDistance = $(window).scrollTop();

            var topOff = $(".bg-nav").offset().top
            var bottomOff = $(".bg-nav").offset().top + $(".bg-nav").height() - ($('.bg-nav__nav').height() * 1.5)
            var leftOff = $(".bg-nav__nav").offset().left;
            $(window).on("scroll", function() {
                if (scrollDistance >= topOff) {
                    if (scrollDistance >= bottomOff) {
                        $(".bg-nav__nav").removeClass("bg-nav__nav--sticky").attr("style", "").css({ 'top': bottomOff }, { 'left': 0 });

                    } else {
                        $(".bg-nav__nav").addClass("bg-nav__nav--sticky").attr("style", "").css("left", leftOff);
                    }
                } else {
                    $(".bg-nav__nav").removeClass("bg-nav__nav--sticky").attr("style", "");
                }
            });

            // Assign active class to nav links while scolling
            $('.bg-nav__cont-item').each(function(i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.bg-nav__nav .bg-nav__nav-link.bg-nav__nav-link--active').removeClass('bg-nav__nav-link--active');
                    $('.bg-nav__nav .bg-nav__nav-link').eq(i).addClass('bg-nav__nav-link--active');
                }
            });
        }).scroll();
    }

    function scrollNavToDropdown() {
        if ($('.bg-nav__nav').length) {
            var selectedVal = "Select Topic";
            var filterDrop = '<div class="bg-nav__dropdown"><span class="bg-nav__selected bg-nav__selected--placeholder">' + selectedVal + '</span><span class="bg-nav__drop-icon icon icon-arrow"></span></div>';
            $('.bg-nav__nav').addClass('bg-nav__nav--dropdown').prepend(filterDrop)
            $('.bg-nav__nav-item').wrapAll('<div class="bg-nav__droplist"></div>')
            $('.bg-nav__droplist').mCustomScrollbar({
                theme: "dark-3"
            });
        }

        $(document).on('click', '.bg-nav__dropdown', function() {
            $(this).next('.bg-nav__droplist').slideToggle();
        });
        $(document).on('click', '.bg-nav__droplist .bg-nav__nav-link', function(e) {
            e.preventDefault();
            var selected = $(this).html();
            $('.bg-nav__dropdown').find('.bg-nav__selected').html(selected).removeClass('bg-nav__selected--placeholder');
            $('.bg-nav__droplist').slideUp();
            
        });

    }

    var init = function() {
        smoothScrollToSection()
        if ($('.bg-nav__nav').length) {
            if ($(window).width() > 1020) {
                scrollableNav()
            } else {
                scrollNavToDropdown()
            }
        }

    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {
    function onlyNumber(evt) {
        $('.only-number').on('keypress', function(evt) {
            var charCode = (evt.which) ? evt.which : evt.keyCode

             
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        })

    }
    var init = function() {
        var $planForm = $("#plan-form");

        $($planForm).validate({
            onfocusout: false,
            rules: {
                selectPlan: {
                    required: true,
                },
                amount: {
                    required: true,
                    lettersonly: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            },
        });


        // var $planSubmit = $("#buy-plan-cta");

        // //Validate form
        // $planSubmit.click(function() {
        //     $planForm.valid();
        // }); 

        onlyNumber()

    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {



    var init = function() {
        $(window).load(function() {

            if ($('.calc-speedometer').length) {
                customSpeedometer()
            }
            if ($('.calc-speedometer-half').length) {
                customHalfSpeedometer()
            }
            if ($('.calc-speedometer-full').length) {
                customFullSpeedometer()
            }
        })

    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    var city="mumbai",stream="science";
    var grade = "graduation",country="india",course="engineer";

    //child calc flow
    function childCalc() {
        var childCalcValues={};

        var childForm1 = $('#child-form1'),
            childForm2 = $('#child-form2'),
            childForm3 = $('#child-form3'),
            childForm4 = $('#child-form4'),
            childForm5 = $('#child-form5'),
            childForm6 = $('#child-form6'),
            childForm7 = $('#child-form7'),
            childForm8 = $('#child-form8'),
            childForm9 = $('#child-form9'),
            childForm10 = $('#child-form10'),
            childForm11 = $('#child-form11');        

        
        var progress = 100 / $('.calc-steps__slide').length;
        $('.progress-bar .progress-bar__filled').width(progress + "%");

        jQuery.validator.addMethod("fundAge", function(value, element) {   
            return parseInt(value) > parseInt($('#child-present-age').val())
        }, "Fund requirement age should be greater current age.");

        childForm1Validator = $(childForm1).validate({
            ignore: [],
            rules: {
                "childGoalType": {
                    required: true
                },
                "child-age": {
                    required: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        childForm2Validator = $(childForm2).validate({
            ignore: [],
            rules: {
                "educationDetails2": {
                    required: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        childForm3Validator = $(childForm3).validate({
            ignore: ":hidden",
            rules: {
                "educationDetails": {
                    required: true
                },
                "otherEducationField":{
                    required: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        childForm4Validator = $(childForm4).validate({
            ignore: ":hidden",
            rules: {
                "cityEducationCity": {
                    required: true
                },
                "otherCityValue": {
                    required: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        childForm5Validator = $(childForm5).validate({
            ignore: [],
            rules: {
                "child-education-cost": {
                    required: true,
                    maxCustom: true,
                    minCustom: true,
                },
                "child-fund-require-age":{
                    required: true,
                    fundAge: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });  

        childForm6Validator = $(childForm6).validate({
            ignore: ":hidden",
            rules: {
                "countryDetails": {
                    required: true
                },
                "otherCountryValue": {
                    required: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        childForm7Validator = $(childForm7).validate({
            ignore: [],
            rules: {
                "educationDetailsChildStream":{
                    required:true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        childForm8Validator = $(childForm8).validate({
            ignore: [],
            rules: {
                "child-total-saving": {
                    required: true,
                    maxCustom: true,
                },
                "child-saving-per-month":{
                    required: true,
                    maxCustom : true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });        

        childForm9Validator = $(childForm9).validate({
            ignore: [],
            rules: {
                "child-marrige-spend":{
                    required:true,
                    maxCustom:true,
                    minCustom: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        childForm10Validator = $(childForm10).validate({
            rules: {
                "marrige-age": {
                    required: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });                

        childForm11Validator = $(childForm11).validate({
            ignore: [],
            rules: {
                "child-calc-interest": {
                    required: true,
                    min:5,
                    max:10
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });
        

        $('input[name="child-fund-require-age"]').on('change',function(e){            
            childForm5Validator.element('#child-fund-require-input'); 
        });

        // $('.child-form-submit').click(function(e) {
        //     var formName = $(this).parents('form').attr('id');
        //     if ($('#' + formName).valid()) {

        //         //update value array
        //         $('#' + formName).find('input').each(function(){

        //             if($(this).attr('type') == 'radio'){
        //                 if($(this).is(':checked')){
        //                     childCalcValues[$(this).attr('name')] = $(this).val();
        //                 }
        //             }else{
        //                 if($(this).attr('name')=="child-marrige-spend" || $(this).attr('name')=="child-education-cost" || $(this).attr('name')=="child-total-saving" || $(this).attr('name')=="child-saving-per-month"){
        //                     childCalcValues[$(this).attr('name')] = setValWFCalc($(this).val());
        //                 }else{
        //                     childCalcValues[$(this).attr('name')] = $(this).val();
        //                 }
        //             }
                    
        //         });

        //         $(this).attr('data-result',$(this).attr('data-result') + '?' + JSON.stringify(childCalcValues));

        //         updateSlideStatus(this);
        //         var nextSlide = $(this).parents('.calc-steps__slide').attr('data-next-slide');
        //         updateCalcStep(nextSlide);

        //         if ($(window).width() < 768) {
        //             stepMobileFieldCheck(nextSlide);
        //         }

        //         //update progress bar
        //         var progress = (100 / $('.calc-steps__slide').length) * ($('.calc-steps__slide[data-slide-name="' + nextSlide + '"]').index() + 1);

        //         if ($('.progress-bar .progress-bar__filled').width() < $('.progress-bar').width()) {
        //             $('.progress-bar .progress-bar__filled').width(progress + "%");
        //         }

        //         if (customStepperInstance != undefined) {
        //             for (var i = 0; i < customStepperInstance.length; i++) {
        //                 customStepperInstance[i].update(true)
        //             }
        //         }
        //     }
        // });

    }

    function childSlidesFlow(){
        var dragRangeSlider = document.getElementById('dragSLiderChild');
        //* Added Dynamic Tab Name in the child caldulator - Lavish Kumar Jangir (NOV 18 2020)
        $('input[name="childGoalType"]').on('change', function (e) {
            if ($('#education').prop("checked")) {
                $('.calc-step-dynamicAnchor').text("Education Details")
                $('.calc-steps__slide[data-slide-name="child-goal-type-slide"]').attr('data-next-slide', 'child-education-first-slide')
                $('.calc-steps__slide[data-slide-name="child-financial-second-slide"]').attr('data-prev-slide', 'child-financial-first-slide')
                // $('input[name="educationDetails2"]').prop('checked',false)
            } else {
                $('.calc-step-dynamicAnchor').text("Marriage Details")
                $('.calc-steps__slide[data-slide-name="child-goal-type-slide"]').attr('data-next-slide', 'child-marriage-first-slide')
                $('.calc-steps__slide[data-slide-name="child-financial-second-slide"]').attr('data-prev-slide', 'child-marriage-second-slide')
            }
        });

        $('input[name="educationDetails2"]').on('change',function(e){
            if($('#higherGraduation').prop("checked")){
                $('.calc-steps__slide[data-slide-name="child-education-first-slide"]').attr('data-next-slide','child-education-higher1-slide')
                $('.calc-steps__slide[data-slide-name="child-financial-first-slide"]').attr('data-prev-slide','child-education-higher2-slide')                
                var valToSet =  defaultEstimatedEducCostHigherStudy[stream][city];
                dragRangeSlider.noUiSlider.set(valToSet)
            }else{
                $('.calc-steps__slide[data-slide-name="child-education-first-slide"]').attr('data-next-slide','child-education-grade1-slide')
                $('.calc-steps__slide[data-slide-name="child-financial-first-slide"]').attr('data-prev-slide','child-education-grade2-slide')                
            }


            if($('#graduation').prop("checked")){
                $('#india').prop('checked',true);
                $('#mba').siblings('.icon-radio__card').find('.calc-icon-card__text').html('BBA');    
                grade = "graduation"; 
                country = "india";    
                var valToSet =  defaultEstimatedEducCostGrade[course][country];
                dragRangeSlider.noUiSlider.set(valToSet)      
            }else if($('#postGraduation').prop("checked")){
                $('#usa').prop('checked',true)   
                $('#mba').siblings('.icon-radio__card').find('.calc-icon-card__text').html('MBA');    
                grade = "postGraduation"; 
                country = "usa";    
                var valToSet =  defaultEstimatedEducCostPostgrade[course][country];
                dragRangeSlider.noUiSlider.set(valToSet)          
            }
        });

        $('input[name="educationDetails"]').on('change',function(e){
            if($(this).prop("checked")){
                course=$(this).val();                
                if(grade=="graduation"){                    
                    var valToSet =  defaultEstimatedEducCostGrade[course][country];
                    dragRangeSlider.noUiSlider.set(valToSet)
                }else{
                    var valToSet =  defaultEstimatedEducCostPostgrade[course][country];
                    dragRangeSlider.noUiSlider.set(valToSet)                    
                }
            }
        });

        $('input[name="countryDetails"]').on('change',function(e){
            if($(this).prop("checked")){
                country=$(this).val();                
                if(grade=="graduation"){                    
                    var valToSet =  defaultEstimatedEducCostGrade[course][country];
                    dragRangeSlider.noUiSlider.set(valToSet)
                }else{
                    var valToSet =  defaultEstimatedEducCostPostgrade[course][country];
                    dragRangeSlider.noUiSlider.set(valToSet)                    
                }

            }
        });

        $('input[name="educationDetailsChildStream"]').on('change',function(e){
            if($(this).prop("checked")){
                stream=$(this).val();                                
                var valToSet =  defaultEstimatedEducCostHigherStudy[stream][city];
                dragRangeSlider.noUiSlider.set(valToSet)
            }
        });

        $('input[name="cityEducationCity"]').on('change',function(e){
            if($(this).prop("checked")){
                city=$(this).val();                                
                var valToSet =  defaultEstimatedEducCostHigherStudy[stream][city];
                dragRangeSlider.noUiSlider.set(valToSet)
            }
        });
    }

    var init = function() {


        if ($('#child-form1').length) {
            textLabel();
            calcGoBack();
            childCalc();
            childSlidesFlow()
        }
        if ($(window).width() < 768) {

            $(window).load(function() {
                setTimeout(function() {
                    $('.calc-steps__slide:first-child .calc-form__form-item').removeClass('calc-form__form-item--fade-out');
                }, 1000);
            });

        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {






    //hlv calc flow
    function healthCalc() {
        var healthCalcValues={};
        var healthForm1 = $('#health-form1'),
            healthForm2 = $('#health-form2'),
            healthForm3 = $('#health-form3');

        var progress = 100 / $('.calc-steps__slide').length;
        $('.progress-bar .progress-bar__filled').width(progress + "%");


        healthForm1Validator = $(healthForm1).validate({
          //inital ONKEYUP  now Works correctly.
          onkeyup: function (element) {
            // console.log("on keyup")
            $(element).valid();
          },
            ignore: [],
            rules: {
                "user-age": {
                    required: true,
                    min: 18,  //2943 Minimum age validation change in Health-  vartika yadav(20 nov 2020)
                    max: 60
                },
                "healthMaritalStatus": {
                    required: true,
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        healthForm2Validator = $(healthForm2).validate({
            ignore: [],
            rules: {
                "daignoseDetails": {
                    required: true,
                },
                "retirement-age": {
                    required: true,
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        healthForm3Validator = $(healthForm3).validate({
            ignore: [],
            rules: {
                "health-monhtly-income": {
                    required: true,
                    maxCustom:true
                },
                "health-life-cover": {
                    required: true,
                    maxCustom:true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        // $('.health-form-submit').click(function(e) {

        //     var formName = $(this).parents('form').attr('id');
        //     if ($('#' + formName).valid()) {

        //         //update value array
        //         $('#' + formName).find('input').each(function(){
        //             if(formName == "health-form1"){                        
        //                 if($(this).attr('type') == 'radio'){
        //                     if($(this).is(':checked')){
        //                         healthCalcValues[$(this).attr('name')] = $(this).val();
        //                     }
        //                 }else{
        //                     healthCalcValues[$(this).attr('name')] = $(this).val();
        //                 }
        //             }else if(formName == "health-form2"){
        //                 if($(this).attr('type') == 'radio'){
        //                     if($(this).is(':checked')){
        //                         healthCalcValues[$(this).attr('name')] = $(this).val();
        //                     }
        //                 }else{
        //                     healthCalcValues[$(this).attr('name')] = $(this).val();
        //                 }
        //             }else{
        //                 healthCalcValues[$(this).attr('name')] = setValWFCalc($(this).val());                        
        //             }
        //         });

        //         $(this).attr('data-result',$(this).attr('data-result') + '?' + JSON.stringify(healthCalcValues));

        //         updateSlideStatus(this);

        //         var nextSlide = $(this).parents('.calc-steps__slide').attr('data-next-slide');

        //         updateCalcStep(nextSlide);

        //         if ($(window).width() < 768) {
        //             stepMobileFieldCheck(nextSlide);
        //         }

        //         //update progress bar
        //         var progress = (100 / $('.calc-steps__slide').length) * ($('.calc-steps__slide[data-slide-name="' + nextSlide + '"]').index() + 1);

        //         if ($('.progress-bar .progress-bar__filled').width() < $('.progress-bar').width()) {
        //             $('.progress-bar .progress-bar__filled').width(progress + "%");
        //         }

        //         if (customStepperInstance != undefined) {
        //             for (var i = 0; i < customStepperInstance.length; i++) {
        //                 customStepperInstance[i].update(true)
        //             }
        //         }


        //         return false;
        //     }

        // });

    }


    var init = function() {


        if ($('#health-form1').length) {
            textLabel();
            healthCalc()
            calcGoBack()
        }
        if ($(window).width() < 768) {

            $(window).load(function() {
                setTimeout(function() {
                    $('.calc-steps__slide:first-child .calc-form__form-item').removeClass('calc-form__form-item--fade-out');
                }, 1000);
            });

        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {


    //hlv calc flow
    function hlvCalc() {
        var hlvCalcValues={};
        var hlvForm1 = $('#hlv-form1'),
            hlvForm2 = $('#hlv-form2'),
            hlvForm3 = $('#hlv-form3');
            

        var progress = 100 / $('.calc-steps__slide').length;
        $('.progress-bar .progress-bar__filled').width(progress + "%");

        jQuery.validator.addMethod("retirementAge", function(value, element) {
            // allow any non-whitespace characters as the host part
            return value < $('input[name="retirement-age"]').val()
        }, "Present age can not be greater then retirement age");

        hlvForm1Validator = $(hlvForm1).validate({
            ignore: [],
            rules: {
                "user-age": {
                    required: true,
                    min: 18,//2943 Minimum age validation change in Hlv-  vartika yadav(20 nov 2020)
                    max: 60,
                    retirementAge: true
                },
                "retirement-age": {
                    required: true,
                    min: 45,
                    max: 65
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        hlvForm2Validator = $(hlvForm2).validate({
            ignore: [],
            rules: {
                "hlv-monhtly-income": {
                    required: true,
                    maxCustom: true
                },
                "hlv-life-cover": {
                    required: true,
                    maxCustom: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        hlvForm3Validator = $(hlvForm3).validate({
            ignore: [],
            rules: {
                "insurance-for": {
                    required: true,
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        // $('.hlv-form-submit').click(function(e) {

        //     var formName = $(this).parents('form').attr('id');
        //     if ($('#' + formName).valid()) {

        //         //update value array
        //         $('#' + formName).find('input').each(function(){
        //             if(formName == "hlv-form1"){                        
        //                 hlvCalcValues[$(this).attr('name')] = $(this).val();
        //             }else if(formName == "hlv-form2"){
        //                 hlvCalcValues[$(this).attr('name')] = setValWFCalc($(this).val());
        //             }else{
        //                 var tempCheck = [];
        //                 $('input[type="checkbox"]').each(function(){
        //                     if($(this).is(':checked')){
        //                         tempCheck.push($(this).val())
        //                     }
        //                 });
        //                 hlvCalcValues[$(this).attr('name')] = tempCheck
        //             }
        //         });

        //         $(this).attr('data-result',$(this).attr('data-result') + '?' + JSON.stringify(hlvCalcValues));
        //         updateSlideStatus(this);

        //         var nextSlide = $(this).parents('.calc-steps__slide').attr('data-next-slide');

        //         updateCalcStep(nextSlide);

        //         if ($(window).width() < 768) {
        //             stepMobileFieldCheck(nextSlide);
        //         }                

        //         //update progress bar
        //         var progress = (100 / $('.calc-steps__slide').length) * ($('.calc-steps__slide[data-slide-name="' + nextSlide + '"]').index() + 1);

        //         if ($('.progress-bar .progress-bar__filled').width() < $('.progress-bar').width()) {
        //             $('.progress-bar .progress-bar__filled').width(progress + "%");
        //         }

        //         return false;
        //     }
        // });

        $('input[name="retirement-age"]').on('change',function(e){            
            hlvForm1Validator.element('#present-age')
        });
    }


    var init = function() {


        if ($('#hlv-form1').length) {
            textLabel();
            hlvCalc()
            calcGoBack()
        }
        if ($(window).width() < 768) {

            $(window).load(function() {
                setTimeout(function() {
                    $('.calc-steps__slide:first-child .calc-form__form-item').removeClass('calc-form__form-item--fade-out');
                }, 1000);
            });

        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {


    //hlv calc flow
    function incomeTaxCalc() {

        var progress = 100 / $('.calc-steps__slide').length;
        $('.progress-bar .progress-bar__filled').width(progress + "%");


        $('.income-tax-form-submit').click(function(e) {


            updateSlideStatus(this);

            var nextSlide = $(this).parents('.calc-steps__slide').attr('data-next-slide');

            updateCalcStep(nextSlide);

            if ($(window).width() < 768) {
                stepMobileFieldCheck(nextSlide);
            }

            //update progress bar
            var progress = (100 / $('.calc-steps__slide').length) * ($('.calc-steps__slide[data-slide-name="' + nextSlide + '"]').index() + 1);

            if ($('.progress-bar .progress-bar__filled').width() < $('.progress-bar').width()) {
                $('.progress-bar .progress-bar__filled').width(progress + "%");
            }

        });
    }


    var init = function() {

        if ($('#income-tax-form1').length) {
            incomeTaxCalc()
            calcGoBack()
            textLabel();
        }
        if ($(window).width() < 768) {

            $(window).load(function() {
                setTimeout(function() {
                    $('.calc-steps__slide:first-child .calc-form__form-item').removeClass('calc-form__form-item--fade-out');
                }, 1000);
            });

        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {


    //retirement calc flow
    function retirmentCalc() {
        var retirementCalcValues={};
        var retirementForm1 = $('#retirement-form1'),
            retirementForm2 = $('#retirement-form2'),
            retirementForm3 = $('#retirement-form3');

        var progress = 100 / $('.calc-steps__slide').length;
        $('.progress-bar .progress-bar__filled').width(progress + "%");

        jQuery.validator.addMethod("retirementAge", function(value, element) {
            // allow any non-whitespace characters as the host part
            return value < $('input[name="retirement-age"]').val()
        }, "Present age can not be greater then retirement age");
        
        jQuery.validator.addMethod("expensesLimit", function(value, element) {
            return parseInt(setValWFCalc($('input[name="retirement-monthly-income"]').val())) > parseInt(setValWFCalc($('input[name="retirement-monthly-expenses"]').val()))
        }, "Income should be greater than expenses");

        retirementForm1Validator = $(retirementForm1).validate({
            ignore: [],
            rules: {
                "present-age": {
                    required: true,
                    min: 18, //2943 Minimum age validation change in retirement-  vartika yadav(20 nov 2020)
                    max: 60,
                    retirementAge: true
                },
                "retirement-age": {
                    required: true,
                    min: 45,
                    max: 65
                },
                "gender-switch":{
                    required: true,
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        retirementForm2Validator = $(retirementForm2).validate({
            ignore: [],
            rules: {
                "retirement-monthly-income": {
                    required: true,                    
                    expensesLimit: true,
                    maxCustom:true,
                    
                },
                "retirement-monthly-expenses": {
                    required: true,
                    maxCustom:true
                    // expensesLimit: true

                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        retirementForm3Validator = $(retirementForm3).validate({
            ignore: [],
            rules: {
                "retirement-total-savings": {
                    required: true,    
                    maxCustom: true                
                },
                "retirement-intrest-rate": {
                    required: true,
                    min:5,
                    max:10
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });
        

        // $('.retirement-form-submit').click(function(e) {

        //     var formName = $(this).parents('form').attr('id');
        //     if ($('#' + formName).valid()) {

        //         //update value array
        //         $('#' + formName).find('input').each(function(){
        //             if($(this).attr('type') == 'radio'){
        //                 if($(this).is(':checked')){
        //                     retirementCalcValues[$(this).attr('name')] = $(this).val();
        //                 }
        //             }else{
        //                 if($(this).attr('name')=="retirement-monthly-income" || $(this).attr('name')=="retirement-monthly-expenses" || $(this).attr('name')=="retirement-total-savings"){
        //                     retirementCalcValues[$(this).attr('name')] = setValWFCalc($(this).val());
        //                 }else{
        //                     retirementCalcValues[$(this).attr('name')] = $(this).val();
        //                 }
        //             }
        //         });

        //         $(this).attr('data-result',$(this).attr('data-result') + '?' + JSON.stringify(retirementCalcValues));

        //         updateSlideStatus(this);

        //         var nextSlide = $(this).parents('.calc-steps__slide').attr('data-next-slide');

        //         updateCalcStep(nextSlide);

        //         if ($(window).width() < 768) {
        //             stepMobileFieldCheck(nextSlide);
        //         }

        //         //update progress bar
        //         var progress = (100 / $('.calc-steps__slide').length) * ($('.calc-steps__slide[data-slide-name="' + nextSlide + '"]').index() + 1);

        //         if ($('.progress-bar .progress-bar__filled').width() < $('.progress-bar').width()) {
        //             $('.progress-bar .progress-bar__filled').width(progress + "%");
        //         }
        //     }

        // });

        $('input[name="retirement-age"]').on('change',function(e){            
            retirementForm1Validator.element('#present-age')
        });

        // $('input[name="retirement-monthly-expenses"]').on('change',function(e){     
        //     console.log('expenses change');       
        //     retirementForm2Validator.element('#rulerRetirementRangeValue')
        // });
    }


    var init = function() {


        if ($('#retirement-form1').length) {
            textLabel();
            retirmentCalc()
            calcGoBack()
        }
        if ($(window).width() < 768) {

            $(window).load(function() {
                setTimeout(function() {
                    $('.calc-steps__slide:first-child .calc-form__form-item').removeClass('calc-form__form-item--fade-out');
                }, 1000);
            });

        }

    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {


    //hlv calc flow
    function wealthCalc() {
        var wealthCalcValues={};

        var wealthForm1 = $('#wealth-form1'),
            wealthForm2 = $('#wealth-form2'),
            wealthForm3 = $('#wealth-form3'),
            wealthForm4 = $('#wealth-form4'),
            wealthForm5 = $('#wealth-form5'),
            wealthForm6 = $('#wealth-form6'),
            wealthForm7 = $('#wealth-form7'),
            wealthForm8 = $('#wealth-form8'),
            wealthForm9 = $('#wealth-form9'),
            wealthForm10 = $('#wealth-form10'),
            wealthForm11 = $('#wealth-form11');       

            
        var progress = 100 / $('.calc-steps__slide').length;
        $('.progress-bar .progress-bar__filled').width(progress + "%");

        wealthForm1Validator = $(wealthForm1).validate({
            ignore: ":hidden",
            rules: {
                "wealthDreamDetails": {
                    required: true
                },
                "wealthOtherDreamValue": {
                    required: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        wealthForm2Validator = $(wealthForm2).validate({
            ignore: ":hidden",
            rules: {
                "wealthLivingCityDetails": {
                    required: true
                },
                "wealthLivingOtherCityValue": {
                    required: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        wealthForm3Validator = $(wealthForm3).validate({
            ignore: [],
            rules: {
                "wealth-house-worth": {
                    required: true,
                    maxCustom: true,
                    minCustom: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        wealthForm4Validator = $(wealthForm4).validate({
            ignore: [],
            rules: {
                "wealth-build-worth": {
                    required: true,
                    maxCustom: true,
                    minCustom: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        wealthForm5Validator = $(wealthForm5).validate({
            ignore: [],
            rules: {
                "wealth-buying-year-require-age": {
                    required: true,
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        wealthForm6Validator = $(wealthForm6).validate({
            ignore: [],
            rules: {
                "wealthFamily": {
                    required: true,
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        wealthForm7Validator = $(wealthForm7).validate({
            ignore: [],
            rules: {
                "wealth-total-savings": {
                    required: true,
                    maxCustom:true
                },
                "wealth-monthly-savings": {
                    required: true,
                    maxCustom:true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        wealthForm8Validator = $(wealthForm8).validate({
            ignore: [],
            rules: {
                "wealth-interest-rate": {
                    required: true,
                    min:5,
                    max:10
                },
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        wealthForm9Validator = $(wealthForm9).validate({
            ignore: [],
            rules: {
                "wealth-car-worth": {
                    required: true,
                    maxCustom: true,
                    minCustom: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        wealthForm10Validator = $(wealthForm10).validate({
            ignore: [],
            rules: {
                "wealth-entrepreneur-worth": {
                    required: true,
                    maxCustom: true,
                    minCustom: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        wealthForm11Validator = $(wealthForm11).validate({
            ignore: [],
            rules: {
                "wealth-otherDreams-worth": {
                    required: true,
                    maxCustom: true,
                    minCustom: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".calc-form__form-item"));
            }
        });

        // $('.wealth-form-submit').click(function(e) {
        //     var formName = $(this).parents('form').attr('id');
        //     if ($('#' + formName).valid()) {

        //         //update value array
        //         $('#' + formName).find('input').each(function(){

        //             if($(this).attr('type') == 'radio'){
        //                 if($(this).is(':checked')){
        //                     wealthCalcValues[$(this).attr('name')] = $(this).val();
        //                 }
        //             }else if($(this).attr('type') == 'checkbox'){
        //                 var tempCheck = [];
        //                 $('input[type="checkbox"]').each(function(){
        //                     if($(this).is(':checked')){
        //                         tempCheck.push($(this).val())
        //                     }
        //                 });
        //                 wealthCalcValues[$(this).attr('name')] = tempCheck
        //             }else{
        //                 if($(this).attr('name')=="wealth-build-worth" || $(this).attr('name')=="wealth-house-worth" || $(this).attr('name')=="wealth-car-worth" || $(this).attr('name')=="wealth-entrepreneur-worth" || $(this).attr('name')=="wealth-otherDreams-worth" || $(this).attr('name')=="wealth-total-savings" || $(this).attr('name')=="wealth-monthly-savings"){
        //                     wealthCalcValues[$(this).attr('name')] = setValWFCalc($(this).val());
        //                 }else{
        //                     wealthCalcValues[$(this).attr('name')] = $(this).val();
        //                 }
        //             }
                    
        //         });

        //         $(this).attr('data-result',$(this).attr('data-result') + '?' + JSON.stringify(wealthCalcValues));

        //         updateSlideStatus(this);

        //         var nextSlide = $(this).parents('.calc-steps__slide').attr('data-next-slide');

        //         updateCalcStep(nextSlide);

        //         if ($(window).width() < 768) {
        //             stepMobileFieldCheck(nextSlide);
        //         }

        //         //update progress bar
        //         var progress = (100 / $('.calc-steps__slide').length) * ($('.calc-steps__slide[data-slide-name="' + nextSlide + '"]').index() + 1);

        //         if ($('.progress-bar .progress-bar__filled').width() < $('.progress-bar').width()) {
        //             $('.progress-bar .progress-bar__filled').width(progress + "%");
        //         }
        //         if (customStepperInstance != undefined) {
        //             for (var i = 0; i < customStepperInstance.length; i++) {
        //                 customStepperInstance[i].update(true)
        //             }
        //         }
        //     }
        // });
    }

    function wealthSlidesFlow(){
        $('input[name="wealthDreamDetails"]').on('change',function(e){
            var slineNo = 10;
            if($('#buyAHouse').prop("checked")){
                $('.calc-steps__slide[data-slide-name="wealth-goal-type-slide-2"]').attr('data-next-slide','wealth-goal-house-slide')
                $('.calc-steps__slide[data-slide-name="wealth-goal-details-slide-1"]').attr('data-prev-slide','wealth-goal-house-slide')
                $('.calc-steps__slide[data-slide-name="wealth-goal-type-slide-1"]').attr('data-next-slide','wealth-goal-type-slide-2')
            }else if($('#buyACar').prop("checked")){
                // $('.calc-steps__slide[data-slide-name="wealth-goal-type-slide-2"]').attr('data-next-slide','wealth-goal-car-slide')
                $('.calc-steps__slide[data-slide-name="wealth-goal-details-slide-1"]').attr('data-prev-slide','wealth-goal-car-slide')
                $('.calc-steps__slide[data-slide-name="wealth-goal-type-slide-1"]').attr('data-next-slide','wealth-goal-car-slide')
            }else if($('#haveMoreWealth').prop("checked")){
                $('.calc-steps__slide[data-slide-name="wealth-goal-type-slide-1"]').attr('data-next-slide','wealth-goal-money-slide')
                $('.calc-steps__slide[data-slide-name="wealth-goal-details-slide-1"]').attr('data-prev-slide','wealth-goal-money-slide')
            }else if($('#becomeAnEnterpreneur').prop("checked")){
                $('.calc-steps__slide[data-slide-name="wealth-goal-type-slide-2"]').attr('data-next-slide','wealth-goal-entrepreneur-slide')
                $('.calc-steps__slide[data-slide-name="wealth-goal-details-slide-1"]').attr('data-prev-slide','wealth-goal-entrepreneur-slide')
                $('.calc-steps__slide[data-slide-name="wealth-goal-type-slide-1"]').attr('data-next-slide','wealth-goal-type-slide-2')
            }else{
                // $('.calc-steps__slide[data-slide-name="wealth-goal-type-slide-2"]').attr('data-next-slide','wealth-goal-dream-slide')
                $('.calc-steps__slide[data-slide-name="wealth-goal-details-slide-1"]').attr('data-prev-slide','wealth-goal-dream-slide')
                $('.calc-steps__slide[data-slide-name="wealth-goal-type-slide-1"]').attr('data-next-slide','wealth-goal-dream-slide')
            }
            //! ALL SLIDES HAVE SAME RANGE SLIDER INITIAL VALUE - Lavish Kumar Jangir (NOV 18 2020)
            // if($('#buyACar').prop("checked")){
            //     slineNo = 4;
            // }else{
            //     slineNo = 9
            // }
            // for (var i = 0; i < customStepperInstance.length; i++) {
            //     customStepperInstance[i].slideTo(slineNo)
            // }
        });
    }

    var init = function() {

        if ($('#wealth-form1').length) {
            textLabel();
            wealthCalc()
            calcGoBack();
            customValueForRange();
            wealthSlidesFlow()
        }
        if ($(window).width() < 768) {

            $(window).load(function() {
                setTimeout(function() {
                    $('.calc-steps__slide:first-child .calc-form__form-item').removeClass('calc-form__form-item--fade-out');
                }, 1000);
            });

        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {


    var init = function() {

        if ($(".calc-stepper").length != 0) {
            customStepperInstance = customSteper();
        }

    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function bannerReadMore() {
        $('.category-product-banner .read-less').on('click', function(e) {
            e.preventDefault();
            $('.read-wrap').slideUp();
            $(this).addClass('hide').siblings('.read-more').removeClass('hide');
            $('html, body').animate({
                scrollTop: $(".category-product-banner").offset().top
            }, 1000);

        })
        $('.category-product-banner .read-more').on('click', function(e) {
            e.preventDefault();
            $('.read-wrap').slideDown();
            $(this).addClass('hide').siblings('.read-less').removeClass('hide')

        })
    }

    var init = function() {
        bannerReadMore()

        if ($('#select-brochure').length) {
            selectDropdown("select-brochure")
        }

        if (!$('.category-product-banner .read-wrap').length) {
            $('.category-product-banner .read-less,.category-product-banner .read-more').hide()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function chatBotMobile() {
        $('.js-chat-btn').on('click', function() {
            if ($(this).siblings('.chat-bot__action-wrap').length) {

                $(this).toggleClass('chat-bot__btn--rotate');
                $('.js-chat-btn-wrap').toggleClass('chat-bot__mobile--active');
            }
            $('.js-chat-overlay').toggleClass('overlay--active');
        });

        $('.js-chat-overlay').on('click', function() {
            $('.js-chat-overlay').removeClass('overlay--active');
            $('.js-chat-btn').removeClass('chat-bot__btn--rotate');
            $('.js-chat-btn-wrap').removeClass('chat-bot__mobile--active');

        })

        $('.open-chat').on('click', function(e) {
            e.preventDefault()
            $('.js-chat-btn-wrap').toggleClass('chat-bot__mobile--active');
            $('.js-chat-overlay').toggleClass('overlay--active');

        })

    }
    var init = function() {
        chatBotMobile()

    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function viewAllForms() {
        $('.download-file__view-all').on('click', function(e) {
            e.preventDefault();
            $(this).parent('.download-file__view-action').siblings('.download-file__list').find('.download-file__item').fadeIn(300)
            $(this).addClass('hide').siblings('.download-file__view-less').removeClass('hide');
        });

        $('.download-file__view-less').on('click', function(e) {
            e.preventDefault();
            var i = 10;
            if ($(this).parent('.download-file__view-action').siblings('.download-file__list').hasClass('download-file__list--typ2')) {
                i = 5;
            }
            $(this).parent('.download-file__view-action').siblings('.download-file__list').find('.download-file__item').hide()
            $(this).parent('.download-file__view-action').siblings('.download-file__list').find('.download-file__item:lt(' + i + ')').fadeIn(300)
            $(this).addClass('hide').siblings('.download-file__view-all').removeClass('hide');
            if (i == 10) {
                $('html,body').animate({
                    scrollTop: $(".download-file").offset().top
                }, 800);
            }
        });
    }

    var init = function() {

        if ($('#select-form-categories').length) {
            selectDropdown("select-form-categories")
        }

        if ($('#select-language').length) {
            selectDropdown("select-language")
        }

        if ($('#select-sort-by').length) {
            selectDropdown("select-sort-by")
        }

        if ($('#select-plan-download').length) {
            selectDropdown("select-plan-download")
        }

        if ($('#select-article-topic').length) {
            selectDropdown("select-article-topic")
        }

        if ($('#select-article-filter').length) {
            selectDropdown("select-article-filter")
        }

        if ($('#select-product-categories').length) {
            selectDropdown("select-product-categories")
        }

        viewAllForms();
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function tabsToDropdown() {
        $('.tabs__links--vertical').each(function() {
            if ($(this).children('.tabs__link').length > 7) {
                if(!$('body').hasClass("on-page-editor")){
                    var selectedVal = $(this).find('.tabs__link:first-child').find('.tabs__anchor').html();
                    var filterDrop = '<div class="tabs__dropdown"><span class="tabs__selected">' + selectedVal + '</span><span class="tabs__drop-icon icon icon-arrow"></span></div>';
                    $(this).addClass('tabs__links--droplist').parent('.tabs').addClass('tabs--dropdown').prepend(filterDrop)
                    $('.tabs__links--droplist').mCustomScrollbar({
                        theme: "dark-3"
                    });
                } else {
                    var selectedVal = $(this).find('.tabs__link:first-child').find('.tabs__anchor').html();
                    var filterDrop = '<div class="tabs__dropdown"><span class="tabs__selected">' + selectedVal + '</span><span class="tabs__drop-icon icon icon-arrow"></span></div>';
                    $(this).addClass('tabs__links--droplist').closest('.tabs').addClass('tabs--dropdown').prepend(filterDrop)
                    $('.tabs__links--droplist').mCustomScrollbar({
                        theme: "dark-3"
                    });
                }
            } else {
                if ($(window).width() < 768) {

                    $(this).slick({
                        autoplay: false,
                        slidesToShow: 1,
                        arrows: false,
                        infinite: false,
                        variableWidth: true

                    });
                }
            }
        })
        if(!$('body').hasClass("on-page-editor")){
            $(document).on('click', '.tabs__dropdown', function() {
                $(this).next('.tabs__links--droplist').slideToggle();
            });
        } else {
            $('.tabs__dropdown').on('click', function() {
                $(this).next("div").find('.tabs__links--droplist').slideToggle();
            });
        } 
        $(document).on('click', '.tabs__links--droplist .tabs__anchor', function(e) {
            e.preventDefault();
            var selected = $(this).html();
            $(this).parents('.tabs--dropdown').find('.tabs__selected').html(selected);
            $(this).parents('.tabs__links--droplist').slideUp();
        });
    }

    function faqSlick() {

        $('.faq-buy-guide__list').slick({
            autoplay: false,
            slidesToShow: 1,
            arrows: false,
            infinite: false,
            variableWidth: true

        });
    }

    var init = function() {
        faqSlick();
        tabsToDropdown();
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {
    // $.validator.addMethod('filesize', function(value, element, param) {
    //     return this.optional(element) || (element.files[0].size <= param)
    // }, 'File size must be less than {0}');

    // $.validator.addMethod("customemail", function(value, element) {
    //     return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
    // }, "Sorry, I've enabled very strict email validation");

    // $.validator.addMethod("extension", function(value, element, param) {
    //     param = typeof param === "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
    //     return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
    // }, "Please enter a value with a valid extension.");

    // function guestForm() {
    //     var $guestForm = $("#guest-form");

    //     var guestValidator = $($guestForm).validate({
    //         rules: {
    //             guestName: {
    //                 required: true,
    //                 minlength: 3
    //             },
    //             guestMobileno: {
    //                 required: true,
    //                 minlength: 10,
    //                 maxlength: 10

    //             },
    //             guestEmail: {
    //                 required: true,
    //                 customemail: true
    //             },
    //             "select-complaint": {
    //                 required: true,
    //             },
    //             guestComplaintDetail: {
    //                 required: true,
    //                 minlength: 15
    //             },
    //             guestComplaintFile: {
    //                 required: true,
    //                 filesize: 500000,
    //                 extension: "jpg|jpeg|gif|doc|docx|pdf"
    //             }

    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         highlight: function(element) {
    //             $(element).addClass("error").siblings('input').addClass("error");

    //         },
    //         unhighlight: function(element) {
    //             $(element).removeClass("error").siblings('input').removeClass("error");
    //         }
    //     });


    //     var $guestSumit = $(".guest-submit");

    //     //Validate form
    //     $guestSumit.click(function(e) {
    //         if ($guestForm.valid()) {
    //             $('.feedback-wrap__overlay').fadeIn(400);
    //             $('.login-success').addClass('login-success--active');
    //             return false;
    //         }
    //     });

    //     $('#guest-complaint-file').on('change', function() {
    //         var target = '#' + $(this).attr('id');
    //         guestValidator.element(target)
    //     });
    // }



    // function advisorForm() {
    //     var $advisorForm = $("#advisor-form");

    //     var advisorValidator = $($advisorForm).validate({
    //         rules: {
    //             advisorName: {
    //                 required: true,
    //                 minlength: 3
    //             },
    //             advisorMobileno: {
    //                 required: true,
    //                 minlength: 10,
    //                 maxlength: 10
    //             },
    //             advisorEmail: {
    //                 required: true,
    //                 customemail: true
    //             },
    //             "select-advisor-complaint": {
    //                 required: true,
    //             },
    //             advisorComplaintDetail: {
    //                 required: true,
    //                 minlength: 15
    //             },
    //             advisorComplaintFile: {
    //                 required: true,
    //                 filesize: 500000,
    //                 extension: "jpg|jpeg|gif|doc|docx|pdf"
    //             }

    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         highlight: function(element) {
    //             $(element).addClass("error").siblings('input').addClass("error");

    //         },
    //         unhighlight: function(element) {
    //             $(element).removeClass("error").siblings('input').removeClass("error");
    //         }

    //     });


    //     var $advisorSumit = $(".advisor-submit");

    //     //Validate form
    //     $advisorSumit.click(function(e) {
    //         if ($advisorForm.valid()) {
    //             $('.feedback-wrap__overlay').fadeIn(400);
    //             $('.login-success').addClass('login-success--active');
    //             return false;
    //         }
    //     });

    //     $('#advisor-complaint-file').on('change', function() {
    //         var target = '#' + $(this).attr('id');
    //         advisorValidator.element(target)
    //     });
    // }



    function onFileChange() {
        $('.form-control--file').on('change', function(e) {
            var fileName = e.target.files[0].name;
            $(this).siblings('.form-control').val(fileName);
        })


    }

    var init = function() {

        // if ($('#select-complaint').length) {
        //     selectDropdown("select-complaint")
        //     selectDropdown("select-complaint-loggwith")
        //     selectDropdown("select-advisor-complaint")
        // }
        onFileChange()
        //guestForm()
        //advisorForm()
        $('.feedback-wrap__overlay').on('click', function() {
            $(this).fadeOut(400);
            $('.login-success').removeClass('login-success--active');
        })
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {



    function slidingRadio() {
        $('.gender-switch__group').on('click', function() {
            var leftVal = $(this).position().left + 'px';
            $('.gender-switch__indicator').css('transform', 'translateX(' + leftVal + ')')
        })
    }


    var init = function() {
        if ($('.gender-switch__indicator').length) {
            slidingRadio();
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {
    //Selectbox Dropdown

    //Increment decrement input


    function onFocusIncrement() {

        $('.input-group--inc-dec .form-control').on('focus', function(e) {
            var amt = e.target.value
            $(this).parents('.input-group--inc-dec').addClass('focused')
            $(this).val(setValWF(amt))
            $('.amt-text').html(convertNumberToWords(setValWF(amt)))

        })

        $('.input-group--inc-dec .form-control').on('blur', function(e) {
            var amt = e.target.value
            var minAmt = parseInt($(this).attr('data-min')),
                maxAmt = parseInt($(this).attr('data-max'))
            $(this).parents('.input-group--inc-dec').removeClass('focused');

            if (amt <= maxAmt && amt >= minAmt) {
                $(this).val(inSemiWords(amt))
            } else if (amt > maxAmt) {
                $(this).val(inSemiWords(maxAmt))
            } else if (amt < minAmt) {
                $(this).val(inSemiWords(minAmt))
            }
            $('.amt-text').html('')
        })

        $('.input-group--inc-dec .form-control').on('input', function(e) {
            var amt = e.target.value
            $(this).val(setValWF(amt))
            $('.amt-text').html(convertNumberToWords(setValWF(amt)))
        })
    }

    // convert number into inr semi words format
    function inSemiWords(num) {
        num = num.toString();
        var tempNum = num.split(".");
        num = parseInt(tempNum[0]);

        num = num + '';
        numL = num.length
        var str1;
        if (numL > 7) {
            // xad = ' Crores';
            xad = ' Cr';
            num = num.toString();
            str1 = num.substring(0, numL - 7);
            str1 = str1 + '.' + num.substring(numL - 7, numL - 5);
            str1 = str1 + xad;
        } else if (numL > 5) {
            // xad = ' Lakhs';
            xad = ' L';
            num = num.toString();
            str1 = num.substring(0, numL - 5);
            str1 = str1 + '.' + num.substring(numL - 5, numL - 3);
            str1 = str1 + xad;
        } else if (numL > 3) {
            // xad = ' Thousands';
            xad = ' K';
            num = num.toString();
            str1 = num.substring(0, numL - 3);
            str1 = str1 + '.' + num.substring(numL - 3, numL - 1);
            str1 = str1 + xad;
        } else {
            num = num.toString();
            str1 = num;
        }
        return str1;
    }


    //convert semi word into number
    function setValWF(val) {
        if (val != undefined) {
            var returnvalue = '';
            var slice1 = '';
            val = val.toLowerCase();
            if (val.indexOf('Cr') > 0 || val.indexOf('cr') > 0) {
                slice1 = val.replace(/[^0-9]/g, '');
                returnvalue = slice1 + '00000';
            } else if (val.indexOf('l') > 0 || val.indexOf('L') > 0) {
                slice1 = val.replace(/[^0-9]/g, '');
                returnvalue = slice1 + '000';
            } else if (val.indexOf('k') > 0 || val.indexOf('K') > 0) {
                slice1 = val.replace(/[^0-9]/g, '');
                returnvalue = slice1 + '0';
            } else {
                returnvalue = val.replace(/[,]/g, '');
            }
            return returnvalue;
        }
    }

    //increment by 10 l on plus click
    function incremnetCTA() {
        $('.input-group--inc-dec .icon-btn--increment').on('click', function() {
            var maxAmt = parseInt($(this).parent('.input-group-btn').siblings('.form-control').attr('data-max'))
            var amt = $(this).parent('.input-group-btn').siblings('.form-control').val();
            var controlValue = parseInt($(this).parent('.input-group-btn').siblings('.form-control').attr("data-control-value"));
            amt = parseInt(setValWF(amt));
            //new incremented value
            if ((amt + controlValue) <= maxAmt) {
                amt = amt + controlValue;
            }

            $(this).parent('.input-group-btn').siblings('.form-control').val(inSemiWords(amt))
        })
    }

    //decrement by 10 l on minus click
    function decrementCTA() {
        $('.input-group--inc-dec .icon-btn--decrement').on('click', function() {
            var minAmt = parseInt($(this).parent('.input-group-btn').siblings('.form-control').attr('data-min'));
            var amt = $(this).parent('.input-group-btn').siblings('.form-control').val();
            var controlValue = parseInt($(this).parent('.input-group-btn').siblings('.form-control').attr("data-control-value"));
            amt = parseInt(setValWF(amt));
            //new decremented value
            if ((amt - controlValue) >= minAmt) {
                amt = amt - controlValue;
            }

            $(this).parent('.input-group-btn').siblings('.form-control').val(inSemiWords(amt))
        })
    }

    //convert number to text on input
    function convertNumberToWords(amount) {
        var words = new Array();
        words[0] = '';
        words[1] = 'One';
        words[2] = 'Two';
        words[3] = 'Three';
        words[4] = 'Four';
        words[5] = 'Five';
        words[6] = 'Six';
        words[7] = 'Seven';
        words[8] = 'Eight';
        words[9] = 'Nine';
        words[10] = 'Ten';
        words[11] = 'Eleven';
        words[12] = 'Twelve';
        words[13] = 'Thirteen';
        words[14] = 'Fourteen';
        words[15] = 'Fifteen';
        words[16] = 'Sixteen';
        words[17] = 'Seventeen';
        words[18] = 'Eighteen';
        words[19] = 'Nineteen';
        words[20] = 'Twenty';
        words[30] = 'Thirty';
        words[40] = 'Forty';
        words[50] = 'Fifty';
        words[60] = 'Sixty';
        words[70] = 'Seventy';
        words[80] = 'Eighty';
        words[90] = 'Ninety';
        amount = amount.toString();
        var atemp = amount.split(".");
        var number = atemp[0].split(",").join("");
        var n_length = number.length;
        var words_string = "";
        if (n_length <= 9) {
            var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
            var received_n_array = new Array();
            for (var i = 0; i < n_length; i++) {
                received_n_array[i] = number.substr(i, 1);
            }
            for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
                n_array[i] = received_n_array[j];
            }
            for (var i = 0, j = 1; i < 9; i++, j++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    if (n_array[i] == 1) {
                        n_array[j] = 10 + parseInt(n_array[j]);
                        n_array[i] = 0;
                    }
                }
            }
            value = "";
            for (var i = 0; i < 9; i++) {
                if (i == 0 || i == 2 || i == 4 || i == 7) {
                    value = n_array[i] * 10;
                } else {
                    value = n_array[i];
                }
                if (value != 0) {
                    words_string += words[value] + " ";
                }
                if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Crores ";
                }
                if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Lakhs ";
                }
                if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                    words_string += "Thousand ";
                }
                if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                    words_string += "Hundred and ";
                } else if (i == 6 && value != 0) {
                    words_string += "Hundred ";
                }
            }
            words_string = words_string.split("  ").join(" ");
        }
        return words_string;
    }

    function datepickerInput() {
        $('.form-datepicker').on('keyup, keydown', function(e) {
            if (e.which !== 8) {
                var numChars = $(this).val().length;
                if (numChars === 2 || numChars === 5) {
                    var thisVal = $(this).val();
                    thisVal += '/';
                    $(this).val(thisVal);
                }
            }
        });
    }

    var init = function() {
        //Dropdown
        // selectDropdown("select");

        //FinancialYear
        // selectDropdown("financialYear");

        // //StatementOption
        // selectDropdown("statementOption");

        // //StatementOption
        // selectDropdown("format");

        // //Datepicker
        // datePicker("input-daterange");

        //incremnet decrement
        onFocusIncrement()
        incremnetCTA()
        decrementCTA()
        datepickerInput()
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function wbLoginFlow() {
        var redressalForm = $("#grievance-redressal--feedback");


        jQuery.validator.addMethod("customEmail", function (value, element) {
            // allow any non-whitespace characters as the host part
            return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
        }, "Please enter a valid email address.");

        var validator = $(redressalForm).validate({
            rules: {
                "name": {
                    required: true,
                    EmailOrMobileOrPolicy: false
                },
                "policyNumber":{
                    required:true,
                    number:true,
                    minlength:9,
                    EmailOrMobileOrPolicy:false
                },
                "tnc":{
                   required:true,
                   EmailOrMobileOrPolicy: false
                },
                "Mobileno":{
                    required:true,
                    number:true,
                    minlength:10,
                    EmailOrMobileOrPolicy:false
                },
                "email":{
                    required:true,
                    customEmail:true,
                    EmailOrMobileOrPolicy:false
                },
                "ComplaintDetail":{
                    required:true,
                    EmailOrMobileOrPolicy:false
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            },
            success: function(element){
               
            },
            highlight: function(element, errorList) {
            
                    // if(errorList == "error"){$('.guest-submit').attr('disabled', true).addClass('wb-light-grey-bg')}   

            }

            
        });

        $(redressalForm).find('.form-control').on('input', function() {
            console.log("on input")
            var target = $(this)
            validator.element(target)

            // if(validator.errorList.length){
            //     $('.guest-submit').attr('disabled', false).removeClass('wb-light-grey-bg')
            // }
            // console.log(validator)
        });
        $(redressalForm).find('.form-check-input').on('click', function() {
            console.log("form check ")
            var target = $(this)
            validator.element(target)

        })

    }      
    var init = function() {
        // if ($('.login-birth-date').length) {
        //     datePicker("login-birth-date");

        // }
        if ($('.grievance-redressal-form').length) {
            wbLoginFlow()
        }
        // if ($('.otp-timer').length != 0) {
        //     var otpTimer = $('.otp-timer').data("time");
        //     countDownTimer(otpTimer);
        // }
    };
    $(init);

})(window.jQuery, this, this.document);
(function($, window, document, undefined) {



    function graphSlick() {
        $('.graph-list').each(function(index) {
            $(this).slick({
                autoplay: false,
                slidesToShow: 1,
                arrows: false,
                infinite: false,
                variableWidth: true

            });
        });

    }
    var init = function() {
        if ($('.graph-list').length) {
            graphSlick()
            datePicker('From-date-graph')
            datePicker('to-date-graph')
        }


    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {



    function openPopupMobile() {
        $('.js-open-popup').on('click', function() {
            $(this).parents('.illustration').addClass('illustration--active');
        });
        $('.js-close-popup').on('click', function() {
            $(this).parents('.illustration').removeClass('illustration--active');
        });
    }


    var init = function() {
        if ($(window).width() <= 768) {
            openPopupMobile();
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function checkValue(compareValue, inputNameValue) {
        var checkedVal;
        $('.icon-radio--strip .icon-radio__input').on('change', function() {
            var self = $(this);
            var inputName = $(this).attr('name');
            var targetInput = $(this).parents('.icon-radio').siblings('.js-other-field');
            if ($(this).attr('name') == inputNameValue) {
                checkedVal = self.val();
                if (checkedVal == compareValue) {
                    targetInput.removeClass('hide');
                    targetInput.focus();
                } else {
                    targetInput.addClass('hide').removeClass('error').siblings('.error').remove();                    
                }
            }            

        });
    }

    var init = function() {
        checkValue('otherdetails', 'educationDetails');
        checkValue('otherdetailsCountry', 'countryDetails');
        checkValue('otherdetailsCity', 'cityEducationCity');
        checkValue('othersMaritalDetails', 'healthMaritalStatus');
        checkValue('otherWealthDreamDetails', 'wealthDreamDetails');
        checkValue('otherwealthLivingCityDetails', 'wealthLivingCityDetails');
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {


    function infoCardSlick() {
        $('.info-card__wrap--typ1').slick({
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            infinite: false,
            prevArrow: $('.slick-nav--info-card .slick-nav__btn--prev'),
            nextArrow: $('.slick-nav--info-card .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1270,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }]
        }).on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });

        $('.info-card__wrap--typ2').slick({
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            infinite: false,
            prevArrow: $('.slick-nav--info-card2 .slick-nav__btn--prev'),
            nextArrow: $('.slick-nav--info-card2 .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1270,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }]
        }).on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });

        $('.info-card__wrap--typ3').slick({
            autoplay: true,
            slidesToShow: 2,
            arrows: true,
            infinite: false,
            prevArrow: $('.slick-nav--info-card .slick-nav__btn--prev'),
            nextArrow: $('.slick-nav--info-card .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1270,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }]
        }).on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slideTrack.height() + 'px');
        });


    }

    var init = function() {
        infoCardSlick()
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function wbLoginFlow() {
        var wbInsuranceForm = $("#advisor-login-form");


        jQuery.validator.addMethod("customEmail", function (value, element) {
            // allow any non-whitespace characters as the host part
            return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
        }, "Please enter a valid email address.");

        // $.validator.addMethod("EmailOrMobileOrPolicy", function(value, element) {
        //     var flag
        //     if (value.length == 9 || value.length == 10) {
        //         if (/^[0-9]*$/.test(value)) {
        //             flag = true;
        //         } else if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
        //             flag = true
        //         } else {
        //             flag = false
        //         }
        //     } else {
        //         if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
        //             flag = true
        //         } else {
        //             flag = false
        //         }

        //     }
        //     return flag
        // }, "Sorry, I've enabled very strict email validation");

        var wbLoginValidator = $(wbInsuranceForm).validate({
            rules: {
                "userid": {
                    required: true,
                    EmailOrMobileOrPolicy: false
                },
                "profession":{
                   required:true,
                   EmailOrMobileOrPolicy: false
                },
                "city":{
                     required:true,
                     EmailOrMobileOrPolicy:false
                },
                "pincode":{
                    required:true,
                    EmailOrMobileOrPolicy:false
               },
               "age":{
                required:true,
                EmailOrMobileOrPolicy:false
           },
                "mobileno":{
                    required:true,
                    number:true,
                    minlength:10,
                    EmailOrMobileOrPolicy:false
                },
                "email":{
                    required:true,
                    customEmail:true,
                    EmailOrMobileOrPolicy:false
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            },
            highlight: function(element, errorList) {
                if (errorList == "error") {
                    $('.sent-login-otp').attr('disabled', true).addClass('buy-light-grey-bg')
                }

            }
        });

        // $('.sent-login-otp').click(function() {
        //     wbLoginForm.valid();
        //     return false
        // });
        $(".ins-adv-submit").click(function(event) {
            event.preventDefault();
            if(wbInsuranceForm.valid()){
            $(this).parents('.buy-login').find('.buy-online__container').addClass('hide');
            $(this).parents('.buy-login').find('.buy-online__thanks-msg').removeClass('hide')
            }
        });

        // $('#wb-login-form .form-control').on('change', function() {
        //     if (wbLoginForm.valid()) {
        //         $('.sent-login-otp').attr('disabled', false).removeClass('wb-light-grey-bg')

        //     } else {
        //         $('.sent-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')

        //     }

        // })

        // var wbLoginOTPForm = $("#wb-otp-form");

        // var wbLoginOTPValidator = $(wbLoginOTPForm).validate({
        //     ignore: [],
        //     rules: {
        //         "login-otp-hidden": {
        //             required: true,
        //             minlength: 6,
        //             maxlength: 6
        //         }
        //     },
        //     errorElement: "span",
        //     errorPlacement: function(error, element) {
        //         error.appendTo($(element).closest(".form-group"));
        //     },
        //     highlight: function(element, errorList) {
        //         if (errorList == "error") {
        //             $('.verify-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')
        //         }
        //     }
        // });

        // $('.verify-login-otp').click(function() {
        //     wbLoginOTPForm.valid();
        //     return false
        // });

        // $('#wb-otp-form .form-control--otp').on('input', function() {

        //     if ($(this).val() != '') {
        //         $(this).next().focus()
        //     }
        //     var finalVal = "";
        //     $('#wb-otp-form .form-control--otp').each(function() {
        //         finalVal += $(this).val();
        //     })
        //     $('.login-otp-hidden').val(finalVal)

        //     if (wbLoginOTPForm.valid()) {
        //         $('.verify-login-otp').attr('disabled', false).removeClass('wb-light-grey-bg')

        //     } else {
        //         $('.verify-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')

        //     }
        // });

    }

    // function countDownTimer(otpTimer) {
    //     var timer2 = otpTimer;
    //     var interval = setInterval(function() {

    //     var timer = timer2.split(':');
    //     //by parsing integer, I avoid all extra string processing
    //     var minutes = parseInt(timer[0], 10);
    //     var seconds = parseInt(timer[1], 10);
    //     --seconds;
    //     minutes = (seconds < 0) ? --minutes : minutes;
    //     if (minutes < 0) clearInterval(interval);
    //     seconds = (seconds < 0) ? 59 : seconds;
    //     seconds = (seconds < 10) ? '0' + seconds : seconds;
    //     //minutes = (minutes < 10) ?  minutes : minutes;
    //     $('.otp-timer').html(minutes + ':' + seconds);
    //     timer2 = minutes + ':' + seconds;
    //     if(timer2 == "-1:59"){
    //         $('.otp-timer').empty();
    //         $('.otp-timer').append('0:00');
    //         return false;
    //     }
    //     }, 1000);
    // }

    function onlyAlpha(evt) {
        $('.only-alpha').on('keypress', function(evt) {
   
            return /^[a-zA-Z\. ]*$/.test(evt.key)
        })

    }

    var init = function() {
        // if ($('.login-birth-date').length) {
        //     datePicker("login-birth-date");

        // }
        if ($('.advisor-login').length) {
            wbLoginFlow()
        }
        // if ($('.otp-timer').length != 0) {
        //     var otpTimer = $('.otp-timer').data("time");
        //     countDownTimer(otpTimer);
        // }
        onlyAlpha();
    };
    $(init);

})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function flipCard() {
        $('.insurance-card .flip-trigger').on('click', function(e) {
            e.preventDefault();
            $(this).parents('.insurance-card').toggleClass('is-flipped')
        })
    }

    function insuranceSlick() {
        $('.insurance-list').slick({
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            infinite: true,
            prevArrow: $('.slick-nav--insurance .slick-nav__btn--prev'),
            nextArrow: $('.slick-nav--insurance .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1270,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }]
        });
        

        //setTimeout(function(){
            var maxTotalHeighthArray = new Array();
            $(".insurance-card-wrap").each(function(){
                var iconHeight = $(this).find(".insurance-card__icon-wrap").outerHeight();
                var titleHeight = $(this).find(".insurance-card__title").outerHeight();
                var btnHeight = $(this).find(".btn-wrap").outerHeight();
                var totalHeight = iconHeight + titleHeight + btnHeight;
                maxTotalHeighthArray.push(totalHeight);
            });
            var maxTotalHeight = Math.max.apply(Math,maxTotalHeighthArray); 
            $(".insurance-card-wrap, .insurance-card__face").css("height",maxTotalHeight);

            var maxHeighthArray = new Array();
            $('.insurance-card-wrap .insurance-card__title').each(function() {
                maxHeighthArray.push($(this).height());
            });
            var maxHeight = Math.max.apply(Math,maxHeighthArray); 
            $('.insurance-card-wrap .insurance-card__title').height(maxHeight);
        //},500);
    }

    var init = function() {
        insuranceSlick()
        flipCard()
        if ($('.plan-list').length) {
            $('.plan-list').mCustomScrollbar({
                theme: "dark-3"
            });
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function filterSlick() {

        $('#filterItemLinks').slick({
            autoplay: false,
            slidesToShow: 1,
            arrows: false,
            infinite: false,
            variableWidth: true

        });
    }

    function dictionaryfilterActive() {
        var pageLoadDataTrigger = $('.insurance-dictionary .insurance-filter__link.insurance-filter__link--active').text();        
        $('.insurance-filter__item[data-target='+pageLoadDataTrigger).addClass('insurance-filter__item--active');
        $('.insurance-dictionary .insurance-filter__link').on('click', function(e) {
            e.preventDefault();
            var dataTrigger = $(this).text();
            $(this).addClass('insurance-filter__link--active').parent('.insurance-filter__filter-item').siblings('.insurance-filter__filter-item').find('.insurance-filter__link').removeClass('insurance-filter__link--active')
            $('.insurance-filter__item').removeClass('insurance-filter__item--active');
            $('.insurance-filter__item[data-target='+dataTrigger).addClass('insurance-filter__item--active');
        })
    }

    var init = function() {
        if ($('.insurance-dictionary').length) {
            if ($(window).width() <= 768) {
                filterSlick();
            }

            dictionaryfilterActive()
        }
    };

    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {
    //For Three Column
    function checkLinkItem(windowSize) {
        $linkBlock3ColIndex = $(".three-col-list.link-list__container").not('.link-list__with-border');
        $countLikItemIndex = $(
            ".three-col-list.link-list__container > .link-list__list li"
        );

        $linkBlock3ColIndex.each(function(index) {
            $linkBlock3Col = $(this).attr("class");
            $countLikItem = $(this).find("li");

            if ($linkBlock3Col.length) {
                //checkCount
                $totalLinkItem = $countLikItem.size();

                //divide totalLinkItem by 3 - to set border to remaining item
                $divideLinkItem = $totalLinkItem / 3;
                $getResult = ($divideLinkItem + "").split(".")[1];

                if ($getResult) {
                    //get First two char after decimal to determine link item
                    $checkLinkItemResutl = $getResult.substring(0, 2);

                    //66 = 2 item, 33 = 1 item
                    if ($checkLinkItemResutl == "66") {
                        $countLikItem.slice(-2).addClass("border-none");
                    } else if ($checkLinkItemResutl == "33") {
                        $countLikItem.slice(-1).addClass("border-none");
                    }
                } else {
                    $countLikItem.slice(-3).addClass("border-none");
                }
            }
            if (windowSize < 768) {
                $countLikItem.removeClass("border-none");
                $countLikItem.removeClass("border-none");
            }
        });
    }

    //For Two Column
    function checkLinkItem2Col(windowSize) {
        $linkBlock3ColIndex = $(".two-col-list.link-list__container");
        $countLikItemIndex = $(
            ".two-col-list.link-list__container > .link-list__list li"
        );

        $linkBlock3ColIndex.each(function(index) {
            $linkBlock3Col = $(this).attr("class");
            $countLikItem = $(this).find("li");

            if ($linkBlock3Col.length) {
                //checkCount
                $totalLinkItem = $countLikItem.size();

                //divide totalLinkItem by 2 - to set border to remaining item
                $divideLinkItem = $totalLinkItem / 2;
                $getResult = ($divideLinkItem + "").split(".")[1];

                if ($getResult) {
                    //get First two char after decimal to determine link item
                    $checkLinkItemResutl = $getResult.substring(0, 2);

                    //5 = 2 item
                    if ($checkLinkItemResutl == "5") {
                        $countLikItem.slice(-1).addClass("border-none");
                    }
                } else {
                    $countLikItem.slice(-2).addClass("border-none");
                }
            }
            if (windowSize < 768) {
                $countLikItem.removeClass("border-none");
                $countLikItem.removeClass("border-none");
            }
        });
    }

    //Add Class 'two-col-list' for Link Column
    function addClassLinkColumn(windowSize) {
        var $linkColumn = $(".link-list__list--column").parent();
        var $linkColumnList = $(".link-list__list--column li");
        //set class when window size is less than 1020
        if (windowSize < 1021) {
            $linkColumn.addClass("two-col-list");
            //Two Column
            checkLinkItem2Col(windowSize);
        } else {
            //Two Column
            $linkColumnList.removeClass("border-none");
            $linkColumn.removeClass("two-col-list");
        }
    }

    function equalSizeLinkTitle(windowSize) {
        $linkListTitleContainer = $(".link-list .link-list__brand-title-container");
        $linkListTitleContainer.each(function(index) {
            $linkListTitleHeight = $(this).height();
            $linkListTitleContainer.height("auto");
            if ($linkListTitleHeight > 42) {
                $linkListTitleContainer.css("height", "80px");
            } else {
                $linkListTitleContainer.css("height", "auto");
            }
        });
    }

    //for tab link block remove border none
    function removeBorder() {
        if ($('.link-list__container--tab').length) {
            $('.link-list__container--tab').find('li').removeClass('border-none');
        }
    }



    var init = function() {
        //set border if last 3 item, 2 item or 1 item
        $windowSize = $(window).width();

        //Three Column
        checkLinkItem($windowSize);

        //Two Column
        checkLinkItem2Col($windowSize);

        //Add 'two-col-list' class for Link Column
        addClassLinkColumn($windowSize);

        //Equal Size Title
        equalSizeLinkTitle($windowSize);
        //On Window resize
        $(window).resize(function() {
            //Window Size
            $windowSize = $(window).width();

            //Three Column
            checkLinkItem($windowSize);

            //Two Column
            checkLinkItem2Col($windowSize);

            //Add 'two-col-list' class for Link Column
            addClassLinkColumn($windowSize);

            //Equal Size Title
            equalSizeLinkTitle($windowSize);
        });

        //for tab link block remove border none
        removeBorder()

    };
    $(init);
})(window.jQuery, this, this.document);
(function ($, window, document, undefined) {


    function langRedirectUrl() {
        $(".language__item,.language-wrap__item").on("click", function(e){
            e.preventDefault();
            var $this = $(this);
            if($this.attr("data-deafult-language") === "true"){
                document.cookie = 'absli#lang=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                window.location.href = $this.attr("href");
            }
            else {
                window.location.href = $this.attr("href");
            }
        });
    }

    function mobileLangClick() {
        var $window = $(window);
        var windowsize = $window.width();
        if (windowsize < 1021) {
            $("#lang-topmenu-mobile a").on('click', function (e) {
                e.preventDefault();
                $(this).next("#lang-childmenu-mobile").toggle();
                $("#lang-topmenu-mobile a").toggleClass("open");
            });
            $(".language__item").on('click', function () {
                $(".language__item").addClass('open');
            });
        }
    }

    var init = function () {

        $("#lang-topmenu").on('mouseover', function () {
            $("#lang-childmenu").css("display", "block");
            $("#lang-topmenu a").addClass("open");
        });

        $("#lang-topmenu").on('mouseout', function () {
            $("#lang-childmenu").css("display", "none");
            $("#lang-topmenu a").removeClass("open");
        });

        $("#lang-topmenu-mobile").on('mouseover', function () {
            $("#lang-childmenu-mobile").css("display", "block");
            $("#lang-topmenu-mobile a").addClass("open");
        });

        $("#lang-topmenu-mobile").on('mouseout', function () {
            $("#lang-childmenu-mobile").css("display", "none");
            $("#lang-topmenu-mobile a").removeClass("open");
        });

        langRedirectUrl();
        mobileLangClick();
        $(window).resize(mobileLangClick);

    };
    $(init);
})(window.jQuery, this, this.document); 

(function($, window, document, undefined) {

    function leadFormValidate() {
        var $leadForm = $(".abc-form--lead");
        var $leadFormGP = $(".abc-form--lead-gp");

        var mobError = $('.mob-error').val();
        var emailError = $('.email-error').val();

        jQuery.validator.addMethod("customEmail", function (value, element) {
            // allow any non-whitespace characters as the host part
            return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
        }, emailError);

        jQuery.validator.addMethod("mobile", function(value, element) {
            // allow any non-whitespace characters as the host part
            return this.optional(element) || /^(\+\d{1,3}[- ]?)?\d{10}$/.test(value);
        }, mobError);

        $leadForm.each(function(){
            var validator = $(this).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 3
                    },
                    mobileno: {
                        required: true,
                        number: true,
                        minlength: 10
                    },
                    email: {
                        required: true,
                        customEmail: true
                    },
                    tnc: {
                        required: true,
                    }
                },
                errorElement: "span",
                errorPlacement: function(error, element) {
                    error.appendTo($(element).closest(".form-group"));
                },
                success: function(element) {
                    if ($(element).siblings('.form-check').length) {
                        setTimeout(function(){
                            $(element).siblings('.form-check').find('.submit-agree').removeClass('disabled');
                            $(element).siblings('.form-check').find('.submit-agree').removeAttr("disabled");
                        },300);
                    } else {
                        $(element).siblings('.input-group--v2').removeClass('disabled')
                    }
                },
                highlight: function(element, errorList) {
                    if (errorList == "error") {
                        if ($(element).closest('.form-check').length) {

                            $(element).siblings('.submit-agree').addClass('disabled');
                            $(element).siblings('.submit-agree').attr('disabled', true);
                        } else {
                            $(element).closest('.input-group--v2').addClass('disabled')
                        }
                    }

                }
            });
            $(this).find('.form-control').on('input', function() {
                var target = $(this)
                validator.element(target)
            });
            $(this).find('.form-check-input').on('click', function() {
                var target = $(this)
                validator.element(target)
            })
        });

        
        $leadFormGP.each(function(){
            var validatorGP = $(this).validate({
                rules: {
                    companyname: {
                        required: true,
                        minlength: 3
                    },
                    mobileno: {
                        required: true,
                        number: true,
                        minlength: 10
                    },
                    email: {
                        required: true,
                        customEmail: true
                    },
                    name: {
                        required: true,
                        minlength: 3
                    },
                    city: {
                        required: true,
                        minlength: 3
                    },
                    selectInterest: {
                        required: true,
                    },
                    tnc: {
                        required: true,
                    }
                },
                errorElement: "span",
                errorPlacement: function(error, element) {
                    error.appendTo($(element).closest(".form-group"));
                },
                success: function(element) {
                    if ($(element).siblings('.form-check').length) {
                        setTimeout(function(){
                            $(element).siblings('.form-check').find('.submit-agree').removeClass('disabled');
                            $(element).siblings('.form-check').find('.submit-agree').removeAttr("disabled");
                        },300);
                    } else {
                        $(element).siblings('.input-group--v2').removeClass('disabled')
                    }
                },
                highlight: function(element, errorList) {
                    if (errorList == "error") {
                        if ($(element).parents('.form-check').length) {
                            $(element).siblings('.submit-agree').addClass('disabled');
                            $(element).siblings('.submit-agree').attr('disabled', true);
                        } else {
                            $(element).parents('.input-group--v2').addClass('disabled')
                        }
                    }
    
                }
            });
            $(this).find('.form-control').on('input', function() {
                var target1 = $(this)
                validatorGP.element(target1);
            })
            $(this).find('.form-check-input').on('click', function() {
                var target1 = $(this)
                validatorGP.element(target1)
            })
        });

        $(".btn-sumbit-inpt").click(function() {
            $(this).parents('.form-group').addClass('hide');
            $(this).parents('.form-group').next('.form-group').removeClass('hide')
            $(this).parents('.form-group').next('.form-group').find('input').focus()
        });
        $(".submit-agree").click(function() {
            $(this).parents('.lead-form').find('.lead-form__container').addClass('hide');
            $(this).parents('.lead-form').find('.lead-form__thanks-msg').removeClass('hide')
        });

        $(".abc-form--lead-gp #select-interest1").selectize({
            placeholder: "Interested in",
            onInitialize: function() {
                this.trigger('change', this.getValue(), true);
            },
            onChange: function() {
                if ($("#lead-form-gp1 #select-interest1").val() != "") {
                    $("#lead-form-gp1 #select-interest1").parents('.input-group--v2').removeClass('disabled')
                } else {
                    $("#lead-form-gp1 #select-interest1").parents('.input-group--v2').addClass('disabled')
                }
            }
        });


    }

    var init = function() {
        leadFormValidate()
    };
    $(init);
})(window.jQuery, this, this.document);
(function ($, window, document, undefined) {

    function wbLoginFlow() {
        var wbLoginForm = $("#lius-salhakar-form");


        jQuery.validator.addMethod("customEmail", function (value, element) {
            // allow any non-whitespace characters as the host part
            return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
        }, "Please enter a valid email address.");

        // $.validator.addMethod("EmailOrMobileOrPolicy", function(value, element) {
        //     var flag
        //     if (value.length == 9 || value.length == 10) {
        //         if (/^[0-9]*$/.test(value)) {
        //             flag = true;
        //         } else if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
        //             flag = true
        //         } else {
        //             flag = false
        //         }
        //     } else {
        //         if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
        //             flag = true
        //         } else {
        //             flag = false
        //         }

        //     }
        //     return flag
        // }, "Sorry, I've enabled very strict email validation");

        var wbLoginValidator = $(wbLoginForm).validate({
            rules: {
                "name": {
                    required: true,
                    EmailOrMobileOrPolicy: false
                },
                "policyNumber": {
                    required: true,
                    EmailOrMobileOrPolicy: false
                },
                "tnc": {
                    required: true,
                    EmailOrMobileOrPolicy: false
                },
                "mobileno": {
                    required: true,
                    number: true,
                    minlength: 10,
                    EmailOrMobileOrPolicy: false
                },
                "email": {
                    required: true,
                    customEmail: true,
                    EmailOrMobileOrPolicy: false
                }
            },
            errorElement: "span",
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest(".form-group"));
            },
            highlight: function (element, errorList) {
                if (errorList == "error") {
                    $('.sent-login-otp').attr('disabled', true).addClass('advisor-light-grey-bg')
                }

            }
        });

        // $('.sent-login-otp').click(function() {
        //     wbLoginForm.valid();
        //     return false
        // });

        // $('#wb-login-form .form-control').on('change', function() {
        //     if (wbLoginForm.valid()) {
        //         $('.sent-login-otp').attr('disabled', false).removeClass('wb-light-grey-bg')

        //     } else {
        //         $('.sent-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')

        //     }

        // })

        // var wbLoginOTPForm = $("#wb-otp-form");

        // var wbLoginOTPValidator = $(wbLoginOTPForm).validate({
        //     ignore: [],
        //     rules: {
        //         "login-otp-hidden": {
        //             required: true,
        //             minlength: 6,
        //             maxlength: 6
        //         }
        //     },
        //     errorElement: "span",
        //     errorPlacement: function(error, element) {
        //         error.appendTo($(element).closest(".form-group"));
        //     },
        //     highlight: function(element, errorList) {
        //         if (errorList == "error") {
        //             $('.verify-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')
        //         }
        //     }
        // });

        // $('.verify-login-otp').click(function() {
        //     wbLoginOTPForm.valid();
        //     return false
        // });

        // $('#wb-otp-form .form-control--otp').on('input', function() {

        //     if ($(this).val() != '') {
        //         $(this).next().focus()
        //     }
        //     var finalVal = "";
        //     $('#wb-otp-form .form-control--otp').each(function() {
        //         finalVal += $(this).val();
        //     })
        //     $('.login-otp-hidden').val(finalVal)

        //     if (wbLoginOTPForm.valid()) {
        //         $('.verify-login-otp').attr('disabled', false).removeClass('wb-light-grey-bg')

        //     } else {
        //         $('.verify-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')

        //     }
        // });

    }

    // function countDownTimer(otpTimer) {
    //     var timer2 = otpTimer;
    //     var interval = setInterval(function() {

    //     var timer = timer2.split(':');
    //     //by parsing integer, I avoid all extra string processing
    //     var minutes = parseInt(timer[0], 10);
    //     var seconds = parseInt(timer[1], 10);
    //     --seconds;
    //     minutes = (seconds < 0) ? --minutes : minutes;
    //     if (minutes < 0) clearInterval(interval);
    //     seconds = (seconds < 0) ? 59 : seconds;
    //     seconds = (seconds < 10) ? '0' + seconds : seconds;
    //     //minutes = (minutes < 10) ?  minutes : minutes;
    //     $('.otp-timer').html(minutes + ':' + seconds);
    //     timer2 = minutes + ':' + seconds;
    //     if(timer2 == "-1:59"){
    //         $('.otp-timer').empty();
    //         $('.otp-timer').append('0:00');
    //         return false;
    //     }
    //     }, 1000);
    // }

    var init = function () {
        // if ($('.login-birth-date').length) {
        //     datePicker("login-birth-date");

        // }
        if ($('.advisor-login').length) {
            wbLoginFlow()
        }
        // if ($('.otp-timer').length != 0) {
        //     var otpTimer = $('.otp-timer').data("time");
        //     countDownTimer(otpTimer);
        // }
    };
    $(init);

})(window.jQuery, this, this.document);
(function($, window, document, undefined) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
            this.value = "";
            }
        });
    };

    // function validateLoginEmailForm() {
    //     var $loginForm = $('#change-email-form'),
    //         inputCemail = '#changeemail',
    //         inputCOtp = '#otp';
    //         loginCSubmit = '#change-mobile-submit';
            
    //         var toggleEmailSubmit = function(){
    //         var emailCValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

    //         if($loginForm.find(inputCOtp).val().length == 6 && $loginForm.find(inputCemail).val().length > 0 && $loginForm.find(inputCemail).val().match(emailCValid)){
    //             $loginForm.find(loginCSubmit).prop('disabled', false);
    //         }else{
    //             $loginForm.find(loginCSubmit).prop('disabled', true);
    //         }
    //     }

    //     $loginForm.find(inputCemail).on('keyup',toggleEmailSubmit);
    //     $loginForm.find(inputCOtp).on('keyup',toggleEmailSubmit);
    //     $loginForm.find(loginCSubmit).on('keyup',toggleEmailSubmit);

    //     $loginForm.each(function(){
    //         var validator = $(this).validate({
    //             rules: {
    //                 changeemail: {
    //                     required: true,
    //                     email: true
    //                 },
    //                 otp: {
    //                     required: true,
    //                     number: true,
    //                     minlength: 6,
    //                 }
    //             },
    //             errorElement: "span",
    //             errorPlacement: function(error, element) {
    //                 error.appendTo($(element).closest(".form-group"));
    //             },
    //             success: function(element) {
    //                 $("#"+ element.attr("id")).remove();
    //             },
    //             highlight: function(element, errorList) {

    //             }
    //         });
    //         $(this).find('.form-check-input').on('click', function() {
    //             var target = $(this)
    //             validator.element(target)
    //         });
    //     });

    // };
    // function validateEmailOtpButton() {
    //     var $loginForm = $('#change-email-form'),
    //         inputCemail = '#changeemail',
    //         OtpCSubmit = '.otp-button';

    //     var toggleEmailSubmit = function(){
    //         if($loginForm.find(inputCemail).val().length){
    //             if (!$loginForm.find(OtpCSubmit).hasClass("clicked")) {
    //                 $loginForm.find(OtpCSubmit).removeClass('disabled');
    //             }
    //         }else{
    //             $loginForm.find(OtpCSubmit).addClass('disabled');
    //         }
    //     }
    //     $loginForm.find(inputCemail).on('keyup',toggleEmailSubmit);
    // }

    // function countDownTimer(otpTimer) {
    //     var timer2 = otpTimer;
    //     var interval = setInterval(function() {

    //     var timer = timer2.split(':');
    //     //by parsing integer, I avoid all extra string processing
    //     var minutes = parseInt(timer[0], 10);
    //     var seconds = parseInt(timer[1], 10);
    //     --seconds;
    //     minutes = (seconds < 0) ? --minutes : minutes;
    //     if (minutes < 0) clearInterval(interval);
    //     seconds = (seconds < 0) ? 59 : seconds;
    //     seconds = (seconds < 10) ? '0' + seconds : seconds;
    //     //minutes = (minutes < 10) ?  minutes : minutes;
    //     $('.otp-timer').html(minutes + ':' + seconds);
    //     timer2 = minutes + ':' + seconds;
    //     if(timer2 == "-1:59"){
    //         $('.otp-timer').empty();
    //         $('.otp-timer').append('0:00');
    //         $(".btn__otp-counter").addClass("hide");
    //         $(".btn__otp-counter-cta").removeClass("hide");
    //         return false;
    //     }
    //     }, 1000);
    // }

    // function otpEmailButtonClick() {
    //     $(".otp-button").on("click", function(){
    //         if (!$(this).hasClass("disabled")) {
    //             $(this).addClass('disabled clicked').prop('disabled', true);
    //             var otpmsg = $(".hidden-otp-msg").val();
    //             $(".form-otp-label").html(otpmsg);
    //             $(".btn__otp-counter").removeClass("hide");

    //             if ($('.otp-timer').length != 0) {
    //                 var otpTimer = $('.otp-timer').data("time");
    //                 countDownTimer(otpTimer);
    //             }
    //             alert("OTP sent successfully");
    //         }
    //     });
    // }
    
    var init = function() {
        $("#otp").inputFilter(function(value) {
            return /^-?\d*$/.test(value); 
        });
        // validateLoginEmailForm();
        // validateEmailOtpButton();
        // otpEmailButtonClick();
    };

    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
            this.value = "";
            }
        });
    };

    // function validateMobileLoginForm() {
    //     var $loginForm = $('#change-mobile-form'),
    //         inputCmobile = '#changemobile',
    //         inputOtp = '#otp';
    //         loginSubmit = '#change-mobile-submit';
            
    //         var toggleSubmit = function(){

    //         if($loginForm.find(inputOtp).val().length == 6){
    //             $loginForm.find(loginSubmit).prop('disabled', false);
    //         }else{
    //             $loginForm.find(loginSubmit).prop('disabled', true);
    //         }
    //     }

    //     $loginForm.find(inputCmobile).on('keyup',toggleSubmit);
    //     $loginForm.find(inputOtp).on('keyup',toggleSubmit);
        
    //     $loginForm.each(function(){
    //         var validator = $(this).validate({
    //             rules: {
    //                 changemobile: {
    //                     required: true,
    //                     number: true,
    //                     minlength: 10,
    //                     maxlength: 10
    //                 },
    //                 otp: {
    //                     required: true,
    //                     number: true,
    //                     minlength: 6,
    //                 },
    //             },
    //             errorElement: "span",
    //             errorPlacement: function(error, element) {
    //                 error.appendTo($(element).closest(".form-group"));
    //             },
    //             success: function(element) {
    //                 $("#"+ element.attr("id")).remove();
    //             },
    //             highlight: function(element, errorList) {

    //             }
    //         });
    //         $(this).find('.form-check-input').on('click', function() {
    //             var target = $(this)
    //             validator.element(target)
    //         });
    //     });

    // };
    // function validateMobileOtpButton() {
    //     var $loginForm = $('#change-mobile-form'),
    //         inputCmobile = '#changemobile',
    //         OtpSubmit = '.otp-button';

    //     var toggleSubmit = function(){
    //         if($loginForm.find(inputCmobile).val().length){
    //             if (!$loginForm.find(OtpSubmit).hasClass("clicked")) {
    //                 $loginForm.find(OtpSubmit).removeClass('disabled');
    //             }
    //         }else{
    //             $loginForm.find(OtpSubmit).addClass('disabled');
    //         }
    //     }
    //     $loginForm.find(inputCmobile).on('keyup',toggleSubmit);
    // }

    // function countDownTimer(otpTimer) {
    //     var timer2 = otpTimer;
    //     var interval = setInterval(function() {

    //     var timer = timer2.split(':');
    //     //by parsing integer, I avoid all extra string processing
    //     var minutes = parseInt(timer[0], 10);
    //     var seconds = parseInt(timer[1], 10);
    //     --seconds;
    //     minutes = (seconds < 0) ? --minutes : minutes;
    //     if (minutes < 0) clearInterval(interval);
    //     seconds = (seconds < 0) ? 59 : seconds;
    //     seconds = (seconds < 10) ? '0' + seconds : seconds;
    //     //minutes = (minutes < 10) ?  minutes : minutes;
    //     $('.otp-timer').html(minutes + ':' + seconds);
    //     timer2 = minutes + ':' + seconds;
    //     if(timer2 == "-1:59"){
    //         $('.otp-timer').empty();
    //         $('.otp-timer').append('0:00');
    //         $(".btn__otp-counter").addClass("hide");
    //         $(".btn__otp-counter-cta").removeClass("hide");
    //         return false;
    //     }
    //     }, 1000);
    // }

    // function otpButtonClick() {
    //     $(".otp-button").on("click", function(){
    //         if (!$(this).hasClass("disabled")) {
    //             $(this).addClass('disabled clicked').prop('disabled', true);
    //             var otpmsg = $(".hidden-otp-msg").val();
    //             $(".form-otp-label").html(otpmsg);
    //             $(".btn__otp-counter").removeClass("hide");

    //             if ($('.otp-timer').length != 0) {
    //                 var otpTimer = $('.otp-timer').data("time");
    //                 countDownTimer(otpTimer);
    //             }
    //             alert("OTP sent successfully");
    //         }
    //     });
    // }
    
    var init = function() {
        $("#otp").inputFilter(function(value) {
            return /^-?\d*$/.test(value); 
        });
        // validateMobileLoginForm();
        // validateMobileOtpButton();
        // otpButtonClick();
    };

    $(init);
})(window.jQuery, this, this.document);
// (function($, window, document, undefined) {

//     function validateCreateOneIDForm() {
//         var $createOneIDForm = $('#create-one-id-form'),
//             inputoneidemail = '#oneidemail',
//             inputoneidmobile = '#oneidmobile',
//             createOneIDSubmit = '#create-one-id-submit';
//         var $forgotPasswordMsg = $("#forgot-password-error").text();
//         var toggleSubmit = function(){
//             var emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
//             if($createOneIDForm.find(inputoneidemail).val().length > 0 && $createOneIDForm.find(inputoneidmobile).val().length > 0 && $createOneIDForm.find(inputoneidemail).val().match(emailValid)){
//                 $createOneIDForm.find(createOneIDSubmit).prop('disabled', false);
//             }else{
//                 $createOneIDForm.find(createOneIDSubmit).prop('disabled', true);
//             }
//         }

//         $createOneIDForm.find(inputoneidemail).on('keyup',toggleSubmit);
//         $createOneIDForm.find(inputoneidmobile).on('keyup',toggleSubmit);
        
//         $createOneIDForm.each(function(){
//             var validator = $(this).validate({
//                 rules: {
//                     oneidemail: {
//                         required: true,
//                         email: true
//                     },
//                     oneidmobile: {
//                         required: true,
//                         number: true,
//                         minlength: 10,
//                         maxlength: 10
//                     },
//                 },
//                 messages: {
//                     fpconfirmpassword: $forgotPasswordMsg
//                 },
//                 errorElement: "span",
//                 errorPlacement: function(error, element) {
//                     error.appendTo($(element).closest(".form-group"));
//                 },
//                 success: function(element) {
//                     $("#"+ element.attr("id")).remove();
//                 },
//                 highlight: function(element, errorList) {

//                 }
//             });
//         });

//     }

//     function validateCreateOneIDWithOtpForm() {
//         var $createOneIDForm = $('#create-one-id-with-otp-form'),
//             inputoneidemail = '#oneidemail',
//             inputoneidmobile = '#oneidmobile',
//             inputoneidotp = '#oneidotp',
//             createOneIDSubmit = '#create-one-id-with-otp-submit';
//         var toggleSubmit = function(){
//             if($createOneIDForm.find(inputoneidemail).val().length > 0 && $createOneIDForm.find(inputoneidmobile).val().length > 0 && $createOneIDForm.find(inputoneidotp).val().length == 6){
//                 $createOneIDForm.find(createOneIDSubmit).prop('disabled', false);
//             }else{
//                 $createOneIDForm.find(createOneIDSubmit).prop('disabled', true);
//             }
//         }

//         $createOneIDForm.find(inputoneidemail).on('keyup',toggleSubmit);
//         $createOneIDForm.find(inputoneidmobile).on('keyup',toggleSubmit);
//         $createOneIDForm.find(inputoneidotp).on('keyup',toggleSubmit);
        
//         $createOneIDForm.each(function(){
//             var validator = $(this).validate({
//                 rules: {
//                     oneidemail: {
//                         required: true,
//                         email: true
//                     },
//                     otp: {
//                         required: true,
//                         number: true,
//                         minlength: 6,
//                     },
//                     oneidmobile: {
//                         required: true,
//                         number: true,
//                         minlength: 10,
//                         maxlength: 10
//                     },
//                 },
//                 errorElement: "span",
//                 errorPlacement: function(error, element) {
//                     error.appendTo($(element).closest(".form-group"));
//                 },
//                 success: function(element) {
//                     $("#"+ element.attr("id")).remove();
//                 },
//                 highlight: function(element, errorList) {

//                 }
//             });
//         });

//     }

//     function validateCreateOneIDNewForm() {
//         var $createOneIDForm = $('#create-one-id-new-form'),
//             inputuname = '#uname',
//             inputpassword = '#password',
//             inputverifypassword = '#verifypassword',
//             createOneIDSubmit = '#create-one-id-new-submit';
//             tnc = '#termsandconditions';
//         var $forgotPasswordMsg = $("#forgot-password-error").text();
//         var $passwordMsg = $("#password-error").text();
//         var $usernameMsg = $("#username-error").text();
//         var $passWordMsg = $("#password-word-error").text(); 
//         var $notEqualMsg = $("#notEqual-error").text(); 
        
//         var toggleSubmit = function(){
//             var letterNumber = /^(?=\D*\d)(?=[^a-z]*[a-z])[0-9A-Za-z_@.#$!-]+$/;
//             var usernameValid = /^[A-Za-z0-9_@.-]+$/;
//             if($createOneIDForm.find(inputuname).val().length >= 6 && $createOneIDForm.find(inputuname).val().length <= 40 && $createOneIDForm.find(inputuname).val().match(usernameValid) && $createOneIDForm.find(inputpassword).val().length >= 8 && $createOneIDForm.find(inputuname).val() != $createOneIDForm.find(inputpassword).val() && !$createOneIDForm.find(inputpassword).val().toLowerCase().includes($createOneIDForm.find(inputuname).val()) && $createOneIDForm.find(inputpassword).val().match(letterNumber) && !$createOneIDForm.find(inputpassword).val().toLowerCase().includes('password') && $createOneIDForm.find(inputverifypassword).val().length >= 8 && $createOneIDForm.find(inputpassword).val() == $createOneIDForm.find(inputverifypassword).val() && $createOneIDForm.find(tnc).is(':checked')){
//                 $createOneIDForm.find(createOneIDSubmit).prop('disabled', false);
//             }else{
//                 $createOneIDForm.find(createOneIDSubmit).prop('disabled', true);
//             }
//         }

//         $createOneIDForm.find(inputuname).on('keyup',toggleSubmit);
//         $createOneIDForm.find(inputpassword).on('keyup',toggleSubmit);
//         $createOneIDForm.find(inputverifypassword).on('keyup',toggleSubmit);
//         $createOneIDForm.find(tnc).on('change',toggleSubmit);
        
//         $createOneIDForm.each(function(){
//             // $.validator.addMethod("alphanumeric", function(value, element) {
//             //     return this.optional(element) || /^[A-Za-z0-9_@.#$!-]+$/i.test(value);
//             // }, $forgotPasswordMsg);
//             $.validator.addMethod("alphanumeric", function(value, element) {
//                 return this.optional(element) || /^(?=\D*\d)(?=[^a-z]*[a-z])[0-9A-Za-z_@.#$!-]+$/i.test(value);
//             }, $forgotPasswordMsg);
//             $.validator.addMethod("alphanumericuser", function(value, element) {
//                 return this.optional(element) || /^[A-Za-z0-9_@.-]+$/i.test(value);
//             }, $usernameMsg);
//             $.validator.addMethod("notEqual", function(value, element, param) {
//                 return this.optional(element) || !value.includes($(param).val());
//             }, $notEqualMsg);
//             $.validator.addMethod("notPassword", function(value, element, param) {
//                 return this.optional(element) || !$(param).val().toLowerCase().includes('password');
//             }, $passWordMsg);   
//             var validator = $(this).validate({
//                 rules: {
//                     uname: {
//                         required: true,
//                         minlength: 6,
//                         alphanumericuser: true,
//                         maxlength: 40
//                     },
//                     password: {
//                         required: true,
//                         notEqual: "#uname",
//                         notPassword: '#password',
//                         alphanumeric: true,
//                         minlength: 8
//                     },
//                     verifypassword: {
//                         required: true,
//                         alphanumeric: true,
//                         minlength: 8,
//                         equalTo : "#password"
//                     },
//                     termsandconditions: {
//                         required: true
//                     },
//                 },
//                 messages: {
//                     verifypassword: $forgotPasswordMsg,
//                     password: {
//                         required: $passwordMsg,
//                         notEqual: $notEqualMsg,
//                         notPassword: $passWordMsg,
//                         alphanumeric: $passwordMsg
//                     },
//                     uname: $usernameMsg
//                 },
//                 errorElement: "span",
//                 errorPlacement: function(error, element) {
//                     error.appendTo($(element).closest(".form-group"));
//                 },
//                 success: function(element) {
//                     $("#"+ element.attr("id")).remove();
//                 },
//                 highlight: function(element, errorList) {

//                 }
//             });
//         });

//     }

//     function validateOtpButton() {
//         var $createOneIDForm = $('#create-one-id-with-otp-form'),
//             inputoneidmobile = '#oneidmobile',
//             createOneIDSubmit = '.otp-oneid-button';

//         var toggleSubmit = function(){
//             if($createOneIDForm.find(inputoneidmobile).val().length){
//                 if (!$createOneIDForm.find(createOneIDSubmit).hasClass("clicked")) {
//                     $createOneIDForm.find(createOneIDSubmit).removeClass('disabled');
//                 }
//             }else{
//                 $createOneIDForm.find(createOneIDSubmit).addClass('disabled');
//             }
//         }
//         $createOneIDForm.find(inputoneidmobile).on('keyup',toggleSubmit);
//     }

//     function countDownTimer(otpTimer) {
//         var timer2 = otpTimer;
//         var interval = setInterval(function() {

//         var timer = timer2.split(':');
//         //by parsing integer, I avoid all extra string processing
//         var minutes = parseInt(timer[0], 10);
//         var seconds = parseInt(timer[1], 10);
//         --seconds;
//         minutes = (seconds < 0) ? --minutes : minutes;
//         if (minutes < 0) clearInterval(interval);
//         seconds = (seconds < 0) ? 59 : seconds;
//         seconds = (seconds < 10) ? '0' + seconds : seconds;
//         //minutes = (minutes < 10) ?  minutes : minutes;
//         $('.otp-timer').html(minutes + ':' + seconds);
//         timer2 = minutes + ':' + seconds;
//         if(timer2 == "-1:59"){
//             $('.otp-timer').empty();
//             $('.otp-timer').append('0:00');
//             $(".btn__otp-counter").addClass("hide");
//             $(".btn__otp-counter-cta").removeClass("hide");
//             return false;
//         }
//         }, 1000);
//     }

//     function otpButtonClick() {
//         $(".otp-oneid-button").on("click", function(){
//             if (!$(this).hasClass("disabled")) {
//                 $(this).addClass('disabled clicked').prop('disabled', true);
//                 $(".oneid-otp-wrapper").removeClass("hide");
//                 var otpmsg = $(".hidden-otp-msg").val();
//                 $(".form-otp-label").html(otpmsg);
//                 $(".btn__otp-counter").removeClass("hide");

//                 if ($('.otp-timer').length != 0) {
//                     var otpTimer = $('.otp-timer').data("time");
//                     countDownTimer(otpTimer);
//                 }
//                 alert("OTP sent successfully");
//             }
//         });
//     }
    
//     var init = function() {
//         validateCreateOneIDForm();
//         validateCreateOneIDWithOtpForm();
//         validateCreateOneIDNewForm();
//         validateOtpButton();
//         otpButtonClick();
//     };

//     $(init);
// })(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function validateForgotPasswordForm() {
        var $forgotPasswordForm = $('#forgot-password-form'),
            inputfpnewpassword = '#fpnewpassword',
            inputfpconfirmpassword = '#fpconfirmpassword',
            forgotPasswordSubmit = '#forgot-password-submit';
        var $passwordMsg = $("#password-error").text();
        var $forgotPasswordMsg = $("#forgot-password-error").text();
        var toggleSubmit = function(){
            var letterNumber = /^(?=\D*\d)(?=[^a-z]*[a-z])[0-9A-Za-z]+$/;
            if($forgotPasswordForm.find(inputfpnewpassword).val().length >= 8 && $forgotPasswordForm.find(inputfpnewpassword).val().match(letterNumber) && $forgotPasswordForm.find(inputfpconfirmpassword).val().match(letterNumber) && $forgotPasswordForm.find(inputfpconfirmpassword).val().length >= 8 && $forgotPasswordForm.find(inputfpnewpassword).val() == $forgotPasswordForm.find(inputfpconfirmpassword).val()){
                $forgotPasswordForm.find(forgotPasswordSubmit).prop('disabled', false);
            }else{
                $forgotPasswordForm.find(forgotPasswordSubmit).prop('disabled', true);
            }
        }

        $forgotPasswordForm.find(inputfpnewpassword).on('keyup',toggleSubmit);
        $forgotPasswordForm.find(inputfpconfirmpassword).on('keyup',toggleSubmit);
        
        $forgotPasswordForm.each(function(){
            $.validator.addMethod("alphanumericnew", function(value, element) {
                return this.optional(element) || /^(?=\D*\d)(?=[^a-z]*[a-z])[0-9A-Za-z]+$/i.test(value);
            }, $passwordMsg);
            $.validator.addMethod("alphanumeric", function(value, element) {
                return this.optional(element) || /^(?=\D*\d)(?=[^a-z]*[a-z])[0-9A-Za-z]+$/i.test(value);
            }, $forgotPasswordMsg);
            var validator = $(this).validate({
                rules: {
                    fpnewpassword: {
                        required: true,
                        alphanumericnew: true,
                        minlength: 8
                    },
                    fpconfirmpassword: {
                        required: true,
                        alphanumeric: true,
                        minlength: 8,
                        equalTo : "#fpnewpassword"
                    },
                },
                messages: {
                    fpconfirmpassword: $forgotPasswordMsg
                },
                errorElement: "span",
                errorPlacement: function(error, element) {
                    error.appendTo($(element).closest(".form-group"));
                },
                success: function(element) {
                    $("#"+ element.attr("id")).remove();
                },
                highlight: function(element, errorList) {

                }
            });
        });

    }

    
    var init = function() {
        validateForgotPasswordForm();
    };

    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function validateLoginForm() {
        var $loginForm = $('#login-form'),
            inputUname = '#uname',
            inputPassword = '#password',
            loginSubmit = '#login-submit';

        var toggleSubmit = function(){
            if($loginForm.find(inputUname).length > 0) {
                if($loginForm.find(inputUname).val().length > 0 && $loginForm.find(inputPassword).val().length > 0){
                    $loginForm.find(loginSubmit).prop('disabled', false);
                }    
            }else if ($loginForm.find(inputPassword).val().length > 0) {
                $loginForm.find(loginSubmit).prop('disabled', false);
            }else{
                $loginForm.find(loginSubmit).prop('disabled', true);
            }
        }

        $loginForm.find(inputUname).on('keyup',toggleSubmit);
        $loginForm.find(inputPassword).on('keyup',toggleSubmit);

    };

    var init = function() {
        $('[data-toggle="tooltip"]').tooltip({
            template: '<div class="tooltip login-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        });
        $('[data-toggle="post-login-tooltip"]').tooltip({
            template: '<div class="tooltip post-login-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        });
        validateLoginForm();
    };

    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
            this.oldValue = this.value;
            this.oldSelectionStart = this.selectionStart;
            this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
            this.value = this.oldValue;
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
            this.value = "";
            }
        });
    };

    // function otpPasswordCta(){
    //     $(".use-otp-cta").on("click", function(){
    //         $(".abc-form-wrapper[data-section='otp-form']").removeClass("hide");
    //         $(".abc-form-wrapper[data-section='password-form']").addClass("hide");
    //     });

    //     $(".use-otp-cta-modal").on("click", function(){
    //         $(".abc-form-wrapper[data-section='otp-form-modal']").removeClass("hide");
    //         $(".abc-form-wrapper[data-section='password-form-modal']").addClass("hide");
    //     });
    // }
    // function passwordOtpCta() {
    //     $(".cta-password-on-otp").on("click", function (e) {
    //       e.preventDefault();
    //       $(".abc-form-wrapper[data-section='otp-form']").addClass("hide");
    //       $(".abc-form-wrapper[data-section='password-form']").removeClass("hide");
    //     });

    //     $(".cta-password-on-otp-modal").on("click", function (e) {
    //         e.preventDefault();
    //         $(".abc-form-wrapper[data-section='otp-form-modal']").addClass("hide");
    //         $(".abc-form-wrapper[data-section='password-form-modal']").removeClass("hide");
    //     }); 
    // }
    // function validateLoginForm() {
    //     var $loginForm = $('#otp-login-form'),
    //         inputUname = '#otpuname',
    //         inputOtp = '#otp',
    //         loginSubmit = '#login-submit';

    //     var toggleSubmit = function(){
    //         if($loginForm.find(inputOtp).val().length == 6){
    //             $loginForm.find(loginSubmit).prop('disabled', false);
    //         }else{
    //             $loginForm.find(loginSubmit).prop('disabled', true);
    //         }
    //     }

    //     $loginForm.find(inputUname).on('keyup',toggleSubmit);
    //     $loginForm.find(inputOtp).on('keyup',toggleSubmit);
        
    //     $loginForm.each(function(){
    //         var validator = $(this).validate({
    //             rules: {
    //                 otpuname: {
    //                     required: true,
    //                     minlength: 1
    //                 },
    //                 otp: {
    //                     required: true,
    //                     number: true,
    //                     minlength: 6,
    //                 },
    //             },
    //             errorElement: "span",
    //             errorPlacement: function(error, element) {
    //                 error.appendTo($(element).closest(".form-group"));
    //             },
    //             success: function(element) {
    //                 $("#"+ element.attr("id")).remove();
    //             },
    //             highlight: function(element, errorList) {

    //             }
    //         });
    //         $(this).find('.form-check-input').on('click', function() {
    //             var target = $(this)
    //             validator.element(target)
    //         });
    //     });

    // };
    // function validateOtpButton() {
    //     var $loginForm = $('#otp-login-form'),
    //         inputUname = '#otpuname',
    //         OtpSubmit = '.otp-button';

    //     var toggleSubmit = function(){
    //         if($loginForm.find(inputUname).val().length){
    //             if (!$loginForm.find(OtpSubmit).hasClass("clicked")) {
    //                 $loginForm.find(OtpSubmit).removeClass('disabled');
    //             }
    //         }else{
    //             $loginForm.find(OtpSubmit).addClass('disabled');
    //         }
    //     }
    //     $loginForm.find(inputUname).on('keyup',toggleSubmit);
    // }

    // function countDownTimer(otpTimer) {
    //     var timer2 = otpTimer;
    //     var interval = setInterval(function() {

    //     var timer = timer2.split(':');
    //     //by parsing integer, I avoid all extra string processing
    //     var minutes = parseInt(timer[0], 10);
    //     var seconds = parseInt(timer[1], 10);
    //     --seconds;
    //     minutes = (seconds < 0) ? --minutes : minutes;
    //     if (minutes < 0) clearInterval(interval);
    //     seconds = (seconds < 0) ? 59 : seconds;
    //     seconds = (seconds < 10) ? '0' + seconds : seconds;
    //     //minutes = (minutes < 10) ?  minutes : minutes;
    //     $('.otp-timer').html(minutes + ':' + seconds);
    //     timer2 = minutes + ':' + seconds;
    //     if(timer2 == "-1:59"){
    //         $('.otp-timer').empty();
    //         $('.otp-timer').append('0:00');
    //         $(".btn__otp-counter").addClass("hide");
    //         $(".btn__otp-counter-cta").removeClass("hide");
    //         return false;
    //     }
    //     }, 1000);
    // }

    // function otpButtonClick() {
    //     $(".otp-button").on("click", function(){
    //         if (!$(this).hasClass("disabled")) {
    //             $(this).addClass('disabled clicked').prop('disabled', true);
    //             var otpmsg = $(".hidden-otp-msg").val();
    //             $(".form-otp-label").html(otpmsg);
    //             $(".btn__otp-counter").removeClass("hide");

    //             if ($('.otp-timer').length != 0) {
    //                 var otpTimer = $('.otp-timer').data("time");
    //                 countDownTimer(otpTimer);
    //             }
    //             alert("OTP sent successfully");
    //         }
    //     });
    // }
    
    var init = function() {
        $("#otp").inputFilter(function(value) {
            return /^-?\d*$/.test(value); 
        });
        // validateLoginForm();
        // validateOtpButton();
        // otpButtonClick();
        // otpPasswordCta();
        // passwordOtpCta();
    };

    $(init);
})(window.jQuery, this, this.document);
(function ($, window, document, undefined) {
  function togglePassword() {
    $(".toggle-password").on("click", function () {
      var input = $($(this).prev("input"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
        $(this).find(".icon").removeClass("icon-hide-password-eye");
        $(this).find(".icon").addClass("icon-portfolio");
        hidePasswordAuto(input, $(this));
      } else {
        input.attr("type", "password");
        $(this).find(".icon").addClass("icon-hide-password-eye");
        $(this).find(".icon").removeClass("icon-portfolio");
      }
      return false;
    });
  }

  function hidePasswordAuto(input, clickedElem) {
    // Hide Password field texts after 7 second clicked on perticular EyeIcon.
    setTimeout(function () {
      var hasHasHideEyeIcon = clickedElem.find(".icon").hasClass("icon-hide-password-eye");
      if (!hasHasHideEyeIcon) {
        clickedElem.find(".icon").removeClass("icon-portfolio");
        clickedElem.find(".icon").addClass("icon-hide-password-eye");
        input.attr("type", "password");
      }
    }, 7000);
  }
  var init = function () {
    togglePassword();
  };
  $(init);
})(window.jQuery, this, this.document);

(function($, window, document, undefined) {





    var init = function() {



    };
    $(init);
})(window.jQuery, this, this.document);

(function($, window, document, undefined) {

    function mediaSlick() {

        $('.media-tile--blog').not('.slick-initialized').slick({
            autoplay: true,
            slidesToShow: 3,
            arrows: true,
            infinite: true,
            prevArrow: $('.slick-nav--insurance .slick-nav__btn--prev'),
            nextArrow: $('.slick-nav--insurance .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }]
        });

    }

    // function mediaLike() {
        
    //     $('.media-tile__likes').on('click', function() {
    //         var count = parseInt($(this).find('.media-tile__likes-count').html().substr(0, 2));
    //         if ($(this).hasClass('media-tile__likes--active')) {
    //             count -= 1;
    //             $(this).find('.media-tile__likes-count').html(count + 'UpVotes')
    //             $(this).removeClass('media-tile__likes--active')
    //         } else {
    //             count += 1;
    //             $(this).find('.media-tile__likes-count').html(count + "UpVotes")
    //             $(this).addClass('media-tile__likes--active')
    //         }
    //     });
    // }

    var init = function() {

        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            $('.media-tile__media').each(function() {
                var $wrapper = $(this),
                    imgUrl = $wrapper.find('img').prop('src');
                if (imgUrl) {
                    $wrapper
                        .css('backgroundImage', 'url(' + imgUrl + ')')
                        .addClass('media-tile__media--ie')
                        .children('img').hide();
                }
            });
        }

        if ($(window).width() < 768) {
            if ($('.media-tile--blog').length) {
                mediaSlick()
            }
        }

        // mediaLike();

        var p = $('.media-tile__title--blog').find('span:first-child');
        var divh = $('.media-tile__title--blog').height();
        $(p).each(function() {
            while ($(this).outerHeight() > divh) {
                $(this).text(function(index, text) {
                    return text.replace(/\W*\s(\S)*$/, '...');
                });
            }
        })

    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function viewProfile() {
        $('.profiles__button').on('click', function(e) {
            e.preventDefault();
            var target = $(this).attr('data-target');
            $('.profiles-overlay').fadeIn(100)
            $('#' + target).fadeIn(400);
            $('body').css('overflow', 'hidden');
        });

        $('.profiles-overlay,.profiles-modal__close').on('click', function(e) {
            e.preventDefault();
            $('.profiles-overlay').fadeOut(100)
            $('.profiles-modal').fadeOut(400);
            $('body').css('overflow', 'auto');

        })
    }

    function peopleSlick() {

        $('.people-list').slick({
            autoplay: false,
            slidesToShow: 1,
            arrows: false,
            infinite: false,
            variableWidth: true

        });
    }
    var init = function() {
        viewProfile();
        if ($('.profiles__about').length) {
            $('.profiles__about').mCustomScrollbar({
                theme: "dark-3"
            });
        }
        if ($(window).width() < 768) {
            peopleSlick()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function socialRedirects() {
        $('.our-funds__social-link--fb').on('click', function(e) {
            e.preventDefault();
            var url = window.location.href;
            window.location.href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
        })

        $('.our-funds__social-link--linkedin').on('click', function(e) {
            e.preventDefault();
            var url = window.location.href;
            window.location.href = "https://www.linkedin.com/shareArticle?mini=true&url=" + url;
        })

        $('.our-funds__social-link--twitter').on('click', function(e) {
            e.preventDefault();
            var url = window.location.href;
            window.location.href = "https://twitter.com/share?url=" + url;
        })

        $('.our-funds__social-link--whatsapp').on('click', function(e) {
            e.preventDefault();
            var url = window.location.href;
            window.location.href = "https://api.whatsapp.com/send?phone=91xxxxxxxxxx&text=Hi%20we%20need%20help%20regarding%20something";
        })

    }

    var init = function() {
        socialRedirects()

        if ($('#select-fund-name').length) {
            selectDropdown("select-fund-name")
        }

        if ($('#select-fund-performance').length) {
            selectDropdown("select-fund-performance")
        }

        if ($('#select-your-plan').length) {
            selectDropdown("select-your-plan")
        }

        if ($('#select-your-historical-plan').length) {
            selectDropdown("select-your-historical-plan")
        }

        if ($('#select-your-historical-fund').length) {
            selectDropdown("select-your-historical-fund")
        }


    };
    $(init);
})(window.jQuery, this, this.document);
// (function($, window, document, undefined) {

//     function ourFundsChart() {

//         $(".our-funds-chart").each(function(index) {

//             var ctx = document.getElementsByClassName("our-funds-chart")[index].getContext('2d');
//             var titleFontSize = 18,
//                 tickFontSize = 14;
//             if ($(window).width() < 768) {
//                 titleFontSize = 14, tickFontSize = 12;
//             }

//             var fundsChartBorderColor = $(".funds-chart-border-color").val();
//             var fundsChartBackgroundColor = $(".funds-chart-background-color").val();

//             var myChart = new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: ["May 19", "Jun 19", "Jul 19", "Aug 19", "Sep 19", "Oct 19", "Nov 19", "Dec 19", "Jan 20", "Feb 20", "Mar 20", "Apr 20", "May 20", "Jun 20"],
//                     datasets: [{
//                         label: 'Series 1', // Name the series
//                         data: [34, 35, 36, 37, 36, 35, 38, 37, 36, 30, 34, 35, 36], // Specify the data values array
//                         fill: false,
//                         borderColor: fundsChartBorderColor, // Add custom color border (Line)
//                         backgroundColor: fundsChartBackgroundColor, // Add custom color background (Points and Fill)
//                         borderWidth: 5, // Specify bar border width
//                         pointRadius: 5,
//                         pointHoverRadius: 5
//                     }]
//                 },
//                 options: {
//                     responsive: true, // Instruct chart js to respond nicely.
//                     maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
//                     legend: {
//                         display: false
//                     },
//                     scales: {
//                         yAxes: [{
//                             ticks: {
//                                 min: 24,
//                                 max: 40,
//                                 fontSize: tickFontSize
//                             },
//                             scaleLabel: {
//                                 display: true,
//                                 labelString: 'NAV in Rs',
//                                 fontSize: titleFontSize
//                             }

//                         }],
//                         xAxes: [{
//                             gridLines: {
//                                 display: false
//                             },
//                             ticks: {
//                                 fontSize: tickFontSize
//                             },
//                             scaleLabel: {
//                                 display: true,
//                                 labelString: '1 Year',
//                                 fontSize: titleFontSize
//                             }

//                         }]
//                     }
//                 }
//             });

//         })
//     }

//     var init = function() {
//         if ($('#our-funds-chart').length) {
//             ourFundsChart()
//         }
//     };
//     $(init);
// })(window.jQuery, this, this.document);
(function($, window, document, undefined) {
/*
    function policyForm() {
        var $policyForm = $("#policy-form");

        $($policyForm).validate({
            onfocusout: false,
            rules: {
                policyNumber: {
                    required: true,
                    number: true
                },
                policyDate: {
                    required: true,
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            },
        });


        var $policySubmit = $("#pay-now");

        //Validate form
        $policySubmit.click(function() {
            $policyForm.valid();
        });
    }

    function initalForm() {
        var $initialForm = $("#initial-form");

        $($initialForm).validate({
            onfocusout: false,
            rules: {
                applicationNumber: {
                    required: true,
                    applicationNo: true
                },
                birthdate: {
                    required: true,
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            },
        });


        var $initialSubmit = $("#pay-initial");

        //Validate form
        $initialSubmit.click(function() {
            $initialForm.valid();
        });
    }

    function loanPaymentForm() {
        var $loanForm = $("#loan-form");

        $($loanForm).validate({
            onfocusout: false,
            rules: {
                loanNumber: {
                    required: true,
                    number: true
                },
                birthdate1: {
                    required: true,
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            },
        });


        var $loanSubmit = $("#pay-loan-payment");

        //Validate form
        $loanSubmit.click(function() {
            $loanForm.valid();
        });
    }


    function applicationNumber(evt) {
        $('.application-number').on('keypress', function(evt) {
            var applicationNo = new RegExp('^[a-z]{0,3}\d{7}$');
            var charCode = (evt.which) ? evt.which : evt.keyCode
            var val = $(this).val();
            if (val.length < 3) {
                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) {
                    return true
                } else {
                    return false
                }
            } else {
                if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    return false;
                } else {
                    return true
                }
            }
            return true;
        })

    }
*/
    var init = function() {
        if ($('.form-datepicker').length) {
            datePicker("policy-date");
            datePicker("birth-date");
            datePicker("birth-date1");
        }
        
        /*
        jQuery.validator.addMethod("applicationNo", function(value, element) {
            // allow any non-whitespace characters as the host part
            return this.optional(element) || /^[a-z]{0,3}\d{7}$/.test(value);
        }, 'Please enter a valid Application number.');
        policyForm()
        initalForm()
        loanPaymentForm()
        applicationNumber()
        */
    };
    $(init);
})(window.jQuery, this, this.document);
(function ($, window, document, undefined) {


    var init = function () {

    };
    $(init);
})(window.jQuery, this, this.document);

(function($) {
    var contentHorizontalTabWrapper = $(".dashboard__content-horizontal-tab-main-wrapper ul");
    var navNext = $(".nav-next");
    var navPrev = $(".nav-prev");
	contentHorizontalTabWrapper.on('scroll', function() {
    	$val = $(this).scrollLeft();
    	if($(this).scrollLeft() + $(this).innerWidth()>=$(this)[0].scrollWidth){
            navNext.hide();
        } else {
    		navNext.show();
    	}
    	if($val == 0){
    		navPrev.hide();
    	} else {
    		navPrev.show();
    	}
      });
    navNext.on("click", function(){
	    contentHorizontalTabWrapper.animate( { scrollLeft: '+=250' }, 800);
	});
	navPrev.on("click", function(){
		contentHorizontalTabWrapper.animate( { scrollLeft: '-=250' }, 800);
	});
})(jQuery);
window.addEventListener('DOMContentLoaded', function (event) {
    
    function contentHorizontalTabClicked(){
        // Selected Variables
        var horizontalContentTabItem = $(".dashboard__content-horizontal-tab-main-wrapper ul li");
        var dashboardBottomContentWrapper = $(".dashboard__horizontal-inner-content-wrapper");

        var mobileHorizontalContentTab = $(".dashboard__portfolio-mobile-dropdown");

        horizontalContentTabItem.on("click", function() {
            // Variables
            var $this = $(this);
            var tabDataID = $this.data("id");
            
            // Dashboard Bottom Wrapper Updated
            dashboardBottomContentWrapper.removeClass("active");
            dashboardBottomContentWrapper.each(function(){
                var bottomThis = $(this);
                if (bottomThis.data("id") == tabDataID) {
                    bottomThis.addClass("active");
                }
            });

            // Horizontal Content Tabs Updated
            horizontalContentTabItem.removeClass("active");
            $this.addClass("active");

        });

        mobileHorizontalContentTab.on("click", function() {
            // Variables
            var $this = $(this);
            
            // Mobile Horizontal Content Tabs Updated
            if(!$this.hasClass("active")) {
                mobileHorizontalContentTab.removeClass("active");
                $(".dashboard__portfolio-inner-content-wrapper").removeClass("active");
                $(".dashboard__horizontal-inner-content-wrapper").removeClass("active");
                $this.addClass("active");
                $this.next(".dashboard__portfolio-inner-content-wrapper").addClass("active");
                $this.closest(".dashboard__horizontal-inner-content-wrapper").addClass("active");
            } else {
                $this.removeClass("active");
                $this.next(".dashboard__portfolio-inner-content-wrapper").removeClass("active");
                $this.closest(".dashboard__horizontal-inner-content-wrapper").removeClass("active");
                
            }
            
        });

        // if($(".dashboard__content-horizontal-tab-main-wrapper ul li").length > 4) {
        //     $(".dashboard__content-horizontal-tab-main-wrapper .nav-next").css("display","block");
        // }

    }
    contentHorizontalTabClicked();
    
    $(document).ajaxComplete(function() {
        contentHorizontalTabClicked();
    });
});

function showContentNextArrow() {
    setTimeout(function(){
            $(".dashboard__inner-content-wrapper.active .dashboard__content-horizontal-tab-main-wrapper ul").each(function () {
            if ($(this).get(0).scrollWidth <= $(this).innerWidth()) {
                $(this).closest(".dashboard__content-horizontal-tab-main-wrapper").find('.nav-next').css("display","none").addClass("test123");
            } else {
                $(this).closest(".dashboard__content-horizontal-tab-main-wrapper").find('.nav-next').css("display","block").addClass("test");
            }
        });
    },700);
}

(function($) {
    
    $(document).ready(function(){
        var viewportWidth = $(window).width();
        // Content Horizontal First Tab Selected Click
        setTimeout(function(){
            $(".dashboard__content-horizontal-tab-main-wrapper li:first-child").trigger("click");
            if(viewportWidth < 768){
                $(".dashboard__right-list-wrapper:not('.low-padding') .dashboard__horizontal-inner-content-wrapper.active").find(".dashboard__portfolio-mobile-dropdown").trigger("click");
                // Default first accordion will open in mobile view
                $('.dashboard__portfolio-content-wrapper.dashboard__horizontal-inner-content-wrapper.active > div').addClass('active');
            }
        },700);

        //Open By default first Tab
        if(viewportWidth < 768){
            if($(".dashboard__portfolio-main-wrapper > div")[0]) {
                $(".dashboard__portfolio-content-wrapper.dashboard__horizontal-inner-content-wrapper:first-of-type > div").addClass("active");
            }
            
        }
        showContentNextArrow()
        


    });
    $(window).resize(function(){
        var viewportWidth = $(window).width();
        if(viewportWidth >= 768){
            $(".dashboard__right-list-wrapper:not('.low-padding') .dashboard__portfolio-mobile-dropdown").removeClass("active");
            $(".dashboard__right-list-wrapper:not('.low-padding') .dashboard__portfolio-mobile-dropdown").next(".dashboard__portfolio-inner-content-wrapper").removeClass("active");
            
        }
        //Open By default first Tab
        if(viewportWidth < 768){
            if($(".dashboard__portfolio-main-wrapper > div")[0]) {
                $(".dashboard__portfolio-content-wrapper.dashboard__horizontal-inner-content-wrapper:first-of-type > div").addClass("active");
            }
            
        }

        

    });
   

    $(document).ajaxComplete(function() {

        var viewportWidth = $(window).width();
        // Content Horizontal First Tab Selected Click
        setTimeout(function(){
            $(".dashboard__content-horizontal-tab-main-wrapper li:first-child").trigger("click");
            if(viewportWidth < 768){
                $(".dashboard__right-list-wrapper:not('.low-padding') .dashboard__horizontal-inner-content-wrapper.active").find(".dashboard__portfolio-mobile-dropdown").trigger("click");
            }
        },700);

        $(window).resize(function(){
            var viewportWidth = $(window).width();
            if(viewportWidth >= 768){
                $(".dashboard__right-list-wrapper:not('.low-padding') .dashboard__portfolio-mobile-dropdown").removeClass("active");
                $(".dashboard__right-list-wrapper:not('.low-padding') .dashboard__portfolio-mobile-dropdown").next(".dashboard__portfolio-inner-content-wrapper").removeClass("active");
            }
        });
        
        

    });

})(jQuery);
(function($) {
  // Selected Variables
  var tooltipGlobalItem = $(".tooltip-custom-component .tooltip-custom");
  $(document).ready(function() {
    tooltipGlobalItem.each(function() {
      if ($(this).hasClass("data-tooltip")) {
        var dataInfoText = $(this).data("title");
        $(this).append("<span>" + dataInfoText + "</span>");
      }
    });

    var lightDropdown = ".dashboard__light-dropdown";
    if ($(lightDropdown).length) {
      $(lightDropdown + " .selected").on("click", function() {
        $(this).toggleClass("active");
        $(this)
          .next(".select-dropdown")
          .toggleClass("active");
      });

      $(lightDropdown + " .select-dropdown li").on("click", function() {
        var dropdownText = $(this).html();
        $(".select-dropdown li").removeClass("active");
        $(this).addClass("active");
        $(this)
          .closest(lightDropdown)
          .find(".selected")
          .html(dropdownText)
          .removeClass("active");
        $(this)
          .closest(lightDropdown)
          .removeClass("active");
        $(this)
          .closest(".select-dropdown")
          .removeClass("active");
      });
    }

    var darkDropdown = ".dashboard__dark-dropdown";
    if ($(darkDropdown).length) {
      $(darkDropdown + " .selected").on("click", function() {
        $(this).toggleClass("active");
        $(this)
          .next(".select-dropdown")
          .toggleClass("active");
      });

      $(darkDropdown + " .select-dropdown li").on("click", function() {
        var dropdownText = $(this).html();
        $(".select-dropdown li").removeClass("active");
        $(this).addClass("active");
        $(this)
          .closest(darkDropdown)
          .find(".selected")
          .html(dropdownText)
          .removeClass("active");
        $(this)
          .closest(darkDropdown)
          .removeClass("active");
        $(this)
          .closest(".select-dropdown")
          .removeClass("active");
      });
    }

    if ($(".dashboard__right-list-wrapper").length) {
      // Select Option
      selectDropdown("selector");
      selectDropdown("hi-selector");
      selectDropdownMulti(".fy-selector");
      selectDropdownMulti(".dropdown-selector");
      selectDropdownMulti(".mf-folio");

      var date = new Date();
      date.setDate(date.getDate() - 730);
      var fromdate =
        ".pf-post-login-date,.mf-post-login-date,.home-finance-post-login-date, .li-post-login-date, .li-custom-post-login-date";
      var todate =
        ".pf-post-login-to-date,.mf-post-login-to-date,.home-finance-post-login-to-date, .li-post-login-to-date, .li-custom-post-login-to-date";
      $(fromdate)
        .datepicker({
          autoclose: true,
          format: "dd/mm/yyyy",
          startDate: date,
          endDate: "-1d",
          numberOfMonths: 2
        })
        .on("changeDate", function(selected) {
          var minDate = new Date(selected.date.valueOf());
          $(todate).datepicker("setStartDate", minDate);
        });

      $(todate)
        .datepicker({
          autoclose: true,
          format: "dd/mm/yyyy"
        })
        .on("changeDate", function(selected) {
          var minDate = new Date(selected.date.valueOf());
          $(fromdate).datepicker("setEndDate", minDate);
        });

      $(".form-calendar-icon").click(function() {
        $(this)
          .prev("input.form-datepicker")
          .focus();
      });
    }
    if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      $("body").addClass("mac");
    } else {
      $("body").addClass("pc");
    }
    getViewPortHeight();
    dropdownFormValidation();
    tableViewMore();
    customLiDropdown();
  });
  function dropdownFormValidation() {
    $(".dropdown-form:not('.dropdown-sms-form')").validate({
      ignore:
        ":hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input"
    });
    $(".dropdown-form .dashboard__cta").click(function(e) {
      if (
        $(this)
          .parents(".dropdown-form")
          .valid()
      ) {
        //alert("form is valid");
      }
    });
  }
  function getViewPortHeight() {
    var footerHeight = $("footer .footer-bottom-wrapper").height();
    var screenHeight = $(window).height();
    var contentHeight = screenHeight - footerHeight;
    if ($("body").hasClass("post-login-website")) {
      $(".main-content").css("min-height", contentHeight);
    }
  }

  function tableViewMore() {
    $(".dashboard__table-v2 tbody tr:lt(4)").addClass("visible");
    $(".tr-view-more").click(function(e) {
      e.preventDefault();
      $(".dashboard__table-v2 tbody tr:not(.visible)").addClass("visible"); // select next 3 hidden Product Items and show them
      if ($(".dashboard__table-v2 tbody tr:not(.visible)").length == 0) {
        // check if any hidden Product Items still exist
        $(this).hide();
      }
    });
  }

  function customLiDropdown() {
    $("select[name='lidocsfinancialyear']").on("change", function() {
      if ($(this).val() == "custom") {
        $(".li-custom-date-range").removeClass("hide");
      } else {
        $(".li-custom-date-range").addClass("hide");
      }
    });
  }

  $(document).ajaxComplete(function() {
    function selectDropdownMulti(selector) {
      $selector = selector;
      $($selector).selectize({
        create: false,
        onFocus: function() {
          var input = "selectize-input input",
            wrapper = "selectize-input";
          $("." + input).attr("readonly", true);
          $("." + input + ", ." + wrapper).css("cursor", "pointer");
        },
        onChange: function(value) {
          truncateSelectize();
        }
      });
    }
    //Datepicker Single
    function datePickerSingle(selector, minusDay) {
      var $datepickerImg = $(".form-group__datepicker-container img");
      $selector = selector;
      $minusDay = minusDay;
      $datepickerImg.click(function() {
        var datepickerImg = $(this)
          .prev()
          .attr("class");
        var datepickerIMgArray = datepickerImg.split(" ");
        datepickerImageClick = datepickerIMgArray.join(".");
        $("." + datepickerImageClick).trigger("focus");
      });

      $("." + $selector).datepicker({
        format: "dd/mm/yyyy",
        endDate: $minusDay,
        autoclose: true,
        orientation: "auto"
      });
    }

    var lightDropdown = ".dashboard__light-dropdown";
    if ($(lightDropdown).length) {
      $(lightDropdown + " .selected").on("click", function() {
        $(this).toggleClass("active");
        $(this)
          .next(".select-dropdown")
          .toggleClass("active");
      });

      $(lightDropdown + " .select-dropdown li").on("click", function() {
        var dropdownText = $(this).html();
        $(".select-dropdown li").removeClass("active");
        $(this).addClass("active");
        $(this)
          .closest(lightDropdown)
          .find(".selected")
          .html(dropdownText)
          .removeClass("active");
        $(this)
          .closest(lightDropdown)
          .removeClass("active");
        $(this)
          .closest(".select-dropdown")
          .removeClass("active");
      });
    }

    var darkDropdown = ".dashboard__dark-dropdown";
    if ($(darkDropdown).length) {
      $(darkDropdown + " .selected").on("click", function() {
        $(this).toggleClass("active");
        $(this)
          .next(".select-dropdown")
          .toggleClass("active");
      });

      $(darkDropdown + " .select-dropdown li").on("click", function() {
        var dropdownText = $(this).html();
        $(".select-dropdown li").removeClass("active");
        $(this).addClass("active");
        $(this)
          .closest(darkDropdown)
          .find(".selected")
          .html(dropdownText)
          .removeClass("active");
        $(this)
          .closest(darkDropdown)
          .removeClass("active");
        $(this)
          .closest(".select-dropdown")
          .removeClass("active");
      });
    }

    if ($(".dashboard__right-list-wrapper").length) {
      // Select Option
      selectDropdown("selector");
      // Date Picker
      datePickerSingle("post-login-date");
    }

    $(".listsummary-head-title").on("click", function() {
      $(this)
        .closest(".listsummary-main-wrapper")
        .toggleClass("active");
    });
    $(".listsummary-head-title .btn-orange").on("click", function(e) {
      e.stopImmediatePropagation();
      var $this = $(this);
      var linkhref = $this.attr("href");
      window.location.href = linkhref;
    });

    getViewPortHeight();
    dropdownFormValidation();
    tableViewMore();
    customLiDropdown();
  });

  // Convert First Letter to Capitalize in Tooltip

  //   $( "[data-toggle=post-login-tooltip]" ).mouseenter(function () {
  //     var $this = $(this);
  //     var strTooltip = $this.attr('data-original-title');
  //     new_strTip = strTooltip.toLowerCase().replace(/\b[a-z]/g, function(txtValTip) {
  //     return txtValTip.toUpperCase();

  //   });

  //   $this.attr('data-original-title', new_strTip);

  // });  

  // Convert First Letter to Capitalize in LOB fields
  
  // $('.pascal-case').each( function(){

  //   var $this = $(this);
  //   var str = $this.text();

  //   new_str = str.toLowerCase().replace(/\b[a-z]/g, function(txtVal) {
  //       return txtVal.toUpperCase();
  //   });
  //   $this.text(new_str);

  // });
  
})(jQuery);

(function ($) {

    function checkedSOA() {
        $('input[name="las-soa-view-statement"]').click(function(){
            var inputValue = $(this).val();
            var targetBox = $(".las-soa-view-statement-partial[data-value-soa="+inputValue+"]");
            $(".las-soa-view-statement-partial").addClass("hide");
            $(targetBox).removeClass("hide");
            $(".las-soa-view-statement-partial").find(".select").removeClass("error");
            $(".las-soa-view-statement-partial").find(".form-control").removeClass("error");
            $(".las-soa-view-statement-partial").find("span.error").hide();
        });
    }

    // function pfSOAValidation() {
    //     $pfSoaForm = $(".las-my-docs-soa-form");

    //     var pfSOAFormValidator = $pfSoaForm.validate({
    //         ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //         rules: {
    //             pfsoafrom: {
    //                 required: '#las-soa-date-range:checked'
    //             },
    //             pfsoato: {
    //                 required: '#las-soa-date-range:checked'
    //             },
    //             pfdocsquarter: {
    //                 required: '#las-soa-quarter:checked'
    //             },
    //             pfdocsfinancialyear: {
    //                 required: '#las-soa-financial-year:checked'
    //             }
    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         success: function(element) {
    //             $("#"+ element.attr("id")).remove();
    //         },
    //     });
    // }

    // function pfInterestCertificateValidation() {
    //     $pfInterestCertificateForm = $(".las-my-docs-interest-certificate-form");

    //     var pfInterestCertificateFormValidator = $pfInterestCertificateForm.validate({
    //         ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //         rules: {                
    //             pfdocsfinancialyear: {
    //                 required: true
    //             }
    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         success: function(element) {
    //             $("#"+ element.attr("id")).remove();
    //         },
    //     });
    // }

    $(document).ready(function () {
        checkedSOA();
        // pfSOAValidation();
        // pfInterestCertificateValidation();
    });
})(jQuery);
(function ($) {

    function checkedSOA() {
        $('input[name="li-soa-view-statement"]').click(function(){
            var inputValue = $(this).val();
            var targetBox = $(".li-soa-view-statement-partial[data-value-soa="+inputValue+"]");
            $(".li-soa-view-statement-partial").addClass("hide");
            $(targetBox).removeClass("hide");
            $(".li-soa-view-statement-partial").find(".select").removeClass("error");
            $(".li-soa-view-statement-partial").find(".form-control").removeClass("error");
            $(".li-soa-view-statement-partial").find("span.error").hide();
        });
    }

    // function liSOAValidation() {
    //     $liSoaForm = $(".li-my-docs-soa-form");

    //     var liSOAFormValidator = $liSoaForm.validate({
    //         ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //         rules: {
    //             lisoafrom: {
    //                 required: true
    //             },
    //             lisoato: {
    //                 required: true
    //             },
    //             lidocsaccountstatement: {
    //                 required: true
    //             }
    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         success: function(element) {
    //             $("#"+ element.attr("id")).remove();
    //         },
    //     });
    // }

    // function liInterestCertificateValidation() {
    //     $liTaxCertificateForm = $(".li-my-docs-tax-certificate-form");

    //     var liTaxCertificateFormValidator = $liTaxCertificateForm.validate({
    //         ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //         rules: {
    //             lidocsfinancialyear: {
    //                 required: true
    //             },         
    //             licustomfrom: {
    //                 required: function() {
    //                     return $('select[name="lidocsfinancialyear"]').val() == 'custom';
    //                 }
    //             },
    //             licustomto: {
    //                 required: function() {
    //                     return $('select[name="lidocsfinancialyear"]').val() == 'custom';
    //                 }
    //             },
    //             agree: 'required',
    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         success: function(element) {
    //             $("#"+ element.attr("id")).remove();
    //         },
    //     });
    // }

    $(document).ready(function () {
        checkedSOA();
        // liSOAValidation();
        // liInterestCertificateValidation();
    });
})(jQuery);
(function($) {

    function checkedSMS() {
        $('input.account-statement-sms').click(function(){
            if ($(this).prop('checked')) {
                $(this).parent(".account-statement-sms-checkbox").next(".account-statement-sms-content-wrapper").removeClass("hide");
            } else {
                $(this).parent(".account-statement-sms-checkbox").next(".account-statement-sms-content-wrapper").addClass("hide");
            }
        });   
    }

    function unsubscribeCheckedSMS() {
        $(".account-statement-sms-content-top .inline-radio input.monthly").prop('checked',true);
        $('input.account-statement-unsubscribe').click(function(){
            if ($(this).prop('checked')) {
                $(".account-statement-sms-content-top .inline-radio .form-check").addClass("disabled");
                $(".account-statement-sms-content-top .inline-radio input").prop('checked',false).prop('disabled',true).addClass("disabled");
                $(".account-statement-sms-radio-wrapper .weekly, .account-statement-sms-radio-wrapper .monthly, .account-statement-sms-receive-on__title").addClass("hide");
            } else {
                $(".account-statement-sms-content-top .inline-radio .form-check").removeClass("disabled");
                $(".account-statement-sms-content-top .inline-radio input").prop('disabled',false).removeClass("disabled");
                $(".account-statement-sms-content-top .inline-radio input.monthly").prop('checked',true);
                $(".account-statement-sms-radio-wrapper .monthly, .account-statement-sms-receive-on__title").removeClass("hide");
            }
        });  
    }

    // function dropdownSMSFormValidation() {
    //     // validate signup form on keyup and submit
    //     $(".dropdown-sms-form").each(function(){

    //         var $reporttypeselector = $(".reporttypeselector-error").val();
    //         var $brokerdetailsselector = $(".brokerdetailsselector-error").val();
    //         var $smsfinancialyearselector = $(".smsfinancialyearselector-error").val();

    //         var validator = $(this).validate({
    //             ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //             rules: {
    //                 reporttypeselector: {
    //                     required: true
    //                 },
    //                 brokerdetailsselector: {
    //                     required: true
    //                 },
    //                 smsfinancialyearselector: {
    //                     required: true
    //                 }
    //             },
    //             messages: {
    //                 reporttypeselector: $reporttypeselector,
    //                 brokerdetailsselector: $brokerdetailsselector,
    //                 smsfinancialyearselector: $smsfinancialyearselector,
    //             },
    //             errorElement: "span",
    //             errorPlacement: function(error, element) {
    //                 error.appendTo($(element).closest(".form-group"));
    //             },
    //             success: function(element) {
    //                 $("#"+ element.attr("id")).remove();
    //             },
    //             highlight: function(element, errorList) {
    
    //             }
    //         });
    //     });
    // }

    function dropdownSMSFormRadio(){
        $(".account-statement-sms-content-top .inline-radio input").on("click",function(){
            if($(this).hasClass("monthly")) {
                $('.account-statement-sms-radio-wrapper .monthly').removeClass("hide");
                $('.account-statement-sms-radio-wrapper .weekly').addClass("hide");
                $(".account-statement-sms-receive-on__title").removeClass("hide");
            } else if($(this).hasClass("weekly")) {
                $('.account-statement-sms-radio-wrapper .weekly').removeClass("hide");
                $('.account-statement-sms-radio-wrapper .monthly').addClass("hide");
                $(".account-statement-sms-receive-on__title").removeClass("hide");
            } else {
                $(".account-statement-sms-radio-wrapper .weekly, .account-statement-sms-radio-wrapper .monthly, .account-statement-sms-receive-on__title").addClass("hide");
            }
        
        })
    }

    $(document).ready(function() {
        checkedSMS();
        //dropdownSMSFormValidation();
        dropdownSMSFormRadio();
        unsubscribeCheckedSMS();
    });
    $(document).ajaxComplete(function() {
        checkedSMS();
        //dropdownSMSFormValidation();
        dropdownSMSFormRadio();
        unsubscribeCheckedSMS();
    });
})(jQuery);
(function ($) {

    function checkedSOA() {
        $('input[name="mf-soa-view-statement"]').click(function(){
            var inputValue = $(this).val();
            var targetBox = $(".mf-soa-view-statement-partial[data-value-soa="+inputValue+"]");
            $(".mf-soa-view-statement-partial").addClass("hide");
            $(targetBox).removeClass("hide");
            $(".mf-soa-view-statement-partial").find(".select").removeClass("error");
            $(".mf-soa-view-statement-partial").find(".form-control").removeClass("error");
            $(".mf-soa-view-statement-partial").find("span.error").hide();
        });
    }

    function checkedHFSOA() { 
        $('input[name="hf-soa-view-statement"]').click(function(){
            var inputValue = $(this).val();
            var targetBox = $(".hf-soa-view-statement-partial[data-value-soa="+inputValue+"]");
            $(".hf-soa-view-statement-partial").addClass("hide");
            $(targetBox).removeClass("hide");
            $(".hf-soa-view-statement-partial").find(".select").removeClass("error");
            $(".hf-soa-view-statement-partial").find(".form-control").removeClass("error");
            $(".hf-soa-view-statement-partial").find("span.error").hide();
        });
    }

    // function pfSOAValidation() {
    //     $pfSoaForm = $(".mf-my-docs-soa-form");

    //     var pfSOAFormValidator = $pfSoaForm.validate({
    //         ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //         rules: {
    //             pfsoafrom: {
    //                 required: '#mf-soa-date-range:checked'
    //             },
    //             pfsoato: {
    //                 required: '#mf-soa-date-range:checked'
    //             },
    //             pfdocsquarter: {
    //                 required: '#mf-soa-quarter:checked'
    //             },
    //             pfdocsfinancialyear: {
    //                 required: '#mf-soa-financial-year:checked'
    //             }
    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         success: function(element) {
    //             $("#"+ element.attr("id")).remove();
    //         },
    //     });
    // }

    // function pfInterestCertificateValidation() {
    //     $pfInterestCertificateForm = $(".mf-my-docs-interest-certificate-form");

    //     var pfInterestCertificateFormValidator = $pfInterestCertificateForm.validate({
    //         ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //         rules: {                
    //             pfdocsfinancialyear: {
    //                 required: true
    //             }
    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         success: function(element) {
    //             $("#"+ element.attr("id")).remove();
    //         },
    //     });
    // }

    $(document).ready(function () {
        checkedSOA();
        checkedHFSOA();
        // pfSOAValidation();
        // pfInterestCertificateValidation();
    });
})(jQuery);
(function ($) {

    function checkedSOA() {
        $('input[name="pf-soa-view-statement"]').click(function(){
            var inputValue = $(this).val();
            var targetBox = $(".pf-soa-view-statement-partial[data-value-soa="+inputValue+"]");
            $(".pf-soa-view-statement-partial").addClass("hide");
            $(targetBox).removeClass("hide");
            $(".pf-soa-view-statement-partial").find(".select").removeClass("error");
            $(".pf-soa-view-statement-partial").find(".form-control").removeClass("error");
            $(".pf-soa-view-statement-partial").find("span.error").hide();
        });
    }

    // function pfSOAValidation() {
    //     $pfSoaForm = $(".pf-my-docs-soa-form");

    //     var pfSOAFormValidator = $pfSoaForm.validate({
    //         ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //         rules: {
    //             pfsoafrom: {
    //                 required: '#pf-soa-date-range:checked'
    //             },
    //             pfsoato: {
    //                 required: '#pf-soa-date-range:checked'
    //             },
    //             pfdocsquarter: {
    //                 required: '#pf-soa-quarter:checked'
    //             },
    //             pfdocsfinancialyear: {
    //                 required: '#pf-soa-financial-year:checked'
    //             }
    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         success: function(element) {
    //             $("#"+ element.attr("id")).remove();
    //         },
    //     });
    // }

    // function pfInterestCertificateValidation() {
    //     $pfInterestCertificateForm = $(".pf-my-docs-interest-certificate-form");

    //     var pfInterestCertificateFormValidator = $pfInterestCertificateForm.validate({
    //         ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //         rules: {                
    //             pfdocsfinancialyear: {
    //                 required: true
    //             }
    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         success: function(element) {
    //             $("#"+ element.attr("id")).remove();
    //         },
    //     });
    // }

    $(document).ready(function () {
        checkedSOA();
        // pfSOAValidation();
        // pfInterestCertificateValidation();
    });
})(jQuery);
(function ($) {

    function checkedSOA() {
        $('input[name="sme-soa-view-statement"]').click(function(){
            var inputValue = $(this).val();
            var targetBox = $(".sme-soa-view-statement-partial[data-value-soa="+inputValue+"]");
            $(".sme-soa-view-statement-partial").addClass("hide");
            $(targetBox).removeClass("hide");
            $(".sme-soa-view-statement-partial").find(".select").removeClass("error");
            $(".sme-soa-view-statement-partial").find(".form-control").removeClass("error");
            $(".sme-soa-view-statement-partial").find("span.error").hide();
        });
    }

    // function pfSOAValidation() {
    //     $pfSoaForm = $(".sme-my-docs-soa-form");

    //     var pfSOAFormValidator = $pfSoaForm.validate({
    //         ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //         rules: {
    //             pfsoafrom: {
    //                 required: '#sme-soa-date-range:checked'
    //             },
    //             pfsoato: {
    //                 required: '#sme-soa-date-range:checked'
    //             },
    //             pfdocsquarter: {
    //                 required: '#sme-soa-quarter:checked'
    //             },
    //             pfdocsfinancialyear: {
    //                 required: '#sme-soa-financial-year:checked'
    //             }
    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         success: function(element) {
    //             $("#"+ element.attr("id")).remove();
    //         },
    //     });
    // }

    // function pfInterestCertificateValidation() {
    //     $pfInterestCertificateForm = $(".sme-my-docs-interest-certificate-form");

    //     var pfInterestCertificateFormValidator = $pfInterestCertificateForm.validate({
    //         ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',
    //         rules: {                
    //             pfdocsfinancialyear: {
    //                 required: true
    //             }
    //         },
    //         errorElement: "span",
    //         errorPlacement: function(error, element) {
    //             error.appendTo($(element).closest(".form-group"));
    //         },
    //         success: function(element) {
    //             $("#"+ element.attr("id")).remove();
    //         },
    //     });
    // }

    $(document).ready(function () {
        checkedSOA();
        // pfSOAValidation();
        // pfInterestCertificateValidation();
    }); 
})(jQuery);
const horizontalScroll = document.querySelector('.dashboard__horizontal-tab-main-wrapper');
let isDown = false;
let startX;
let scrollLeft;

if(horizontalScroll) {
  horizontalScroll.addEventListener('mousedown', function(e) {
    isDown = true;
    horizontalScroll.classList.add('active');
    startX = e.pageX - horizontalScroll.offsetLeft;
    scrollLeft = horizontalScroll.scrollLeft;
  });

  horizontalScroll.addEventListener('mouseleave', function() {
    isDown = false;
    horizontalScroll.classList.remove('active');
  });

  horizontalScroll.addEventListener('mouseup', function() {
    isDown = false;
    horizontalScroll.classList.remove('active');
  });

  horizontalScroll.addEventListener('mousemove', function(e) {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - horizontalScroll.offsetLeft;
    //const walk = (x - startX) * 3; //scroll-fast
    const walk = (x - startX);
    horizontalScroll.scrollLeft = scrollLeft - walk;
  });
}
window.addEventListener('DOMContentLoaded', function (event) {
    // Selected Variables
    var horizontalTabScrollWrapper = $(".dashboard__horizontal-tab-scroll-wrapper");
    var horizontalTabItem = $(".dashboard__horizontal-tab-main-wrapper ul li");
    var dashboardBottomWrapper = $(".dashboard__bottom-wrapper");
    var dashboardMainTitle = $(".dashboard__main-title");
    var dashboardStaticLeftSection = $(".dashboard__static-content-wrapper .dashboard__static--left-content-wrapper");
    var dashboardVerticalTabItem = $(".dashboard__vertical-tab-main-wrapper ul li");
    var horizontalTabScrollLeft = $(".dashboard__horizontal-tab-main-wrapper .js-scroll-left");
    var horizontalTabScrollRight = $(".dashboard__horizontal-tab-main-wrapper .js-scroll-right");

    horizontalTabItem.on("click", function() {
        // Variables
        var $this = $(this);
        var tabDataID = $this.data("id");
        var tabColor = $this.data("color");
        var tabColorClass = "theme-" + tabColor;
        
        // Remove Vertical Tabs Active Class
        dashboardVerticalTabItem.each(function(){
            var $this = $(this);
            if($this.hasClass("active")){
                $this.removeClass("active");
            }
        });
        

        // Dashboard Bottom Wrapper Updated
        dashboardBottomWrapper.removeClass("active");
        dashboardBottomWrapper.each(function(){
            var bottomThis = $(this);
            if (bottomThis.data("id") == tabDataID) {
                bottomThis.addClass("active");
                
                // Vertical First Tab Selected Based on Horizontal Tab Click
                var verticalFirstTab = bottomThis.find(".dashboard__vertical-tab-main-wrapper ul li.level-1:first-child > span");
                verticalFirstTab.click();
            }
        });

        // Dashboard Main Title Updated
        dashboardMainTitle.removeClassExcept("dashboard__main-title");
        dashboardMainTitle.attr("data-color",tabColor).addClass(tabColorClass);
        var mainTitle = $this.data("title");
        dashboardMainTitle.html(mainTitle);

        // Dashboard Static Left Section Updated
        dashboardStaticLeftSection.removeClassExcept("dashboard__static--left-content-wrapper");
        dashboardStaticLeftSection.attr("data-color",tabColor).addClass(tabColorClass);
        
        // Horizontal Tabs Updated
        horizontalTabItem.removeClass("active");
        $this.addClass("active");        

    });
    

    horizontalTabScrollWrapper.on("scroll",function(){
        var scrollPos = horizontalTabScrollWrapper.scrollLeft();
        var scrollWidthVal = horizontalTabScrollWrapper.get(0).scrollWidth;
        if(scrollPos == 0) {
            horizontalTabScrollLeft.addClass("hide");
        }else if (scrollWidthVal == horizontalTabScrollWrapper.innerWidth() + scrollPos) {
            horizontalTabScrollRight.addClass("hide")
        }else {
            horizontalTabScrollLeft.removeClass("hide");
            horizontalTabScrollRight.removeClass("hide");
        }
    });

    horizontalTabScrollLeft.on("click", function(){
        var scrollLeftPos = horizontalTabScrollWrapper.scrollLeft();
        horizontalTabScrollWrapper.animate({scrollLeft: scrollLeftPos - 250}, 800);
    });

    horizontalTabScrollRight.on("click", function(){
        var scrollLeftPos = horizontalTabScrollWrapper.scrollLeft();
        horizontalTabScrollWrapper.animate({scrollLeft: scrollLeftPos + 250}, 800);
    });

    horizontalTabScrollLeft.addClass("hide");
    if(horizontalTabScrollWrapper.length){
        if(horizontalTabScrollWrapper.get(0).scrollWidth <= horizontalTabScrollWrapper.innerWidth()){
            horizontalTabScrollRight.addClass("hide");
        }
    }
});


(function($) {
    // excludeClass Function
    $.fn.removeClassExcept = function (val) {
        return this.each(function () {
            $(this).removeClass().addClass(val);
        });
    };

    $(document).ready(function(){

        // Vertical/Horizontal First Tab Selected Click
        setTimeout(function(){
            $(".dashboard__horizontal-tab-main-wrapper ul li.js-horizontal-tab-lob:first").trigger("click");
        },700);

    });

})(jQuery);
(function($) {
  $(document).ajaxComplete(function() {
    // Selected Variables
    var clickableItem = $(".link-list__list--column li a.has-item");
    var back_button = $(".heading");
    $(clickableItem).on("click", function(e) {
      e.preventDefault();
      var data_id = "." + $(this).data("target");
      if ($(data_id).length) {
        $(this)
          .closest(".LOBQuickLinks_row3_wrapper")
          .addClass("hide");
        $(data_id).removeClass("hide");
      }
    });
    $(back_button).on("click", function(e) {
      e.preventDefault();
      var data_id = ".second-level-list-component";
      if ($(data_id).length) {
        $(".LOBQuickLinks_row3_wrapper").removeClass("hide");
        $(data_id).addClass("hide");
      }
    });
    linkStaticClick();
    linkStaticBackClick();
  });
  $(document).ready(function() {
    linkStaticClick();
    linkStaticBackClick();
    //linkStaticLeftNavClick();
    //linkStaticLeftNavWithContentTabClick();
    var $linkLinkSmallTitleText = $(".link-list__small-title a p");

    $linkLinkSmallTitleText.each(function(i) {
      var titleText = $(this)
        .contents()
        .eq(0)
        .text();
      var truncatedText = wordLimitTextNode(titleText, 25);
      if (titleText != truncatedText) {
        var isTextNode = $(this)
          .contents()
          .filter(function() {
            if (this.nodeType == 3) {
              this.textContent = truncatedText;
            }
          });
      }
    });

    wordLimit(".link-list__small-title a p span", 80);
    wordLimit(".link-list__static-list a p span", 142);
    wordLimit(".listsummary__inner-content.text-center p", 170);

    wordLimit(".listsummary-head .link-list__list--column .title", 31);
    wordLimit(".link-list__static-list.small-text p span.small-text-title", 20);
    wordLimit(".link-list__static-list.small-text p span", 80);
    wordLimit(".dashboard__content-horizontal-tab-main-wrapper ul li span", 28);
    wordLimit(".link-list__small-title p strong", 32);
    wordLimit("div[data-id='protect-now'] p > span", 90);
    wordLimit("div[data-id='health-wellness'] ul > li > span", 25);
    wordLimit("div[data-id='wellness'] p > span.small-text-title", 25);
    wordLimit("div[data-id='health'] .listsummary__inner-content > p", 300);


    // Set limit
    wordLimit(".word-count-80", 80);
    wordLimit(".word-count-25", 25);
    wordLimit(".word-count-35", 35);
    wordLimit(".word-count-150", 150);
  });

  $(document).ajaxComplete(function() {
    setTimeout(function(){
      wordLimit(".link-list__static-list.small-text p span.small-text-title", 20);
      wordLimit(".link-list__static-list.small-text p span", 80);
      wordLimit("div[data-id='health-wellness'] ul > li > span", 20);
      wordLimit("div[data-id='wellness'] p > span.small-text-title", 20);

      wordLimit(".word-count-80", 80);
      wordLimit(".word-count-25", 25);
      wordLimit(".word-count-35", 35);
      wordLimit(".word-count-150", 150);
    },0);
  }); 
  function linkStaticClick() {
    $(".link-list__static-list-click").on("click", function() {
      var $this = $(this);
      $this.addClass("active");
      $this.closest(".LOBQuickLinks_row3_wrapper").addClass("hide");
      var dataContent = $this.attr("data-content");
      $(".dashboard__signpost-item-content-wrapper")
        .find(".LOBQuickLinks_row3_wrapper")
        .removeClass("active");
      $(".dashboard__signpost-item-content-wrapper")
        .find(".LOBQuickLinks_row3_wrapper[data-content=" + dataContent + "]")
        .addClass("active");
    });
  }
  function linkStaticBackClick() {
    $(".LOBQuickLinks__title:not(.hi-back-page-level1), .hi-back-page").on(
      "click",
      function(e) {
        e.stopImmediatePropagation();
        var $this = $(this);
        $this.closest(".LOBQuickLinks_row3_wrapper").removeClass("active");
        $this
          .closest(".dashboard__signpost-content-wrapper")
          .children(".LOBQuickLinks_row3_wrapper")
          .removeClass("hide");
      }
    );

    $(".hi-back-page-level1").on("click", function(e) {
      e.stopImmediatePropagation();
      var $this = $(this);
      var dataID = $this.attr("data-content");
      $(".LOBQuickLinks_row3_wrapper").removeClass("active");
      $(
        ".dashboard__signpost-item-content-wrapper .LOBQuickLinks_row3_wrapper"
      ).each(function() {
        if ($(this).attr("data-content") == dataID) {
          $(this)
            .addClass("active")
            .removeClass("hide");
        }
      });
    });
  }
  // function linkStaticLeftNavClick() {
  //     $(".link-list__left-nav-click").on("click", function (e) {
  //         e.stopImmediatePropagation();
  //         var $this = $(this)
  //         var dataId = $this.attr("data-id");
  //         var dataSubId = $this.attr("data-sub-id");
  //         $this.closest(".dashboard__bottom-wrapper").find(".dashboard__vertical-tab-main-wrapper ul li[data-id=" + dataId + "] > span").trigger("click");

  //         if(dataSubId) {
  //             $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active .dashboard__signpost-content-wrapper > .LOBQuickLinks_row3_wrapper").addClass("hide");
  //             $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active .dashboard__signpost-item-content-wrapper .LOBQuickLinks_row3_wrapper").removeClass("active");
  //             $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active .dashboard__signpost-item-content-wrapper .LOBQuickLinks_row3_wrapper[data-content=" + dataSubId + "]").addClass("active").removeClass("hide");
  //         }
  //     });
  // }

  // function linkStaticLeftNavWithContentTabClick() {
  //     $(".link-list__left-nav-with-content-tab-click").on("click", function (e) {
  //         e.stopImmediatePropagation();
  //         var $this = $(this)
  //         var dataId = $this.attr("data-id");
  //         var dataSubId = $this.attr("data-sub-id");
  //         var dataTabId = $this.attr("data-tab-id");
  //         console.log(dataTabId);
  //         $this.closest(".dashboard__bottom-wrapper").find(".dashboard__vertical-tab-main-wrapper ul li[data-id=" + dataId + "] > span").trigger("click");

  //         if(dataSubId) {
  //             $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active .dashboard__signpost-content-wrapper > .LOBQuickLinks_row3_wrapper").addClass("hide");
  //             $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active .dashboard__signpost-item-content-wrapper .LOBQuickLinks_row3_wrapper").removeClass("active");
  //             $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active .dashboard__signpost-item-content-wrapper .LOBQuickLinks_row3_wrapper[data-content=" + dataSubId + "]").addClass("active").removeClass("hide");
  //         }

  //         if(dataTabId) {
  //           $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active .dashboard__signpost-content-wrapper > .LOBQuickLinks_row3_wrapper").addClass("hide");
  //             $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active .dashboard__signpost-item-content-wrapper .LOBQuickLinks_row3_wrapper").removeClass("active");
  //             $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active .dashboard__signpost-item-content-wrapper .LOBQuickLinks_row3_wrapper[data-content=" + dataSubId + "]").addClass("active").removeClass("hide");
  //             $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active .dashboard__signpost-item-content-wrapper .LOBQuickLinks_row3_wrapper .dashboard__content-horizontal-tab-main-wrapper ul li[data-id=" + dataTabId + "]").addClass("active");
  //         }

  //     });
  // }

  function wordLimitPostLogin(data, limit) {
    var _this = data;
    $(_this).each(function(i) {
      var len = $(this).text().length;
      if (len > limit) {
        $(this).text(
          $(this)
            .text()
            .substr(0, limit) + "…"
        );
      }
    });
  }
  function wordLimitTextNode(data, limit) {
    var _this = data;
    var len = _this.length;
    if (len > limit) {
      return data.substr(0, limit) + "…";
    } else {
      return data;
    }
  }
})(jQuery);


window.addEventListener('DOMContentLoaded', function (event) {
    
    function checkboxToggleOnChange(){
        $('.checkboxToggle').change(function() {
            var $this = $(this);
            if($this.is(":checked")) {
                $this.closest(".dashboard__inner-content-wrapper.active").find(".dashboard__horizontal-inner-content-wrapper.active").find(".listsummary-switch-1").removeClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".dashboard__horizontal-inner-content-wrapper.active").find(".listsummary-switcher-1").removeClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".dashboard__horizontal-inner-content-wrapper.active").find(".listsummary-switch-2").addClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".dashboard__horizontal-inner-content-wrapper.active").find(".listsummary-switcher-2").addClass("active");
            } else {
                $this.closest(".dashboard__inner-content-wrapper.active").find(".dashboard__horizontal-inner-content-wrapper.active").find(".listsummary-switch-1").addClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".dashboard__horizontal-inner-content-wrapper.active").find(".listsummary-switcher-1").addClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".dashboard__horizontal-inner-content-wrapper.active").find(".listsummary-switch-2").removeClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".dashboard__horizontal-inner-content-wrapper.active").find(".listsummary-switcher-2").removeClass("active");
            }
        });
    }

    function checkboxToggleGlobalOnChange(){
        $('.checkboxToggleGlobal').change(function() {
            var $this = $(this);
            if($this.is(":checked")) {
                $this.closest(".dashboard__inner-content-wrapper.active").find(".listsummary-switch-1").removeClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".listsummary-switcher-1").removeClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".listsummary-switch-2").addClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".listsummary-switcher-2").addClass("active");
                $("#absret").addClass("hide");
            } else {
                $this.closest(".dashboard__inner-content-wrapper.active").find(".listsummary-switch-1").addClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".listsummary-switcher-1").addClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".listsummary-switch-2").removeClass("active");
                $this.closest(".dashboard__inner-content-wrapper.active").find(".listsummary-switcher-2").removeClass("active");
                $("#absret").removeClass("hide");
            }
        });
    }

    checkboxToggleOnChange();
    checkboxToggleGlobalOnChange();

    $(document).ajaxComplete(function() {
        checkboxToggleOnChange();
        checkboxToggleGlobalOnChange();
    });


});

$(document).ready(function(){
    var tabwitdh = "Total Width: " + screen.width + "px";
    //console.log(tabwitdh);

    if ($(window).width() >= 768 && $(window).width() <= 991 ) {
        //alert($(window).width());
        if($("div").hasClass("repeate-user-stay-money-wise")){
            //alert("repeate-user-stay-money-wise");
            $(".dashboard__nbo-card-item-wrapper").addClass("owl-carousel");
            $(".dashboard__nbo-card-item-wrapper").attr("id", "news-slider");
            $(".owl-nav").removeClass("disabled");
            $("#news-slider").owlCarousel({
                items : 1,
                itemsDesktop:false,
                navigation:true,
                navigationText:["",""],
                pagination:true,
                stagePadding: 28
            });
        }
        else{
         //   alert("no class");
        }
     }
     else {
        //alert($(window).width());
     }
});


    

window.addEventListener('DOMContentLoaded', function (event) {
    // Selected Variables
    var recommendedItem = $(".dashboard__nbo-recommended");
  $(document).on("click", ".dashboard__nbo-recommended", function (e) {
    //recommendedItem.on("click", function(e) {
    // Variables
    //e.preventDefault();
    var $this = e.target;
    setTimeout(function () {
    if (!$($this).hasClass("active")) {
      $($this).addClass("active");
      $($this).closest(".dashboard__nbo-cards-innerwrapper").addClass("active");
      $($this).closest(".dashboard__nbo-cards-wrapper").css("height", "auto");
    } else {
      $($this).removeClass("active");
      $($this).closest(".dashboard__nbo-cards-innerwrapper").removeClass("active");
      $($this).closest(".dashboard__nbo-cards-wrapper").css("height", "34px");
    }
    }, 0);
    //e.preventDefault();
  }); 
});

(function($) {
    function recommendedOnLoad(){
        // Selected Variables
        var recommendedItem = $(".dashboard__nbo-recommended");
        var viewportWidth = $(window).width();
        if(viewportWidth < 768) {
             recommendedItem.removeClass("active");
             recommendedItem.closest(".dashboard__nbo-cards-innerwrapper").removeClass("active");
            recommendedItem.closest(".dashboard__nbo-cards-wrapper").css("height","34px");
        } else {
            recommendedItem.closest(".dashboard__nbo-cards-wrapper").css("height","100%");
        }
    }

    function nboModalClick(){
        var viewportWidth = $(window).width();
        if(viewportWidth < 768) {
            $(".dashboard__nbo-cards-wrapper .abolute-link:not(.modalLink)").attr("data-toggle","modal");
            $(".dashboard__nbo-cards-wrapper .abolute-link:not(.modalLink)").on("click",function(){
                var modalID = $(this).attr("data-target");
                $(modalID).modal('show');
            });
        } else {
            $(".dashboard__nbo-cards-wrapper .abolute-link:not(.modalLink)").attr("data-toggle","");
        }
    }
    $(document).ready(function(){
        recommendedOnLoad();
        nboModalClick();
    });

    // Recommended NBO card
    $(document).on('click', function(){
        if($('.for-you-tab').hasClass('active')){
            $('.dashboard__nbo-cards-wrapper').addClass('change-position');
            $('.dashboard__main-title').addClass("shift-left");
            $('.dashboard__static--left-content-wrapper').addClass("shift-left");
            $('.dashboard__horizontal-tab-main-wrapper, .dashboard__static--right-content-wrapper').addClass("w-100");
        }
        else {
            $('.dashboard__nbo-cards-wrapper').removeClass('change-position');
            $('.dashboard__main-title').removeClass("shift-left");
            $('.dashboard__static--left-content-wrapper').removeClass("shift-left");
            $('.dashboard__horizontal-tab-main-wrapper, .dashboard__static--right-content-wrapper').removeClass("w-100");
        }
    });
    
    $(window).resize(function(){
        // Selected Variables
        var recommendedItem = $(".dashboard__nbo-recommended");
        var viewportWidth = $(window).width();
        if(viewportWidth < 768) {
            if(recommendedItem.hasClass("active")){
                recommendedItem.closest(".dashboard__nbo-cards-wrapper").css("height","auto");
            } else {
                recommendedItem.closest(".dashboard__nbo-cards-wrapper").css("height","34px");
            }
        } else {
            recommendedItem.closest(".dashboard__nbo-cards-wrapper").css("height","100%");
        }
        nboModalClick();
        

    });


})(jQuery);
window.addEventListener('DOMContentLoaded', function (event) {
    function portfolioDropdownClicked(){
    
        // Selected Variables
        var portfolioDropdownWrapper = $(".dashboard__portfolio--dropdown-wrapper > a");

        portfolioDropdownWrapper.on("click", function() {
            // Variables
            var $this = $(this);
            
            if(!$this.hasClass("active")){
                $this.addClass("active");
                $this.closest(".dashboard__portfolio--dropdown-wrapper").find(".dashboard__portfolio--dropdown-content").addClass("active");
            } else {
                $this.removeClass("active");
                $this.closest(".dashboard__portfolio--dropdown-wrapper").find(".dashboard__portfolio--dropdown-content").removeClass("active");
            }

        });
    }

    portfolioDropdownClicked();
    $(document).ajaxComplete(function() {
        portfolioDropdownClicked();
    });
    
});
window.addEventListener('DOMContentLoaded', function (event) {
    // Selected Variables
    var verticalTabWrapper = ".dashboard__vertical-tab-main-wrapper";
    var verticalTabItem = "ul > li > span";
    var verticalTabItemLevel2 = ".dashboard__vertical-tab-main-wrapper ul > li.has-child.level-1 > ul > li > span";
    var verticalTabLevel1 = $(".dashboard__vertical-tab-main-wrapper > ul"); 
    var verticalTabLevel1ScrollLeft = $(".dashboard__vertical-tab-main-wrapper .js-level1-scroll-left");
    var verticalTabLevel1ScrollRight = $(".dashboard__vertical-tab-main-wrapper .js-level1-scroll-right");

    verticalTabLevel1.on("scroll",function(){
        var scrollPos = $(this).scrollLeft();
        var scrollWidthVal = $(this).get(0).scrollWidth;
        if(scrollPos == 0) {
            $(this).closest(verticalTabWrapper).find(verticalTabLevel1ScrollLeft).addClass("hide");
        }else if (scrollWidthVal == $(this).innerWidth() + scrollPos) {
            $(this).closest(verticalTabWrapper).find(verticalTabLevel1ScrollRight).addClass("hide")
        }else {
            $(this).closest(verticalTabWrapper).find(verticalTabLevel1ScrollLeft).removeClass("hide");
            $(this).closest(verticalTabWrapper).find(verticalTabLevel1ScrollRight).removeClass("hide");
        }
    });

    verticalTabLevel1ScrollLeft.on("click", function(){
        var scrollLeftPos = $(this).closest(verticalTabWrapper).find(verticalTabLevel1).scrollLeft();
        $(this).closest(verticalTabWrapper).find(verticalTabLevel1).animate({scrollLeft: scrollLeftPos - 250}, 800);
    });

    verticalTabLevel1ScrollRight.on("click", function(){
        var scrollLeftPos = $(this).closest(verticalTabWrapper).find(verticalTabLevel1).scrollLeft();
        $(this).closest(verticalTabWrapper).find(verticalTabLevel1).animate({scrollLeft: scrollLeftPos + 250}, 800);
    });

    verticalTabLevel1ScrollLeft.addClass("hide");
    verticalTabLevel1.each(function(){
        $(this).closest(verticalTabWrapper).find(verticalTabLevel1ScrollLeft).addClass("hide");

        if($(this).closest(verticalTabWrapper).find(verticalTabLevel1).get(0).scrollWidth <= $(this).closest(verticalTabWrapper).find(verticalTabLevel1).innerWidth()){
            $(this).closest(verticalTabWrapper).find(verticalTabLevel1ScrollRight).addClass("hide");
        }
    });

    $(verticalTabWrapper).on("click",verticalTabItem, function(e) {
        // Variables
        e.preventDefault();
        var $this = $(this);
        var tabDataID = $this.closest("li").data("id");
        $this.closest("ul").find("li").removeClass("active");
        $this.closest("ul").find(".icon-minus").removeClass("icon-minus").addClass("icon-plus");
        $this.closest("li").addClass("active").find(".icon-plus").removeClass("icon-plus").addClass("icon-minus");
        
        // Dashboard Content Wrapper Updated
        var dashboardContentWrapper = $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper");

        $(".dashboard__inner-content-wrapper").removeClass("active");
        dashboardContentWrapper.each(function(){
            var contentThis = $(this);
            if (contentThis.data("id") == tabDataID) {
                contentThis.addClass("active");
            } else {
                contentThis.removeClass("active");
            }
        });

        
        if($this.closest("li").hasClass("level-1") && $this.closest("li").hasClass("has-child")) {
            $this.next("ul").find("li").removeClass("active");
            $this.next("ul").find("li.level-2:first-child > span").trigger("click");
            $this.next("ul").find("li.level-2:first-child").find("li:first-child > span").click();
        }

        if ($this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active").parents(".dashboard__inner-content-wrapper").length){
            $this.closest(".dashboard__bottom-wrapper").find(".dashboard__inner-content-wrapper.active").parents(".dashboard__inner-content-wrapper").addClass("active");
        }

        $('.dashboard__inner-content-wrapper.active .dashboard__content-horizontal-tab-main-wrapper ul li:first-child').click();

        showContentNextArrow();
        
    });
    $(verticalTabWrapper).on("click",verticalTabItemLevel2, function(e) {
        // Variables
        e.preventDefault();
        var $this = $(this);
        $(verticalTabItemLevel2).closest("li").removeClass("active");
        $this.closest("li").addClass("active");
        $this.next("ul").find("li.level-3:first-child").addClass("active");

        if($('.dashboard__inner-content-wrapper.active').find(".dashboard__inner-content-wrapper").length) {
            $('.dashboard__inner-content-wrapper.active .dashboard__inner-content-wrapper.active .dashboard__content-horizontal-tab-main-wrapper ul li:first-child').click();
        }
        else {
            $('.dashboard__inner-content-wrapper.active .dashboard__content-horizontal-tab-main-wrapper ul li:first-child').click();
        }
    });
    
});


(function($) {
    $(document).ajaxComplete(function() {
        setTimeout(function(){
            if($('.dashboard__inner-content-wrapper.active').find(".dashboard__inner-content-wrapper").length) {
                $('.dashboard__inner-content-wrapper.active .dashboard__inner-content-wrapper.active .dashboard__content-horizontal-tab-main-wrapper ul li:first-child').click();
            }
            else {
                $('.dashboard__inner-content-wrapper.active .dashboard__content-horizontal-tab-main-wrapper ul li:first-child').click();
            }
        },700)
    });
    $(document).ready(function(){

        // Selected Variables
        var verticalTabItem = $(".dashboard__vertical-tab-main-wrapper ul > li");
        var verticalTabGlobalItem = $(".dashboard__vertical-tab-main-wrapper ul li");
        var viewportWidth = $(window).width();

        // Arrow Icon Added
        verticalTabItem.each(function(){
            if($(this).hasClass("has-child") && $(this).hasClass("level-1")){
                if($(this).hasClass("is-lob")){
                    $(this).children("span").append("<i class='icon icon-plus'></i>");
                } else {
                    $(this).children("span").append("<i class='icon icon-arrow'></i>");
                }
                if(viewportWidth <= 991) {
                    $(this).prepend("<i class='icon icon-left-arrow-mob tab-back'></i>");
                }
                else {
                    $(this).children(".icon-left-arrow-mob").remove();
                }
            } else if ($(this).hasClass("is-external")){
                $(this).children("a").append("<i class='icon icon-right-arrow-thin'></i>");
            } 
        });

        // Data Tooltip Icon Added
        verticalTabGlobalItem.each(function(){
            if($(this).hasClass("data-info")){
                var dataInfoText = $(this).data("info-title");
                $(this).children("span").append("<i class='icon-info'></i>");
                $(this).children("span").append("<span>"+ dataInfoText +"</span>");
            }
        });

        // Back Button in Mobile/Tablet view
        var verticalTabBackButton = $(".dashboard__vertical-tab-main-wrapper .tab-back");
        verticalTabBackButton.on("click", function(){
            var $this = $(this);
            $this.closest(".level-1").removeClass("active");
            $this.closest("ul").find("li:first-child span").click();
            $('.dashboard__inner-content-wrapper.active').removeClass('active');
            $('.dashboard__inner-content-wrapper:first-of-type').addClass('active');
        });

    });

    $(window).resize(function(){
        var viewportWidth = $(window).width();
        var verticalTabItem = $(".dashboard__vertical-tab-main-wrapper ul > li");
        verticalTabItem.each(function(){
            if($(this).hasClass("has-child") && $(this).hasClass("level-1")){
                if(viewportWidth <= 991) {
                    if(!$(this).find(".tab-back").length){
                        $(this).prepend("<i class='icon icon-left-arrow-mob tab-back'></i>");
                        // Back Button in Mobile/Tablet view
                        var verticalTabBackButton = $(".dashboard__vertical-tab-main-wrapper .tab-back");
                        verticalTabBackButton.on("click", function(){
                            var $this = $(this);
                            $this.closest(".level-1").removeClass("active");
                            $this.closest("ul").find("li:first-child span").click();
                            $('.dashboard__inner-content-wrapper.active').removeClass('active');
                            $('.dashboard__inner-content-wrapper:first-of-type').addClass('active');
                        });
                    }
                }
                else {
                    $(this).children(".icon-left-arrow-mob").remove();
                }
            }
        });
    });

})(jQuery);
(function($, window, document, undefined) {
    function primaryNavigation(windowSize) {
        var _thisele = $(this);
        _thisele.toggleClass("active");
        // console.log(_thisele);
        /* Main Navigation */
        //$(".mobi-nav-wrapper").html("");
        var mainNav = $(".top-menu").html();
        $("#mobi-navigation").addClass("");
        if (windowSize < 1021) {
            $(".primary-nav__mobile").removeClass("hide");
            $(".menu-footer").addClass("hide");
            $(".menu-header").addClass("hide");
            $(".menu-content").addClass("hide");
            $(".close-menu").addClass("hide");
            //$(".mobi-nav-wrapper").html(mainNav);

            $("#mobi-navigation").addClass("active");
            //$("#mobi-nav-wrapper").html()
            $("body").addClass("mobile-menu-active");

            if (windowSize < 767) {
                $("#mobi-navigation").css("max-width", "100%");
            } else {
                $("#mobi-navigation").css("max-width", "320px");
            }
        }
    }

    function openSearchDesk() {

        $('.primary-nav__link--search-btn').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation()
            //$(this).siblings('.abc-form--search').addClass('abc-form--search-active').find('.selectize-input input').focus();
            $(this).siblings('.abc-form--search').addClass('abc-form--search-active').find('#select-search-header').focus();
            $(".ui-autocomplete").addClass("hide");
            setTimeout(function(){
                $(".ui-autocomplete").css("left",$("#select-search-header").offset().left);
                $(".ui-autocomplete").removeClass("hide");
            },500);
        });
        $('.primary-nav__link .abc-form').on('click', function(e) {
            e.stopPropagation()
        });

        $(document).on('click', function(e) {
            $('.abc-form--search').removeClass('abc-form--search-active');
        })


    }

    var init = function() {
        $windowWidthP = $(window).width();

        $("#mobi-navigation").removeClass("active");
        $(".menu-content").removeClass("hide");
        $("body").removeClass("mobile-menu-active");

        // $(".primary-nav__title").on("click", function() {
        //     primaryNavigation($windowWidthP);
        // });

        $(window).resize(function() {
            $windowWidthP = $(window).width();
            if ($(window).width() > 1020) {
                $("#mobi-navigation").removeClass("active");
                $(".menu-content").removeClass("hide");
                $("body").removeClass("mobile-menu-active");
            }
            $(".primary-nav__title").on("click", function() {
                primaryNavigation($windowWidthP);
            });
        });

        if ($(window).width() > 1020) {
            openSearchDesk()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {


    var init = function() {
        if ($('.public-disclosure').length) {
            selectDropdown("select-public-year");
            selectDropdown("select-public-quarter");
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function ($, window, document, undefined) {

    var init = function () {
        // //Format
        // selectDropdown("acFormat");

        // //Statement Option
        // selectDropdown("acStatementOpt");

        // //Financial Year
        // selectDropdown("acFinanceYr");

        // //Datepicker Single
        // datePickerSingle("acfromDate", "-30d");

        // //Datepicker Single
        // datePickerSingle("actoDate", "-1d");

        // //Set Frequency
        // selectDropdown("acSetFreq");
        // var $actStatement = $("#actStatement");

        // //Select Date
        // selectDropdown("acSelectDate");
        // var $actStatement = $("#actStatement");

        // //Form validation
        // var $accountStatement = $("#accountStatement");
        // $($accountStatement).validate({
        //     //initialize the plugin
        //     ignore: ':hidden:not([class~=selectized]),:hidden > .selectized, .selectize-control .selectize-input input',

        //     onfocusout: false,
        //     rules: {
        //         acFormat: {
        //             required: true,
        //         },
        //         acStatementOpt: {
        //             required: true,
        //         },
        //         acSetFreq: {
        //             required: true,
        //         },
        //         acSelectDate: {
        //             required: true,
        //         },
        //         acCaptcha: {
        //             required: true,
        //         },
        //         folioNumber: {
        //             required: true,
        //             minlength: 10,
        //             number: true
        //         }
        //     },
        //     errorElement: "span",
        //     errorPlacement: function (error, element) {
        //         error.appendTo($(element).closest(".form-group"));
        //     },



        // });

        // //On Modal Shown
        // $actStatement.on('shown.bs.modal', function () {

        //     //Truncate Selectize Input Value
        //     truncateSelectize();
        // });

        // //On Modal Close
        // $actStatement.on("hidden.bs.modal", function () {
        //     //Reset all the fields

        // });

        // //Variables
        // var $actDateContainer = $(".actDateContainer");
        // var $actStFnContainer = $(".actStFnContainer");
        // var $acSelectDateContainer = $(".acSelectDateContainer");
        // var $acSelectCaptchaContainer = $(".acSelectCaptchaContainer");
        // var $acSelectFormat = $("#acFormat");
        // var $acSelectStatementOpt = $("#acStatementOpt");
        // var $acSelectSetFreq = $("#acSetFreq");
        // var $acSelDate = $("#acSelectDate");
        // var $acStatementSubmit = $("#acStatementSubmit");
        // var $accountStatement = $("#accountStatement");

        // //Selectize
        // var $acFormat = $("#acFormat")[0].selectize;
        // var $acStatementOpt = $("#acStatementOpt")[0].selectize;
        // var $acFinanceYr = $("#acFinanceYr")[0].selectize;
        // var $acSetFreq = $("#acSetFreq")[0].selectize;
        // var $acSelectDate = $("#acSelectDate")[0].selectize;

        // //Format - Selectize
        // $acFormat.on("change", function (event) {
        //     $acSelectFormat.valid();
        //     //Truncate Selectize Input Value
        //     truncateSelectize();
        //     var fomatValue = this.getValue();
        //     if (fomatValue != 'e') {
        //         $actDateContainer.addClass('hide');
        //         $actStFnContainer.addClass('hide');
        //     } else {
        //         $actStFnContainer.removeClass('hide');
        //     }

        // });

        // //Statement Option - Selectize
        // $acStatementOpt.on("change", function (event) {
        //     $acSelectStatementOpt.valid();
        //     //Show From and To Date
        //     var statementOptVal = this.getValue();
        //     if (statementOptVal == 'd') {
        //         $actDateContainer.removeClass('hide');
        //         $acFinanceYr.disable();
        //     } else {
        //         $actDateContainer.addClass('hide');
        //         $acFinanceYr.enable();
        //     }
        // });

        // //Set Frequency - Selectize
        // $acSetFreq.on("change", function () {
        //     $acSelectSetFreq.valid();

        //     var acSelectSetFreqValue = this.getValue();
        //     console.log(acSelectSetFreqValue);
        //     if (acSelectSetFreqValue == 'm') {
        //         $acSelectDateContainer.removeClass('hide');
        //         $acSelectCaptchaContainer.addClass("offset-md-3");
        //     } else {
        //         $acSelectDateContainer.addClass('hide');
        //         $acSelectCaptchaContainer.removeClass('offset-md-3');
        //     }
        // });

        // //Select Date - Selectize
        // $acSelectDate.on("change", function () {
        //     $acSelDate.valid();
        // });

        // //Validate form
        // $acStatementSubmit.click(function () {
        //     $accountStatement.valid();
        // });

        // $(window).resize(function () {
        //     //Truncate Selectize Input Value
        //     truncateSelectize();
        // });
    }
    $(init);
})(window.jQuery, this, this.document);

(function ($, window, document, undefined) {

    var init = function () {
        // //Form Validation
        // var $fundValueForm = $("#fundValueForm");

        // $($fundValueForm).validate({
        //     onfocusout: false,
        //     rules: {
        //         fvPolicyNumber: {
        //             required: true,
        //         },
        //         fvDateofbirth: {
        //             required: true,
        //         },
        //         fvPhoneNumber: {
        //             required: true,
        //         },
        //         fvCaptcha: {
        //             required: true,
        //         }
        //     },
        //     errorElement: "span",
        //     errorPlacement: function (error, element) {
        //         error.appendTo($(element).closest(".form-group"));
        //     },
        // });

        // //Datepicker
        // datePickerSingle("lsDateOfBirth");

        // var $fVSubmit = $("#fVSubmit");

        // //Validate form
        // $fVSubmit.click(function () {
        //     $fundValueForm.valid();
        // });
    };
    $(init);
})(window.jQuery, this, this.document);

(function ($, window, document, undefined) {
  var init = function () {
    // var $navDividendModal = $("#navDividend");
    // var $navDivSubmit = $("#navDivSubmit");
    //selectDropdown("fundValue");
    // //Datepicker
    //Datepicker Single
    // datePickerSingle("toDate", "-30d");
    //  datePickerSingle("fromDate", "-30d");

    // //On Modal Shown
    // $navDividendModal.on('shown.bs.modal', function () {
    //   //Truncate Selectize Input Value
    //   truncateSelectize();
    // });

    // $(window).resize(function () {
    //   //Truncate Selectize Input Value
    //   truncateSelectize();
    // });
  };
  $(init);
})(window.jQuery, this, this.document);

(function ($, window, document, undefined) {
    function payPremiumStep(ppPolicyNumber, ppDateofbirth) {
        $step01 = $("#step01");
        $step02 = $("#step02");
        $step01Content = $("#step01-content");
        $step02Content = $("#step02-content");

        $step01.addClass("is-complete");
        $step02.addClass("is-active");

        $step01Content.addClass("hide");
        $step02Content.removeClass("hide");

        $step02Content.addClass("show");
        $step01Content.addClass("hide");
    }
    $(document).click(function (e) {
        if ($(e.target).is('.qsmodal.show')) {
            $('.qsmodal.show').modal('hide');
        }
    });
    $(document).keydown(function(event) {
        if (event.keyCode == 27) {
            $('.qsmodal.show').modal('hide');
        }
    });
    var init = function () {

        //Pay Premium Form
        $payPremiumForm = $("#payPremiumForm");

        // $($payPremiumForm).validate({
        //     onfocusout: false,
        //     rules: {
        //         ppPolicyNumber: {
        //             required: true,
        //         },
        //         ppDateofbirth: {
        //             required: true,
        //         }
        //     },
        //     errorElement: "span",
        //     errorPlacement: function (error, element) {
        //         error.appendTo($(element).closest(".form-group"));
        //     },
        // });

        // //Datepicker Single
        // datePickerSingle("ppDateOfBirth", "");

        // $('.ppDateOfBirth').datepicker().on('changeDate', function (ev) {
        //     $('.ppDateOfBirth').valid()
        // });

        // //Pay Premium Submit
        // $pPSubmit = $("#ppSubmit");
        // $pPSubmit.click(function () {
        //     $payPremiumForm.valid();

        //     //Call PayPremium
        //     var $ppPolicyNumber = $("#ppPolicyNumber").val();
        //     var $ppDateofbirth = $("#ppDateofbirth").val();
        //     var qsmodal_dialog = $(".qsmodal_dialog");

        //     if ($ppPolicyNumber != '' && $ppDateofbirth != '') {
        //         payPremiumStep($ppPolicyNumber, $ppDateofbirth);
        //         qsmodal_dialog.addClass("paypremium__step2-modal");
        //     }
        //     qsmodal_dialog.removeClass("paypremium__step2-modal")

        // });

        // // //Pay Premium Next
        // var $ppNext = $("#ppNext");
        // $ppNext.click(function () {
        //     $("#ppMobileNumber").valid();
        //     $("#ppEmail").valid();
        // })
    };
    $(init);
})(window.jQuery, this, this.document);


(function($, window, document, undefined) {

    function rangeSliderDrag() {
        var dragRangeSlider = document.getElementById('dragSLiderChildFinancial');
        var minValue = parseInt($('#dragRangeValueChildFinancial').attr('data-min'));
        var maxValue = parseInt($('#dragRangeValueChildFinancial').attr('data-max'));
        var pipesValRange = [minValue, maxValue];
        noUiSlider.create(dragRangeSlider, {
            start: 0,
            range: {
                min: minValue,
                max: maxValue
            },
            range: {
                'min': minValue,
                'max': maxValue,
            },
            pips: {
                mode: 'values',
                values: pipesValRange,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('dragRangeValueChildFinancial');
        var tooltipText = $('#dragSLiderChildFinancial .noUi-tooltip');

        dragRangeSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            if (values[handle] > minValue && values[handle] < maxValue) {
                tooltipText.text(finalVal);
            } else {
                tooltipText.text('');
            }
            childForm8Validator.element('#dragRangeValueChildFinancial');
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
        });

        $('#dragRangeValueChildFinancial').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                dragRangeSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }

        });

        $('#dragRangeValueChildFinancial').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#dragRangeValueChildFinancial').on('focus', function(e) {
            var focusedVal = this.value;
            $(this).val(setValWFCalc(focusedVal));
        });

        $('.range-slider-wrap .input-dummy').on('click', function() {
            $(this).hide().siblings('.range-slider-wrap__input').show().focus().val(setValWFCalc($(this).find('.input-dummy__value').html()));
        })

    }

    var init = function() {
        if ($('#dragSLiderChildFinancial').length) {
            rangeSliderDrag()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderDrag() {
        var dragRangeSlider = document.getElementById('dragSLiderChild');
        var minValue = parseInt($('#dragRangeValueChild').attr('data-min'));
        var maxValue = parseInt($('#dragRangeValueChild').attr('data-max'));
        var pipesValRange = [minValue, maxValue];
        noUiSlider.create(dragRangeSlider, {
            start: 1500000,
            range: {
                min: minValue,
                max: maxValue
            },
            range: {
                'min': minValue,
                'max': maxValue,
            },
            pips: {
                mode: 'values',
                values: pipesValRange,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('dragRangeValueChild');
        var tooltipText = $('#dragSLiderChild .noUi-tooltip');

        dragRangeSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            if (values[handle] > minValue && values[handle] < maxValue) {
                tooltipText.text(finalVal);
            } else {
                tooltipText.text('');
            }
            childForm5Validator.element('#dragRangeValueChild')
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
        });

        $('#dragRangeValueChild').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                dragRangeSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }

        });

        $('#dragRangeValueChild').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#dragRangeValueChild').on('focus', function(e) {
            var focusedVal = this.value;
            $(this).val(setValWFCalc(focusedVal));
        });

        $('.range-slider-wrap .input-dummy').on('click', function() {
            $(this).hide().siblings('.range-slider-wrap__input').show().focus().val(setValWFCalc($(this).find('.input-dummy__value').html()));
        })

    }

    var init = function() {
        if ($('#dragSLiderChild').length) {
            rangeSliderDrag()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {


    function rangeSliderDrag() {
        var dragRangeSlider = document.getElementById('dragSLiderHealthClac');
        var minValue = parseInt($('#dragRangeValueHealthClac').attr('data-min'));
        var maxValue = parseInt($('#dragRangeValueHealthClac').attr('data-max'));
        var pipesValRange = [minValue, maxValue];
        noUiSlider.create(dragRangeSlider, {
            start: 0,
            range: {
                min: minValue,
                max: maxValue
            },
            range: {
                'min': minValue,
                'max': maxValue,
            },
            pips: {
                mode: 'values',
                values: pipesValRange,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('dragRangeValueHealthClac');
        var tooltipText = $('#dragSLiderHealthClac .noUi-tooltip');

        dragRangeSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            if (values[handle] > 0 && values[handle] < 20000000) {
                tooltipText.text(finalVal);
            } else {
                tooltipText.text('');
            }
            healthForm3Validator.element('#dragRangeValueHealthClac');
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
        });

        $('#dragRangeValueHealthClac').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                dragRangeSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }

        });

        $('#dragRangeValueHealthClac').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#dragRangeValueHealthClac').on('focus', function(e) {
            var focusedVal = this.value;
            $(this).val(setValWFCalc(focusedVal));
        });

        $('.range-slider-wrap .input-dummy').on('click', function() {
            $(this).hide().siblings('.range-slider-wrap__input').show().focus().val(setValWFCalc($(this).find('.input-dummy__value').html()));
        })

    }

    var init = function() {
        if ($('#dragSLiderHealthClac').length) {
            rangeSliderDrag()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {



    function rangeSliderDrag() {
        var dragRangeSlider = document.getElementById('dragSLiderRetirementExpenses');
        var minValue = parseInt($('#dragRangeValueRetirementExpenses').attr('data-min'));
        var maxValue = parseInt($('#dragRangeValueRetirementExpenses').attr('data-max'));
        var pipesValRange = [minValue, maxValue];
        noUiSlider.create(dragRangeSlider, {
            start: 20000,
            range: {
                min: minValue,
                max: maxValue
            },
            range: {
                'min': minValue,
                'max': maxValue,
            },
            pips: {
                mode: 'values',
                values: pipesValRange,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('dragRangeValueRetirementExpenses');
        var tooltipText = $('#dragSLiderRetirementExpenses .noUi-tooltip');

        dragRangeSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            if (values[handle] > minValue && values[handle] < maxValue) {
                tooltipText.text(finalVal);
            } else {
                tooltipText.text('');
            }
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            $('#dragRangeValueRetirementExpenses').val();
            retirementForm2Validator.element('#rulerRetirementRangeValue');

        });

        $('#dragRangeValueRetirementExpenses').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                dragRangeSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
            retirementForm2Validator.element('#rulerRetirementRangeValue');

        });

        $('#dragRangeValueRetirementExpenses').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#dragRangeValueRetirementExpenses').on('focus', function(e) {
            var focusedVal = this.value;
            $(this).val(setValWFCalc(focusedVal));
        });

        $('.range-slider-wrap .input-dummy').on('click', function() {
            $(this).hide().siblings('.range-slider-wrap__input').show().focus().val(setValWFCalc($(this).find('.input-dummy__value').html()));
        })

    }

    var init = function() {
        if ($('#dragSLiderRetirementExpenses').length) {
            rangeSliderDrag()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderDrag() {
        var dragRangeSlider = document.getElementById('dragSLiderRetirementSavings');
        var minValue = parseInt($('#dragRangeValueRetirementSavings').attr('data-min'));
        var maxValue = parseInt($('#dragRangeValueRetirementSavings').attr('data-max'));
        var pipesValRange = [minValue, maxValue];
        noUiSlider.create(dragRangeSlider, {
            start: 0,
            range: {
                min: minValue,
                max: maxValue
            },
            range: {
                'min': minValue,
                'max': maxValue,
            },
            pips: {
                mode: 'values',
                values: pipesValRange,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('dragRangeValueRetirementSavings');
        var tooltipText = $('#dragSLiderRetirementSavings .noUi-tooltip');

        dragRangeSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            if (values[handle] > minValue && values[handle] < maxValue) {
                tooltipText.text(finalVal);
            } else {
                tooltipText.text('');
            }
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            retirementForm3Validator.element('#dragRangeValueRetirementSavings');

        });

        $('#dragRangeValueRetirementSavings').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                dragRangeSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }

        });

        $('#dragRangeValueRetirementSavings').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#dragRangeValueRetirementSavings').on('focus', function(e) {
            var focusedVal = this.value;
            $(this).val(setValWFCalc(focusedVal));
        });

        $('.range-slider-wrap .input-dummy').on('click', function() {
            $(this).hide().siblings('.range-slider-wrap__input').show().focus().val(setValWFCalc($(this).find('.input-dummy__value').html()));
        })

    }

    var init = function() {
        if ($('#dragSLiderRetirementSavings').length) {
            rangeSliderDrag()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderDrag() {
        var dragRangeSlider = document.getElementById('dragSLiderWealthFinancial');
        var minValue = parseInt($('#dragRangeValueWealthFinancial').attr('data-min'));
        var maxValue = parseInt($('#dragRangeValueWealthFinancial').attr('data-max'));
        var pipesValRange = [minValue, maxValue];
        noUiSlider.create(dragRangeSlider, {
            start: 0,
            range: {
                min: minValue,
                max: maxValue
            },
            range: {
                'min': minValue,
                'max': maxValue,
            },
            pips: {
                mode: 'values',
                values: pipesValRange,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('dragRangeValueWealthFinancial');
        var tooltipText = $('#dragSLiderWealthFinancial .noUi-tooltip');

        dragRangeSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            if (values[handle] > minValue && values[handle] < maxValue) {
                tooltipText.text(finalVal);
            } else {
                tooltipText.text('');
            }
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            wealthForm7Validator.element('#dragRangeValueWealthFinancial');

        });

        $('#dragRangeValueWealthFinancial').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                dragRangeSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }

        });

        $('#dragRangeValueWealthFinancial').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#dragRangeValueWealthFinancial').on('focus', function(e) {
            var focusedVal = this.value;
            $(this).val(setValWFCalc(focusedVal));
        });

        $('.range-slider-wrap .input-dummy').on('click', function() {
            $(this).hide().siblings('.range-slider-wrap__input').show().focus().val(setValWFCalc($(this).find('.input-dummy__value').html()));
        })

    }

    var init = function() {
        if ($('#dragSLiderWealthFinancial').length) {
            rangeSliderDrag()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderDrag() {
        var dragRangeSlider = document.getElementById('dragSLider');
        var minValue = parseInt($('#dragRangeValue').attr('data-min'));
        var maxValue = parseInt($('#dragRangeValue').attr('data-max'));
        var pipesValRange = [minValue, maxValue];
        noUiSlider.create(dragRangeSlider, {
            start: 0,
            range: {
                min: minValue,
                max: maxValue
            },
            range: {
                'min': minValue,
                'max': maxValue,
            },
            pips: {
                mode: 'values',
                values: pipesValRange,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('dragRangeValue');
        var tooltipText = $('#dragSLider .noUi-tooltip');

        dragRangeSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            if (values[handle] > minValue && values[handle] < maxValue) {
                tooltipText.text(finalVal);
            } else {
                tooltipText.text('');
            }
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal;
            hlvForm2Validator.element('#dragRangeValue');

        });

        $('#dragRangeValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                dragRangeSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }

        });

        $('#dragRangeValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#dragRangeValue').on('focus', function(e) {
            var focusedVal = this.value;
            $(this).val(setValWFCalc(focusedVal));
        });

        $('.range-slider-wrap .input-dummy').on('click', function() {
            $(this).hide().siblings('.range-slider-wrap__input').show().focus().val(setValWFCalc($(this).find('.input-dummy__value').html()));
        })

    }

    var init = function() {
        if ($('#dragSLider').length) {
            rangeSliderDrag()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSliderBalanceAmount');
        var rangeVal = {
            'min': 500000,
            '20%': 1000000,
            '40%': 3000000,
            '60%': 5000000,
            '80%': 10000000,
            'max': 30000000,
        };
        var pipeVal = [500000, 1000000, 3000000, 5000000, 10000000, 30000000];
        noUiSlider.create(softSlider, {
            start: 5000000,
            range: {
                min: 0,
                max: 300000000
            },
            range: rangeVal,
            pips: {
                mode: 'values',
                values: pipeVal,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('balanceAmountValue');
        var tooltipText = $('#rulerSliderBalanceAmount .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            tooltipText.text(finalVal);
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
        });

        inputElement.nextElementSibling.addEventListener('click', function(e){
            console.log('clicked')
            inputElement.focus()
        })

        $('#balanceAmountValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#balanceAmountValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#balanceAmountValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

        $('.range-slider-wrap .input-dummy').on('click', function() {
            $(this).hide().siblings('.range-slider-wrap__input').show().focus().val(setValWFCalc($(this).find('.input-dummy__value').html()));
        })

    }

    var init = function() {

        if ($('#balanceAmountValue').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSliderBalanceTenure');
        var rangeVal = {
            'min': 5,
            '20%': 10,
            '40%': 15,
            '60%': 20,
            '80%': 25,
            'max': 30,
        };
        var pipeVal = [5, 10, 15, 20, 25, 30];
        noUiSlider.create(softSlider, {
            start: 5,
            range: {
                min: 5,
                max: 30
            },
            range: rangeVal,
            pips: {
                mode: 'values',
                values: pipeVal,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('balanceTenureValue');
        var tooltipText = $('#rulerSliderBalanceTenure .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            tooltipText.text(finalVal);
            // inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            inputElement.nextElementSibling.firstElementChild.innerHTML = finalVal
        });

        $('#balanceTenureValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#balanceTenureValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#balanceTenureValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {

        if ($('#balanceTenureValue').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSLiderChildFinancial');
        var minValue = parseInt($('#rulerRangeValueChildFinancial').attr('data-min'));
        var maxValue = parseInt($('#rulerRangeValueChildFinancial').attr('data-max'));
        var density = 10;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(softSlider, {
            start: 0,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var pips = softSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            softSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('rulerRangeValueChildFinancial');
        var tooltipText = $('#rulerSLiderChildFinancial .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            var tooltipTextVal;
            if(inputElement.value > maxValue){
                tooltipTextVal = inSemiWordsCalc(parseInt(inputElement.value))
            }else{
                tooltipTextVal = finalVal
            }
            inputElement.value = finalVal;
            childForm8Validator.element('#rulerRangeValueChildFinancial');
            tooltipText.text(tooltipTextVal);            
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
        });

        $('#rulerRangeValueChildFinancial').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#rulerRangeValueChildFinancial').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#rulerRangeValueChildFinancial').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {

        if ($('#rulerRangeValueChildFinancial').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSLiderChildFinancial2');
        var minValue = parseInt($('#rulerRangeValueChildFinancial2').attr('data-min'));
        var maxValue = parseInt($('#rulerRangeValueChildFinancial2').attr('data-max'));
        var density = 10;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(softSlider, {
            start: 50000,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var pips = softSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            softSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('rulerRangeValueChildFinancial2');
        var tooltipText = $('#rulerSLiderChildFinancial2 .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            tooltipText.text(finalVal);
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
        });

        $('#rulerRangeValueChildFinancial2').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#rulerRangeValueChildFinancial2').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#rulerRangeValueChildFinancial2').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {

        if ($('#rulerRangeValueChildFinancial2').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSLiderChildMarriage');
        var minValue = parseInt($('#rulerRangeValueChildMarriage').attr('data-min'));
        var maxValue = parseInt($('#rulerRangeValueChildMarriage').attr('data-max'));
        var density = 10;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(softSlider, {
            start: 50000,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var pips = softSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            softSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('rulerRangeValueChildMarriage');
        var tooltipText = $('#rulerSLiderChildMarriage .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            tooltipText.text(finalVal);
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
        });

        $('#rulerRangeValueChildMarriage').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#rulerRangeValueChildMarriage').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#rulerRangeValueChildMarriage').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {

        if ($('#rulerRangeValueChildMarriage').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSLiderHealthCalc');
        var minValue = parseInt($('#rulerRangeValueHealthCalc').attr('data-min'));
        var maxValue = parseInt($('#rulerRangeValueHealthCalc').attr('data-max'));
        var density = 10;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(softSlider, {
            start: 40000,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var pips = softSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            softSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('rulerRangeValueHealthCalc');
        var tooltipText = $('#rulerSLiderHealthCalc .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            var tooltipTextVal;
            if(inputElement.value > maxValue){
                tooltipTextVal = inSemiWordsCalc(parseInt(inputElement.value))
            }else{
                tooltipTextVal = finalVal
            }
            tooltipText.text(tooltipTextVal);
            inputElement.value = finalVal;
            healthForm3Validator.element('#rulerRangeValueHealthCalc');
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
        });

        $('#rulerRangeValueHealthCalc').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#rulerRangeValueHealthCalc').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#rulerRangeValueHealthCalc').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {

        if ($('#rulerRangeValueHealthCalc').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSliderLoanAmount');
        var rangeVal = {
            'min': 500000,
            '20%': 1000000,
            '40%': 3000000,
            '60%': 5000000,
            '80%': 10000000,
            'max': 30000000,
        };
        var pipeVal = [500000, 1000000, 3000000, 5000000, 10000000, 30000000];
        noUiSlider.create(softSlider, {
            start: 5000000,
            range: {
                min: 0,
                max: 300000000
            },
            range: rangeVal,
            pips: {
                mode: 'values',
                values: pipeVal,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('loanAmountValue');
        var tooltipText = $('#rulerSliderLoanAmount .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            tooltipText.text(finalVal);
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
        });

        inputElement.nextElementSibling.addEventListener('click', function(e){
            console.log('clicked')
            inputElement.focus()
        })

        $('#loanAmountValue').on('change', function(e) {
            var valu1 = this.value;
          if (valu1 != "") {



                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#loanAmountValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#loanAmountValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

        $('.range-slider-wrap .input-dummy').on('click', function() {
            $(this).hide().siblings('.range-slider-wrap__input').show().focus().val(setValWFCalc($(this).find('.input-dummy__value').html()));
        })

    }

    var init = function() {

        if ($('#loanAmountValue').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {



    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerRetirementSLider');
        var minValue = parseInt($('#rulerRetirementRangeValue').attr('data-min'));
        var maxValue = parseInt($('#rulerRetirementRangeValue').attr('data-max'));
        var density = 10;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(softSlider, {
            start: 40000,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var pips = softSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            softSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('rulerRetirementRangeValue');
        var tooltipText = $('#rulerRetirementSLider .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            var tooltipTextVal;
            if(inputElement.value > maxValue){
                tooltipTextVal = inSemiWordsCalc(parseInt(inputElement.value))
            }else{
                tooltipTextVal = finalVal
            }
            inputElement.value = finalVal;
            tooltipText.text(tooltipTextVal);
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            retirementForm2Validator.element('#rulerRetirementRangeValue');
        });

        $('#rulerRetirementRangeValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#rulerRetirementRangeValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#rulerRetirementRangeValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {

        if ($('#rulerRetirementRangeValue').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSliderTenure');
        var rangeVal = {
            'min': 5,
            '20%': 10,
            '40%': 15,
            '60%': 20,
            '80%': 25,
            'max': 30,
        };
        var pipeVal = [5, 10, 15, 20, 25, 30];
        noUiSlider.create(softSlider, {
            start: 5,
            range: {
                min: 5,
                max: 30
            },
            range: rangeVal,
            pips: {
                mode: 'values',
                values: pipeVal,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var inputElement = document.getElementById('tenureValue');
        var tooltipText = $('#rulerSliderTenure .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            tooltipText.text(finalVal);
            // inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            inputElement.nextElementSibling.firstElementChild.innerHTML = finalVal
        });

        $('#tenureValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#tenureValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#tenureValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {

        if ($('#tenureValue').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSLiderWealthFinancial');
        var minValue = parseInt($('#rulerRangeValueWealthFinancial').attr('data-min'));
        var maxValue = parseInt($('#rulerRangeValueWealthFinancial').attr('data-max'));
        var density = 10;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(softSlider, {
            start: 0,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var pips = softSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            softSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('rulerRangeValueWealthFinancial');
        var tooltipText = $('#rulerSLiderWealthFinancial .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            tooltipText.text(finalVal);
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            wealthForm7Validator.element('#rulerRangeValueWealthFinancial');
        });

        $('#rulerRangeValueWealthFinancial').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#rulerRangeValueWealthFinancial').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#rulerRangeValueWealthFinancial').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {

        if ($('#rulerRangeValueWealthFinancial').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSLider');
        var minValue = parseInt($('#rulerRangeValue').attr('data-min'));
        var maxValue = parseInt($('#rulerRangeValue').attr('data-max'));
        var density = 10;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(softSlider, {
            start: 40000,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var pips = softSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            softSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('rulerRangeValue');
        var tooltipText = $('#rulerSLider .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {            
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            var tooltipTextVal;
            if(inputElement.value > maxValue){
                tooltipTextVal = inSemiWordsCalc(parseInt(inputElement.value))
            }else{
                tooltipTextVal = finalVal
            }
            inputElement.value = finalVal;
            hlvForm2Validator.element('#rulerRangeValue');
            tooltipText.text(tooltipTextVal);         
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal;            
        });

        $('#rulerRangeValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#rulerRangeValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#rulerRangeValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {

        if ($('#rulerRangeValue').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderHouse() {
        var carSlider = document.getElementById('range-slider-car');
        var minValue = parseInt($('#carRangeValue').attr('data-min'));
        var maxValue = parseInt($('#carRangeValue').attr('data-max'));
        var density = 4;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(carSlider, {
            start: 1000000,
            connect: [true, false],
            step: 1,
            range: {
                'min': minValue,
                'max': maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: -1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value)
                    }
                }
            },
            tooltips: {
                to: function(value) {
                    // *  Dynamic Car Icon Change Threshold Points Changed - Lavish Kumar Jangir (NOV 18 2020).

                    var imgTag;
                    if (value < (maxValue * 0.25 - 100000)) {
                        imgTag = "<span class='icon icon-car-05'></span>"
                    } else if (value < (maxValue * 0.5 - 100000)) {
                        imgTag = "<span class='icon icon-car-06'></span>"
                    } else if (value < (maxValue * 0.75 - 100000)) {
                        imgTag = "<span class='icon icon-car-07'></span>"
                    } else if (value < (maxValue - 100000)) {
                        imgTag = "<span class='icon icon-car-08'></span>"
                    } else {
                        imgTag = "<span class='icon icon-car-09'></span>"
                    }
                    return imgTag
                }
            },
        });

        var pips = carSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            carSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }



        var inputElement = document.getElementById('carRangeValue');

        carSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            wealthForm9Validator.element('#carRangeValue')

        });

        $('#carRangeValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                carSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#carRangeValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#carRangeValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {
        if ($('#range-slider-car').length) {
            rangeSliderHouse()
        }


    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderWealth() {
        var wealthSlider = document.getElementById('range-slider-entrepreneur');
        var minValue = parseInt($('#entrepreneurRangeValue').attr('data-min'));
        var maxValue = parseInt($('#entrepreneurRangeValue').attr('data-max'));
        var density = 4;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(wealthSlider, {
            start: 10000000,
            connect: [true, false],
            step: 1,
            range: {
                'min': minValue,
                'max': maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: -1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value)
                    }
                }
            },
            tooltips: {
                to: function(value) {
                    var imgTag;
                    if (value < (maxValue * 0.25 - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--xs' src='/Assets/Project/ABCL/images/xs-wealth.png'>"
                    } else if (value < (maxValue * 0.5 - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--sm' src='/Assets/Project/ABCL/images/sm-wealth.png'>"
                    } else if (value < (maxValue * 0.75 - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--md' src='/Assets/Project/ABCL/images/md-wealth.png'>"
                    } else if (value < (maxValue - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--lg' src='/Assets/Project/ABCL/images/lg-wealth.png'>"
                    } else {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--lg' src='/Assets/Project/ABCL/images/lg-wealth.png'>"
                    }
                    return imgTag
                }
            },
        });

        var pips = wealthSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            wealthSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('entrepreneurRangeValue');

        wealthSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            wealthForm10Validator.element('#entrepreneurRangeValue')

        });

        $('#entrepreneurRangeValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                wealthSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#entrepreneurRangeValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#entrepreneurRangeValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });



    }

    var init = function() {
        if ($('#range-slider-entrepreneur').length) {
            rangeSliderWealth()
        }


    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderHouse() {
        var houseSlider = document.getElementById('range-slider-house');
        var minValue = parseInt($('#houseRangeValue').attr('data-min'));
        var maxValue = parseInt($('#houseRangeValue').attr('data-max'));
        var density = 4;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(houseSlider, {
            start: 10000000,
            connect: [true, false],
            step: 1,
            range: {
                'min': minValue,
                'max': maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: -1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value)
                    }
                }
            },
            tooltips: {
                to: function(value) {
                    // *  Dynamic House Icon Change Threshold Points Changed - Lavish Kumar Jangir (NOV 18 2020)

                    var imgTag;
                    if (value < (maxValue * 0.25 - 100000)) {
                        imgTag = "<span class='icon icon-xs-house'></span>"
                    } else if (value < (maxValue * 0.50 - 100000)) {
                        imgTag = "<span class='icon icon-sm-house'></span>"
                    } else if (value < (maxValue * 0.75 - 100000)) {
                        imgTag = "<span class='icon icon-md-house'></span>"
                    } else if (value < (maxValue - 100000)) {
                        imgTag = "<span class='icon icon-lg-house'></span>"
                    } else {
                        imgTag = "<span class='icon icon-xl-house'></span>"
                    }
                    return imgTag


                }
            },
        });

        var pips = houseSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            houseSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }



        var inputElement = document.getElementById('houseRangeValue');

        houseSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            wealthForm3Validator.element('#houseRangeValue')

        });

        $('#houseRangeValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                houseSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#houseRangeValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#houseRangeValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });


    }

    var init = function() {
        if ($('#range-slider-house').length) {
            rangeSliderHouse()
        }


    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderWealth() {
        var wealthSlider = document.getElementById('range-slider-otherDreams');
        var minValue = parseInt($('#otherDreamsRangeValue').attr('data-min'));
        var maxValue = parseInt($('#otherDreamsRangeValue').attr('data-max'));
        var density = 4;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(wealthSlider, {
            start: 10000000,
            connect: [true, false],
            step: 1,
            range: {
                'min': minValue,
                'max': maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: -1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value)
                    }
                }
            },
            tooltips: {
                to: function(value) {
                    var imgTag;
                    if (value < (maxValue * 0.25 - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--xs' src='/Assets/Project/ABCL/images/xs-wealth.png'>"
                    } else if (value < (maxValue * 0.5 - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--sm' src='/Assets/Project/ABCL/images/sm-wealth.png'>"
                    } else if (value < (maxValue * 0.75 - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--md' src='/Assets/Project/ABCL/images/md-wealth.png'>"
                    } else if (value < (maxValue - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--lg' src='/Assets/Project/ABCL/images/lg-wealth.png'>"
                    } else {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--lg' src='/Assets/Project/ABCL/images/lg-wealth.png'>"
                    }
                    return imgTag
                }
            },
        });

        var pips = wealthSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            wealthSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('otherDreamsRangeValue');

        wealthSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            wealthForm11Validator.element('#otherDreamsRangeValue')
        });

        $('#otherDreamsRangeValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                wealthSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#otherDreamsRangeValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#otherDreamsRangeValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {
        if ($('#range-slider-otherDreams').length) {
            rangeSliderWealth()
        }


    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderPercent() {
        var percentSlider = document.getElementById('range-slider-percent-child-financial');
        var minValue = parseInt($('#percentRangeInputChildFinancial').attr('data-min'));
        var maxValue = parseInt($('#percentRangeInputChildFinancial').attr('data-max'));
        var density = 5;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = minValue + (((maxValue - minValue) / density) * i);
            plotPoints.push(k);
        }
        noUiSlider.create(percentSlider, {
            start: 6,
            step:0.5,
            behaviour: 'drag',
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 10,
                stepped:true,
                format: {
                    to: function(value) {
                        return value + '%';
                    }
                }
            },
            tooltips: {
                to: function(value) {
                    return value.toFixed(1) + '%';
                }
            },
        });

        var inputElement = document.getElementById('percentRangeInputChildFinancial');
        var tooltipText = $('#range-slider-percent-child-financial .noUi-tooltip');

        percentSlider.noUiSlider.on('update', function(values, handle) {
            var actualVal = parseFloat(values[handle]);
            var valu1 = Math.round(actualVal*2)/2;
            // var finalVal = valu1 + '%';
            childForm11Validator.element('#percentRangeInputChildFinancial')
            inputElement.value = valu1
        });

        inputElement.addEventListener('change', function(e) {
            var valu1 = Math.round(this.value*2)/2;
            // var displayValue = valu1 + '%';
            percentSlider.noUiSlider.set([valu1, null]);
            // inputElement.value = displayValue;
        });

        // inputElement.addEventListener('focus', function(e) {
        //     var curVal = this.value;
        //     var focusedVal
        //     if(curVal.slice(-1, curVal.length) == '%'){
        //         focusedVal = curVal.slice(0, -1);
        //     }else{
        //         focusedVal = curVal
        //     }
        //     inputElement.value = focusedVal

        // });

    }

    var init = function() {
        if ($('#percentRangeInputChildFinancial').length) {
            rangeSliderPercent()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderPercent() {
        var percentSlider = document.getElementById('range-slider-percent-retirement');
        var minValue = parseInt($('#percentRangeInputRetirement').attr('data-min'));
        var maxValue = parseInt($('#percentRangeInputRetirement').attr('data-max'));
        var density = 5;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = minValue + (((maxValue - minValue) / density) * i);
            plotPoints.push(k);
        }
        noUiSlider.create(percentSlider, {
            start: minValue,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 10,
                format: {
                    to: function(value) {
                        return value + '%';
                    }
                }
            },
            tooltips: {
                to: function(value) {
                    return value.toFixed(1) + '%';
                }
            },
        });

        var inputElement = document.getElementById('percentRangeInputRetirement');
        var tooltipText = $('#range-slider-percent-retirement .noUi-tooltip');

        percentSlider.noUiSlider.on('update', function(values, handle) {
            var actualVal = parseFloat(values[handle]);
            var finalVal = actualVal.toFixed(1) + '%';
            inputElement.value = finalVal
        });

        inputElement.addEventListener('change', function(e) {
            var valu1 = this.value;
            var displayValue = valu1 + '%';
            percentSlider.noUiSlider.set([valu1, null]);
            inputElement.value = displayValue;
        });

        inputElement.addEventListener('focus', function(e) {
            var focusedVal = this.value.slice(0, -1);
            inputElement.value = focusedVal

        });

    }

    var init = function() {
        if ($('#percentRangeInputRetirement').length) {
            rangeSliderPercent()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderPercent() {
        var percentSlider = document.getElementById('range-slider-percent-wealth-financial');
        var minValue = parseInt($('#percentRangeInputWealthFinancial').attr('data-min'));
        var maxValue = parseInt($('#percentRangeInputWealthFinancial').attr('data-max'));
        var density = 5;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = minValue + (((maxValue - minValue) / density) * i);
            plotPoints.push(k);
        }
        noUiSlider.create(percentSlider, {
            start: 6,
            step:0.5,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 10,
                format: {
                    to: function(value) {
                        return value + '%';
                    }
                }
            },
            tooltips: {
                to: function(value) {
                    return value.toFixed(1) + '%';
                }
            },
        });

        var inputElement = document.getElementById('percentRangeInputWealthFinancial');
        var tooltipText = $('#range-slider-percent-wealth-financial .noUi-tooltip');

        percentSlider.noUiSlider.on('update', function(values, handle) {            

            var actualVal = parseFloat(values[handle]);
            var valu1 = Math.round(actualVal*2)/2;
            // var finalVal = valu1 + '%';
            // childForm11Validator.element('#percentRangeInputChildFinancial')
            inputElement.value = valu1
        });

        inputElement.addEventListener('change', function(e) {
            var valu1 = Math.round(this.value*2)/2;
            percentSlider.noUiSlider.set([valu1, null]);
        });

        // inputElement.addEventListener('focus', function(e) {
        //     var focusedVal = this.value.slice(0, -1);
        //     inputElement.value = focusedVal

        // });

    }

    var init = function() {
        if ($('#percentRangeInputWealthFinancial').length) {
            rangeSliderPercent()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderPercent() {
        var percentSlider = document.getElementById('range-slider-percent');
        var minValue = parseInt($('#percentRangeInput').attr('data-min'));
        var maxValue = parseInt($('#percentRangeInput').attr('data-max'));
        var density = 5;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = minValue + (((maxValue - minValue) / density) * i);
            plotPoints.push(k);
        }
        noUiSlider.create(percentSlider, {
            start: 6,
            step:0.5,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 10,
                format: {
                    to: function(value) {
                        return value + '%';
                    }
                }
            },
            tooltips: {
                to: function(value) {
                    return value.toFixed(1) + '%';
                }
            },
        });

        var inputElement = document.getElementById('percentRangeInput');
        var tooltipText = $('#range-slider-percent .noUi-tooltip');

        percentSlider.noUiSlider.on('update', function(values, handle) {
            var actualVal = parseFloat(values[handle]);
            var valu1 = Math.round(actualVal*2)/2;
            // var finalVal = valu1 + '%';
            inputElement.value = valu1
            retirementForm3Validator.element('#percentRangeInput');

        });

        inputElement.addEventListener('change', function(e) {
            var valu1 = Math.round(this.value*2)/2;
            // var displayValue = valu1 + '%';
            percentSlider.noUiSlider.set([valu1, null]);
        });

        // inputElement.addEventListener('focus', function(e) {
        //     var focusedVal = this.value.slice(0, -1);
        //     inputElement.value = focusedVal

        // });

    }

    var init = function() {
        if ($('#percentRangeInput').length) {
            rangeSliderPercent()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderRuler() {
        var softSlider = document.getElementById('rulerSLiderChildSpendAmount');
        var minValue = parseInt($('#rulerRangeValueChildSpendAmount').attr('data-min'));
        var maxValue = parseInt($('#rulerRangeValueChildSpendAmount').attr('data-max'));
        var density = 10;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(softSlider, {
            start: 2500000,
            range: {
                min: minValue,
                max: maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: 1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value);
                    }
                }
            },
            tooltips: true
        });

        var pips = softSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            softSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('rulerRangeValueChildSpendAmount');
        var tooltipText = $('#rulerSLiderChildSpendAmount .noUi-tooltip');

        softSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            var tooltipTextVal;
            if(inputElement.value > maxValue){
                tooltipTextVal = inSemiWordsCalc(parseInt(inputElement.value))
            }else{
                tooltipTextVal = finalVal
            }
            inputElement.value = finalVal;
            childForm9Validator.element('#rulerRangeValueChildSpendAmount');
            tooltipText.text(tooltipTextVal);
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
        });

        $('#rulerRangeValueChildSpendAmount').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                softSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#rulerRangeValueChildSpendAmount').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#rulerRangeValueChildSpendAmount').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

    }

    var init = function() {

        if ($('#rulerRangeValueChildSpendAmount').length) {
            rangeSliderRuler()
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function rangeSliderWealth() {
        var wealthSlider = document.getElementById('range-slider-wealth');
        var minValue = parseInt($('#wealthRangeValue').attr('data-min'));
        var maxValue = parseInt($('#wealthRangeValue').attr('data-max'));
        var density = 4;
        var plotPoints = [minValue];
        for (var i = 1; i <= density; i++) {
            var k = Math.round(minValue + (((maxValue - minValue) / density) * i));
            plotPoints.push(k);
        }
        noUiSlider.create(wealthSlider, {
            start: 10000000,
            connect: [true, false],
            step: 1,
            range: {
                'min': minValue,
                'max': maxValue
            },
            pips: {
                mode: 'values',
                values: plotPoints,
                density: -1,
                format: {
                    to: function(value) {
                        return inSemiWordsCalc(value)
                    }
                }
            },
            tooltips: {
                to: function(value) {
                    var imgTag;
                    if (value < (maxValue * 0.25 - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--xs' src='/Assets/Project/ABCL/images/xs-wealth.png'>"
                    } else if (value < (maxValue * 0.5 - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--sm' src='/Assets/Project/ABCL/images/sm-wealth.png'>"
                    } else if (value < (maxValue * 0.75 - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--md' src='/Assets/Project/ABCL/images/md-wealth.png'>"
                    } else if (value < (maxValue - 100000)) {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--lg' src='/Assets/Project/ABCL/images/lg-wealth.png'>"
                    } else {
                        imgTag = "<img class='noUi-tooltip__img noUi-tooltip__img--lg' src='/Assets/Project/ABCL/images/lg-wealth.png'>"
                    }
                    return imgTag
                }
            },
        });

        var pips = wealthSlider.querySelectorAll('.noUi-value');

        function clickOnPip() {
            var value = Number(this.getAttribute('data-value'));
            wealthSlider.noUiSlider.set(value);
        }

        for (var i = 0; i < pips.length; i++) {

            // For this example. Do this in CSS!
            pips[i].style.cursor = 'pointer';
            pips[i].addEventListener('click', clickOnPip);
        }

        var inputElement = document.getElementById('wealthRangeValue');

        wealthSlider.noUiSlider.on('update', function(values, handle) {
            var finalVal = inSemiWordsCalc(parseInt(values[handle]));
            inputElement.value = finalVal;
            inputElement.nextElementSibling.lastElementChild.innerHTML = finalVal
            wealthForm4Validator.element('#wealthRangeValue')
        });

        $('#wealthRangeValue').on('change', function(e) {
            var valu1 = this.value;
            if (valu1 != "") {
                var displayValue = inSemiWordsCalc(valu1);
                wealthSlider.noUiSlider.set([valu1, null]);
                $(this).val(displayValue);
                $(this).siblings('.input-dummy').find('.input-dummy__value').html(displayValue)
                $(this).hide().siblings('.input-dummy').show();
            } else {
                var temp = $(this).siblings('.input-dummy').find('.input-dummy__value').html()
                $(this).val(setValWFCalc(temp));
            }
        });

        $('#wealthRangeValue').on('blur', function(e) {
            $(this).hide().siblings('.input-dummy').show();
        });

        $('#wealthRangeValue').on('focus', function(e) {
            var focusedVal = this.value;
            console.log(focusedVal);
            $(this).val(setValWFCalc(focusedVal));
        });

        $('.range-slider-wrap--wealth input[type="checkbox"]').on('change', function() {
            $(this).parents('.range-slider-wrap__wrap-item').siblings('.range-slider-wrap__wrap-item').toggleClass('range-slider-wrap__wrap-item--opac')
            var wealthSlider1 =  $(this).parents('.range-slider-wrap--wealth').children('div:first-child').attr('id');
            console.log(wealthSlider1);
            wealthSlider1 = document.getElementById(wealthSlider1)
            if ($(this).parents('.range-slider-wrap__wrap-item').siblings('.range-slider-wrap__wrap-item').hasClass('range-slider-wrap__wrap-item--opac')) {
                wealthSlider1.removeAttribute('disabled');
            } else {
                wealthSlider1.setAttribute('disabled', false);
            }
        })
    }

    var init = function() {
        if ($('#range-slider-wealth').length) {
            rangeSliderWealth()
        }


    };
    $(init);
})(window.jQuery, this, this.document);
(function ($, window, document, undefined) {

    var init = function () {
        // //Form Validation
        // var $policyAccountStatement = $("#policyAccountStatement");
        // var $policyAccStmtDwnld = $("#policyAccStmtDwnld");
        // var $pasEmail = $("#pasEmail");

        // $($policyAccountStatement).validate({
        //     onfocusout: false,
        //     rules: {
        //         pasPolicyNo: {
        //             required: true,
        //         },
        //         pasInsuredDob: {
        //             required: true,
        //         },
        //         pasFromDate: {
        //             required: true,
        //         },
        //         pasToDate: {
        //             required: true,
        //         }
        //     },
        //     errorElement: "span",
        //     errorPlacement: function (error, element) {
        //         error.appendTo($(element).closest(".form-group"));
        //     },
        // });

        // //


        // //Datepicker
        // datePickerSingle("pasInsuredDob");
        // datePickerSingle("pasFromDate");
        // datePickerSingle("pasToDate");

        // var $policyAccStmtSendMail = $("#policyAccStmtSendMail");

        // //Validate form
        // $policyAccStmtSendMail.click(function () {
        //     console.log('test');
        //     var validator = $policyAccountStatement.validate();
        //     validator.resetForm();
        //     $pasEmail.valid();
        //     //$policyAccountStatement.valid();
        // });

        // //Validate on Download
        // $policyAccStmtDwnld.click(function () {
        //     var validator = $policyAccountStatement.validate();
        //     validator.resetForm();
        //     $policyAccountStatement.valid();
        // })
    };
    $(init);
})(window.jQuery, this, this.document);

(function($, window, document, undefined) {

    function accordianSearch() {
        $('.search-results__head').on('click', function() {
            $(this).toggleClass('active');
            $(this).next(".search-results__cont").slideToggle("400");
        });
    }

    function viewAllSearchAccordians() {
        var noOfSearchItem = parseInt($('.no-of-search-item').val());

        $('.searchaccordian__wrap--v1').each(function() {
            $(this).children('.searchaccordian__item').each(function(index){
                if(index < noOfSearchItem){
                    $(this).fadeIn();
                    $(this).addClass('visible-dynamic');
                }
            });
            if ($(this).children('.searchaccordian__item').length <= noOfSearchItem) {
                $(this).siblings('.searchaccordian__view-all').hide()
                $(this).siblings('.searchaccordian__view-less').hide()
            }
        });

        $('.searchaccordian__view-all').on('click', function(e) {
            e.preventDefault();
            let dynamicVisible = $(this).siblings('.searchaccordian__wrap').find('.visible-dynamic').length;
            $(this).siblings('.searchaccordian__wrap').find('.searchaccordian__item').each(function(index){
                if(index < dynamicVisible + noOfSearchItem){
                    $(this).fadeIn();
                    $(this).addClass('visible-dynamic');
                }
            });
            if($(this).siblings('.searchaccordian__wrap').find('.visible-dynamic').length > noOfSearchItem){
                $(this).siblings('.searchaccordian__view-less').removeClass('hide');
            }
            if($(this).siblings('.searchaccordian__wrap').find('.visible-dynamic').length == $(this).siblings('.searchaccordian__wrap').find('.searchaccordian__item').length){
                $(this).addClass('hide');
            }
        });

        $('.searchaccordian__view-less').on('click', function(e) {
            let button = $(this);
            let dynamicVisible = $(this).siblings('.searchaccordian__wrap').find('.visible-dynamic').length;
            console.log('DynamicVisible: ' + dynamicVisible);
            console.log('NoOfItem: ' + noOfSearchItem);
            $(this).siblings('.searchaccordian__wrap').find('.searchaccordian__item').each(function(index){                
                let nextSet = dynamicVisible - noOfSearchItem;
                if(nextSet < noOfSearchItem){
                    nextSet = noOfSearchItem
                }
                if(index >= nextSet){
                    $(this).fadeOut();
                    $(this).removeClass('visible-dynamic');
                }
            });
            //button.siblings('.searchaccordian__wrap').find('.searchaccordian__item:lt('+noOfSearchItem+')').fadeIn();
            console.log('visible-dynamic: ' + button.siblings('.searchaccordian__wrap').find('.visible-dynamic').length);
            if(button.siblings('.searchaccordian__wrap').find('.visible-dynamic').length <= noOfSearchItem){
                button.addClass('hide');
            }
            if(button.siblings('.searchaccordian__wrap').find('.visible-dynamic').length !== button.siblings('.searchaccordian__wrap').find('.searchaccordian__item').length){
                button.siblings('.searchaccordian__view-all').removeClass('hide');
            }
        });
    }



    var init = function() {
        accordianSearch();
        viewAllSearchAccordians()
    };
    $(init);
})(window.jQuery, this, this.document);
(function ($, window, document, undefined) {

    var init = function () {
        // //Form Validation
        // var $loanStatementForm = $("#loanStatementForm");

        // $($loanStatementForm).validate({
        //     onfocusout: false,
        //     rules: {
        //         panNumber: {
        //             required: true,
        //         },
        //         dateofbirth: {
        //             required: true,
        //         }
        //     },
        //     errorElement: "span",
        //     errorPlacement: function (error, element) {
        //         error.appendTo($(element).closest(".form-group"));
        //     },
        // });

        // //Datepicker
        // datePickerSingle("lsDateOfBirth");

        // var $loanStatementSubmit = $("#loanStatementSubmit");

        // //Validate form
        // $loanStatementSubmit.click(function () {
        //     $loanStatementForm.valid();
        // });
    };
    $(init);
})(window.jQuery, this, this.document);

(function ($, window, document, undefined) {

    var init = function () {
        //Form Validation
        // var $trackLoanForm = $("#trackLoanForm");

        // $($trackLoanForm).validate({
        //     onfocusout: false,
        //     rules: {
        //         panNumber: {
        //             required: true,
        //         },
        //         applicationnumber: {
        //             required: true,
        //         }
        //     },
        //     errorElement: "span",
        //     errorPlacement: function (error, element) {
        //         error.appendTo($(element).closest(".form-group"));
        //     },
        // });
        // var $trackLoanSubmit = $("#trackLoanSubmit");
        // //Validate form
        // $trackLoanSubmit.click(function () {
        //     $trackLoanForm.valid();
        // });
    };
    $(init);
})(window.jQuery, this, this.document);

(function($, window, document, undefined) {

    function ratingNoUISlider() {
        var slider = document.getElementById('rating-nouislider');
        noUiSlider.create(slider, {
            start: 0,
            step: 1,
            connect: [true, false],
            range: {
                'min': 0,
                'max': 10
            },
            pips: { // Show a scale with the slider
                mode: 'steps',
                density: 10
            },
            tooltips: {
                to: function(value) {
                    return value
                }
            },
        });

        $(".rating-nouislider-inpt").val(parseInt(slider.noUiSlider.get()));

        slider.noUiSlider.on("change", function() {
            $(".rating-nouislider-inpt").val(parseInt(slider.noUiSlider.get()));
        });
    }

    function rateOverlay() {
        $('.rate-us__overlay, .rate-us__close').on('click', function(e) {
            e.preventDefault();
            //$('.rate-us__overlay').fadeOut();
            $(".rate-us__overlay").addClass("hide");
            $('.rate-us__modal').removeClass('rate-us__modal--active')
        });
    }

    function rateUsForm() {
        var $ratingForm = $("#rating-form");

        var ratingValidator = $($ratingForm).validate({
            ignore: [],
            rules: {
                smileyRadios: {
                    required: true
                },
                ratingNouisliderInpt: {
                    required: true
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            }
        });


        var $ratingSumit = $(".rating-submit");

        //Validate form
        $('.abc-form--rating input[name="smileyRadios"]').on('change', function() {
            if ($ratingForm.valid()) {
                $('.rating-submit').removeClass('wb-light-grey-bg').attr('disabled', false)
            } else {
                $('.rating-submit').addClass('wb-light-grey-bg').attr('disabled', true)

            }
        });

    }
    if (!sessionStorage.length) {
        // Ask other tabs for session storage
        localStorage.setItem('getSessionStorage', Date.now());
    };
    window.addEventListener('storage', function(event) {
        if (event.key == 'getSessionStorage') {
            // Some tab asked for the sessionStorage -> send it
            localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
			localStorage.removeItem('sessionStorage');
        } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
            // sessionStorage is empty -> fill it
            var data = JSON.parse(event.newValue),
                        value;
            for (key in data) {
                sessionStorage.setItem(key, data[key]);
            }
        }
    });
    
    function bottomOfPageAndSession(){
        $(window).on("scroll", function() {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                if(sessionStorage.getItem('rateUsVisited') !== "true"){
                    sessionStorage.setItem('rateUsVisited', 'true');
                    $('.rate-us__modal--form').addClass('rate-us__modal--active');
                    $(".rate-us__overlay").removeClass("hide");
                    $('.rate-us__modal--form').addClass("bottom-page");
                }
            }
        });
    }
    

    function delayPopupOpen() {
        if($(".rate-us__modal--form").length) {
            if(sessionStorage.getItem('rateUsVisited') !== "true" ){
                if(!$('.rate-us__modal--form').hasClass('bottom-page')){
                    $('.rate-us__modal--form').addClass('rate-us__modal--active');
                    $(".rate-us__overlay").removeClass("hide");
                    sessionStorage.setItem('rateUsVisited', 'true');
                }
            }
        }
    }
    var init = function() {
        if ($('#rating-nouislider').length) {
            ratingNoUISlider()
        }
        if ($('#rating-form').length) {
            rateUsForm()
        }
        rateOverlay()
        bottomOfPageAndSession()
        setTimeout(function(){
            delayPopupOpen()
        }, 20000);
        
    };
    $(init);
})(window.jQuery, this, this.document);

$(window).load(function() {
    function rateOverlay() {
        $('.rate-us__overlay, .rate-us__close').on('click', function(e) {
            e.preventDefault();
            $(".rate-us__overlay").addClass("hide");
            $('.rate-us__modal').removeClass('rate-us__modal--active')
        });
    }
    rateOverlay();
});
(function($, window, document, undefined) {

    function qustSlick() {
        var $status = $('.qust-paging');
        var $slickElement = $('.qust-series');


        $('.qust-series').slick({
            autoplay: false,
            slidesToShow: 1,
            arrows: false,
            infinite: false,
            draggable: false,
            touchMove: false,
            swipe: false,

        });


        $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.text(i + '/' + slick.slideCount);


        });



    }

    function qustForm1() {
        var $qustForm1 = $("#qust-card1-form");

        $($qustForm1).validate({
            onfocusout: false,
            rules: {
                userName: {
                    required: true,
                    minlength: 3
                },
                "select-gender": {
                    required: true,
                },
                userbirthdate: {
                    required: true,
                }

            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            }
        });


        var $step1btn = $(".btn-step1");

        //Validate form
        $step1btn.click(function(e) {
            if ($qustForm1.valid()) {
                $('.qust-series').slick('slickNext');
                return false;
            }
        });
    }

    var init = function() {
        if ($('.qust-series').length) {
            qustSlick()
        }

        if ($('#select-gender').length) {
            selectDropdown("select-gender")
            selectDropdown("select-gender1")
            selectDropdown("select-gender2")
        }
        qustForm1()
        if ($('.user-birth-date1').length) {
            datePicker('user-birth-date1')
            datePicker('user-birth-date2')
            datePicker('user-birth-date3')

        }
    };
    $(init);
})(window.jQuery, this, this.document);
window.addEventListener('DOMContentLoaded', function (event) {
    // Selected Variables
    var smhorizontalTabScrollWrapper = $(".stay-money__horizontal-tab-scroll-wrapper");
    var smhorizontalTabItem = $(".stay-money__horizontal-tab-main-wrapper ul li");
    var smdashboardBottomWrapper = $(".stay-money__bottom-wrapper");
    var smdashboardMainTitle = $(".stay-money__main-title");
    var smdashboardStaticLeftSection = $(".stay-money__static-content-wrapper .stay-money__static--left-content-wrapper");
    var smdashboardVerticalTabItem = $(".stay-money__vertical-tab-main-wrapper ul li");
    var smhorizontalTabScrollLeft = $(".stay-money__horizontal-tab-main-wrapper .js-scroll-left");
    var smhorizontalTabScrollRight = $(".stay-money__horizontal-tab-main-wrapper .js-scroll-right");
    var smhzTabScrollLeft = ".js-scroll-left";
    var smhzTabScrollRight = ".js-scroll-right";
    
    smhorizontalTabItem.on("click", function() {
        // Variables
        var $this = $(this);
        var smtabDataID = $this.data("id");
        var smtabColor = $this.data("color");
        var smtabColorClass = "theme-" + smtabColor;
        
        // Remove Vertical Tabs Active Class
        smdashboardVerticalTabItem.each(function(){
            var $this = $(this);
            if($this.hasClass("active")){
                $this.removeClass("active");
            }
        });
        

        // Dashboard Bottom Wrapper Updated
        smdashboardBottomWrapper.removeClass("active");
        smdashboardBottomWrapper.each(function(){
            var bottomThis = $(this);
            if (bottomThis.data("id") == smtabDataID) {
                bottomThis.addClass("active");
                
                // Vertical First Tab Selected Based on Horizontal Tab Click
                var verticalFirstTab = bottomThis.find(".stay-money__vertical-tab-main-wrapper ul li.level-1:first-child > span");
                verticalFirstTab.click();
            }
        });

        // Dashboard Main Title Updated
        smdashboardMainTitle.removeClassExcept("stay-money__main-title");
        smdashboardMainTitle.attr("data-color",smtabColor).addClass(smtabColorClass);
        var smmainTitle = $this.data("title");
        smdashboardMainTitle.html(smmainTitle);

        // Dashboard Static Left Section Updated
        smdashboardStaticLeftSection.removeClassExcept("stay-money__static--left-content-wrapper");
        smdashboardStaticLeftSection.attr("data-color",smtabColor).addClass(smtabColorClass);
        
        // Horizontal Tabs Updated
        smhorizontalTabItem.removeClass("active");
        $this.addClass("active");        

    });
    
    smhorizontalTabScrollWrapper.on("scroll",function(){
        var $this = $(this);
        var scrollPos = $this.scrollLeft();
        var scrollWidthVal = $this.get(0).scrollWidth;
        if(scrollPos == 0) {
            $(this).closest(".stay-money__horizontal-tab-main-wrapper").find(smhzTabScrollLeft).addClass("hide");
        }else if (scrollWidthVal == $this.innerWidth() + scrollPos) {
            $(this).closest(".stay-money__horizontal-tab-main-wrapper").find(smhzTabScrollRight).addClass("hide")
        }else {
            $(this).closest(".stay-money__horizontal-tab-main-wrapper").find(smhzTabScrollLeft).removeClass("hide");
            $(this).closest(".stay-money__horizontal-tab-main-wrapper").find(smhzTabScrollRight).removeClass("hide");
        }
    });

    smhorizontalTabScrollLeft.on("click", function(){
        var scrollLeftPos = $(this).closest(".stay-money__horizontal-tab-main-wrapper").find(".stay-money__horizontal-tab-scroll-wrapper").scrollLeft();
        $(this).closest(".stay-money__horizontal-tab-main-wrapper").find(".stay-money__horizontal-tab-scroll-wrapper").animate({
            scrollLeft: scrollLeftPos - 250
        }, 800);
    });

    smhorizontalTabScrollRight.on("click", function(){
        var scrollLeftPos = $(this).closest(".stay-money__horizontal-tab-main-wrapper").find(".stay-money__horizontal-tab-scroll-wrapper").scrollLeft();
        $(this).closest(".stay-money__horizontal-tab-main-wrapper").find(".stay-money__horizontal-tab-scroll-wrapper").animate({
            scrollLeft: scrollLeftPos + 250
        }, 800);
    });

});

(function($) {
    // excludeClass Function
    $.fn.removeClassExcept = function (val) {
        return this.each(function () {
            $(this).removeClass().addClass(val);
        });
    };
})(jQuery);
// Immediate declare and call
$(function(){
    // $(".btn-view-more").click(function(){
    //     $(".information-box.show-me").toggleClass("mb-hide");
    //     $(".view-more-less").toggleClass("arrow-up");
    //     // Change text
    //     $(".change-txt").text(function(i, v){
    //         return v === 'View More' ? 'View Less' : 'View More'
    //      })
    //      // If Text is View Less
    //      if($(".change-txt:contains('View Less')")) {
    //        $('.sub-wrapper').hide();
    //      }
    // });
    // If only 3 LI then view more button will not display in mobile view
    // if ($(".stay-money-wise__ul > li").length < 3){
    //     $(".view-more-less").hide();
    // }
    //Back to Stay money
    // $(".tab-back-sm").click(function(){
    //     $('.stay-money-wise.desktop-view').hide();
    //     $('.sub-wrapper').hide();
    //     //
    //     $('.sub-wrapper').removeClass('activescroll');
    //     //
    //     $('li.js-horizontal-tab-lob').removeClass('active');
    //     $('.stay-money__bottom-wrapper.active').removeClass('active');
    //     // Show Recommanded User
    //     $('.repeate-user-stay-money-wise .login-right-col .dashboard__nbo-cards-wrapper').show();
    //     //
    //     $('.stay-money-wise:not(.stay-money-wise.desktop-view) > .title').removeClass('hide');
    //     $('.stay-money-wise:not(.stay-money-wise.desktop-view) .stay-money-wise__ul').removeClass('hide');
    //     $('.view-more-less').removeClass('hide');
        
    // });
    //Show hide Stay Money-wise 
    // $('.common-card').click( function(event){
    //     event.preventDefault();
    //     //
    //     $('.stay-money-wise:not(.stay-money-wise.desktop-view) > .title').addClass('hide');
    //     $('.stay-money-wise:not(.stay-money-wise.desktop-view) .stay-money-wise__ul').addClass('hide');
    //     $('.view-more-less').addClass('hide');

    //     $('.stay-money-wise.desktop-view').show();
    //     var target = $(this).attr("data-href");
    //     $('#' + target).show().addClass('activescroll').siblings("div").removeClass('activescroll').hide();
    //     //If class exist then apply 
    //     if($('.sub-wrapper').hasClass('activescroll')){
    //         setTimeout(function(){
    //             $(".activescroll .stay-money__horizontal-tab-main-wrapper ul li.js-horizontal-tab-lob:first").trigger("click");
    //         },500);
    //     }
    //     //
    //     $(".stay-money__horizontal-tab-main-wrapper .js-scroll-left").addClass("hide");
    //     $(".activescroll .stay-money__horizontal-tab-scroll-wrapper").scrollLeft(0);
    //     $(".activescroll .stay-money__horizontal-tab-scroll-wrapper").each(function () {
    //         //if ($(this).length) {
    //             //console.log("scrollwidth = " + $(this).get(0).scrollWidth);
    //             //console.log("innerWidth = " + $(this).innerWidth());
    //             if ($(this).get(0).scrollWidth <= $(this).innerWidth()) {
    //                 $(this).closest(".stay-money__horizontal-tab-main-wrapper").find('.js-scroll-right').addClass("hide");
    //             } else {
    //                 $(this).closest(".stay-money__horizontal-tab-main-wrapper").find('.js-scroll-right').removeClass("hide");
    //             }
                
    //         //}
    //     });
    //     // Hide Recommanded User
    //     $('.repeate-user-stay-money-wise .login-right-col .dashboard__nbo-cards-wrapper').hide();
    //     // Page goto top
    //     $(window).scrollTop(0);
    // });
   // Remove Class on windiw resize
    $(window).on('resize', function() {
        if(window.innerWidth > 767){
            $('.stay-money-wise:not(.stay-money-wise.desktop-view) > .title').show();
            $('.stay-money-wise:not(.stay-money-wise.desktop-view) .stay-money-wise__ul').show();
            $('.stay-money-wise.desktop-view').removeAttr('style');
            //
            $('.stay-money-wise:not(.stay-money-wise.desktop-view) > .title').removeClass('hide');
            $('.stay-money-wise:not(.stay-money-wise.desktop-view) .stay-money-wise__ul').removeClass('hide').css('display', 'flex');
            $('.view-more-less').addClass('hide');
        }
        else {
            // Remove hidden state for Desktop view
            $('.stay-money-wise:not(.stay-money-wise.desktop-view) > .title').show();
            $('.stay-money-wise:not(.stay-money-wise.desktop-view)  .stay-money-wise__ul').show();
            // Hide Default last 2 Li
            $(".information-box.show-me").addClass("mb-hide");
            //
            $('.view-more-less').removeClass('hide');
        }
        // Hide tabs data if resize
        $('.sub-wrapper').hide();
        // Show Recommanded User
        $('.repeate-user-stay-money-wise .login-right-col .dashboard__nbo-cards-wrapper').show();
        //
         // Change text
         $(".change-txt").text('View More');
    });
});
(function($, window, document, undefined) {



    function productSlick() {
        var winWidth = $(window).width();
        var slides;
        if ($('.product-list').hasClass('product-list2')) {
            slides = 2;
            if (winWidth <= 1024) {
                slides = 1.5
            } else if (winWidth <= 768) {
                slides = 1.5
            }
        } else {
            slides = 3
            if (winWidth <= 1024) {
                slides = 2
            } else if (winWidth <= 768) {
                slides = 1.5
            }
        }

        $('.product-list').slick({
            autoplay: true,
            slidesToShow: slides,
            arrows: true,
            infinite: true,
            prevArrow: $('.slick-nav--product .slick-nav__btn--prev'),
            nextArrow: $('.slick-nav--product .slick-nav__btn--next'),
            responsive: [{
                breakpoint: 1270,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false
                }
            }, {
                breakpoint: 1025,
                settings: {
                    slidesToShow: slides,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: slides,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }]
        });

        var maxHeighthArray = new Array();
        $('.product-card__top').each(function() {
            maxHeighthArray.push($(this).height());
        });
        var maxHeight = Math.max.apply(Math,maxHeighthArray); 
        $('.product-card__top').height(maxHeight);

        var maxTotalHeighthArray = new Array();
        $(".product-card__mid").each(function(){
            if($(this).find(".product-card__punch-line").length == 0) {
                var punchLineHeight = 0;
            }  else {
                var punchLineHeight = $(this).find(".product-card__punch-line").outerHeight();
            }
            var featuresHeight = $(this).find(".product-card__features").outerHeight();
            var totalHeight = punchLineHeight + featuresHeight + 52;
            maxTotalHeighthArray.push(totalHeight);
        });
        var maxTotalHeight = Math.max.apply(Math,maxTotalHeighthArray);
        $(".product-card__mid").css("height",maxTotalHeight);

    }

    var init = function() {
        productSlick()

    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {
    function tabs() {
        $(document).on("click", ".tabs .tabs__anchor", function(e) {
            e.preventDefault();
            var dt = $(this).attr("data-target");
            $(this).closest(".tabs").children(".tabs__contents").children(".tabs__content").removeClass("tabs__content--active");
            if ($(this).parents('.slick-slide').length) {
                $(this).parents('.slick-slide').siblings('.slick-slide').find(".tabs__link").removeClass("tabs__link--active");
            } else {
                $(this).parent(".tabs__link").siblings(".tabs__link").removeClass("tabs__link--active");
            }
            $(this).parent().addClass("tabs__link--active");
            $("#" + dt).addClass("tabs__content--active");
            if ($("#" + dt).find('.slick-slide').length) {
                $("#" + dt).find('.slick-slider').slick('refresh')
            }
        });
    }

    var init = function() {
        tabs();
        if ($('.select--website').length) {
            selectDropdown("select-plan");

        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function ($, window, document, undefined) {
  function inItTextTileCarousel(
    textTileCarousel,
    textTileLoop,
    textTileTouchDrag,
    textTileMouseDrag,
    textTileDots
  ) {
    $("#" + textTileCarousel).owlCarousel({
      responsiveClass: true,
      dots: true,
      rtl: false,
      margin: 30,
      responsive: {
        0: {
          loop: true,
          items: 1,
          dots: true
        },
        768: {
          items: 2,
          loop: textTileLoop,
          touchDrag: textTileTouchDrag,
          mouseDrag: textTileMouseDrag,
          dots: textTileDots
        },
        1021: {
          items: 3,
          loop: false,
          touchDrag: false,
          mouseDrag: false
        }
      }
    });
  }
  function textTileCarousel(windowWidth) {
    $textTileContainer = $(".text-tile--container .text-tile");
    $textTile = $(".text-tile.owl-carousel");

    $textTileContainer.each(function (index) {
      $textTileCarousel = $(this).attr("id");
      $textTileSlides = $(this)
        .find(".text-tile__item")
        .size();
      if ($textTileSlides <= 2) {
        var textTileLoop = false;
        var textTileTouchDrag = false;
        var textTileMouseDrag = false;
        var textTileDots = false;
      } else {
        var textTileLoop = true;
        var textTileTouchDrag = true;
        var textTileMouseDrag = true;
        var textTileDots = true;
      }

      //for center content
      if ($textTileSlides == 1) {
        var parentContainer = $(this).parent();
        var experienceEditor = parentContainer.parent();

        if (parentContainer.hasClass('text-tile--center') || experienceEditor.hasClass('text-tile--center')) {
          $(this).css('margin-left', '15px');
          $(this).css('margin-right', '0');
          if (windowWidth < 768) {
            $(this).css('margin-left', '0');
          }
        }

        //Experience Editor
      }


      inItTextTileCarousel(
        $textTileCarousel,
        textTileLoop,
        textTileTouchDrag,
        textTileMouseDrag,
        textTileDots
      );
    });
  }

  var init = function () {
    var windowWidth = $(window).width();
    textTileCarousel(windowWidth);
    $(window).resize(function () {
      var windowWidth = $(window).width();
      textTileCarousel(windowWidth);
    });
  };
  $(init);
})(window.jQuery, this, this.document);

(function($, window, document, undefined) {

    function wbFooterAccordion() {
        $('.foot-link-set__title .foot-link-set__title-link .icon').on('click', function(e) {
            e.preventDefault();
            if ($(this).parents('.foot-link-set').hasClass('foot-link-set--active')) {

                $(this).parents('.foot-link-set').removeClass('foot-link-set--active');
                $(this).parents('.foot-link-set__title').siblings('.foot-link-set__cont').slideUp();
            } else {
                $(this).parents('.foot-link-wrap').find('.foot-link-set').removeClass('foot-link-set--active');
                $(this).parents('.foot-link-wrap').find('.foot-link-set__cont').slideUp();
                $(this).parents('.foot-link-set').addClass('foot-link-set--active');
                $(this).parents('.foot-link-set').find('.foot-link-set__cont').slideDown();
            }
        })
    }

    var init = function () {
        wbFooterAccordion()

        var p = $('.foot-link-set__item .img-link-block .foot-link-set__link');
        // var divh = $('.foot-link-set__item .img-link-block__img').height();
        $(p).each(function () {
            // while ($(this).outerHeight() > divh) {
            // $(this).text(function (index, text) {
            //     return text.replace(/\W*\s(\S)*$/, '...');
            // });

            $(this).css("display", "-webkit-box")
            $(this).css("-webkit-line-clamp", "2")
            $(this).css("-webkit-box-orient", "vertical")
            $(this).css("overflow", "hidden")


            // }
        })
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function playVideo() {
        $('.video-blog__link').on('click', function(e) {
            e.preventDefault();
            if (!$(this).parents('.video-blog__img-wrap').hasClass('video-blog__img-wrap--novideo')) {
                $(this).hide().siblings('.video-blog__icon,.video-blog__img').hide();
                var videoSRC = $(this).siblings('.video-blog__iframe').attr('src') + "?autoplay=1&mute=1";
                $(this).siblings('.video-blog__iframe').fadeIn(300).attr('src', videoSRC);
            }

        })

        var p = $('.video-blog__desc').not('.video-blog__desc--v2').find('p');
        var divh = $('.video-blog__desc').height();
        while ($(p).outerHeight() > divh) {
            $(p).text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    }

    var init = function() {
        playVideo()
    };
    $(init);
})(window.jQuery, this, this.document);
//(function ($, window, document, undefined) {
//    var desktopSearchInput = $("#select-search-header, #select-search, #select-search-header-mob");
//    // Redirect to the Search Page
//    function redirectToSearchPage() {
//        var searchText = desktopSearchInput.val();
//        var searchPage = $("#searchPageUrl").val();
//        var isOnSearchPage = $("#isOnSearchPage").val();
//        if (searchPage.trim() != "")
//        {
//            if (isOnSearchPage == "True")
//            {
//                //if current page is search page
//                if (searchText == "")
//                window.location = window.location.pathname;
//                if (searchText != "")
//                window.location = window.location.pathname + "?search=" + searchText;
//            }
//            else
//            {
//                //if current page is other than search page
//                var baseUrl=($("#homePageUrl").val());

//                if (searchText == ""){
//                window.location = baseUrl + searchPage;
//                }
//                if (searchText != ""){
//                window.location = baseUrl + searchPage + "?search=" + searchText;
//                }
//            }
//        }
//    }

//    Cookie autosuggestion
//    function getRecentSearches() {
//        var cookieArr = document.cookie.split(";");
//        var result;
//        var resultItems;
//        var groups;
//        cookieArr.forEach(function (currentValue, idx, arr) {
//            var cookiePair = currentValue.split("=");
//            if (cookiePair[0] == "RecentSearches" || cookiePair[0].trim() == "RecentSearches") {
//                result = JSON.parse(cookiePair[1]);
//            }
//        });
//        if (result) {
//            resultItems = result.items;
//            groups = result.optgroups;
//        }
//        return {
//            resultItems: resultItems,
//            groups: groups
//        };
//    }
    
   

//    // Ajax Search Autocomplete
//    function ajaxSearchAutocomplete(){
//        if (desktopSearchInput.length > 0) {
//            desktopSearchInput.autocomplete({
//                source: function (request, response) {
//                    $.ajax({
//                        url: "https://run.mocky.io/v3/b7f46754-85fb-4b07-b5b7-0d7804ecfa42",
//                        data: {
//                            term: request.term.label,
//                        },
//                        async: true,
//                        success: function (data) {
//                            response(data);
//                        },
//                        error: function (result) {
//                            console.log("Error loading the data" + result.responseText);
//                        }
//                    });
//                },
//                minLength: 3,
//            select: function (event, ui) {
//                desktopSearchInput.val(ui.item.value);
//                redirectToSearchPage();
//            },
//            open: function(event, ui) {
//                $(".optgroup-header").remove();
//            }
//            }).data("ui-autocomplete")._renderItem = function (ul, item) {
//                return $("<li class='ui-corner-all'>")
//                    .append("<a> <span style='float:left;'>" + item.label + "</span></a>").appendTo(ul);
//            };
//        }
//    }

//    // On Focus Search Suggestion
//    function onFocusSearchAutocomplete() {
//        desktopSearchInput.on('blur', function(e) {
//            preSearchAutocomplete();
//        });
//    }


//    // Main Search Suggestion
//    function searchAutocomplete() {
//        desktopSearchInput.on("keyup",function() {
//            var maxLength = 3;
//            if(maxLength > $(this).val().length) {
//                preSearchAutocomplete();
//            } 
//            else if(maxLength == $(this).val().length) {
//                ajaxSearchAutocomplete();
//            }
//        });
//    }

//    var init = function () {
//        searchAutocomplete();
//        onFocusSearchAutocomplete();
       
//    };
//$(init);
//}) (window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function websiteMobileNav() {
        $('.wb-hamburger').on('click', function(e) {
            e.preventDefault();
            $('.wb-mob-nav-wrap').addClass('wb-mob-nav-wrap--active');
            $('html').css('overflow', 'hidden');
        });

        $('.wb-mob-nav-wrap__close').on('click', function(e) {
            e.preventDefault();
            $('.wb-mob-nav-wrap').removeClass('wb-mob-nav-wrap--active');
            $('.wb-mob-nav__link-list').removeClass('wb-mob-nav__link-list--active');
            $('html').css('overflow', 'auto');
            $('.wb-mob-nav__go-back').removeClass('wb-mob-nav__go-back--active')
            $('.wb-mob-nav__link > a').removeClass('active');
            $('.wb-mob-nav__title--link').css('display', 'none');
            $('.wb-mob-nav__title--default').css('display', 'block');
        });

        $('.wb-mob-nav__link-list > .wb-mob-nav__link > a').on('click', function(e) {
            e.preventDefault();
            var currentCategory = $(this).html()
            var currentURL = $(this).attr('href');

            $(this).addClass('active').siblings('.wb-mob-nav__link-list').addClass('wb-mob-nav__link-list--active');

            websiteMobileNavHeight($(this).addClass('active').siblings('.wb-mob-nav__link-list'));

            $(this).parent('.wb-mob-nav__link').siblings('.wb-mob-nav__link').find('a').removeClass('active')
            if ($('.wb-mob-nav__link-list--level2').hasClass('wb-mob-nav__link-list--active')) {
                $('.wb-mob-nav__go-back').addClass('wb-mob-nav__go-back--active')
            }

            if (!$('.wb-mob-nav__link-list--level2').hasClass('wb-mob-nav__link-list--active')) {

                $('.wb-mob-nav__title--link').css('display', 'none');
                $('.wb-mob-nav__title--default').css('display', 'block');
            } else {
                $('.wb-mob-nav__title--default').css('display', 'none');
                $('.wb-mob-nav__title--link').html(currentCategory).attr('href', currentURL).css('display', 'block');
            }


            // $(this).siblings('.wb-mob-nav__link-list').mCustomScrollbar({
            //     theme: "dark-3"
            // });
        });

        $('.wb-mob-nav__go-back').on('click', function(e) {
            e.preventDefault();
            var currentCategory, currentURL;
            if ($('.wb-mob-nav__link-list--level4').hasClass('wb-mob-nav__link-list--active')) {
                $('.wb-mob-nav__link-list--level4').removeClass('wb-mob-nav__link-list--active')
                $('.wb-mob-nav__link-list--level4 .wb-mob-nav__link > a').removeClass('active')
                currentURL = $('.wb-mob-nav__link-list--level2 .wb-mob-nav__link > a.active').attr('href')
                currentCategory = $('.wb-mob-nav__link-list--level2 .wb-mob-nav__link > a.active').html()

                $('.wb-mob-nav__title--default').css('display', 'none');
                $('.wb-mob-nav__title--link').html(currentCategory).attr('href', currentURL).css('display', 'block');
                websiteMobileNavHeight($('.wb-mob-nav__link-list--level3'));
            } else if ($('.wb-mob-nav__link-list--level3').hasClass('wb-mob-nav__link-list--active')) {
                $('.wb-mob-nav__link-list--level3').removeClass('wb-mob-nav__link-list--active')
                $('.wb-mob-nav__link-list--level3 .wb-mob-nav__link > a').removeClass('active')

                currentURL = $('.wb-mob-nav__link-list--level1 .wb-mob-nav__link > a.active').attr('href')
                currentCategory = $('.wb-mob-nav__link-list--level1 .wb-mob-nav__link > a.active').html()

                $('.wb-mob-nav__title--default').css('display', 'none');
                $('.wb-mob-nav__title--link').html(currentCategory).attr('href', currentURL).css('display', 'block');
                websiteMobileNavHeight($('.wb-mob-nav__link-list--level2'));
            } else if ($('.wb-mob-nav__link-list--level2').hasClass('wb-mob-nav__link-list--active')) {
                $('.wb-mob-nav__link-list--level2').removeClass('wb-mob-nav__link-list--active')
                $('.wb-mob-nav__link-list--level2 .wb-mob-nav__link > a').removeClass('active')
                $('.wb-mob-nav__title--link').css('display', 'none');
                $('.wb-mob-nav__title--default').css('display', 'block');
                websiteMobileNavHeight($('.wb-mob-nav__link-list--level1'));
            }

            if (!$('.wb-mob-nav__link-list--level2').hasClass('wb-mob-nav__link-list--active')) {
                $('.wb-mob-nav__go-back').removeClass('wb-mob-nav__go-back--active')
            }

        });

        $(".wb-mob-nav__link--typ2 a").on("click", function(e){
            e.stopImmediatePropagation();
            var mobHref = $(this).attr("href");
            window.location.href = mobHref;
        });
    }
    function websiteMobileNavHeight(selector){
        $('.wb-mob-nav__link-list').removeClass("overflowItems");
        $(selector).each(function() {
        var $this = $(this);
        var initHeight = $this.height();
        var numOfItem = $this.children("li").length;
        var itemHeight = $this.children("li").height();
        var totalHeight = numOfItem * itemHeight;
        if(totalHeight > initHeight){
            $this.addClass("overflowItems");
        }
        });
    }

    var init = function() {
        if ($(window).width() < 1020) {
            websiteMobileNav();
        }
    };
    $(init);
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {
/*
    function wbLoginFlow() {
        var wbLoginForm = $("#wb-login-form");

        $.validator.addMethod("EmailOrMobileOrPolicy", function(value, element) {
            var flag
            if (value.length == 9 || value.length == 10) {
                if (/^[0-9]*$/.test(value)) {
                    flag = true;
                } else if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
                    flag = true
                } else {
                    flag = false
                }
            } else {
                if (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
                    flag = true
                } else {
                    flag = false
                }

            }
            return flag
        }, "Sorry, I've enabled very strict email validation");

        var wbLoginValidator = $(wbLoginForm).validate({
            rules: {
                "userid": {
                    required: true,
                    EmailOrMobileOrPolicy: true
                },
                dateOfBirth: {
                    required: true,
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            },
            highlight: function(element, errorList) {
                if (errorList == "error") {
                    $('.sent-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')
                }

            }
        });

        $('.sent-login-otp').click(function() {
            wbLoginForm.valid();
            return false
        });

        $('#wb-login-form .form-control').on('change', function() {
            if (wbLoginForm.valid()) {
                $('.sent-login-otp').attr('disabled', false).removeClass('wb-light-grey-bg')

            } else {
                $('.sent-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')

            }

        })

        var wbLoginOTPForm = $("#wb-otp-form");

        var wbLoginOTPValidator = $(wbLoginOTPForm).validate({
            ignore: [],
            rules: {
                "login-otp-hidden": {
                    required: true,
                    minlength: 6,
                    maxlength: 6
                }
            },
            errorElement: "span",
            errorPlacement: function(error, element) {
                error.appendTo($(element).closest(".form-group"));
            },
            highlight: function(element, errorList) {
                if (errorList == "error") {
                    $('.verify-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')
                }
            }
        });

        $('.verify-login-otp').click(function() {
            wbLoginOTPForm.valid();
            return false
        });

        $('#wb-otp-form .form-control--otp').on('input', function() {

            if ($(this).val() != '') {
                $(this).next().focus()
            }
            var finalVal = "";
            $('#wb-otp-form .form-control--otp').each(function() {
                finalVal += $(this).val();
            })
            $('.login-otp-hidden').val(finalVal)

            if (wbLoginOTPForm.valid()) {
                $('.verify-login-otp').attr('disabled', false).removeClass('wb-light-grey-bg')

            } else {
                $('.verify-login-otp').attr('disabled', true).addClass('wb-light-grey-bg')

            }
        });

    }

    function countDownTimer(otpTimer) {
        var timer2 = otpTimer;
        var interval = setInterval(function() {

        var timer = timer2.split(':');
        //by parsing integer, I avoid all extra string processing
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        if (minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        //minutes = (minutes < 10) ?  minutes : minutes;
        $('.otp-timer').html(minutes + ':' + seconds);
        timer2 = minutes + ':' + seconds;
        if(timer2 == "-1:59"){
            $('.otp-timer').empty();
            $('.otp-timer').append('0:00');
            return false;
        }
        }, 1000);
    }

    var init = function() {
        if ($('.login-birth-date').length) {
            datePicker("login-birth-date");

        }
        if ($('.wb-login').length) {
            wbLoginFlow()
        }
        if ($('.otp-timer').length != 0) {
            var otpTimer = $('.otp-timer').data("time");
            countDownTimer(otpTimer);
        }
    };
    $(init);
*/
})(window.jQuery, this, this.document);
(function($, window, document, undefined) {

    function readMoreLess() {
        $('.why-buy__button-link--read-more').on('click', function(e) {
            e.preventDefault();
            $(this).siblings('.why-buy__list').find('.why-buy__item').fadeIn()
            $(this).addClass('hide').siblings('.why-buy__button-link--read-less').removeClass('hide');

        })

        $('.why-buy__button-link--read-less').on('click', function(e) {
            $(this).siblings('.why-buy__list').find('.why-buy__item').hide()
            $(this).siblings('.why-buy__list').find('.why-buy__item:lt(3)').fadeIn(300)
            $(this).addClass('hide').siblings('.why-buy__button-link--read-more').removeClass('hide');
        })
    }


    var init = function() {
        readMoreLess();
    };
    $(init);
})(window.jQuery, this, this.document);
//Mobi menu arrow click starts
$("span.header-title-arrow").on("click", function () {
  //$(".mobile-menu-wrapper").trigger("click");
  var _thisele = $(this);
  _thisele.toggleClass("active");

  $(".mobi-nav-wrapper").html("");
  var mainNavigation = $(".main-nav-wrapper nav").html();
  $(".mobi-nav-wrapper").html(mainNavigation);

  $("#mobi-navigation")
    .toggleClass("active")
    .toggleClass("main-nav-active");
  $("body").addClass("mobile-menu-active");
});
//Mobi menu arrow click Ends
//set uparrow to the center of the name
function setLoggedInArrow() {
  var $loggedinItem = $(".loggedin-item");
  if ($loggedinItem.length > 0) {
    var loginItemWidth = $loggedinItem.width();
    var setWidth = loginItemWidth / 2 + 5;
    $(".login-dropdowm > .arrow_up").css("right", setWidth);
  }
}
function headerClick() {
  $(".header-title").on("click", function () {
    var _thisele = $(this);
    if (!_thisele.hasClass("disable")) {
      _thisele.toggleClass("active");

      $(".mobi-nav-wrapper").html("");
      var mainNavigation = $(".main-nav-wrapper nav").html();
      $(".mobi-nav-wrapper").html(mainNavigation);
    }
  });
}
function bannerHeight() {
  var viewportWidth = $(window).width();
  var headerHeight = $("header").outerHeight();
  var bannerContentHeight = $(".banner-content-wrapper").outerHeight();
  var totalHeight = headerHeight + bannerContentHeight;
  if (viewportWidth < 1021) {
    $(".banner-component").height(bannerContentHeight);
  } else {
    $(".banner-component").height("");
  }
  $(".banner-wrapper").height(totalHeight);
  $(".banner-wrapper").css("min-height", totalHeight);
}
function contentBannerHeight() {
  var viewportWidth = $(window).width();

  var headerHeight = $("header").outerHeight();
  var bannerContentHeight = $(
    ".dark-banner .banner-content-wrapper"
  ).outerHeight();
  var totalHeight = headerHeight + bannerContentHeight;
  if (viewportWidth < 1021) {
    $(".dark-banner").height(bannerContentHeight);
  } else {
    $(".dark-banner").height("");
  }
  if (viewportWidth < 768) {
    $(".dark-banner .banner-wrapper").css("top", $("header").height() - 10);
  } else {
    $(".dark-banner .banner-wrapper").css("top", 0);
  }
  $(".dark-banner .banner-wrapper").height(totalHeight);
  $(".dark-banner .banner-wrapper").css("min-height", totalHeight);
}

function wordLimitBannerTitle(data) {
  var txt = $(data).text();
  if (txt.length > 105) {
    $(data).text(txt.substring(0, 100) + "...");
  }
}

function wordLimit(data, limit) {
  var _this = data;
  $(_this).each(function (i) {
    var len = $(this).text().length;
    if (len > limit) {
      $(this).text(
        $(this)
          .text()
          .substr(0, limit) + "…"
      );
    }
  });
}
function trendingArticleHeight() {
  var articleTag = $(
    ".trending-widget-banner-wrapper .trending-item .article-details .article-tag"
  ).height();
  var articleDesc = $(
    ".trending-widget-banner-wrapper .trending-item .article-details .article-desc"
  ).height();
  var articleUpdates = $(
    ".trending-widget-banner-wrapper .trending-item .article-details .article-updates"
  ).height();
  var total = articleTag + articleDesc + articleUpdates;
  $(".trending-widget-banner-wrapper .trending-item .article").height(total);
  $(".trending-widget-banner-wrapper .trending-item .article").css(
    "min-height",
    total
  );
  $(".trending-widget-banner-wrapper .trending-item").height(total);
  $(".trending-widget-banner-wrapper .trending-item").css("min-height", total);
}
// function MultiplePoll() {
// 	0 < $(".multiple-poll").length && ($(".pollPrev").addClass("disabled"), $(".multipollwrap").length <= 1 && $(".multiple-poll .poll-action").hide(), NextPoll(), PrevPoll())

// }

// function NextPoll() {
//     0 < $(".pollNext").length && $(".pollNext").on("click", function(e) {
//         e.preventDefault();
//         var activePoll = $(".multiple-poll .multipollwrap.active"),
//             pollLength = $(activePoll).nextAll(".multipollwrap").length;
//         0 < pollLength && ($(activePoll).next(".multipollwrap").removeClass("pollhide").addClass("active"), $(activePoll).removeClass("active").addClass("pollhide"), $(".pollPrev").removeClass("disabled"), 1 === pollLength && $(".pollNext").addClass("disabled"))
//     })
// }

// function PrevPoll() {
//     0 < $(".pollPrev").length && $(".pollPrev").on("click", function(e) {
//         e.preventDefault();
//         var prevActivePoll = $(".multiple-poll .multipollwrap.active"),
//             prevPollLength = $(prevActivePoll).prevAll(".multipollwrap").length;
//         0 < prevPollLength && ($(prevActivePoll).prev(".multipollwrap").removeClass("pollhide").addClass("active"), $(prevActivePoll).removeClass("active").addClass("pollhide"), $(".pollNext").removeClass("disabled"), 1 === prevPollLength && $(".pollPrev").addClass("disabled"))
//     })
// }
$(document).ready(function () {
  //set uparrow to the center of the name
  setLoggedInArrow();

  var viewportWidth = $(window).width();

  //function bannerHeight() {
  setTimeout(function () {
    bannerHeight();
  }, 1000);
  //}

  if ($(".searchContentWrapper").length > 0) {
    $(".main-content").addClass("HideOverflow");
  }

  $(".error-lbl").hide();
  $(".validate").keyup(function (e) {
    var isValid = true;
    $('input[type="text"]').each(function () {
      if ($.trim($(this).val()) == "hello") {
        isValid = false;
        $(".error-lbl").show();
        $(this).css({
          border: "1px solid #bd2b2b",
          background: "#bd2b2b1f",
          color: "#bd2b2b"
        });
      } else if ($.trim($(this).val()) == "hi") {
        isValid = false;
        $(this).css({
          border: "",
          background: "",
          color: ""
        });
        $(".validate").addClass("validate-icon");
      } else {
        $(this).css({
          border: "",
          background: "",
          color: ""
        });
      }
    });
    if (isValid == false) {
      e.preventDefault();
    } else {
      $(".error-lbl").hide();
      $(".validate").removeClass("validate-icon");
    }
  });

  /* Toggle Navigation in Responsive */
  $(".mobile-menu-wrapper").on("click", function () {
    var _thisele = $(this);
    _thisele.toggleClass("active");
    /* Main Navigation */
    $(".primary-nav__mobile").addClass("hide");
    $(".menu-header").removeClass("hide");
    $(".menu-content").removeClass("hide");
    $(".menu-footer").removeClass("hide");
    $(".close-menu").removeClass("hide");
    $("#mobi-navigation").css("max-width", "");
    $(".mobi-nav-wrapper").html("");
    var mainNav = $(".top-menu").html();
    $(".mobi-nav-wrapper").html(mainNav);
    $("#mobi-navigation").toggleClass("active");
    $("body").addClass("mobile-menu-active");
  });

  if (viewportWidth < "1020") {
    $(".header-title").removeClass("disable");
  } else {
    $(".header-title").addClass("disable");
  }

  if (viewportWidth < "1020") {
    $(".header-title").removeClass("disable");
  } else {
    $(".header-title").addClass("disable");
  }

  headerClick();

  $(".close-menu, .primary-nav__close").on("click", function () {
    $("body").removeClass("mobile-menu-active");
    $(".mobile-menu-wrapper").removeClass("active");
    $("#mobi-navigation").removeClass("active");
    $(".menu-content").removeClass("hide");
    setTimeout(function () {
      $("#mobi-navigation").removeClass("main-nav-active");
      $(".mobi-header-title").remove();
    }, 500);
    $(".header-title").removeClass("active");
    $(".mobi-footer-links ul li.has-children").removeClass("active");
    $(".mobi-footer-links ul li.has-children")
      .children("ul")
      .css("display", "none");
  });
  /**/

  // $(".main-nav-active ul li.level1.has-children").each(function(){
  // 	var _this = $(this);
  // 	_this.find(".icon-arrow").click(function(){
  // 		var _thisele = $(this);
  // 		_thisele.addClass("active");
  // 		_thisele.next().slideToggle();
  // 	});
  // });

  /* Mobile Link Toggle */
  $(".mobi-footer-links li.has-children").on("click", function () {
    var _thisele = $(this);
    _thisele.toggleClass("active");
    _thisele.find("ul").slideToggle();
  });

  /* Mobile Search Toggle */

  $(".mobi-search-icon").on("click", function () {
    var _thisele = $(this);
    _thisele.toggleClass("active");
    _thisele.next(".search-wrapper").slideToggle();
  });

  /*$(".main-navigation li").hover(function(){
    var _thisele = $(this);
    _thisele.toggleClass("active");
    _thisele.children("ul").slideToggle();
  });*/

  /* Share Toggle */
  $(".share-wrapper").click(function (e) {
    $(this)
      .next(".share-content")
      .slideToggle();
    e.stopPropagation();
  });
  // $(".share-content").click(function (e) {
  //   e.stopPropagation();
  // });
  $(document).on("click", function () {
    $(".share-content").hide();
  });

  $(document).on("touchstart", function (event) {
    if (!$(event.target).closest(".share-content").length) {
      $(".share-content").hide();
    }
  });

  /* Share Toggle */
  $(".author-click").click(function () {
    $(this).toggleClass("active");
    $(this)
      .parent()
      .find(".author-content")
      .slideToggle();
  });

  /* Loader for subscribe form */
  $(".frm-subscribe").click(function () {
    //append loader on form click
    $("#frm-loading").removeClass("hide");
    $("#frm-loading").addClass("show");
  });

  /* Poll Functionality <start> */
  // MultiplePoll();
  // $(".radio-wrapper input").change(function(){
  // 	// Do something interesting here
  // 	$(".poll-answer").removeClass("active");
  // 	$(this).parents(".poll-answer").addClass("active");
  // 	$(this).parents(".poll-content-wrapper").find(".poll-submit input").removeClass("disabled").removeAttr("disabled");
  // });

  // $(".poll-result-wrapper").addClass("hide").removeClass("display");
  // $(".poll-msg").addClass("hide");
  // $(".poll-answer-wrapper").removeClass("hide");
  // $(".poll-submit input").click(function(){
  // 	var _this = $(this);
  // 	var _thisWrapper = _this.closest(".poll-content-wrapper");
  // 	_this.addClass("hide");
  // 	_thisWrapper.find(".poll-answer-wrapper").addClass("hide");
  // 	_thisWrapper.find(".poll-result-wrapper").removeClass("hide").addClass("display");
  // 	_thisWrapper.find(".poll-msg").removeClass("hide");
  // 	var dataDisplay = _thisWrapper.find(".poll-answer-wrapper").data("display");
  // 	var defaultDataValue = _thisWrapper.find(".data-display").val();
  // 	if(dataDisplay != ""){
  // 		_thisWrapper.find(".poll-result-wrapper").addClass(dataDisplay);
  // 	} else {
  // 		_thisWrapper.find(".poll-result-wrapper").addClass(defaultDataValue);
  // 	}

  // 	_this.closest(".poll-item").addClass("current");
  // 	var dataID = _thisWrapper.find(".poll-answer.active").data("id");
  // 	_thisWrapper.find(".poll-result-wrapper .poll-answer").removeClass("selected");

  // 	var Total = 1;
  // 	_thisWrapper.find(".poll-result-wrapper .poll-answer").each(function(){
  // 		var _thisele = $(this);
  // 		Total += _thisele.data("result");
  // 	});

  // 	_thisWrapper.find(".poll-result-wrapper .poll-answer").each(function(){
  // 		var _thisele = $(this);
  // 		if(_thisele.data("id") === dataID){
  // 			_thisele.addClass("selected");
  // 			var res = _thisele.data("result");
  // 			var resAdd = res + 1;
  // 			_thisele.attr("data-result",resAdd);

  // 			var percent = ((resAdd / Total) * 100).toFixed(2);
  // 			_thisele.find(".poll-progressbar").height(percent+"%");
  // 			_thisele.find(".result-number").html("(<span class='count-num'>"+ resAdd +"</span>)");
  // 			_thisele.find(".result-percent").html("(<span class='count-num'>"+ percent +"</span>%)");

  // 			_thisele.find(".result-number").find(".count-num").prop('Counter',0).animate({
  // 				Counter: _thisele.find(".result-number").find(".count-num").text()
  // 			}, {
  // 				duration: 1000,
  // 				easing: 'swing',
  // 				step: function (now) {
  // 					$(this).text(Math.ceil(now));
  // 				}
  // 			});

  // 			_thisele.find(".result-percent").find(".count-num").prop('Counter',0).animate({
  // 				Counter: _thisele.find(".result-percent").find(".count-num").text()
  // 			}, {
  // 				duration: 1000,
  // 				easing: 'swing',
  // 				step: function (now) {
  // 					$(this).text(now.toFixed(2));
  // 				}
  // 			});
  // 			if(percent > 90){
  // 				$(".poll-answer.selected").addClass("white");
  // 			}

  // 		} else {
  // 			var vote = _thisele.data("result");
  // 			percent = ((vote / Total) * 100).toFixed(2);
  // 			_thisele.find(".poll-progressbar").height(percent+"%");
  // 			_thisele.find(".result-number").html("(<span class='count-num'>"+ vote +"</span>)");
  // 			_thisele.find(".result-percent").html("(<span class='count-num'>"+ percent +"</span>%)");

  // 			_thisele.find(".result-number").find(".count-num").prop('Counter',0).animate({
  // 				Counter: _thisele.find(".result-number").find(".count-num").text()
  // 			}, {
  // 				duration: 2000,
  // 				easing: 'swing',
  // 				step: function (now) {
  // 					$(this).text(Math.ceil(now));
  // 				}
  // 			});

  // 			_thisele.find(".result-percent").find(".count-num").prop('Counter',0).animate({
  // 				Counter: _thisele.find(".result-percent").find(".count-num").text()
  // 			}, {
  // 				duration: 2000,
  // 				easing: 'swing',
  // 				step: function (now) {
  // 					$(this).text(now.toFixed(2));
  // 				}
  // 			});

  // 		}

  // 	});

  // 	    /* Add Ajax call here */
  // 		var optionId = dataID;
  // 		var pollId = $(this).parents(".poll-item").data("id");
  // 		setCookie(pollId, optionId);

  // 		/*$.ajax({
  // 		  url: "/CustomApi/PollApi/AddPollParticipation",
  // 		  type: "POST",
  // 		  data: { pollId: pollId, optionId: optionId },
  // 		  context: this,
  // 		  success: function (data) {
  // 			console.log("data updated");
  // 		  },
  // 		  error: function (data) {
  // 			console.log("error", data);
  // 		  }
  // 		});*/

  // });

  // 	var value = document.cookie;
  // 	var pollID = value.split("; ");
  // 	pollID.forEach(function(data){
  // 		var val = data.split("=");
  // 		var poll_Id = val[0];
  // 		var poll_ans = val[1].split(",")[1];
  // 		$(".poll-item-wrapper .poll-item").each(function () {
  // 			_this = $(this);
  // 			if (_this.data("id") == poll_Id) {
  // 				_this.addClass("cookieanswer");

  // 				_this.find(".poll-result-wrapper .poll-answer").each(function(){
  // 					if ($(this).data("id") == poll_ans) {
  // 						$(this).addClass("active");
  // 					}
  // 				});
  // 			}

  // 		});

  // 	});

  // 	$(".cookieanswer").each(function(){
  // 		_this = $(this);
  // 		var _thisWrapper = _this.find(".poll-content-wrapper");
  // 		_thisWrapper.find(".poll-submit input").addClass("hide");
  // 		_thisWrapper.find(".poll-answer-wrapper").addClass("hide");
  // 		_thisWrapper.find(".poll-result-wrapper").removeClass("hide").addClass("display");
  // 		_thisWrapper.find(".poll-msg").removeClass("hide");
  // 		var dataDisplay = _thisWrapper.find(".poll-answer-wrapper").data("display");
  // 		var defaultDataValue = _thisWrapper.find(".data-display").val();
  // 		if(dataDisplay != ""){
  // 			_thisWrapper.find(".poll-result-wrapper").addClass(dataDisplay);
  // 		} else {
  // 			_thisWrapper.find(".poll-result-wrapper").addClass(defaultDataValue);
  // 		}
  // 		var dataID = _thisWrapper.find(".poll-answer.active").data("id");
  // 		_thisWrapper.find(".poll-result-wrapper .poll-answer").removeClass("selected");
  // 		var Total = 0;
  // 		_thisWrapper.find(".poll-result-wrapper .poll-answer").each(function(){
  // 			var _thisele = $(this);
  // 			Total += _thisele.data("result");
  // 		});

  // 		_thisWrapper.find(".poll-result-wrapper .poll-answer").each(function(){
  // 			var _thisele = $(this);
  // 			if(_thisele.data("id") === dataID){
  // 				_thisele.addClass("selected");
  // 				var res = _thisele.data("result");
  // 				var resAdd = res;
  // 				_thisele.attr("data-result",resAdd);

  // 				var percent = ((resAdd / Total) * 100).toFixed(2);
  // 				_thisele.find(".poll-progressbar").height(percent+"%");
  // 				_thisele.find(".result-number").html("(<span class='count-num'>"+ resAdd +"</span>)");
  // 				_thisele.find(".result-percent").html("(<span class='count-num'>"+ percent +"</span>%)");

  // 				_thisele.find(".result-number").find(".count-num").prop('Counter',0).animate({
  // 					Counter: _thisele.find(".result-number").find(".count-num").text()
  // 				}, {
  // 					duration: 1000,
  // 					easing: 'swing',
  // 					step: function (now) {
  // 						$(this).text(Math.ceil(now));
  // 					}
  // 				});

  // 				_thisele.find(".result-percent").find(".count-num").prop('Counter',0).animate({
  // 					Counter: _thisele.find(".result-percent").find(".count-num").text()
  // 				}, {
  // 					duration: 1000,
  // 					easing: 'swing',
  // 					step: function (now) {
  // 						$(this).text(now.toFixed(2));
  // 					}
  // 				});
  // 				if(percent > 90){
  // 					$(".poll-answer.selected").addClass("white");
  // 				}

  // 			} else {
  // 				var vote = _thisele.data("result");
  // 				percent = ((vote / Total) * 100).toFixed(2);
  // 				_thisele.find(".poll-progressbar").height(percent+"%");
  // 				_thisele.find(".result-number").html("(<span class='count-num'>"+ vote +"</span>)");
  // 				_thisele.find(".result-percent").html("(<span class='count-num'>"+ percent +"</span>%)");

  // 				_thisele.find(".result-number").find(".count-num").prop('Counter',0).animate({
  // 					Counter: _thisele.find(".result-number").find(".count-num").text()
  // 				}, {
  // 					duration: 2000,
  // 					easing: 'swing',
  // 					step: function (now) {
  // 						$(this).text(Math.ceil(now));
  // 					}
  // 				});

  // 				_thisele.find(".result-percent").find(".count-num").prop('Counter',0).animate({
  // 					Counter: _thisele.find(".result-percent").find(".count-num").text()
  // 				}, {
  // 					duration: 2000,
  // 					easing: 'swing',
  // 					step: function (now) {
  // 						$(this).text(now.toFixed(2));
  // 					}
  // 				});

  // 			}

  // 		});

  // 	});

  /* Poll Functionality <end> */
  setTimeout(function () {
    $(".share-component").each(function () {
      var shareCount = $(this)
        .find(".sharethis-inline-share-buttons .st-label")
        .html();
      if (shareCount) {
        $(this)
          .find(".count")
          .html(shareCount);
      }
    });
  }, 1500);
  //trendingArticleHeight();
});

// function setCookie(pollID, pollAns) {
// 	document.cookie = pollID +"="+ pollID+","+pollAns;
// }

$(window).load(function () {
  setTimeout(function () {
    bannerHeight();
  }, 1000);
  //bannerHeight();
  $("#loading").addClass("hide");

  /* Banner Height Adjust */

  contentBannerHeight();

  var viewportWidth = $(window).width();
  if (viewportWidth < 768) {
    //wordLimitBannerTitle(".banner-subtitle");
  }

  wordLimit(".breadcrumb span:last-child", 33);
  wordLimit(".article-desc h3 a", 82);
  wordLimit(".banner-component:not(.dark-banner) .banner-subtitle", 68);
  wordLimit(".banner-content p", 135);
  wordLimit(
    ".trending-widget-banner-wrapper .trending-item .article-desc h3",
    65
  );
  //wordLimit(".trending-item .article-desc h3", 90);
  // wordLimit(
  //   ".trending-widget-banner-wrapper .trending-item .article-desc h3",
  //   63
  // );
  // wordLimit(".trending-item .article-desc p", 97);
  //wordLimit(".poll-question",92);
  wordLimit(".author-content", 165);

  /* Footer Show Older Link */

  var showOlder = $(".show-older").html();
  $(".category-archive-wrapper .category-content-item ul").append(
    "<li>" + showOlder + "</li>"
  );

  /* Footer Social Media */
  var socialMedia = $(".top-header-wrapper .utility-links").html();
  $(".menu-header .utility-links").append(socialMedia);

  /* Mobile Logo Update */
  var logo = $(".top-header-wrapper .logo").html();
  $(".menu-header .logo").append(logo);

  /* Mobile Top Navigation */
  $(".top-header-wrapper .top-menu ul li.level1").each(function () {
    var footerTopNavigation = $(this).html();
    $(".menu-header .top-menu ul").append(
      "<li>" + footerTopNavigation + "</li>"
    );
    $(".menu-header .top-menu ul li.hide").remove();
    $(".menu-header .top-menu ul .icon-arrow").remove();
    $(".menu-header .top-menu ul ul").remove();
  });

  $(".article-details").jQueryEqualHeight(".article-desc h3");
  $(".article-details").jQueryEqualHeight(".article-tag");

  var TrendingHei = $(".trending-item").height();
  $(".trending-widget-banner-wrapper .trending-item .article").height(
    TrendingHei
  );

  if (viewportWidth > 1020) {
    $(".article-title-link").attr("disabled", "disabled");
  } else {
    $(".article-title-link").attr("disabled", true);
  }

  if (viewportWidth < 1020) {
    $(".header-title a").attr("disabled", "disabled");
  } else {
    $(".header-title a").removeAttr("disabled");
  }

  setTimeout(function () {
    $(".share-component").each(function () {
      var shareCount = $(this)
        .find(".sharethis-inline-share-buttons .st-label")
        .html();
      $(this)
        .find(".count")
        .html(shareCount);
    });
  }, 1500);
});
$(window).resize(function () {
  // //Terms and Condition
  var viewportWidth = $(window).width();
  if (viewportWidth < 768) {
    var ConHei = $(window).height() / 2 - 15;
    var ConWid = $(".terms-conditions-div").outerWidth() / 2;
    $(".terms-conditions-div").css("margin-top", -ConHei);
    $(".terms-conditions-div").css("margin-left", -ConWid);
  } else {
    var ConHei = $(".terms-conditions-div").outerHeight() / 2;
    var ConWid = $(".terms-conditions-div").outerWidth() / 2;
    $(".terms-conditions-div").css("margin-top", -ConHei);
    $(".terms-conditions-div").css("margin-left", -ConWid);
  }
  //set uparrow to the center of the name
  setLoggedInArrow();

  setTimeout(function () {
    bannerHeight();
  }, 1000);
  var viewportWidth = $(window).width();

  if (viewportWidth > 1020) {
    $(".article-title-link").attr("disabled", "disabled");
  } else {
    $(".article-title-link").attr("disabled", true);
  }

  if (viewportWidth < 1020) {
    $(".header-title a").attr("disabled", "disabled");
  } else {
    $(".header-title a").removeAttr("disabled");
  }

  if (viewportWidth < "1020") {
    $(".header-title").removeClass("disable");
  } else {
    $(".header-title").addClass("disable");

    /* Mobile Menu Remove */
    if ($(window).width() > 1020) {
      $("body").removeClass("mobile-menu-active");
      $(".mobile-menu-wrapper").removeClass("active");
      $("#mobi-navigation").removeClass("active");
      setTimeout(function () {
        $("#mobi-navigation").removeClass("main-nav-active");
      }, 500);
    }
    $(".header-title").removeClass("active");
    $(".mobi-footer-links ul li.has-children").removeClass("active");
    $(".mobi-footer-links ul li.has-children")
      .children("ul")
      .css("display", "none");
    /* */

    //primary nav
    if (viewportWidth < 767) {
      $("#mobi-navigation").css("max-width", "100%");
    } else {
      $("#mobi-navigation").css("max-width", "320px");
    }
  }

  bannerHeight();
  contentBannerHeight();

  if (viewportWidth < 768) {
    //wordLimitBannerTitle(".banner-subtitle");
  }

  // $('.article-details').jQueryEqualHeight('.article-desc h3');
  // $('.trending-widget-banner-wrapper').jQueryEqualHeight('.trending-item');
  $(".article-details").jQueryEqualHeight(".article-desc h3");
  $(".article-details").jQueryEqualHeight(".article-tag");
  $(".trending-widget-banner-wrapper").jQueryEqualHeight(
    ".trending-item .article"
  );
  $(".trending-widget-banner-wrapper").jQueryEqualHeight(".trending-item");
  //var TrendingHei = $('.trending-item').height();
  //$('.trending-widget-banner-wrapper .trending-item .article').height(TrendingHei);
});

var isMobile;

$(document).ready(function () {
  //bannerHeight();

  if ($(".two-columns .category.green:first-child .category-cta").length) {
    $(".two-columns")
      .find(".col-lg-4.col-md-12> .block-heading")
      .addClass("marginTop86");
    $("marginTop86").css("margin-top", "86px");
  }
  //Added spacing on first div of the main content (block heading)
  // $(".main-content .outerpadding").each(function () {
  //   if ($(".container-fluid>.outerpadding .block-heading").is(':first-child')) {
  //     $(".block-heading").css("margin-top", "25px");
  //     $(".block-heading").css("display", "inline-block");
  //   }
  // });

  //Footer category
  $(".category-title-link").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this)
        .siblings(".category-content")
        .slideDown();
    } else {
      $(this)
        .siblings(".category-content")
        .slideUp();
    }
  });

  //Pagination JS Starts
  var viewportWidth = $(window).width();

  if (viewportWidth < 1025) {
    $(".pagination").customPagination({
      totalPages: $("#totalNoPages").val(),
      currentPage: $("#currentPageNo").val(),
      showBefore: 0,
      showAfter: 1
    });
  } else {
    $(".pagination").customPagination({
      totalPages: $("#totalNoPages").val(),
      currentPage: $("#currentPageNo").val(),
      showBefore: 2,
      showAfter: 3
    });
  }
  //Pagination Ends

  /*-------------- Mobi Detect Starts -------------------*/
  isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.Opera() ||
        isMobile.Windows() ||
        isMobile.iOS()
      );
    }
  };
  /*----------------- Mobi Detect Ends ----------------*/
  /*----- mobile device tel link starts -------------*/
  if (!isMobile.any()) {
    $("a[href^=tel]").click(function (e) {
      e.preventDefault();
    });
  } else {
    $("a[href^=tel]").addClass("mobile-tel-link");
  }
  /*----- mobile device tel link ends -------------*/
});



//# sourceMappingURL=main.js.map

//# sourceMappingURL=main.js.map
