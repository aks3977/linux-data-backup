/*
* jQuery Equal Height
* Author: Suson Waiba
* Github: https://github.com/susonwaiba/jquery-equal-height
* URL: http://susonwaiba.com
*/
$.fn.jQueryEqualHeight=function(i){void 0==i&&(i=".card");var t=0,h=0,n=new Array,e=0;$(this).each(function(){if($(this).find(i).height("auto"),e=$(this).position().top,h!=e){for(currentDiv=0;currentDiv<n.length;currentDiv++)n[currentDiv].find(i).height(t);n.length=0,h=e,t=$(this).find(i).height(),n.push($(this))}else n.push($(this)),t=t<$(this).find(i).height()?$(this).find(i).height():t;for(currentDiv=0;currentDiv<n.length;currentDiv++)n[currentDiv].find(i).height(t)})};
//# sourceMappingURL=equalHeight.js.map
