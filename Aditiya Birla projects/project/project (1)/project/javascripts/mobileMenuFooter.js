(function($, window, document, undefined) {
  function mobileTopNavigation() {
    /* Top Navigation */
    var topNavigation = $(".top-navigation").html();
    $(".mobi-top-navigation").html(topNavigation);
  }

  function mobileFooterLink() {
    /* Footer Menu */
    var caption = $(".caption").html();
    $(".menu-footer").append("<p>" + caption + "</p>");

    /* Footer Links */
    var lastColFooterLink = $("footer .footerLinkWrap").html();
    $("footer .footerLinkWrap")
      .prev(".lcol")
      .append(lastColFooterLink);
    $("footer .footerLinkWrap").remove();

    $("footer .upper-div .lcol").each(function() {
      var footerTopLinks = $(this)
        .find("ul")
        .html();
      $(".mobi-footer-links ul li.has-children ul").append(footerTopLinks);
    });
    $(".mobi-footer-links ul li.has-children ul li.hide").remove();

    var footerLink = $(".footer-link").html();
    $(".mobi-footer-links > ul").append(footerLink);
  }

  var init = function() {
    mobileFooterLink();
    mobileTopNavigation();
  };
  $(init);
})(window.jQuery, this, this.document);

//# sourceMappingURL=mobileMenuFooter.js.map
