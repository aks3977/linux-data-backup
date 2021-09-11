/*
 *  Custom-Pagination - v1.0.0
 */
; (function ($, window, document, undefined) {

    "use strict";
    var pluginName = "customPagination",
        defaults = {
            totalPages: 6,
            currentPage: 1,
            startPage: 1,
            endPage: 6,
            showBefore: 2,
            showAfter: 3,
            prevButton: ".prev",
            nextButton: ".next",
            firstButton: ".first",
            lastButton: ".last",
            activeClass: 'active'
        };

    // The actual plugin constructor
    function customPagination(element, options) {
        this.element = element;

        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(customPagination.prototype, {
        init: function () {

            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.settings
            // you can add more functions like the one below and
            // call them like the example bellow
            this.pager();
            this.togglePrevNext();
        },
        pager: function () {

            var totalPages = this.settings.totalPages,
                currentPage = this.settings.currentPage,
                startPage = this.settings.startPage,
                endPage = this.settings.endPage,
                showBefore = this.settings.showBefore,
                showAfter = this.settings.showAfter,
                activeClass = this.settings.activeClass;

            // some logic
            startPage = parseInt(currentPage) - parseInt(showBefore);
            endPage = parseInt(currentPage) + parseInt(showAfter);

            if (startPage <= 0) {
                endPage -= (startPage - 1);
                startPage = 1;
            }

            if (endPage > totalPages) {
                endPage = totalPages;
                startPage = 1;
                if (endPage >= (showBefore + showAfter + 1)) {
                    startPage = endPage - (showBefore + showAfter);
                }
            }

            $(this.element).find(".page").hide();
            $(this.element).find("[data-id='" + startPage + "']").show();
            $(this.element).find("[data-id='" + startPage + "']").nextUntil("[data-id='" + endPage + "']").show();
            $(this.element).find("[data-id='" + endPage + "']").show();
            $(this.element).find("[data-id='" + currentPage + "']").addClass(activeClass);
        },
        togglePrevNext: function () {

            var prevButton = this.settings.prevButton,
                nextButton = this.settings.nextButton,
                firstButton = this.settings.firstButton,
                lastButton = this.settings.lastButton;

            if (this.settings.currentPage == 1) {
                $(this.element).find(prevButton + ', ' + firstButton).addClass("disabled");
            }
            if (this.settings.currentPage == this.settings.totalPages) {
                $(this.element).find(nextButton + ', ' + lastButton).addClass("disabled");
            }
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" +
                    pluginName, new customPagination(this, options));
            }
        });
    };

})(jQuery, window, document);
//# sourceMappingURL=Custompagination.js.map
