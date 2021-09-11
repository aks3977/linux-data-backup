//Selectbox Dropdown
function selectDropdown(selector) {
    $selector = selector;
    $("#" + $selector).selectize({
        create: false,
        onFocus: function () {
            var input = 'selectize-input input',
                wrapper = 'selectize-input';
            $('.' + input).attr('readonly', true);
            $('.' + input + ', .' + wrapper).css('cursor', 'pointer');
        },
        onChange: function (value) {
            truncateSelectize();
        }
    });

}

function selectDropdownMulti(selector) {
    $selector = selector;
    $($selector).selectize({
        create: true,
        onFocus: function () {
            var input = 'selectize-input input',
                wrapper = 'selectize-input';
            $('.' + input).attr('readonly', true);
            $('.' + input + ', .' + wrapper).css('cursor', 'pointer');
        },
        onChange: function (value) {
            truncateSelectize();
        }
    });

}

//Datepicker
function datePicker(selector) {
    $selector = selector;
    $("." + $selector).datepicker({

        orientation: "auto",
        format: "dd/mm/yyyy",
        endDate: '-1d',
        autoclose: true,
        orientation: 'auto'
    });
}
//Datepicker Single
function datePickerSingle(selector, minusDay) {
    var $datepickerImg = $(".form-group__datepicker-container img");
    $selector = selector;
    $minusDay = minusDay;
    $datepickerImg.click(function () {
        var datepickerImg = $(this).prev().attr('class');
        var datepickerIMgArray = datepickerImg.split(' ')
        datepickerImageClick = datepickerIMgArray.join(".");
        $("." + datepickerImageClick).trigger('focus');

    });

    $("." + $selector).datepicker({
        format: "dd/mm/yyyy",
        endDate: $minusDay,
        autoclose: true,
        orientation: 'auto'

    });
}

//Truncate Selectize input item
function truncateSelectize() {
    var $selectInput = $(".selectize-input");
    $selectInput.each(function () {
        var findSelectItem = $(this).width() - 20;

        //set max width to truncate text
        $(this)
            .find("div")
            .css("max-width", findSelectItem + "px");
    });
}


function dpSetDateByDay(day) {
    var date = new Date();
    date.setDate(date.getDate() - day);
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

//getYesterdaysDate
function getYesterdaysDate() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

//refresh div
function refreshDiv(divId) {
    $("#" + divId).load(location.href + " #" + divId + ">*", "");
}
//# sourceMappingURL=quickServicesFunctions.js.map

//# sourceMappingURL=quickServicesFunctions.js.map
