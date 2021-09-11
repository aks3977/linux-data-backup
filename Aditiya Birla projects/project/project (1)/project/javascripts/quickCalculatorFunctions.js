var customStepperInstance;
var hlvForm1Validator, hlvForm2Validator, hlvForm3Validator;
var retirementForm1Validator, retirementForm2Validator, retirementForm3Validator;
var healthForm1Validator, healthForm2Validator, healthForm3Validator;
var childForm1Validator, childForm2Validator, childForm3Validator,childForm4Validator, childForm5Validator, childForm6Validator, childForm7Validator, childForm8Validator, childForm9Validator, childForm10Validator;
var wealthForm1Validator, wealthForm2Validator, wealthForm3Validator,wealthForm4Validator, wealthForm5Validator, wealthForm6Validator, wealthForm7Validator, wealthForm8Validator, wealthForm9Validator, wealthForm10Validator;

var defaultEstimatedEducCostHigherStudy = {
    'science' :{'mumbai':500000,'ahmedabad':400000,'chennai':400000,'pune':400000,'bengaluru':500000,'otherdetailsCity':0},
    'commerce' :{'mumbai':400000,'ahmedabad':300000,'chennai':300000,'pune':300000,'bengaluru':400000 ,'otherdetailsCity':0},
    'arts' :{'mumbai':300000,'ahmedabad':200000,'chennai':200000,'pune':200000,'bengaluru':300000 ,'otherdetailsCity':0},    
}

var defaultEstimatedEducCostGrade = {
    'mba' :{'india':1200000,'australia':5000000,'usa':9000000,'uk':4500000,'singapore':3500000,'otherdetailsCountry':0},
    'doctor' :{'india':3600000,'australia':17000000,'usa':16000000,'uk':19000000,'singapore':3600000 ,'otherdetailsCountry':0},
    'engineer' :{'india':1500000,'australia':8000000,'usa':12000000,'uk':2200000,'singapore':2000000 ,'otherdetailsCountry':0},
    'designer' :{'india':1000000,'australia':2000000,'usa':3000000,'uk':2000000,'singapore':1500000 ,'otherdetailsCountry':0},
    'architect' :{'india':1500000,'australia':6000000,'usa':9000000,'uk':8000000,'singapore':5500000 ,'otherdetailsCountry':0},
    'otherdetails' :{'india':0,'australia':0,'usa':0,'uk':0,'singapore':0},
}

var defaultEstimatedEducCostPostgrade = {
    'mba' :{'india':2500000,'australia':4000000,'usa':12000000,'uk':6000000,'singapore':3500000, 'otherdetailsCountry':0},
    'doctor' :{'india':4000000,'australia':16000000,'usa':16000000,'uk':15000000,'singapore':4000000, 'otherdetailsCountry':0},
    'engineer' :{'india':1000000,'australia':5000000,'usa':6000000,'uk':5000000,'singapore':4000000, 'otherdetailsCountry':0},
    'designer' :{'india':800000,'australia':2000000,'usa':4000000,'uk':2000000,'singapore':1500000, 'otherdetailsCountry':0},
    'architect' :{'india':1000000,'australia':4000000,'usa':7500000,'uk':3500000,'singapore':2000000, 'otherdetailsCountry':0},
    'otherdetails' :{'india':0,'australia':0,'usa':0,'uk':0,'singapore':0},
}
//convert semi word into number
function setValWFCalc(val) {
    if (val != undefined) {
        var returnvalue = '';
        var slice1 = '';
        val = val.toLowerCase();
        if (val.indexOf('Cr') > 0 || val.indexOf('cr') > 0) {
            slice1 = val.replace(/[^0-9]/g, '');
            returnvalue = slice1 + '000000';
        } else if (val.indexOf('l') > 0 || val.indexOf('L') > 0) {
            slice1 = val.replace(/[^0-9]/g, '');
            returnvalue = slice1 + '0000';
        } else if (val.indexOf('k') > 0 || val.indexOf('K') > 0) {
            slice1 = val.replace(/[^0-9]/g, '');
            returnvalue = slice1 + '000';
        } else {
            returnvalue = val.replace(/[,]/g, '');
        }
        return returnvalue;
    }
}

// convert number into inr semi words format
function inSemiWordsCalc(num) {
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
        str1 = str1 + '.' + num.substring(numL - 7, numL - 6);
        str1 = str1 + xad;
    } else if (numL > 5) {
        // xad = ' Lakhs';
        xad = ' L';
        num = num.toString();
        str1 = num.substring(0, numL - 5);
        str1 = str1 + '.' + num.substring(numL - 5, numL - 4);
        str1 = str1 + xad;
    } else if (numL > 3) {
        // xad = ' Thousands';
        xad = ' K';
        num = num.toString();
        str1 = num.substring(0, numL - 3);
        str1 = str1 + xad;
    } else {
        num = num.toString();
        str1 = num;
    }
    return str1;
}

//update calculators steps
function updateCalcStep(activeSlide) {
    var stepNo = $('.calc-steps__slide[data-slide-name="' + activeSlide + '"]').attr('data-step');
    $('.calc-steps__link').removeClass('calc-steps__link--active');
    $('.calc-steps__link--' + stepNo).addClass('calc-steps__link--active');
}

//switching between label & input
function textLabel() {
    $('.calc-form__dummy-inpt').on('click', function() {
        var inputTrigger = $(this).siblings('.calc-form__form-control');
        $(this).addClass('hide');
        inputTrigger.focus();
    });

    $('.calc-form__form-control').on('blur', function(e) {
        var iputValue = $(this).val();
        var inputView = $(this).siblings('.calc-form__dummy-inpt');
        inputView.removeClass('hide')
        if (iputValue != "" && iputValue != undefined) {
            inputView.find('.input-dummy__value').text(inSemiWordsCalc(iputValue));
        } else {
            inputView.find('.input-dummy__value').text(0)
        }
    });

}

//loader for calculators
function calcLoader(modalClass) {
    $('.calc-form__overlay').fadeIn();
    $('.calc-form__modal.' + modalClass).fadeIn();
}

function calcLoaderFadeOut(modalClass) {
  $('.calc-form__overlay').fadeOut();
  $('.calc-form__modal.' + modalClass).fadeOut();
}

//in mobile fadein fields one by one
function stepMobileFieldCheck(activeSlide) {
    setTimeout(function() {
        $('.calc-steps__slide[data-slide-name="' + activeSlide + '"]').find('.calc-form__form-item').removeClass('calc-form__form-item--fade-out');
    }, 1000);
}


//calculator go back funcationality
function calcGoBack() {
    $('.calc-go-back').click(function(e) {
        var prevSlide = $(this).parents('.calc-steps__slide').attr('data-prev-slide');
        if (prevSlide != "first-slide") {
            $(this).parents('.calc-steps__slide').removeClass('calc-steps__slide--active')
            $('.calc-steps__slide[data-slide-name="' + prevSlide + '"]').addClass('calc-steps__slide--active')
        }
        updateCalcStep(prevSlide);
        if (customStepperInstance != undefined) {
            for (var i = 0; i < customStepperInstance.length; i++) {
                customStepperInstance[i].update(true)
            }
        }
    });

}


//add complete status to current slide and update next slide
function updateSlideStatus(elem) {
    var elem = $(elem)
    elem.parents('.calc-steps__slide').addClass('calc-steps__slide--complete')

    var nextSlide = elem.parents('.calc-steps__slide').attr('data-next-slide');

    if (nextSlide != "final-slide") {
        elem.parents('.calc-steps__slide').removeClass('calc-steps__slide--active')
        $('.calc-steps__slide[data-slide-name="' + nextSlide + '"]').addClass('calc-steps__slide--active')
    } else {
        calcLoader('js-loader')
        // console.log(elem.attr('data-result'))
        //window.location.href = elem.attr('data-result');
    }

    if (customStepperInstance != undefined) {
        for (var i = 0; i < customStepperInstance.length; i++) {
            customStepperInstance[i].update(true)
        }
    }

}

//custom stepper

function customSteper() {
    //console.log('working');
    var customSteperComp = ".calc-stepper";
    var swiperInstance = [];

    var beforeEditValue = "";
    // $(customSteperComp).html('');
    var defaultStructure = function(min, max) {
        var swiperContainerEl = $("<div/>")
        $(swiperContainerEl).addClass("swiper-container");
        var swiperWrapperEl = $("<div/>")
        $(swiperWrapperEl).addClass("swiper-wrapper")

        for (i = min; i <= max; i++) {
            var stepperValue;
            if (i < 10) {
                stepperValue = '0' + i;
            } else {
                stepperValue = i;
            }
            var swiperSlide = $("<div/>");
            $(swiperSlide).addClass("swiper-slide");
            $(swiperSlide).text(stepperValue);
            $(swiperWrapperEl).append(swiperSlide);
        }
        $(swiperContainerEl).append(swiperWrapperEl);
        return swiperContainerEl;
    }
    var createSwiperInstance = function(obj, initVal, index) {
        var tempSwiper = new Swiper($(obj).find('.swiper-container')[0], {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            slideToClickedSlide: true,
            coverflow: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },

            'onInit': function (swiper) {
                if (initVal != undefined) {
                    swiper.slides.each(function (ind, e) {
                        if ($(e).text() == initVal) {
                            swiper.slideTo(ind)
                        }
                    })
                }
                 //! The init function was modified to update slider value to the initial value. 
                var currentVal = swiper.slides[swiper.activeIndex].innerText
                $(obj).find(".calc-stepper__input").val(currentVal)

            },
            'onTransitionEnd': function(swiper) {

                var currentVal = swiper.slides[swiper.activeIndex].innerText
                $(obj).find(".calc-stepper__input").val(currentVal).trigger('change');
            }
        });
        swiperInstance.push(tempSwiper);
    }

    $(customSteperComp).each(function(index) {
        var currentSteper = this;
        var minVal = $(currentSteper).attr("data-min");
        var maxVal = $(currentSteper).attr("data-max");
        var initVal = $(currentSteper).attr("data-init");
        minVal = parseInt((minVal != undefined) ? minVal : 0);
        maxVal = parseInt((maxVal != undefined) ? maxVal : 30);
        var defaultStr = defaultStructure(minVal, maxVal);
        var extraStr = $(currentSteper).find(".calc-stepper__label").wrap("<div class='calc-stepper__frame'></div>")
        $(currentSteper).append(defaultStr);
        createSwiperInstance(currentSteper, initVal, index)
    })
    return swiperInstance;

}

//customer speedometer 
function customSpeedometer() {
    $(".calc-speedometer").each(function() {
        var obj = this;
        var percentValue = $(obj).attr('data-percent');
        var lbl = $(obj).attr('data-lbl');
        var dataDeskSize = $(obj).attr('data-desktop-size');
        var dataMobSize = $(obj).attr('data-mobile-size');

        function createStructure(perc, lbl) {
            var str = '<div class="progress-graph"></div>' +
                '<div class="start-value">0%</div>' +
                '<div class="end-value">100%</div>' +
                '<div class="progress-vline">' +
                '<span class="progress-vline-handel"><span></span></span>' +
                '</div>' +
                '<div class="percent-value-wrapper">' +
                '<span class="percent-value">' + perc + '%</span>' +
                '<span class="static-lbl">' + lbl + '</span>' +
                '</div>';
            return str;
        }

        var defaultStr = createStructure(percentValue, lbl);
        $(obj).html(defaultStr);
        var size = ($(window).width() < 768) ? dataMobSize : dataDeskSize
        var perSize = (size / 100) * 87
        var per = percentValue
        var cPer = ((per / 100) * .699)
        var thick = size / 30
        var markerdegree = (per / 100) * 252
            // $(".circle .percent-value-wrapper .percent-value").text(per+"%")
        $(obj).css({ "width": size, "height": size })	
        $(obj).find(".progress-vline .progress-vline-handel span").css("transform", "rotate(" + markerdegree + "deg)")
        $(obj).find(".progress-graph").circleProgress({
            value: (cPer),
            size: perSize,
            startAngle: -Math.PI / 1,
            thickness: thick,
            lineCap: 'round',
            emptyFill: 'rgba(0, 0, 0, 0)',
            animation: { duration: 1000, easing: "linear" },
            fill: {
                color: "#bd2b2b"
            }
        });

    })
}

//custome speedometer half circle
function customHalfSpeedometer() {
    function createStructure(perc, lbl) {
        var str = '<div class="progress-graph"></div>' +
            '<div class="start-value">0%</div>' +
            '<div class="end-value">100%</div>' +
            '<div class="progress-vline">' +
            '<span class="progress-vline-handel"><span></span></span>' +
            '</div>' +
            '<div class="percent-value-wrapper">' +
            '<span class="percent-value">' + perc + '%</span>' +
            '<span class="static-lbl">' + lbl + '</span>' +
            '</div>';
        return str;
    }
    $(".calc-speedometer-half").each(function() {
        var obj = this;
        var percentValue = $(obj).attr('data-percent');
        var lbl = $(obj).attr('data-lbl');
        var dataDeskSize = $(obj).attr('data-desktop-size');
        var dataMobSize = $(obj).attr('data-mobile-size');


        var defaultStr = createStructure(percentValue, lbl);
        $(obj).html(defaultStr);
        var size = ($(window).width() < 768) ? dataMobSize : dataDeskSize
        var perSize = (size / 100) * 87
        var per = percentValue
        var cPer = ((per / 100) * .5)
        var thick = size / 30
        var markerdegree = (per / 100) * 180

        // $(".circle .percent-value-wrapper .percent-value").text(per+"%")
        $(obj).css({ "width": size, "height": size })

        $(obj).find(".progress-vline .progress-vline-handel span").css("border-width", "0 3px " + $(obj).find(".progress-vline").height() + "px 3px")
        $(obj).find(".progress-vline .progress-vline-handel span").css("transform", "translateX(-50%)  rotate(" + markerdegree + "deg)")
        $(obj).find(".progress-graph").circleProgress({
            value: (cPer),
            size: perSize,
            startAngle: -Math.PI / 1,
            thickness: thick,
            lineCap: 'round',
            emptyFill: 'rgba(0, 0, 0, 0)',
            animation: { duration: 1000, easing: "linear" },
            fill: {
                gradient: ["#bd2b2b", "#940000"]
            }
        });

    })
}

//custome speedometer full circle
function customFullSpeedometer() {
    function createStructure(perc, lbl) {
        var str = '<div class="progress-graph"></div>' +
            '<div class="start-value">0%</div>' +
            '<div class="end-value">50%</div>' +
            '<div class="percent-value-wrapper">' +
            '<span class="percent-value">' + perc + '%</span>' +
            '<span class="static-lbl">' + lbl + '</span>' +
            '</div>';
        return str;
    }
    $(".calc-speedometer-full").each(function() {
        var obj = this;
        var percentValue = $(obj).attr('data-percent');
        var lbl = $(obj).attr('data-lbl');
        var dataDeskSize = $(obj).attr('data-desktop-size');
        var dataMobSize = $(obj).attr('data-mobile-size');


        var defaultStr = createStructure(percentValue, lbl);
        $(obj).html(defaultStr);
        var size = ($(window).width() < 768) ? dataMobSize : dataDeskSize
        var perSize = (size / 100) * 87
        var per = percentValue
        var cPer = ((per / 100) * 1)
        var thick = size / 20
            // $(".circle .percent-value-wrapper .percent-value").text(per+"%")
        $(obj).css({ "width": size, "height": size })


        $(obj).find(".progress-graph").circleProgress({
            value: (cPer),
            size: perSize,
            startAngle: -Math.PI / 1,
            thickness: thick,
            lineCap: 'round',
            emptyFill: 'rgba(0, 0, 0, 0)',
            animation: { duration: 1000, easing: "linear" },
            fill: {
                gradient: ["#bd2b2b", "#940000"]
            }
        });

    })
}


//custome value checkbox for rangeslider
function customValueForRange() {
    $('.range-slider-wrap--house input[type="checkbox"]').on('change', function() {
        var nouiSliderRef = $(this).parents('.range-slider-wrap__title-wrap').siblings('.noUi-target').attr('id');
        var nouiSlider = document.getElementById(nouiSliderRef);
        $(this).parents('.range-slider-wrap__wrap-item').siblings('.range-slider-wrap__wrap-item').toggleClass('range-slider-wrap__wrap-item--opac')
        if ($(this).parents('.range-slider-wrap__wrap-item').siblings('.range-slider-wrap__wrap-item').hasClass('range-slider-wrap__wrap-item--opac')) {
            nouiSlider.removeAttribute('disabled');
        } else {
            nouiSlider.setAttribute('disabled', false);
        }
    })
}

//custom max validation
jQuery.validator.addMethod("maxCustom", function(value, element) {  
    var maxLimit = parseInt($(element).attr('data-max-custom'));  
    return parseInt(setValWFCalc(value)) < maxLimit
}, function(params, element) {
    return 'Please enter an amount less than ' +inSemiWordsCalc(parseInt($(element).attr('data-max-custom')));
});

//custom min validation
jQuery.validator.addMethod("minCustom", function(value, element) {  
    var minLimit = parseInt($(element).attr('data-min-custom'));  
    return parseInt(setValWFCalc(value)) > minLimit
}, function(params, element) {
    return 'Please enter an amount greater than ' + $(element).attr('data-min-custom');
});

// Custom Form Submit Prevent Default for all calculator Fields
var childForms = [
    $('#child-form1'),
    $('#child-form2'),
    $('#child-form3'),
    $('#child-form4'),
    $('#child-form5'),
    $('#child-form6'),
    $('#child-form7'),
    $('#child-form8'),
    $('#child-form9'),
    $('#child-form10'),
    $('#child-form11'),
    $('#child-form12'),
    $('#health-form1'),
    $('#health-form2'),
    $('#health-form3'),
    $('#hlv-form1'),
    $('#hlv-form2'),
    $('#hlv-form3'),
    $('#retirement-form1'),
    $('#retirement-form2'),
    $('#retirement-form3'),
    $('#wealth-form1'),
    $('#wealth-form2'),
    $('#wealth-form3'),
    $('#wealth-form4'),
    $('#wealth-form5'),
    $('#wealth-form6'),
    $('#wealth-form7'),
    $('#wealth-form8'),
    $('#wealth-form9'),
    $('#wealth-form10'),
    $('#wealth-form11'),

    
]
// var arrayOfForms = $.map(childForms, function (el) { return el.get() });

$(childForms).each(function () {
    $(this).on("submit",
    function (e){
        
        e.preventDefault()
        //console.log("Prevented Default Submit")
    });
    
});
//# sourceMappingURL=quickCalculatorFunctions.js.map
