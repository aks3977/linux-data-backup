/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: March 10, 2017
 */
!function(){"use strict";var e,a=function(t,s){function r(e){return Math.floor(e)}function i(){var e=x.params.autoplay,a=x.slides.eq(x.activeIndex);a.attr("data-swiper-autoplay")&&(e=a.attr("data-swiper-autoplay")||x.params.autoplay),x.autoplayTimeoutId=setTimeout(function(){x.params.loop?(x.fixLoop(),x._slideNext(),x.emit("onAutoplay",x)):x.isEnd?s.autoplayStopOnLast?x.stopAutoplay():(x._slideTo(0),x.emit("onAutoplay",x)):(x._slideNext(),x.emit("onAutoplay",x))},e)}function n(a,t){var s=e(a.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){x.onResize(!0),x.emit("onObserverUpdate",x,e)})});s.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),x.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!x.params.allowSwipeToNext&&(x.isHorizontal()&&39===a||!x.isHorizontal()&&40===a))return!1;if(!x.params.allowSwipeToPrev&&(x.isHorizontal()&&37===a||!x.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(x.container.parents("."+x.params.slideClass).length>0&&0===x.container.parents("."+x.params.slideActiveClass).length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=x.container.offset();x.rtl&&(n.left=n.left-x.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+x.width,n.top],[n.left,n.top+x.height],[n.left+x.width,n.top+x.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}x.isHorizontal()?(37!==a&&39!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!x.rtl||37===a&&x.rtl)&&x.slideNext(),(37===a&&!x.rtl||39===a&&x.rtl)&&x.slidePrev()):(38!==a&&40!==a||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&x.slideNext(),38===a&&x.slidePrev()),x.emit("onKeyPress",x,a)}}function p(e){var a=0,t=0,s=0,r=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(a=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(a=t,t=0),s=10*a,r=10*t,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(s=e.deltaX),(s||r)&&e.deltaMode&&(1===e.deltaMode?(s*=40,r*=40):(s*=800,r*=800)),s&&!a&&(a=s<1?-1:1),r&&!t&&(t=r<1?-1:1),{spinX:a,spinY:t,pixelX:s,pixelY:r}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=0,t=x.rtl?-1:1,s=p(e);if(x.params.mousewheelForceToAxis)if(x.isHorizontal()){if(!(Math.abs(s.pixelX)>Math.abs(s.pixelY)))return;a=s.pixelX*t}else{if(!(Math.abs(s.pixelY)>Math.abs(s.pixelX)))return;a=s.pixelY}else a=Math.abs(s.pixelX)>Math.abs(s.pixelY)?-s.pixelX*t:-s.pixelY;if(0!==a){if(x.params.mousewheelInvert&&(a=-a),x.params.freeMode){var r=x.getWrapperTranslate()+a*x.params.mousewheelSensitivity,i=x.isBeginning,n=x.isEnd;if(r>=x.minTranslate()&&(r=x.minTranslate()),r<=x.maxTranslate()&&(r=x.maxTranslate()),x.setWrapperTransition(0),x.setWrapperTranslate(r),x.updateProgress(),x.updateActiveIndex(),(!i&&x.isBeginning||!n&&x.isEnd)&&x.updateClasses(),x.params.freeModeSticky?(clearTimeout(x.mousewheel.timeout),x.mousewheel.timeout=setTimeout(function(){x.slideReset()},300)):x.params.lazyLoading&&x.lazy&&x.lazy.load(),x.emit("onScroll",x,e),x.params.autoplay&&x.params.autoplayDisableOnInteraction&&x.stopAutoplay(),0===r||r===x.maxTranslate())return}else{if((new window.Date).getTime()-x.mousewheel.lastScrollTime>60)if(a<0)if(x.isEnd&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slideNext(),x.emit("onScroll",x,e);else if(x.isBeginning&&!x.params.loop||x.animating){if(x.params.mousewheelReleaseOnEdges)return!0}else x.slidePrev(),x.emit("onScroll",x,e);x.mousewheel.lastScrollTime=(new window.Date).getTime()}return e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function m(a,t){a=e(a);var s,r,i,n=x.rtl?-1:1;s=a.attr("data-swiper-parallax")||"0",r=a.attr("data-swiper-parallax-x"),i=a.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):x.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",a.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(t,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},g=s&&s.virtualTranslate;s=s||{};var h={};for(var v in s)if("object"!=typeof s[v]||null===s[v]||(s[v].nodeType||s[v]===window||s[v]===document||"undefined"!=typeof Dom7&&s[v]instanceof Dom7||"undefined"!=typeof jQuery&&s[v]instanceof jQuery))h[v]=s[v];else{h[v]={};for(var f in s[v])h[v][f]=s[v][f]}for(var w in c)if(void 0===s[w])s[w]=c[w];else if("object"==typeof s[w])for(var y in c[w])void 0===s[w][y]&&(s[w][y]=c[w][y]);var x=this;if(x.params=s,x.originalParams=h,x.classNames=[],void 0!==e&&"undefined"!=typeof Dom7&&(e=Dom7),(void 0!==e||(e="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(x.$=e,x.currentBreakpoint=void 0,x.getActiveBreakpoint=function(){if(!x.params.breakpoints)return!1;var e,a=!1,t=[];for(e in x.params.breakpoints)x.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)(e=t[s])>=window.innerWidth&&!a&&(a=e);return a||"max"},x.setBreakpoint=function(){var e=x.getActiveBreakpoint();if(e&&x.currentBreakpoint!==e){var a=e in x.params.breakpoints?x.params.breakpoints[e]:x.originalParams,t=x.params.loop&&a.slidesPerView!==x.params.slidesPerView;for(var s in a)x.params[s]=a[s];x.currentBreakpoint=e,t&&x.destroyLoop&&x.reLoop(!0)}},x.params.breakpoints&&x.setBreakpoint(),x.container=e(t),0!==x.container.length)){if(x.container.length>1){var T=[];return x.container.each(function(){T.push(new a(this,s))}),T}x.container[0].swiper=x,x.container.data("swiper",x),x.classNames.push(x.params.containerModifierClass+x.params.direction),x.params.freeMode&&x.classNames.push(x.params.containerModifierClass+"free-mode"),x.support.flexbox||(x.classNames.push(x.params.containerModifierClass+"no-flexbox"),x.params.slidesPerColumn=1),x.params.autoHeight&&x.classNames.push(x.params.containerModifierClass+"autoheight"),(x.params.parallax||x.params.watchSlidesVisibility)&&(x.params.watchSlidesProgress=!0),x.params.touchReleaseOnEdges&&(x.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(x.params.effect)>=0&&(x.support.transforms3d?(x.params.watchSlidesProgress=!0,x.classNames.push(x.params.containerModifierClass+"3d")):x.params.effect="slide"),"slide"!==x.params.effect&&x.classNames.push(x.params.containerModifierClass+x.params.effect),"cube"===x.params.effect&&(x.params.resistanceRatio=0,x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.centeredSlides=!1,x.params.spaceBetween=0,x.params.virtualTranslate=!0),"fade"!==x.params.effect&&"flip"!==x.params.effect||(x.params.slidesPerView=1,x.params.slidesPerColumn=1,x.params.slidesPerGroup=1,x.params.watchSlidesProgress=!0,x.params.spaceBetween=0,void 0===g&&(x.params.virtualTranslate=!0)),x.params.grabCursor&&x.support.touch&&(x.params.grabCursor=!1),x.wrapper=x.container.children("."+x.params.wrapperClass),x.params.pagination&&(x.paginationContainer=e(x.params.pagination),x.params.uniqueNavElements&&"string"==typeof x.params.pagination&&x.paginationContainer.length>1&&1===x.container.find(x.params.pagination).length&&(x.paginationContainer=x.container.find(x.params.pagination)),"bullets"===x.params.paginationType&&x.params.paginationClickable?x.paginationContainer.addClass(x.params.paginationModifierClass+"clickable"):x.params.paginationClickable=!1,x.paginationContainer.addClass(x.params.paginationModifierClass+x.params.paginationType)),(x.params.nextButton||x.params.prevButton)&&(x.params.nextButton&&(x.nextButton=e(x.params.nextButton),x.params.uniqueNavElements&&"string"==typeof x.params.nextButton&&x.nextButton.length>1&&1===x.container.find(x.params.nextButton).length&&(x.nextButton=x.container.find(x.params.nextButton))),x.params.prevButton&&(x.prevButton=e(x.params.prevButton),x.params.uniqueNavElements&&"string"==typeof x.params.prevButton&&x.prevButton.length>1&&1===x.container.find(x.params.prevButton).length&&(x.prevButton=x.container.find(x.params.prevButton)))),x.isHorizontal=function(){return"horizontal"===x.params.direction},x.rtl=x.isHorizontal()&&("rtl"===x.container[0].dir.toLowerCase()||"rtl"===x.container.css("direction")),x.rtl&&x.classNames.push(x.params.containerModifierClass+"rtl"),x.rtl&&(x.wrongRTL="-webkit-box"===x.wrapper.css("display")),x.params.slidesPerColumn>1&&x.classNames.push(x.params.containerModifierClass+"multirow"),x.device.android&&x.classNames.push(x.params.containerModifierClass+"android"),x.container.addClass(x.classNames.join(" ")),x.translate=0,x.progress=0,x.velocity=0,x.lockSwipeToNext=function(){x.params.allowSwipeToNext=!1,x.params.allowSwipeToPrev===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipeToPrev=function(){x.params.allowSwipeToPrev=!1,x.params.allowSwipeToNext===!1&&x.params.grabCursor&&x.unsetGrabCursor()},x.lockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!1,x.params.grabCursor&&x.unsetGrabCursor()},x.unlockSwipeToNext=function(){x.params.allowSwipeToNext=!0,x.params.allowSwipeToPrev===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipeToPrev=function(){x.params.allowSwipeToPrev=!0,x.params.allowSwipeToNext===!0&&x.params.grabCursor&&x.setGrabCursor()},x.unlockSwipes=function(){x.params.allowSwipeToNext=x.params.allowSwipeToPrev=!0,x.params.grabCursor&&x.setGrabCursor()},x.setGrabCursor=function(e){x.container[0].style.cursor="move",x.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",x.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",x.container[0].style.cursor=e?"grabbing":"grab"},x.unsetGrabCursor=function(){x.container[0].style.cursor=""},x.params.grabCursor&&x.setGrabCursor(),x.imagesToLoad=[],x.imagesLoaded=0,x.loadImage=function(e,a,t,s,r,i){function n(){i&&i()}var o;e.complete&&r?n():a?(o=new window.Image,o.onload=n,o.onerror=n,s&&(o.sizes=s),t&&(o.srcset=t),a&&(o.src=a)):n()},x.preloadImages=function(){function e(){void 0!==x&&null!==x&&x&&(void 0!==x.imagesLoaded&&x.imagesLoaded++,x.imagesLoaded===x.imagesToLoad.length&&(x.params.updateOnImagesReady&&x.update(),x.emit("onImagesReady",x)))}x.imagesToLoad=x.container.find("img");for(var a=0;a<x.imagesToLoad.length;a++)x.loadImage(x.imagesToLoad[a],x.imagesToLoad[a].currentSrc||x.imagesToLoad[a].getAttribute("src"),x.imagesToLoad[a].srcset||x.imagesToLoad[a].getAttribute("srcset"),x.imagesToLoad[a].sizes||x.imagesToLoad[a].getAttribute("sizes"),!0,e)},x.autoplayTimeoutId=void 0,x.autoplaying=!1,x.autoplayPaused=!1,x.startAutoplay=function(){return void 0===x.autoplayTimeoutId&&(!!x.params.autoplay&&(!x.autoplaying&&(x.autoplaying=!0,x.emit("onAutoplayStart",x),void i())))},x.stopAutoplay=function(e){x.autoplayTimeoutId&&(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplaying=!1,x.autoplayTimeoutId=void 0,x.emit("onAutoplayStop",x))},x.pauseAutoplay=function(e){x.autoplayPaused||(x.autoplayTimeoutId&&clearTimeout(x.autoplayTimeoutId),x.autoplayPaused=!0,0===e?(x.autoplayPaused=!1,i()):x.wrapper.transitionEnd(function(){x&&(x.autoplayPaused=!1,x.autoplaying?i():x.stopAutoplay())}))},x.minTranslate=function(){return-x.snapGrid[0]},x.maxTranslate=function(){return-x.snapGrid[x.snapGrid.length-1]},x.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==x.params.slidesPerView&&x.params.slidesPerView>1)for(e=0;e<Math.ceil(x.params.slidesPerView);e++){var s=x.activeIndex+e;if(s>x.slides.length)break;a.push(x.slides.eq(s)[0])}else a.push(x.slides.eq(x.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var r=a[e].offsetHeight;t=r>t?r:t}t&&x.wrapper.css("height",t+"px")},x.updateContainerSize=function(){var e,a;e=void 0!==x.params.width?x.params.width:x.container[0].clientWidth,a=void 0!==x.params.height?x.params.height:x.container[0].clientHeight,0===e&&x.isHorizontal()||0===a&&!x.isHorizontal()||(e=e-parseInt(x.container.css("padding-left"),10)-parseInt(x.container.css("padding-right"),10),a=a-parseInt(x.container.css("padding-top"),10)-parseInt(x.container.css("padding-bottom"),10),x.width=e,x.height=a,x.size=x.isHorizontal()?x.width:x.height)},x.updateSlidesSize=function(){x.slides=x.wrapper.children("."+x.params.slideClass),x.snapGrid=[],x.slidesGrid=[],x.slidesSizesGrid=[];var e,a=x.params.spaceBetween,t=-x.params.slidesOffsetBefore,s=0,i=0;if(void 0!==x.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*x.size),x.virtualSize=-a,x.rtl?x.slides.css({marginLeft:"",marginTop:""}):x.slides.css({marginRight:"",marginBottom:""});var n;x.params.slidesPerColumn>1&&(n=Math.floor(x.slides.length/x.params.slidesPerColumn)===x.slides.length/x.params.slidesPerColumn?x.slides.length:Math.ceil(x.slides.length/x.params.slidesPerColumn)*x.params.slidesPerColumn,"auto"!==x.params.slidesPerView&&"row"===x.params.slidesPerColumnFill&&(n=Math.max(n,x.params.slidesPerView*x.params.slidesPerColumn)));var o,l=x.params.slidesPerColumn,p=n/l,d=p-(x.params.slidesPerColumn*p-x.slides.length);for(e=0;e<x.slides.length;e++){o=0;var m=x.slides.eq(e);if(x.params.slidesPerColumn>1){var u,c,g;"column"===x.params.slidesPerColumnFill?(c=Math.floor(e/l),g=e-c*l,(c>d||c===d&&g===l-1)&&++g>=l&&(g=0,c++),u=c+g*n/l,m.css({"-webkit-box-ordinal-group":u,"-moz-box-ordinal-group":u,"-ms-flex-order":u,"-webkit-order":u,order:u})):(g=Math.floor(e/p),c=e-g*p),m.css("margin-"+(x.isHorizontal()?"top":"left"),0!==g&&x.params.spaceBetween&&x.params.spaceBetween+"px").attr("data-swiper-column",c).attr("data-swiper-row",g)}"none"!==m.css("display")&&("auto"===x.params.slidesPerView?(o=x.isHorizontal()?m.outerWidth(!0):m.outerHeight(!0),x.params.roundLengths&&(o=r(o))):(o=(x.size-(x.params.slidesPerView-1)*a)/x.params.slidesPerView,x.params.roundLengths&&(o=r(o)),x.isHorizontal()?x.slides[e].style.width=o+"px":x.slides[e].style.height=o+"px"),x.slides[e].swiperSlideSize=o,x.slidesSizesGrid.push(o),x.params.centeredSlides?(t=t+o/2+s/2+a,0===s&&0!==e&&(t=t-x.size/2-a),0===e&&(t=t-x.size/2-a),Math.abs(t)<.001&&(t=0),i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t)):(i%x.params.slidesPerGroup==0&&x.snapGrid.push(t),x.slidesGrid.push(t),t=t+o+a),x.virtualSize+=o+a,s=o,i++)}x.virtualSize=Math.max(x.virtualSize,x.size)+x.params.slidesOffsetAfter;var h;if(x.rtl&&x.wrongRTL&&("slide"===x.params.effect||"coverflow"===x.params.effect)&&x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}),x.support.flexbox&&!x.params.setWrapperSize||(x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"})),x.params.slidesPerColumn>1&&(x.virtualSize=(o+x.params.spaceBetween)*n,x.virtualSize=Math.ceil(x.virtualSize/x.params.slidesPerColumn)-x.params.spaceBetween,x.isHorizontal()?x.wrapper.css({width:x.virtualSize+x.params.spaceBetween+"px"}):x.wrapper.css({height:x.virtualSize+x.params.spaceBetween+"px"}),x.params.centeredSlides)){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<x.virtualSize+x.snapGrid[0]&&h.push(x.snapGrid[e]);x.snapGrid=h}if(!x.params.centeredSlides){for(h=[],e=0;e<x.snapGrid.length;e++)x.snapGrid[e]<=x.virtualSize-x.size&&h.push(x.snapGrid[e]);x.snapGrid=h,Math.floor(x.virtualSize-x.size)-Math.floor(x.snapGrid[x.snapGrid.length-1])>1&&x.snapGrid.push(x.virtualSize-x.size)}0===x.snapGrid.length&&(x.snapGrid=[0]),0!==x.params.spaceBetween&&(x.isHorizontal()?x.rtl?x.slides.css({marginLeft:a+"px"}):x.slides.css({marginRight:a+"px"}):x.slides.css({marginBottom:a+"px"})),x.params.watchSlidesProgress&&x.updateSlidesOffset()}},x.updateSlidesOffset=function(){for(var e=0;e<x.slides.length;e++)x.slides[e].swiperSlideOffset=x.isHorizontal()?x.slides[e].offsetLeft:x.slides[e].offsetTop},x.currentSlidesPerView=function(){var e,a,t=1;if(x.params.centeredSlides){var s,r=x.slides[x.activeIndex].swiperSlideSize;for(e=x.activeIndex+1;e<x.slides.length;e++)x.slides[e]&&!s&&(r+=x.slides[e].swiperSlideSize,t++,r>x.size&&(s=!0));for(a=x.activeIndex-1;a>=0;a--)x.slides[a]&&!s&&(r+=x.slides[a].swiperSlideSize,t++,r>x.size&&(s=!0))}else for(e=x.activeIndex+1;e<x.slides.length;e++)x.slidesGrid[e]-x.slidesGrid[x.activeIndex]<x.size&&t++;return t},x.updateSlidesProgress=function(e){if(void 0===e&&(e=x.translate||0),0!==x.slides.length){void 0===x.slides[0].swiperSlideOffset&&x.updateSlidesOffset();var a=-e;x.rtl&&(a=e),x.slides.removeClass(x.params.slideVisibleClass);for(var t=0;t<x.slides.length;t++){var s=x.slides[t],r=(a+(x.params.centeredSlides?x.minTranslate():0)-s.swiperSlideOffset)/(s.swiperSlideSize+x.params.spaceBetween);if(x.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+x.slidesSizesGrid[t];(i>=0&&i<x.size||n>0&&n<=x.size||i<=0&&n>=x.size)&&x.slides.eq(t).addClass(x.params.slideVisibleClass)}s.progress=x.rtl?-r:r}}},x.updateProgress=function(e){void 0===e&&(e=x.translate||0);var a=x.maxTranslate()-x.minTranslate(),t=x.isBeginning,s=x.isEnd;0===a?(x.progress=0,x.isBeginning=x.isEnd=!0):(x.progress=(e-x.minTranslate())/a,x.isBeginning=x.progress<=0,x.isEnd=x.progress>=1),x.isBeginning&&!t&&x.emit("onReachBeginning",x),x.isEnd&&!s&&x.emit("onReachEnd",x),x.params.watchSlidesProgress&&x.updateSlidesProgress(e),x.emit("onProgress",x,x.progress)},x.updateActiveIndex=function(){var e,a,t,s=x.rtl?x.translate:-x.translate;for(a=0;a<x.slidesGrid.length;a++)void 0!==x.slidesGrid[a+1]?s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]-(x.slidesGrid[a+1]-x.slidesGrid[a])/2?e=a:s>=x.slidesGrid[a]&&s<x.slidesGrid[a+1]&&(e=a+1):s>=x.slidesGrid[a]&&(e=a);x.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/x.params.slidesPerGroup),t>=x.snapGrid.length&&(t=x.snapGrid.length-1),e!==x.activeIndex&&(x.snapIndex=t,x.previousIndex=x.activeIndex,x.activeIndex=e,x.updateClasses(),x.updateRealIndex())},x.updateRealIndex=function(){x.realIndex=parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index")||x.activeIndex,10)},x.updateClasses=function(){x.slides.removeClass(x.params.slideActiveClass+" "+x.params.slideNextClass+" "+x.params.slidePrevClass+" "+x.params.slideDuplicateActiveClass+" "+x.params.slideDuplicateNextClass+" "+x.params.slideDuplicatePrevClass);var a=x.slides.eq(x.activeIndex);a.addClass(x.params.slideActiveClass),s.loop&&(a.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+x.realIndex+'"]').addClass(x.params.slideDuplicateActiveClass));var t=a.next("."+x.params.slideClass).addClass(x.params.slideNextClass);x.params.loop&&0===t.length&&(t=x.slides.eq(0),t.addClass(x.params.slideNextClass));var r=a.prev("."+x.params.slideClass).addClass(x.params.slidePrevClass);if(x.params.loop&&0===r.length&&(r=x.slides.eq(-1),r.addClass(x.params.slidePrevClass)),s.loop&&(t.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicateNextClass),r.hasClass(x.params.slideDuplicateClass)?x.wrapper.children("."+x.params.slideClass+":not(."+x.params.slideDuplicateClass+')[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass):x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(x.params.slideDuplicatePrevClass)),x.paginationContainer&&x.paginationContainer.length>0){var i,n=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length;if(x.params.loop?(i=Math.ceil((x.activeIndex-x.loopedSlides)/x.params.slidesPerGroup),i>x.slides.length-1-2*x.loopedSlides&&(i-=x.slides.length-2*x.loopedSlides),i>n-1&&(i-=n),i<0&&"bullets"!==x.params.paginationType&&(i=n+i)):i=void 0!==x.snapIndex?x.snapIndex:x.activeIndex||0,"bullets"===x.params.paginationType&&x.bullets&&x.bullets.length>0&&(x.bullets.removeClass(x.params.bulletActiveClass),x.paginationContainer.length>1?x.bullets.each(function(){e(this).index()===i&&e(this).addClass(x.params.bulletActiveClass)}):x.bullets.eq(i).addClass(x.params.bulletActiveClass)),"fraction"===x.params.paginationType&&(x.paginationContainer.find("."+x.params.paginationCurrentClass).text(i+1),x.paginationContainer.find("."+x.params.paginationTotalClass).text(n)),"progress"===x.params.paginationType){var o=(i+1)/n,l=o,p=1;x.isHorizontal()||(p=o,l=1),x.paginationContainer.find("."+x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+l+") scaleY("+p+")").transition(x.params.speed)}"custom"===x.params.paginationType&&x.params.paginationCustomRender&&(x.paginationContainer.html(x.params.paginationCustomRender(x,i+1,n)),x.emit("onPaginationRendered",x,x.paginationContainer[0]))}x.params.loop||(x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.isBeginning?(x.prevButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.prevButton)):(x.prevButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.prevButton))),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.isEnd?(x.nextButton.addClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.disable(x.nextButton)):(x.nextButton.removeClass(x.params.buttonDisabledClass),x.params.a11y&&x.a11y&&x.a11y.enable(x.nextButton))))},x.updatePagination=function(){if(x.params.pagination&&x.paginationContainer&&x.paginationContainer.length>0){var e="";if("bullets"===x.params.paginationType){for(var a=x.params.loop?Math.ceil((x.slides.length-2*x.loopedSlides)/x.params.slidesPerGroup):x.snapGrid.length,t=0;t<a;t++)e+=x.params.paginationBulletRender?x.params.paginationBulletRender(x,t,x.params.bulletClass):"<"+x.params.paginationElement+' class="'+x.params.bulletClass+'"></'+x.params.paginationElement+">";x.paginationContainer.html(e),x.bullets=x.paginationContainer.find("."+x.params.bulletClass),x.params.paginationClickable&&x.params.a11y&&x.a11y&&x.a11y.initPagination()}"fraction"===x.params.paginationType&&(e=x.params.paginationFractionRender?x.params.paginationFractionRender(x,x.params.paginationCurrentClass,x.params.paginationTotalClass):'<span class="'+x.params.paginationCurrentClass+'"></span> / <span class="'+x.params.paginationTotalClass+'"></span>',x.paginationContainer.html(e)),"progress"===x.params.paginationType&&(e=x.params.paginationProgressRender?x.params.paginationProgressRender(x,x.params.paginationProgressbarClass):'<span class="'+x.params.paginationProgressbarClass+'"></span>',x.paginationContainer.html(e)),"custom"!==x.params.paginationType&&x.emit("onPaginationRendered",x,x.paginationContainer[0])}},x.update=function(e){function a(){x.rtl,x.translate;t=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate()),x.setWrapperTranslate(t),x.updateActiveIndex(),x.updateClasses()}if(x){x.updateContainerSize(),x.updateSlidesSize(),x.updateProgress(),x.updatePagination(),x.updateClasses(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set();var t;if(e){x.controller&&x.controller.spline&&(x.controller.spline=void 0),x.params.freeMode?(a(),x.params.autoHeight&&x.updateAutoHeight()):(("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0))||a()}else x.params.autoHeight&&x.updateAutoHeight()}},x.onResize=function(e){x.params.onBeforeResize&&x.params.onBeforeResize(x),x.params.breakpoints&&x.setBreakpoint();var a=x.params.allowSwipeToPrev,t=x.params.allowSwipeToNext;x.params.allowSwipeToPrev=x.params.allowSwipeToNext=!0,x.updateContainerSize(),x.updateSlidesSize(),("auto"===x.params.slidesPerView||x.params.freeMode||e)&&x.updatePagination(),x.params.scrollbar&&x.scrollbar&&x.scrollbar.set(),x.controller&&x.controller.spline&&(x.controller.spline=void 0);var s=!1;if(x.params.freeMode){var r=Math.min(Math.max(x.translate,x.maxTranslate()),x.minTranslate());x.setWrapperTranslate(r),x.updateActiveIndex(),x.updateClasses(),x.params.autoHeight&&x.updateAutoHeight()}else x.updateClasses(),s=("auto"===x.params.slidesPerView||x.params.slidesPerView>1)&&x.isEnd&&!x.params.centeredSlides?x.slideTo(x.slides.length-1,0,!1,!0):x.slideTo(x.activeIndex,0,!1,!0);x.params.lazyLoading&&!s&&x.lazy&&x.lazy.load(),x.params.allowSwipeToPrev=a,x.params.allowSwipeToNext=t,x.params.onAfterResize&&x.params.onAfterResize(x)},x.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?x.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(x.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),x.touchEvents={start:x.support.touch||!x.params.simulateTouch?"touchstart":x.touchEventsDesktop.start,move:x.support.touch||!x.params.simulateTouch?"touchmove":x.touchEventsDesktop.move,end:x.support.touch||!x.params.simulateTouch?"touchend":x.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===x.params.touchEventsTarget?x.container:x.wrapper).addClass("swiper-wp8-"+x.params.direction),x.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===x.params.touchEventsTarget?x.container[0]:x.wrapper[0],i=x.support.touch?r:document,n=!!x.params.nested;if(x.browser.ie)r[t](x.touchEvents.start,x.onTouchStart,!1),i[t](x.touchEvents.move,x.onTouchMove,n),i[t](x.touchEvents.end,x.onTouchEnd,!1);else{if(x.support.touch){var o=!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1};r[t](x.touchEvents.start,x.onTouchStart,o),r[t](x.touchEvents.move,x.onTouchMove,n),r[t](x.touchEvents.end,x.onTouchEnd,o)}(s.simulateTouch&&!x.device.ios&&!x.device.android||s.simulateTouch&&!x.support.touch&&x.device.ios)&&(r[t]("mousedown",x.onTouchStart,!1),document[t]("mousemove",x.onTouchMove,n),document[t]("mouseup",x.onTouchEnd,!1))}window[t]("resize",x.onResize),x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.nextButton[a]("click",x.onClickNext),x.params.a11y&&x.a11y&&x.nextButton[a]("keydown",x.a11y.onEnterKey)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.prevButton[a]("click",x.onClickPrev),x.params.a11y&&x.a11y&&x.prevButton[a]("keydown",x.a11y.onEnterKey)),x.params.pagination&&x.params.paginationClickable&&(x.paginationContainer[a]("click","."+x.params.bulletClass,x.onClickIndex),x.params.a11y&&x.a11y&&x.paginationContainer[a]("keydown","."+x.params.bulletClass,x.a11y.onEnterKey)),(x.params.preventClicks||x.params.preventClicksPropagation)&&r[t]("click",x.preventClicks,!0)},x.attachEvents=function(){x.initEvents()},x.detachEvents=function(){x.initEvents(!0)},x.allowClick=!0,x.preventClicks=function(e){x.allowClick||(x.params.preventClicks&&e.preventDefault(),x.params.preventClicksPropagation&&x.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},x.onClickNext=function(e){e.preventDefault(),x.isEnd&&!x.params.loop||x.slideNext()},x.onClickPrev=function(e){e.preventDefault(),x.isBeginning&&!x.params.loop||x.slidePrev()},x.onClickIndex=function(a){a.preventDefault();var t=e(this).index()*x.params.slidesPerGroup
;x.params.loop&&(t+=x.loopedSlides),x.slideTo(t)},x.updateClickedSlide=function(a){var t=n(a,"."+x.params.slideClass),s=!1;if(t)for(var r=0;r<x.slides.length;r++)x.slides[r]===t&&(s=!0);if(!t||!s)return x.clickedSlide=void 0,void(x.clickedIndex=void 0);if(x.clickedSlide=t,x.clickedIndex=e(t).index(),x.params.slideToClickedSlide&&void 0!==x.clickedIndex&&x.clickedIndex!==x.activeIndex){var i,o=x.clickedIndex,l="auto"===x.params.slidesPerView?x.currentSlidesPerView():x.params.slidesPerView;if(x.params.loop){if(x.animating)return;i=parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"),10),x.params.centeredSlides?o<x.loopedSlides-l/2||o>x.slides.length-x.loopedSlides+l/2?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o):o>x.slides.length-l?(x.fixLoop(),o=x.wrapper.children("."+x.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+x.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){x.slideTo(o)},0)):x.slideTo(o)}else x.slideTo(o)}};var b,C,S,z,M,P,E,I,k,D,L="input, select, textarea, button, video",B=Date.now(),H=[];x.animating=!1,x.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,X;x.onTouchStart=function(a){if(a.originalEvent&&(a=a.originalEvent),(G="touchstart"===a.type)||!("which"in a)||3!==a.which){if(x.params.noSwiping&&n(a,"."+x.params.noSwipingClass))return void(x.allowClick=!0);if(!x.params.swipeHandler||n(a,x.params.swipeHandler)){var t=x.touches.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,s=x.touches.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;if(!(x.device.ios&&x.params.iOSEdgeSwipeDetection&&t<=x.params.iOSEdgeSwipeThreshold)){if(b=!0,C=!1,S=!0,M=void 0,X=void 0,x.touches.startX=t,x.touches.startY=s,z=Date.now(),x.allowClick=!0,x.updateContainerSize(),x.swipeDirection=void 0,x.params.threshold>0&&(I=!1),"touchstart"!==a.type){var r=!0;e(a.target).is(L)&&(r=!1),document.activeElement&&e(document.activeElement).is(L)&&document.activeElement.blur(),r&&a.preventDefault()}x.emit("onTouchStart",x,a)}}}},x.onTouchMove=function(a){if(a.originalEvent&&(a=a.originalEvent),!G||"mousemove"!==a.type){if(a.preventedByNestedSwiper)return x.touches.startX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,void(x.touches.startY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY);if(x.params.onlyExternal)return x.allowClick=!1,void(b&&(x.touches.startX=x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.startY=x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,z=Date.now()));if(G&&x.params.touchReleaseOnEdges&&!x.params.loop)if(x.isHorizontal()){if(x.touches.currentX<x.touches.startX&&x.translate<=x.maxTranslate()||x.touches.currentX>x.touches.startX&&x.translate>=x.minTranslate())return}else if(x.touches.currentY<x.touches.startY&&x.translate<=x.maxTranslate()||x.touches.currentY>x.touches.startY&&x.translate>=x.minTranslate())return;if(G&&document.activeElement&&a.target===document.activeElement&&e(a.target).is(L))return C=!0,void(x.allowClick=!1);if(S&&x.emit("onTouchMove",x,a),!(a.targetTouches&&a.targetTouches.length>1)){if(x.touches.currentX="touchmove"===a.type?a.targetTouches[0].pageX:a.pageX,x.touches.currentY="touchmove"===a.type?a.targetTouches[0].pageY:a.pageY,void 0===M){var t;x.isHorizontal()&&x.touches.currentY===x.touches.startY||!x.isHorizontal()&&x.touches.currentX===x.touches.startX?M=!1:(t=180*Math.atan2(Math.abs(x.touches.currentY-x.touches.startY),Math.abs(x.touches.currentX-x.touches.startX))/Math.PI,M=x.isHorizontal()?t>x.params.touchAngle:90-t>x.params.touchAngle)}if(M&&x.emit("onTouchMoveOpposite",x,a),void 0===X&&(x.touches.currentX===x.touches.startX&&x.touches.currentY===x.touches.startY||(X=!0)),b){if(M)return void(b=!1);if(X){x.allowClick=!1,x.emit("onSliderMove",x,a),a.preventDefault(),x.params.touchMoveStopPropagation&&!x.params.nested&&a.stopPropagation(),C||(s.loop&&x.fixLoop(),E=x.getWrapperTranslate(),x.setWrapperTransition(0),x.animating&&x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),x.params.autoplay&&x.autoplaying&&(x.params.autoplayDisableOnInteraction?x.stopAutoplay():x.pauseAutoplay()),D=!1,!x.params.grabCursor||x.params.allowSwipeToNext!==!0&&x.params.allowSwipeToPrev!==!0||x.setGrabCursor(!0)),C=!0;var r=x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY;r*=x.params.touchRatio,x.rtl&&(r=-r),x.swipeDirection=r>0?"prev":"next",P=r+E;var i=!0;if(r>0&&P>x.minTranslate()?(i=!1,x.params.resistance&&(P=x.minTranslate()-1+Math.pow(-x.minTranslate()+E+r,x.params.resistanceRatio))):r<0&&P<x.maxTranslate()&&(i=!1,x.params.resistance&&(P=x.maxTranslate()+1-Math.pow(x.maxTranslate()-E-r,x.params.resistanceRatio))),i&&(a.preventedByNestedSwiper=!0),!x.params.allowSwipeToNext&&"next"===x.swipeDirection&&P<E&&(P=E),!x.params.allowSwipeToPrev&&"prev"===x.swipeDirection&&P>E&&(P=E),x.params.threshold>0){if(!(Math.abs(r)>x.params.threshold||I))return void(P=E);if(!I)return I=!0,x.touches.startX=x.touches.currentX,x.touches.startY=x.touches.currentY,P=E,void(x.touches.diff=x.isHorizontal()?x.touches.currentX-x.touches.startX:x.touches.currentY-x.touches.startY)}x.params.followFinger&&((x.params.freeMode||x.params.watchSlidesProgress)&&x.updateActiveIndex(),x.params.freeMode&&(0===H.length&&H.push({position:x.touches[x.isHorizontal()?"startX":"startY"],time:z}),H.push({position:x.touches[x.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),x.updateProgress(P),x.setWrapperTranslate(P))}}}}},x.onTouchEnd=function(a){if(a.originalEvent&&(a=a.originalEvent),S&&x.emit("onTouchEnd",x,a),S=!1,b){x.params.grabCursor&&C&&b&&(x.params.allowSwipeToNext===!0||x.params.allowSwipeToPrev===!0)&&x.setGrabCursor(!1);var t=Date.now(),s=t-z;if(x.allowClick&&(x.updateClickedSlide(a),x.emit("onTap",x,a),s<300&&t-B>300&&(k&&clearTimeout(k),k=setTimeout(function(){x&&(x.params.paginationHide&&x.paginationContainer.length>0&&!e(a.target).hasClass(x.params.bulletClass)&&x.paginationContainer.toggleClass(x.params.paginationHiddenClass),x.emit("onClick",x,a))},300)),s<300&&t-B<300&&(k&&clearTimeout(k),x.emit("onDoubleTap",x,a))),B=Date.now(),setTimeout(function(){x&&(x.allowClick=!0)},0),!b||!C||!x.swipeDirection||0===x.touches.diff||P===E)return void(b=C=!1);b=C=!1;var r;if(r=x.params.followFinger?x.rtl?x.translate:-x.translate:-P,x.params.freeMode){if(r<-x.minTranslate())return void x.slideTo(x.activeIndex);if(r>-x.maxTranslate())return void(x.slides.length<x.snapGrid.length?x.slideTo(x.snapGrid.length-1):x.slideTo(x.slides.length-1));if(x.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;x.velocity=o/l,x.velocity=x.velocity/2,Math.abs(x.velocity)<x.params.freeModeMinimumVelocity&&(x.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(x.velocity=0)}else x.velocity=0;x.velocity=x.velocity*x.params.freeModeMomentumVelocityRatio,H.length=0;var p=1e3*x.params.freeModeMomentumRatio,d=x.velocity*p,m=x.translate+d;x.rtl&&(m=-m);var u,c=!1,g=20*Math.abs(x.velocity)*x.params.freeModeMomentumBounceRatio;if(m<x.maxTranslate())x.params.freeModeMomentumBounce?(m+x.maxTranslate()<-g&&(m=x.maxTranslate()-g),u=x.maxTranslate(),c=!0,D=!0):m=x.maxTranslate();else if(m>x.minTranslate())x.params.freeModeMomentumBounce?(m-x.minTranslate()>g&&(m=x.minTranslate()+g),u=x.minTranslate(),c=!0,D=!0):m=x.minTranslate();else if(x.params.freeModeSticky){var h,v=0;for(v=0;v<x.snapGrid.length;v+=1)if(x.snapGrid[v]>-m){h=v;break}m=Math.abs(x.snapGrid[h]-m)<Math.abs(x.snapGrid[h-1]-m)||"next"===x.swipeDirection?x.snapGrid[h]:x.snapGrid[h-1],x.rtl||(m=-m)}if(0!==x.velocity)p=x.rtl?Math.abs((-m-x.translate)/x.velocity):Math.abs((m-x.translate)/x.velocity);else if(x.params.freeModeSticky)return void x.slideReset();x.params.freeModeMomentumBounce&&c?(x.updateProgress(u),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating=!0,x.wrapper.transitionEnd(function(){x&&D&&(x.emit("onMomentumBounce",x),x.setWrapperTransition(x.params.speed),x.setWrapperTranslate(u),x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))})):x.velocity?(x.updateProgress(m),x.setWrapperTransition(p),x.setWrapperTranslate(m),x.onTransitionStart(),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd()}))):x.updateProgress(m),x.updateActiveIndex()}return void((!x.params.freeModeMomentum||s>=x.params.longSwipesMs)&&(x.updateProgress(),x.updateActiveIndex()))}var f,w=0,y=x.slidesSizesGrid[0];for(f=0;f<x.slidesGrid.length;f+=x.params.slidesPerGroup)void 0!==x.slidesGrid[f+x.params.slidesPerGroup]?r>=x.slidesGrid[f]&&r<x.slidesGrid[f+x.params.slidesPerGroup]&&(w=f,y=x.slidesGrid[f+x.params.slidesPerGroup]-x.slidesGrid[f]):r>=x.slidesGrid[f]&&(w=f,y=x.slidesGrid[x.slidesGrid.length-1]-x.slidesGrid[x.slidesGrid.length-2]);var T=(r-x.slidesGrid[w])/y;if(s>x.params.longSwipesMs){if(!x.params.longSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&(T>=x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w)),"prev"===x.swipeDirection&&(T>1-x.params.longSwipesRatio?x.slideTo(w+x.params.slidesPerGroup):x.slideTo(w))}else{if(!x.params.shortSwipes)return void x.slideTo(x.activeIndex);"next"===x.swipeDirection&&x.slideTo(w+x.params.slidesPerGroup),"prev"===x.swipeDirection&&x.slideTo(w)}}},x._slideTo=function(e,a){return x.slideTo(e,a,!0,!0)},x.slideTo=function(e,a,t,s){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),x.snapIndex=Math.floor(e/x.params.slidesPerGroup),x.snapIndex>=x.snapGrid.length&&(x.snapIndex=x.snapGrid.length-1);var r=-x.snapGrid[x.snapIndex];if(x.params.autoplay&&x.autoplaying&&(s||!x.params.autoplayDisableOnInteraction?x.pauseAutoplay(a):x.stopAutoplay()),x.updateProgress(r),x.params.normalizeSlideIndex)for(var i=0;i<x.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*x.slidesGrid[i])&&(e=i);return!(!x.params.allowSwipeToNext&&r<x.translate&&r<x.minTranslate())&&(!(!x.params.allowSwipeToPrev&&r>x.translate&&r>x.maxTranslate()&&(x.activeIndex||0)!==e)&&(void 0===a&&(a=x.params.speed),x.previousIndex=x.activeIndex||0,x.activeIndex=e,x.updateRealIndex(),x.rtl&&-r===x.translate||!x.rtl&&r===x.translate?(x.params.autoHeight&&x.updateAutoHeight(),x.updateClasses(),"slide"!==x.params.effect&&x.setWrapperTranslate(r),!1):(x.updateClasses(),x.onTransitionStart(t),0===a||x.browser.lteIE9?(x.setWrapperTranslate(r),x.setWrapperTransition(0),x.onTransitionEnd(t)):(x.setWrapperTranslate(r),x.setWrapperTransition(a),x.animating||(x.animating=!0,x.wrapper.transitionEnd(function(){x&&x.onTransitionEnd(t)}))),!0)))},x.onTransitionStart=function(e){void 0===e&&(e=!0),x.params.autoHeight&&x.updateAutoHeight(),x.lazy&&x.lazy.onTransitionStart(),e&&(x.emit("onTransitionStart",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeStart",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextStart",x):x.emit("onSlidePrevStart",x)))},x.onTransitionEnd=function(e){x.animating=!1,x.setWrapperTransition(0),void 0===e&&(e=!0),x.lazy&&x.lazy.onTransitionEnd(),e&&(x.emit("onTransitionEnd",x),x.activeIndex!==x.previousIndex&&(x.emit("onSlideChangeEnd",x),x.activeIndex>x.previousIndex?x.emit("onSlideNextEnd",x):x.emit("onSlidePrevEnd",x))),x.params.history&&x.history&&x.history.setHistory(x.params.history,x.activeIndex),x.params.hashnav&&x.hashnav&&x.hashnav.setHash()},x.slideNext=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)}return x.slideTo(x.activeIndex+x.params.slidesPerGroup,a,e,t)},x._slideNext=function(e){return x.slideNext(!0,e,!0)},x.slidePrev=function(e,a,t){if(x.params.loop){if(x.animating)return!1;x.fixLoop();x.container[0].clientLeft;return x.slideTo(x.activeIndex-1,a,e,t)}return x.slideTo(x.activeIndex-1,a,e,t)},x._slidePrev=function(e){return x.slidePrev(!0,e,!0)},x.slideReset=function(e,a,t){return x.slideTo(x.activeIndex,a,e)},x.disableTouchControl=function(){return x.params.onlyExternal=!0,!0},x.enableTouchControl=function(){return x.params.onlyExternal=!1,!0},x.setWrapperTransition=function(e,a){x.wrapper.transition(e),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTransition(e),x.params.parallax&&x.parallax&&x.parallax.setTransition(e),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTransition(e),x.params.control&&x.controller&&x.controller.setTransition(e,a),x.emit("onSetTransition",x,e)},x.setWrapperTranslate=function(e,a,t){var s=0,i=0;x.isHorizontal()?s=x.rtl?-e:e:i=e,x.params.roundLengths&&(s=r(s),i=r(i)),x.params.virtualTranslate||(x.support.transforms3d?x.wrapper.transform("translate3d("+s+"px, "+i+"px, 0px)"):x.wrapper.transform("translate("+s+"px, "+i+"px)")),x.translate=x.isHorizontal()?s:i;var n,o=x.maxTranslate()-x.minTranslate();n=0===o?0:(e-x.minTranslate())/o,n!==x.progress&&x.updateProgress(e),a&&x.updateActiveIndex(),"slide"!==x.params.effect&&x.effects[x.params.effect]&&x.effects[x.params.effect].setTranslate(x.translate),x.params.parallax&&x.parallax&&x.parallax.setTranslate(x.translate),x.params.scrollbar&&x.scrollbar&&x.scrollbar.setTranslate(x.translate),x.params.control&&x.controller&&x.controller.setTranslate(x.translate,t),x.emit("onSetTranslate",x,x.translate)},x.getTranslate=function(e,a){var t,s,r,i;return void 0===a&&(a="x"),x.params.virtualTranslate?x.rtl?-x.translate:x.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),x.rtl&&s&&(s=-s),s||0)},x.getWrapperTranslate=function(e){return void 0===e&&(e=x.isHorizontal()?"x":"y"),x.getTranslate(x.wrapper[0],e)},x.observers=[],x.initObservers=function(){if(x.params.observeParents)for(var e=x.container.parents(),a=0;a<e.length;a++)o(e[a]);o(x.container[0],{childList:!1}),o(x.wrapper[0],{attributes:!1})},x.disconnectObservers=function(){for(var e=0;e<x.observers.length;e++)x.observers[e].disconnect();x.observers=[]},x.createLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove();var a=x.wrapper.children("."+x.params.slideClass);"auto"!==x.params.slidesPerView||x.params.loopedSlides||(x.params.loopedSlides=a.length),x.loopedSlides=parseInt(x.params.loopedSlides||x.params.slidesPerView,10),x.loopedSlides=x.loopedSlides+x.params.loopAdditionalSlides,x.loopedSlides>a.length&&(x.loopedSlides=a.length);var t,s=[],r=[];for(a.each(function(t,i){var n=e(this);t<x.loopedSlides&&r.push(i),t<a.length&&t>=a.length-x.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)x.wrapper.append(e(r[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)x.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(x.params.slideDuplicateClass))},x.destroyLoop=function(){x.wrapper.children("."+x.params.slideClass+"."+x.params.slideDuplicateClass).remove(),x.slides.removeAttr("data-swiper-slide-index")},x.reLoop=function(e){var a=x.activeIndex-x.loopedSlides;x.destroyLoop(),x.createLoop(),x.updateSlidesSize(),e&&x.slideTo(a+x.loopedSlides,0,!1)},x.fixLoop=function(){var e;x.activeIndex<x.loopedSlides?(e=x.slides.length-3*x.loopedSlides+x.activeIndex,e+=x.loopedSlides,x.slideTo(e,0,!1,!0)):("auto"===x.params.slidesPerView&&x.activeIndex>=2*x.loopedSlides||x.activeIndex>x.slides.length-2*x.params.slidesPerView)&&(e=-x.slides.length+x.activeIndex+x.loopedSlides,e+=x.loopedSlides,x.slideTo(e,0,!1,!0))},x.appendSlide=function(e){if(x.params.loop&&x.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&x.wrapper.append(e[a]);else x.wrapper.append(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0)},x.prependSlide=function(e){x.params.loop&&x.destroyLoop();var a=x.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&x.wrapper.prepend(e[t]);a=x.activeIndex+e.length}else x.wrapper.prepend(e);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.slideTo(a,0,!1)},x.removeSlide=function(e){x.params.loop&&(x.destroyLoop(),x.slides=x.wrapper.children("."+x.params.slideClass));var a,t=x.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,x.slides[a]&&x.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);x.params.loop&&x.createLoop(),x.params.observer&&x.support.observer||x.update(!0),x.params.loop?x.slideTo(t+x.loopedSlides,0,!1):x.slideTo(t,0,!1)},x.removeAllSlides=function(){for(var e=[],a=0;a<x.slides.length;a++)e.push(a);x.removeSlide(e)},x.effects={fade:{setTranslate:function(){for(var e=0;e<x.slides.length;e++){var a=x.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;x.params.virtualTranslate||(s-=x.translate);var r=0;x.isHorizontal()||(r=s,s=0);var i=x.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(x.slides.transition(e),x.params.virtualTranslate&&0!==e){var a=!1;x.slides.transitionEnd(function(){if(!a&&x){a=!0,x.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)x.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var a=0;a<x.slides.length;a++){var t=x.slides.eq(a),s=t[0].progress;x.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(x.isHorizontal()?x.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+x.slides.length,x.params.flip.slideShadows){var d=x.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),m=x.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),t.append(m)),d.length&&(d[0].style.opacity=Math.max(-s,0)),m.length&&(m[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(a){if(x.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),x.params.virtualTranslate&&0!==a){var t=!1;x.slides.eq(x.activeIndex).transitionEnd(function(){if(!t&&x&&e(this).hasClass(x.params.slideActiveClass)){t=!0,x.animating=!1;for(var a=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<a.length;s++)x.wrapper.trigger(a[s])}})}}},cube:{setTranslate:function(){var a,t=0;x.params.cube.shadow&&(x.isHorizontal()?(a=x.wrapper.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.wrapper.append(a)),a.css({height:x.width+"px"})):(a=x.container.find(".swiper-cube-shadow"),0===a.length&&(a=e('<div class="swiper-cube-shadow"></div>'),x.container.append(a))));for(var s=0;s<x.slides.length;s++){var r=x.slides.eq(s),i=90*s,n=Math.floor(i/360);x.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4==0?(l=4*-n*x.size,d=0):(s-1)%4==0?(l=0,d=4*-n*x.size):(s-2)%4==0?(l=x.size+4*n*x.size,d=x.size):(s-3)%4==0&&(l=-x.size,d=3*x.size+4*x.size*n),x.rtl&&(l=-l),x.isHorizontal()||(p=l,l=0);var m="rotateX("+(x.isHorizontal()?0:-i)+"deg) rotateY("+(x.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(o<=1&&o>-1&&(t=90*s+90*o,x.rtl&&(t=90*-s-90*o)),r.transform(m),x.params.cube.slideShadows){var u=x.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),c=x.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),r.append(u)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),r.append(c)),u.length&&(u[0].style.opacity=Math.max(-o,0)),c.length&&(c[0].style.opacity=Math.max(o,0))}}if(x.wrapper.css({"-webkit-transform-origin":"50% 50% -"+x.size/2+"px","-moz-transform-origin":"50% 50% -"+x.size/2+"px","-ms-transform-origin":"50% 50% -"+x.size/2+"px","transform-origin":"50% 50% -"+x.size/2+"px"}),x.params.cube.shadow)if(x.isHorizontal())a.transform("translate3d(0px, "+(x.width/2+x.params.cube.shadowOffset)+"px, "+-x.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+x.params.cube.shadowScale+")");else{var g=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*g*Math.PI/360)/2+Math.cos(2*g*Math.PI/360)/2),v=x.params.cube.shadowScale,f=x.params.cube.shadowScale/h,w=x.params.cube.shadowOffset;a.transform("scale3d("+v+", 1, "+f+") translate3d(0px, "+(x.height/2+w)+"px, "+-x.height/2/f+"px) rotateX(-90deg)")}var y=x.isSafari||x.isUiWebView?-x.size/2:0;x.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(x.isHorizontal()?0:t)+"deg) rotateY("+(x.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),x.params.cube.shadow&&!x.isHorizontal()&&x.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var a=x.translate,t=x.isHorizontal()?-a+x.width/2:-a+x.height/2,s=x.isHorizontal()?x.params.coverflow.rotate:-x.params.coverflow.rotate,r=x.params.coverflow.depth,i=0,n=x.slides.length;i<n;i++){var o=x.slides.eq(i),l=x.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*x.params.coverflow.modifier,m=x.isHorizontal()?s*d:0,u=x.isHorizontal()?0:s*d,c=-r*Math.abs(d),g=x.isHorizontal()?0:x.params.coverflow.stretch*d,h=x.isHorizontal()?x.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(g)<.001&&(g=0),Math.abs(c)<.001&&(c=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0);var v="translate3d("+h+"px,"+g+"px,"+c+"px)  rotateX("+u+"deg) rotateY("+m+"deg)";if(o.transform(v),o[0].style.zIndex=1-Math.abs(Math.round(d)),x.params.coverflow.slideShadows){var f=x.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=x.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===f.length&&(f=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"left":"top")+'"></div>'),o.append(f)),0===w.length&&(w=e('<div class="swiper-slide-shadow-'+(x.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),f.length&&(f[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(x.browser.ie){x.wrapper[0].style.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},x.lazy={initialImageLoaded:!1,loadImageInSlide:function(a,t){if(void 0!==a&&(void 0===t&&(t=!0),0!==x.slides.length)){var s=x.slides.eq(a),r=s.find("."+x.params.lazyLoadingClass+":not(."+x.params.lazyStatusLoadedClass+"):not(."+x.params.lazyStatusLoadingClass+")");!s.hasClass(x.params.lazyLoadingClass)||s.hasClass(x.params.lazyStatusLoadedClass)||s.hasClass(x.params.lazyStatusLoadingClass)||(r=r.add(s[0])),0!==r.length&&r.each(function(){var a=e(this);a.addClass(x.params.lazyStatusLoadingClass);var r=a.attr("data-background"),i=a.attr("data-src"),n=a.attr("data-srcset"),o=a.attr("data-sizes");x.loadImage(a[0],i||r,n,o,!1,function(){if(void 0!==x&&null!==x&&x){if(r?(a.css("background-image",'url("'+r+'")'),a.removeAttr("data-background")):(n&&(a.attr("srcset",n),a.removeAttr("data-srcset")),o&&(a.attr("sizes",o),a.removeAttr("data-sizes")),i&&(a.attr("src",i),a.removeAttr("data-src"))),a.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),s.find("."+x.params.lazyPreloaderClass+", ."+x.params.preloaderClass).remove(),x.params.loop&&t){var e=s.attr("data-swiper-slide-index");if(s.hasClass(x.params.slideDuplicateClass)){var l=x.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+x.params.slideDuplicateClass+")");x.lazy.loadImageInSlide(l.index(),!1)}else{var p=x.wrapper.children("."+x.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');x.lazy.loadImageInSlide(p.index(),!1)}}x.emit("onLazyImageReady",x,s[0],a[0])}}),x.emit("onLazyImageLoad",x,s[0],a[0])})}},load:function(){var a,t=x.params.slidesPerView;if("auto"===t&&(t=0),x.lazy.initialImageLoaded||(x.lazy.initialImageLoaded=!0),x.params.watchSlidesVisibility)x.wrapper.children("."+x.params.slideVisibleClass).each(function(){x.lazy.loadImageInSlide(e(this).index())});else if(t>1)for(a=x.activeIndex;a<x.activeIndex+t;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);else x.lazy.loadImageInSlide(x.activeIndex);if(x.params.lazyLoadingInPrevNext)if(t>1||x.params.lazyLoadingInPrevNextAmount&&x.params.lazyLoadingInPrevNextAmount>1){var s=x.params.lazyLoadingInPrevNextAmount,r=t,i=Math.min(x.activeIndex+r+Math.max(s,r),x.slides.length),n=Math.max(x.activeIndex-Math.max(r,s),0);for(a=x.activeIndex+t;a<i;a++)x.slides[a]&&x.lazy.loadImageInSlide(a);for(a=n;a<x.activeIndex;a++)x.slides[a]&&x.lazy.loadImageInSlide(a)}else{var o=x.wrapper.children("."+x.params.slideNextClass);o.length>0&&x.lazy.loadImageInSlide(o.index());var l=x.wrapper.children("."+x.params.slidePrevClass);l.length>0&&x.lazy.loadImageInSlide(l.index())}},onTransitionStart:function(){x.params.lazyLoading&&(x.params.lazyLoadingOnTransitionStart||!x.params.lazyLoadingOnTransitionStart&&!x.lazy.initialImageLoaded)&&x.lazy.load()},onTransitionEnd:function(){x.params.lazyLoading&&!x.params.lazyLoadingOnTransitionStart&&x.lazy.load()}},x.scrollbar={isTouched:!1,setDragPosition:function(e){var a=x.scrollbar,t=x.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[x.isHorizontal()?"left":"top"]-a.dragSize/2,r=-x.minTranslate()*a.moveDivider,i=-x.maxTranslate()*a.moveDivider;s<r?s=r:s>i&&(s=i),s=-s/a.moveDivider,x.updateProgress(s),x.setWrapperTranslate(s,!0)},dragStart:function(e){var a=x.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),x.params.scrollbarHide&&a.track.css("opacity",1),x.wrapper.transition(100),a.drag.transition(100),x.emit("onScrollbarDragStart",x)},dragMove:function(e){var a=x.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),x.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),x.emit("onScrollbarDragMove",x))},dragEnd:function(e){var a=x.scrollbar;a.isTouched&&(a.isTouched=!1,x.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),x.emit("onScrollbarDragEnd",x),x.params.scrollbarSnapOnRelease&&x.slideReset())},draggableEvents:function(){return x.params.simulateTouch!==!1||x.support.touch?x.touchEvents:x.touchEventsDesktop}(),enableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).on(a.draggableEvents.start,a.dragStart),e(t).on(a.draggableEvents.move,a.dragMove),e(t).on(a.draggableEvents.end,a.dragEnd)},disableDraggable:function(){var a=x.scrollbar,t=x.support.touch?a.track:document;e(a.track).off(a.draggableEvents.start,a.dragStart),e(t).off(a.draggableEvents.move,a.dragMove),e(t).off(a.draggableEvents.end,a.dragEnd)},set:function(){if(x.params.scrollbar){var a=x.scrollbar;a.track=e(x.params.scrollbar),x.params.uniqueNavElements&&"string"==typeof x.params.scrollbar&&a.track.length>1&&1===x.container.find(x.params.scrollbar).length&&(a.track=x.container.find(x.params.scrollbar)),a.drag=a.track.find(".swiper-scrollbar-drag"),0===a.drag.length&&(a.drag=e('<div class="swiper-scrollbar-drag"></div>'),a.track.append(a.drag)),a.drag[0].style.width="",a.drag[0].style.height="",a.trackSize=x.isHorizontal()?a.track[0].offsetWidth:a.track[0].offsetHeight,a.divider=x.size/x.virtualSize,a.moveDivider=a.divider*(a.trackSize/x.size),a.dragSize=a.trackSize*a.divider,x.isHorizontal()?a.drag[0].style.width=a.dragSize+"px":a.drag[0].style.height=a.dragSize+"px",a.divider>=1?a.track[0].style.display="none":a.track[0].style.display="",x.params.scrollbarHide&&(a.track[0].style.opacity=0)}},setTranslate:function(){if(x.params.scrollbar){var e,a=x.scrollbar,t=(x.translate,a.dragSize);e=(a.trackSize-a.dragSize)*x.progress,x.rtl&&x.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),x.isHorizontal()?(x.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(x.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),x.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){x.params.scrollbar&&x.scrollbar.drag.transition(e)}},x.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var s,r;this.x.length;this.interpolate=function(e){return e?(r=t(this.x,e),s=r-1,(e-this.x[s])*(this.y[r]-this.y[s])/(this.x[r]-this.x[s])+this.y[s]):0}},getInterpolateFunction:function(e){x.controller.spline||(x.controller.spline=x.params.loop?new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid):new x.controller.LinearSpline(x.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-x.translate:x.translate,"slide"===x.params.controlBy&&(x.controller.getInterpolateFunction(a),i=-x.controller.spline.interpolate(-e)),i&&"container"!==x.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(x.maxTranslate()-x.minTranslate()),i=(e-x.minTranslate())*r+a.minTranslate()),x.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,x),a.updateActiveIndex()}var r,i,n=x.params.control;if(Array.isArray(n))for(var o=0;o<n.length;o++)n[o]!==t&&n[o]instanceof a&&s(n[o]);else n instanceof a&&t!==n&&s(n)},setTransition:function(e,t){function s(a){a.setWrapperTransition(e,x),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===x.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=x.params.control;if(Array.isArray(i))for(r=0;r<i.length;r++)i[r]!==t&&i[r]instanceof a&&s(i[r]);else i instanceof a&&t!==i&&s(i)}},x.hashnav={onHashCange:function(e,a){var t=document.location.hash.replace("#","");t!==x.slides.eq(x.activeIndex).attr("data-hash")&&x.slideTo(x.wrapper.children("."+x.params.slideClass+'[data-hash="'+t+'"]').index())},attachEvents:function(a){var t=a?"off":"on";e(window)[t]("hashchange",x.hashnav.onHashCange)},setHash:function(){
if(x.hashnav.initialized&&x.params.hashnav)if(x.params.replaceState&&window.history&&window.history.replaceState)window.history.replaceState(null,null,"#"+x.slides.eq(x.activeIndex).attr("data-hash")||"");else{var e=x.slides.eq(x.activeIndex),a=e.attr("data-hash")||e.attr("data-history");document.location.hash=a||""}},init:function(){if(x.params.hashnav&&!x.params.history){x.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=x.slides.length;a<t;a++){var s=x.slides.eq(a),r=s.attr("data-hash")||s.attr("data-history");if(r===e&&!s.hasClass(x.params.slideDuplicateClass)){var i=s.index();x.slideTo(i,0,x.params.runCallbacksOnInit,!0)}}x.params.hashnavWatchState&&x.hashnav.attachEvents()}},destroy:function(){x.params.hashnavWatchState&&x.hashnav.attachEvents(!0)}},x.history={init:function(){if(x.params.history){if(!window.history||!window.history.pushState)return x.params.history=!1,void(x.params.hashnav=!0);x.history.initialized=!0,this.paths=this.getPathValues(),(this.paths.key||this.paths.value)&&(this.scrollToSlide(0,this.paths.value,x.params.runCallbacksOnInit),x.params.replaceState||window.addEventListener("popstate",this.setHistoryPopState))}},setHistoryPopState:function(){x.history.paths=x.history.getPathValues(),x.history.scrollToSlide(x.params.speed,x.history.paths.value,!1)},getPathValues:function(){var e=window.location.pathname.slice(1).split("/"),a=e.length;return{key:e[a-2],value:e[a-1]}},setHistory:function(e,a){if(x.history.initialized&&x.params.history){var t=x.slides.eq(a),s=this.slugify(t.attr("data-history"));window.location.pathname.includes(e)||(s=e+"/"+s),x.params.replaceState?window.history.replaceState(null,null,s):window.history.pushState(null,null,s)}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,a,t){if(a)for(var s=0,r=x.slides.length;s<r;s++){var i=x.slides.eq(s),n=this.slugify(i.attr("data-history"));if(n===a&&!i.hasClass(x.params.slideDuplicateClass)){var o=i.index();x.slideTo(o,e,t)}}else x.slideTo(0,e,t)}},x.disableKeyboardControl=function(){x.params.keyboardControl=!1,e(document).off("keydown",l)},x.enableKeyboardControl=function(){x.params.keyboardControl=!0,e(document).on("keydown",l)},x.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},x.params.mousewheelControl&&(x.mousewheel.event=navigator.userAgent.indexOf("firefox")>-1?"DOMMouseScroll":function(){var e="onwheel"in document;if(!e){var a=document.createElement("div");a.setAttribute("onwheel","return;"),e="function"==typeof a.onwheel}return!e&&document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0&&(e=document.implementation.hasFeature("Events.wheel","3.0")),e}()?"wheel":"mousewheel"),x.disableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.off(x.mousewheel.event,d),x.params.mousewheelControl=!1,!0},x.enableMousewheelControl=function(){if(!x.mousewheel.event)return!1;var a=x.container;return"container"!==x.params.mousewheelEventsTarged&&(a=e(x.params.mousewheelEventsTarged)),a.on(x.mousewheel.event,d),x.params.mousewheelControl=!0,!0},x.parallax={setTranslate:function(){x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,x.progress)}),x.slides.each(function(){var a=e(this);a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){m(this,Math.min(Math.max(a[0].progress,-1),1))})})},setTransition:function(a){void 0===a&&(a=x.params.speed),x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=e(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||a;0===a&&(s=0),t.transition(s)})}},x.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:x.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,s=e.targetTouches[1].pageX,r=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(s-a,2)+Math.pow(r-t,2))},onGestureStart:function(a){var t=x.zoom;if(!x.support.gestures){if("touchstart"!==a.type||"touchstart"===a.type&&a.targetTouches.length<2)return;t.gesture.scaleStart=t.getDistanceBetweenTouches(a)}if(!(t.gesture.slide&&t.gesture.slide.length||(t.gesture.slide=e(this),0===t.gesture.slide.length&&(t.gesture.slide=x.slides.eq(x.activeIndex)),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+x.params.zoomContainerClass),t.gesture.zoomMax=t.gesture.imageWrap.attr("data-swiper-zoom")||x.params.zoomMax,0!==t.gesture.imageWrap.length)))return void(t.gesture.image=void 0);t.gesture.image.transition(0),t.isScaling=!0},onGestureChange:function(e){var a=x.zoom;if(!x.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(x.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<x.params.zoomMin&&(a.scale=x.params.zoomMin+1-Math.pow(x.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=x.zoom;!x.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),x.params.zoomMin),a.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=x.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(x.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=x.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=x.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),x.rtl&&(a.image.startX=-a.image.startX),x.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,s=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&s<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-s/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(x.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!x.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var s=300,r=300,i=t.velocity.x*s,n=t.image.currentX+i,o=t.velocity.y*r,l=t.image.currentY+o;0!==t.velocity.x&&(s=Math.abs((n-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(r=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(s,r);t.image.currentX=n,t.image.currentY=l;var d=t.image.width*t.scale,m=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-m/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(a,t){var s=a.zoom;if(s.gesture.slide||(s.gesture.slide=a.clickedSlide?e(a.clickedSlide):a.slides.eq(a.activeIndex),s.gesture.image=s.gesture.slide.find("img, svg, canvas"),s.gesture.imageWrap=s.gesture.image.parent("."+a.params.zoomContainerClass)),s.gesture.image&&0!==s.gesture.image.length){var r,i,n,o,l,p,d,m,u,c,g,h,v,f,w,y,x,T;void 0===s.image.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,i="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=s.image.touchesStart.x,i=s.image.touchesStart.y),s.scale&&1!==s.scale?(s.scale=s.currentScale=1,s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),s.gesture.slide=void 0):(s.scale=s.currentScale=s.gesture.imageWrap.attr("data-swiper-zoom")||a.params.zoomMax,t?(x=s.gesture.slide[0].offsetWidth,T=s.gesture.slide[0].offsetHeight,n=s.gesture.slide.offset().left,o=s.gesture.slide.offset().top,l=n+x/2-r,p=o+T/2-i,u=s.gesture.image[0].offsetWidth,c=s.gesture.image[0].offsetHeight,g=u*s.scale,h=c*s.scale,v=Math.min(x/2-g/2,0),f=Math.min(T/2-h/2,0),w=-v,y=-f,d=l*s.scale,m=p*s.scale,d<v&&(d=v),d>w&&(d=w),m<f&&(m=f),m>y&&(m=y)):(d=0,m=0),s.gesture.imageWrap.transition(300).transform("translate3d("+d+"px, "+m+"px,0)"),s.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+s.scale+")"))}},attachEvents:function(a){var t=a?"off":"on";if(x.params.zoom){var s=(x.slides,!("touchstart"!==x.touchEvents.start||!x.support.passiveListener||!x.params.passiveListeners)&&{passive:!0,capture:!1});x.support.gestures?(x.slides[t]("gesturestart",x.zoom.onGestureStart,s),x.slides[t]("gesturechange",x.zoom.onGestureChange,s),x.slides[t]("gestureend",x.zoom.onGestureEnd,s)):"touchstart"===x.touchEvents.start&&(x.slides[t](x.touchEvents.start,x.zoom.onGestureStart,s),x.slides[t](x.touchEvents.move,x.zoom.onGestureChange,s),x.slides[t](x.touchEvents.end,x.zoom.onGestureEnd,s)),x[t]("touchStart",x.zoom.onTouchStart),x.slides.each(function(a,s){e(s).find("."+x.params.zoomContainerClass).length>0&&e(s)[t](x.touchEvents.move,x.zoom.onTouchMove)}),x[t]("touchEnd",x.zoom.onTouchEnd),x[t]("transitionEnd",x.zoom.onTransitionEnd),x.params.zoomToggle&&x.on("doubleTap",x.zoom.toggleZoom)}},init:function(){x.zoom.attachEvents()},destroy:function(){x.zoom.attachEvents(!0)}},x._plugins=[];for(var Y in x.plugins){var A=x.plugins[Y](x,x.params[Y]);A&&x._plugins.push(A)}return x.callPlugins=function(e){for(var a=0;a<x._plugins.length;a++)e in x._plugins[a]&&x._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.emitterEventListeners={},x.emit=function(e){x.params[e]&&x.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(x.emitterEventListeners[e])for(a=0;a<x.emitterEventListeners[e].length;a++)x.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);x.callPlugins&&x.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},x.on=function(e,a){return e=u(e),x.emitterEventListeners[e]||(x.emitterEventListeners[e]=[]),x.emitterEventListeners[e].push(a),x},x.off=function(e,a){var t;if(e=u(e),void 0===a)return x.emitterEventListeners[e]=[],x;if(x.emitterEventListeners[e]&&0!==x.emitterEventListeners[e].length){for(t=0;t<x.emitterEventListeners[e].length;t++)x.emitterEventListeners[e][t]===a&&x.emitterEventListeners[e].splice(t,1);return x}},x.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),x.off(e,t)};return x.on(e,t),x},x.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(a){13===a.keyCode&&(e(a.target).is(x.params.nextButton)?(x.onClickNext(a),x.isEnd?x.a11y.notify(x.params.lastSlideMessage):x.a11y.notify(x.params.nextSlideMessage)):e(a.target).is(x.params.prevButton)&&(x.onClickPrev(a),x.isBeginning?x.a11y.notify(x.params.firstSlideMessage):x.a11y.notify(x.params.prevSlideMessage)),e(a.target).is("."+x.params.bulletClass)&&e(a.target)[0].click())},liveRegion:e('<span class="'+x.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=x.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){x.params.nextButton&&x.nextButton&&x.nextButton.length>0&&(x.a11y.makeFocusable(x.nextButton),x.a11y.addRole(x.nextButton,"button"),x.a11y.addLabel(x.nextButton,x.params.nextSlideMessage)),x.params.prevButton&&x.prevButton&&x.prevButton.length>0&&(x.a11y.makeFocusable(x.prevButton),x.a11y.addRole(x.prevButton,"button"),x.a11y.addLabel(x.prevButton,x.params.prevSlideMessage)),e(x.container).append(x.a11y.liveRegion)},initPagination:function(){x.params.pagination&&x.params.paginationClickable&&x.bullets&&x.bullets.length&&x.bullets.each(function(){var a=e(this);x.a11y.makeFocusable(a),x.a11y.addRole(a,"button"),x.a11y.addLabel(a,x.params.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},destroy:function(){x.a11y.liveRegion&&x.a11y.liveRegion.length>0&&x.a11y.liveRegion.remove()}},x.init=function(){x.params.loop&&x.createLoop(),x.updateContainerSize(),x.updateSlidesSize(),x.updatePagination(),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.set(),x.params.scrollbarDraggable&&x.scrollbar.enableDraggable()),"slide"!==x.params.effect&&x.effects[x.params.effect]&&(x.params.loop||x.updateProgress(),x.effects[x.params.effect].setTranslate()),x.params.loop?x.slideTo(x.params.initialSlide+x.loopedSlides,0,x.params.runCallbacksOnInit):(x.slideTo(x.params.initialSlide,0,x.params.runCallbacksOnInit),0===x.params.initialSlide&&(x.parallax&&x.params.parallax&&x.parallax.setTranslate(),x.lazy&&x.params.lazyLoading&&(x.lazy.load(),x.lazy.initialImageLoaded=!0))),x.attachEvents(),x.params.observer&&x.support.observer&&x.initObservers(),x.params.preloadImages&&!x.params.lazyLoading&&x.preloadImages(),x.params.zoom&&x.zoom&&x.zoom.init(),x.params.autoplay&&x.startAutoplay(),x.params.keyboardControl&&x.enableKeyboardControl&&x.enableKeyboardControl(),x.params.mousewheelControl&&x.enableMousewheelControl&&x.enableMousewheelControl(),x.params.hashnavReplaceState&&(x.params.replaceState=x.params.hashnavReplaceState),x.params.history&&x.history&&x.history.init(),x.params.hashnav&&x.hashnav&&x.hashnav.init(),x.params.a11y&&x.a11y&&x.a11y.init(),x.emit("onInit",x)},x.cleanupStyles=function(){x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),x.wrapper.removeAttr("style"),x.slides&&x.slides.length&&x.slides.removeClass([x.params.slideVisibleClass,x.params.slideActiveClass,x.params.slideNextClass,x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),x.paginationContainer&&x.paginationContainer.length&&x.paginationContainer.removeClass(x.params.paginationHiddenClass),x.bullets&&x.bullets.length&&x.bullets.removeClass(x.params.bulletActiveClass),x.params.prevButton&&e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),x.params.nextButton&&e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),x.params.scrollbar&&x.scrollbar&&(x.scrollbar.track&&x.scrollbar.track.length&&x.scrollbar.track.removeAttr("style"),x.scrollbar.drag&&x.scrollbar.drag.length&&x.scrollbar.drag.removeAttr("style"))},x.destroy=function(e,a){x.detachEvents(),x.stopAutoplay(),x.params.scrollbar&&x.scrollbar&&x.params.scrollbarDraggable&&x.scrollbar.disableDraggable(),x.params.loop&&x.destroyLoop(),a&&x.cleanupStyles(),x.disconnectObservers(),x.params.zoom&&x.zoom&&x.zoom.destroy(),x.params.keyboardControl&&x.disableKeyboardControl&&x.disableKeyboardControl(),x.params.mousewheelControl&&x.disableMousewheelControl&&x.disableMousewheelControl(),x.params.a11y&&x.a11y&&x.a11y.destroy(),x.params.history&&!x.params.replaceState&&window.removeEventListener("popstate",x.history.setHistoryPopState),x.params.hashnav&&x.hashnav&&x.hashnav.destroy(),x.emit("onDestroy"),e!==!1&&(x=null)},x.init(),x}};a.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="<!--[if lte IE 9]><i></i><![endif]-->",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}};for(var t=["jQuery","Zepto","Dom7"],s=0;s<t.length;s++)window[t[s]]&&function(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}(window[t[s]]);var r;r="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,r&&("transitionEnd"in r.fn||(r.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in r.fn||(r.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in r.fn||(r.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this}),"outerWidth"in r.fn||(r.fn.outerWidth=function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null})),window.Swiper=a}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.jquery.min.js.map

/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
!function(i){if("function"==typeof define&&define.amd)define(["jquery"],i);else if("object"==typeof module&&module.exports){var t=require("jquery");i(t),module.exports=t}else i(jQuery)}(function(i){function t(i){this.init(i)}t.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=i("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var t=this.canvas;if(t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d"),window.devicePixelRatio>1){var e=window.devicePixelRatio;t.style.width=t.style.height=this.size+"px",t.width=t.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){function t(){var t=i("<canvas>")[0];t.width=e.size,t.height=e.size,t.getContext("2d").drawImage(g,0,0,r,r),e.arcFill=e.ctx.createPattern(t,"no-repeat"),e.drawFrame(e.lastFrameValue)}var e=this,a=this.fill,n=this.ctx,r=this.size;if(!a)throw Error("The fill is not specified!");if("string"==typeof a&&(a={color:a}),a.color&&(this.arcFill=a.color),a.gradient){var s=a.gradient;if(1==s.length)this.arcFill=s[0];else if(s.length>1){for(var l=a.gradientAngle||0,o=a.gradientDirection||[r/2*(1-Math.cos(l)),r/2*(1+Math.sin(l)),r/2*(1+Math.cos(l)),r/2*(1-Math.sin(l))],h=n.createLinearGradient.apply(n,o),c=0;c<s.length;c++){var d=s[c],u=c/(s.length-1);i.isArray(d)&&(u=d[1],d=d[0]),h.addColorStop(u,d)}this.arcFill=h}}if(a.image){var g;a.image instanceof Image?g=a.image:(g=new Image,g.src=a.image),g.complete?t():g.onload=t}},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){if(0!==i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;t.save(),t.beginPath(),this.reverse?t.arc(e,e,e-a/2,n-2*Math.PI*i,n):t.arc(e,e,e-a/2,n,n+2*Math.PI*i),t.lineWidth=a,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()}},drawEmptyArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;i<1&&(t.save(),t.beginPath(),i<=0?t.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?t.arc(e,e,e-a/2,n,n-2*Math.PI*i):t.arc(e,e,e-a/2,n+2*Math.PI*i,n),t.lineWidth=a,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var e=this,a=this.el,n=i(this.canvas);n.stop(!0,!1),a.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=e.animationStartValue*(1-i)+t*i;e.drawFrame(n),a.trigger("circle-animation-progress",[i,n])}})).promise().always(function(){a.trigger("circle-animation-end")})},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i){return i<.5?(i=2*i,.5*i*i*i):(i=2-2*i,1-.5*i*i*i)},i.fn.circleProgress=function(e,a){var n="circle-progress",r=this.data(n);if("widget"==e){if(!r)throw Error('Calling "widget" method on not initialized instance is forbidden');return r.canvas}if("value"==e){if(!r)throw Error('Calling "value" method on not initialized instance is forbidden');if("undefined"==typeof a)return r.getValue();var s=arguments[1];return this.each(function(){i(this).data(n).setValue(s)})}return this.each(function(){var a=i(this),r=a.data(n),s=i.isPlainObject(e)?e:{};if(r)r.init(s);else{var l=i.extend({},a.data());"string"==typeof l.fill&&(l.fill=JSON.parse(l.fill)),"string"==typeof l.animation&&(l.animation=JSON.parse(l.animation)),s=i.extend(l,s),s.el=a,r=new t(s),a.data(n,r)}})}});
/** Desktop view  **/
$(document).ready(function () {

    $("#personal-topmenu").on('mouseover', function () {
        $("#personal-childmenu").css("display", "block");
        $("#personal-topmenu a").addClass("open");
        if ($("#line").hasClass("vertical-line"))
            $("#line").removeClass("vertical-line");
    });

    $("#personal-topmenu").on('mouseout', function () {
        $("#personal-childmenu").css("display", "none");
        $("#personal-topmenu a").removeClass("open");
        if (!$("#line").hasClass("vertical-line"))
            $("#line").addClass("vertical-line");
    });

    $("#corporate-topmenu").on('mouseover', function () {
        $("#corporate-childmenu").css("display", "block");
        $("#corporate-topmenu a").addClass("open");
        if ($("#line").hasClass("vertical-line"))
            $("#line").removeClass("vertical-line");
    });

    $("#corporate-topmenu").on('mouseout', function () {
        $("#corporate-childmenu").css("display", "none");
        $("#corporate-topmenu a").removeClass("open");
        if (!$("#line").hasClass("vertical-line"))
            $("#line").addClass("vertical-line");
    });

    $("#advisor-topmenu").on('mouseover', function () {
        $("#advisor-childmenu").css("display", "block");
        $("#advisor-topmenu a").addClass("open");
        if ($("#line").hasClass("vertical-line"))
            $("#line").removeClass("vertical-line");
    });

    $("#advisor-topmenu").on('mouseout', function () {
        $("#advisor-childmenu").css("display", "none");
        $("#advisor-topmenu a").removeClass("open");
        if (!$("#line").hasClass("vertical-line"))
            $("#line").addClass("vertical-line");
    });

  $(".selected-menu").prev().children(".vertical-line").css("display", "none");
  

});




/** Mobile view  **/
$(document).ready(function () {

  $(".mobile-menu-wrapper").on("click", function () {
    var selectedid = $(".top-bg .nav .selected-menu").attr('id');
    if ($(".top-bg .nav .selected-menu").attr('id') != "" && typeof $(".top-bg .nav .selected-menu").attr('id') != 'undefined') {
      selectedid = selectedid.replace('-topmenu', '-mobile-topmenu');
      $(".mobi-nav-wrapper").html("");
      var mainNav = $(".top-menu").html();
      $(".mobi-nav-wrapper").html(mainNav);
      $("[id*=" + selectedid + "]").trigger("click");
      $("#mobileline").css("position", "relative").css("top", "23px");
    }
  });




    $("#personal-mobile-topmenu").click(function () {
        $(".utility-links-global-nav ul li").removeClass("selected-menu");
        $(this).addClass("selected-menu");
        $(".mobi-nav-wrapper").html("");
        var selectedid = $(".top-bg .nav .selected-menu").attr('id');
        var mainNav = "";
        if (selectedid.includes("personal")) {
            mainNav = $(".top-menu").html();
            $(".utility-links").css("display", "table").css("padding-top", "25px");
            $("#mobileline").css("display", "table");
        }
        else {
            mainNav = $("#personal-childmenu").html();
            $(".utility-links").css("display", "none");
            $("#mobileline").css("display", "none");
        }

        $(".mobi-nav-wrapper").html(mainNav);
       

    });

    $("#corporate-mobile-topmenu").click(function () {
        $(".utility-links-global-nav ul li").removeClass("selected-menu");
        $(this).addClass("selected-menu");
        $(".mobi-nav-wrapper").html("");
        var selectedid = $(".top-bg .nav .selected-menu").attr('id');
        var mainNav = "";
        if (selectedid.includes("corporate")) {
            mainNav = $(".top-menu").html();
            $(".utility-links").css("display", "table").css("padding-top", "25px");
            $("#mobileline").css("display", "table");
        }
        else {
            mainNav = $("#corporate-childmenu").html();
            $(".utility-links").css("display", "none");
            $("#mobileline").css("display", "none");
        }

        $(".mobi-nav-wrapper").html(mainNav);
      

    });


    $("#advisor-mobile-topmenu").click(function () {
        $(".utility-links-global-nav ul li").removeClass("selected-menu");
        $(this).addClass("selected-menu");
        $(".mobi-nav-wrapper").html("");
        var selectedid = $(".top-bg .nav .selected-menu").attr('id');
        var mainNav = "";
        if (selectedid.includes("advisor")) {
            mainNav = $(".top-menu").html();
            $(".utility-links").css("display", "table").css("padding-top", "25px");
            $("#mobileline").css("display", "table");
        }
        else {
            mainNav = $("#advisor-childmenu").html();
            $(".utility-links").css("display", "none");
           $("#mobileline").css("display", "none");
        }

        $(".mobi-nav-wrapper").html(mainNav);
        

    });

  


});



/*
== malihu jquery custom scrollbar plugin == 
Version: 3.1.5 
Plugin URI: http://manos.malihu.gr/jquery-custom-content-scroller 
Author: malihu
Author URI: http://manos.malihu.gr
License: MIT License (MIT)
*/

/*
Copyright Manos Malihutsakis (email: manos@malihu.gr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/*
The code below is fairly long, fully commented and should be normally used in development. 
For production, use either the minified jquery.mCustomScrollbar.min.js script or 
the production-ready jquery.mCustomScrollbar.concat.min.js which contains the plugin 
and dependencies (minified). 
*/

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = factory;
    } else {
        factory(jQuery, window, document);
    }
}(function($) {
    (function(init) {
        var _rjs = typeof define === "function" && define.amd,
            /* RequireJS */
            _njs = typeof module !== "undefined" && module.exports,
            /* NodeJS */
            _dlp = ("https:" == document.location.protocol) ? "https:" : "http:",
            /* location protocol */
            _url = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        if (!_rjs) {
            if (_njs) {
                require("jquery-mousewheel")($);
            } else {
                /* load jquery-mousewheel plugin (via CDN) if it's not present or not loaded via RequireJS 
                (works when mCustomScrollbar fn is called on window load) */
                $.event.special.mousewheel || $("head").append(decodeURI("%3Cscript src=" + _dlp + "//" + _url + "%3E%3C/script%3E"));
            }
        }
        init();
    }(function() {

        /* 
        ----------------------------------------
        PLUGIN NAMESPACE, PREFIX, DEFAULT SELECTOR(S) 
        ----------------------------------------
        */

        var pluginNS = "mCustomScrollbar",
            pluginPfx = "mCS",
            defaultSelector = ".mCustomScrollbar",





            /* 
            ----------------------------------------
            DEFAULT OPTIONS 
            ----------------------------------------
            */

            defaults = {
                /*
                set element/content width/height programmatically 
                values: boolean, pixels, percentage 
                	option						default
                	-------------------------------------
                	setWidth					false
                	setHeight					false
                */
                /*
                set the initial css top property of content  
                values: string (e.g. "-100px", "10%" etc.)
                */
                setTop: 0,
                /*
                set the initial css left property of content  
                values: string (e.g. "-100px", "10%" etc.)
                */
                setLeft: 0,
                /* 
                scrollbar axis (vertical and/or horizontal scrollbars) 
                values (string): "y", "x", "yx"
                */
                axis: "y",
                /*
                position of scrollbar relative to content  
                values (string): "inside", "outside" ("outside" requires elements with position:relative)
                */
                scrollbarPosition: "inside",
                /*
                scrolling inertia
                values: integer (milliseconds)
                */
                scrollInertia: 950,
                /* 
                auto-adjust scrollbar dragger length
                values: boolean
                */
                autoDraggerLength: true,
                /*
                auto-hide scrollbar when idle 
                values: boolean
                	option						default
                	-------------------------------------
                	autoHideScrollbar			false
                */
                /*
                auto-expands scrollbar on mouse-over and dragging
                values: boolean
                	option						default
                	-------------------------------------
                	autoExpandScrollbar			false
                */
                /*
                always show scrollbar, even when there's nothing to scroll 
                values: integer (0=disable, 1=always show dragger rail and buttons, 2=always show dragger rail, dragger and buttons), boolean
                */
                alwaysShowScrollbar: 0,
                /*
                scrolling always snaps to a multiple of this number in pixels
                values: integer, array ([y,x])
                	option						default
                	-------------------------------------
                	snapAmount					null
                */
                /*
                when snapping, snap with this number in pixels as an offset 
                values: integer
                */
                snapOffset: 0,
                /* 
                mouse-wheel scrolling
                */
                mouseWheel: {
                    /* 
                    enable mouse-wheel scrolling
                    values: boolean
                    */
                    enable: true,
                    /* 
                    scrolling amount in pixels
                    values: "auto", integer 
                    */
                    scrollAmount: "auto",
                    /* 
                    mouse-wheel scrolling axis 
                    the default scrolling direction when both vertical and horizontal scrollbars are present 
                    values (string): "y", "x" 
                    */
                    axis: "y",
                    /* 
                    prevent the default behaviour which automatically scrolls the parent element(s) when end of scrolling is reached 
                    values: boolean
                    	option						default
                    	-------------------------------------
                    	preventDefault				null
                    */
                    /*
                    the reported mouse-wheel delta value. The number of lines (translated to pixels) one wheel notch scrolls.  
                    values: "auto", integer 
                    "auto" uses the default OS/browser value 
                    */
                    deltaFactor: "auto",
                    /*
                    normalize mouse-wheel delta to -1 or 1 (disables mouse-wheel acceleration) 
                    values: boolean
                    	option						default
                    	-------------------------------------
                    	normalizeDelta				null
                    */
                    /*
                    invert mouse-wheel scrolling direction 
                    values: boolean
                    	option						default
                    	-------------------------------------
                    	invert						null
                    */
                    /*
                    the tags that disable mouse-wheel when cursor is over them
                    */
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                /* 
                scrollbar buttons
                */
                scrollButtons: {
                    /*
                    enable scrollbar buttons
                    values: boolean
                    	option						default
                    	-------------------------------------
                    	enable						null
                    */
                    /*
                    scrollbar buttons scrolling type 
                    values (string): "stepless", "stepped"
                    */
                    scrollType: "stepless",
                    /*
                    scrolling amount in pixels
                    values: "auto", integer 
                    */
                    scrollAmount: "auto"
                        /*
                        tabindex of the scrollbar buttons
                        values: false, integer
                        	option						default
                        	-------------------------------------
                        	tabindex					null
                        */
                },
                /* 
                keyboard scrolling
                */
                keyboard: {
                    /*
                    enable scrolling via keyboard
                    values: boolean
                    */
                    enable: true,
                    /*
                    keyboard scrolling type 
                    values (string): "stepless", "stepped"
                    */
                    scrollType: "stepless",
                    /*
                    scrolling amount in pixels
                    values: "auto", integer 
                    */
                    scrollAmount: "auto"
                },
                /*
                enable content touch-swipe scrolling 
                values: boolean, integer, string (number)
                integer values define the axis-specific minimum amount required for scrolling momentum
                */
                contentTouchScroll: 25,
                /*
                enable/disable document (default) touch-swipe scrolling 
                */
                documentTouchScroll: true,
                /*
                advanced option parameters
                */
                advanced: {
                    /*
                    auto-expand content horizontally (for "x" or "yx" axis) 
                    values: boolean, integer (the value 2 forces the non scrollHeight/scrollWidth method, the value 3 forces the scrollHeight/scrollWidth method)
                    	option						default
                    	-------------------------------------
                    	autoExpandHorizontalScroll	null
                    */
                    /*
                    auto-scroll to elements with focus
                    */
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    /*
                    auto-update scrollbars on content, element or viewport resize 
                    should be true for fluid layouts/elements, adding/removing content dynamically, hiding/showing elements, content with images etc. 
                    values: boolean
                    */
                    updateOnContentResize: true,
                    /*
                    auto-update scrollbars each time each image inside the element is fully loaded 
                    values: "auto", boolean
                    */
                    updateOnImageLoad: "auto",
                    /*
                    auto-update scrollbars based on the amount and size changes of specific selectors 
                    useful when you need to update the scrollbar(s) automatically, each time a type of element is added, removed or changes its size 
                    values: boolean, string (e.g. "ul li" will auto-update scrollbars each time list-items inside the element are changed) 
                    a value of true (boolean) will auto-update scrollbars each time any element is changed
                    	option						default
                    	-------------------------------------
                    	updateOnSelectorChange		null
                    */
                    /*
                    extra selectors that'll allow scrollbar dragging upon mousemove/up, pointermove/up, touchend etc. (e.g. "selector-1, selector-2")
                    	option						default
                    	-------------------------------------
                    	extraDraggableSelectors		null
                    */
                    /*
                    extra selectors that'll release scrollbar dragging upon mouseup, pointerup, touchend etc. (e.g. "selector-1, selector-2")
                    	option						default
                    	-------------------------------------
                    	releaseDraggableSelectors	null
                    */
                    /*
                    auto-update timeout 
                    values: integer (milliseconds)
                    */
                    autoUpdateTimeout: 60
                },
                /* 
                scrollbar theme 
                values: string (see CSS/plugin URI for a list of ready-to-use themes)
                */
                theme: "light",
                /*
                user defined callback functions
                */
                callbacks: {
                    /*
                    Available callbacks: 
                    	callback					default
                    	-------------------------------------
                    	onCreate					null
                    	onInit						null
                    	onScrollStart				null
                    	onScroll					null
                    	onTotalScroll				null
                    	onTotalScrollBack			null
                    	whileScrolling				null
                    	onOverflowY					null
                    	onOverflowX					null
                    	onOverflowYNone				null
                    	onOverflowXNone				null
                    	onImageLoad					null
                    	onSelectorChange			null
                    	onBeforeUpdate				null
                    	onUpdate					null
                    */
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: true
                }
                /*
                add scrollbar(s) on all elements matching the current selector, now and in the future 
                values: boolean, string 
                string values: "on" (enable), "once" (disable after first invocation), "off" (disable)
                liveSelector values: string (selector)
                	option						default
                	-------------------------------------
                	live						false
                	liveSelector				null
                */
            },





            /* 
            ----------------------------------------
            VARS, CONSTANTS 
            ----------------------------------------
            */

            totalInstances = 0,
            /* plugin instances amount */
            liveTimers = {},
            /* live option timers */
            oldIE = (window.attachEvent && !window.addEventListener) ? 1 : 0,
            /* detect IE < 9 */
            touchActive = false,
            touchable, /* global touch vars (for touch and pointer events) */
            /* general plugin classes */
            classes = [
                "mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar",
                "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer",
                "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"
            ],





            /* 
            ----------------------------------------
            METHODS 
            ----------------------------------------
            */

            methods = {

                /* 
                plugin initialization method 
                creates the scrollbar(s), plugin data object and options
                ----------------------------------------
                */

                init: function(options) {

                    var options = $.extend(true, {}, defaults, options),
                        selector = _selector.call(this); /* validate selector */

                    /* 
                    if live option is enabled, monitor for elements matching the current selector and 
                    apply scrollbar(s) when found (now and in the future) 
                    */
                    if (options.live) {
                        var liveSelector = options.liveSelector || this.selector || defaultSelector,
                            /* live selector(s) */
                            $liveSelector = $(liveSelector); /* live selector(s) as jquery object */
                        if (options.live === "off") {
                            /* 
                            disable live if requested 
                            usage: $(selector).mCustomScrollbar({live:"off"}); 
                            */
                            removeLiveTimers(liveSelector);
                            return;
                        }
                        liveTimers[liveSelector] = setTimeout(function() {
                            /* call mCustomScrollbar fn on live selector(s) every half-second */
                            $liveSelector.mCustomScrollbar(options);
                            if (options.live === "once" && $liveSelector.length) {
                                /* disable live after first invocation */
                                removeLiveTimers(liveSelector);
                            }
                        }, 500);
                    } else {
                        removeLiveTimers(liveSelector);
                    }

                    /* options backward compatibility (for versions < 3.0.0) and normalization */
                    options.setWidth = (options.set_width) ? options.set_width : options.setWidth;
                    options.setHeight = (options.set_height) ? options.set_height : options.setHeight;
                    options.axis = (options.horizontalScroll) ? "x" : _findAxis(options.axis);
                    options.scrollInertia = options.scrollInertia > 0 && options.scrollInertia < 17 ? 17 : options.scrollInertia;
                    if (typeof options.mouseWheel !== "object" && options.mouseWheel == true) { /* old school mouseWheel option (non-object) */
                        options.mouseWheel = { enable: true, scrollAmount: "auto", axis: "y", preventDefault: false, deltaFactor: "auto", normalizeDelta: false, invert: false }
                    }
                    options.mouseWheel.scrollAmount = !options.mouseWheelPixels ? options.mouseWheel.scrollAmount : options.mouseWheelPixels;
                    options.mouseWheel.normalizeDelta = !options.advanced.normalizeMouseWheelDelta ? options.mouseWheel.normalizeDelta : options.advanced.normalizeMouseWheelDelta;
                    options.scrollButtons.scrollType = _findScrollButtonsType(options.scrollButtons.scrollType);

                    _theme(options); /* theme-specific options */

                    /* plugin constructor */
                    return $(selector).each(function() {

                        var $this = $(this);

                        if (!$this.data(pluginPfx)) { /* prevent multiple instantiations */

                            /* store options and create objects in jquery data */
                            $this.data(pluginPfx, {
                                idx: ++totalInstances,
                                /* instance index */
                                opt: options,
                                /* options */
                                scrollRatio: { y: null, x: null },
                                /* scrollbar to content ratio */
                                overflowed: null,
                                /* overflowed axis */
                                contentReset: { y: null, x: null },
                                /* object to check when content resets */
                                bindEvents: false,
                                /* object to check if events are bound */
                                tweenRunning: false,
                                /* object to check if tween is running */
                                sequential: {},
                                /* sequential scrolling object */
                                langDir: $this.css("direction"),
                                /* detect/store direction (ltr or rtl) */
                                cbOffsets: null,
                                /* object to check whether callback offsets always trigger */
                                /* 
                                object to check how scrolling events where last triggered 
                                "internal" (default - triggered by this script), "external" (triggered by other scripts, e.g. via scrollTo method) 
                                usage: object.data("mCS").trigger
                                */
                                trigger: null,
                                /* 
                                object to check for changes in elements in order to call the update method automatically 
                                */
                                poll: { size: { o: 0, n: 0 }, img: { o: 0, n: 0 }, change: { o: 0, n: 0 } }
                            });

                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                /* HTML data attributes */
                                htmlDataAxis = $this.data("mcs-axis"),
                                htmlDataSbPos = $this.data("mcs-scrollbar-position"),
                                htmlDataTheme = $this.data("mcs-theme");

                            if (htmlDataAxis) { o.axis = htmlDataAxis; } /* usage example: data-mcs-axis="y" */
                            if (htmlDataSbPos) { o.scrollbarPosition = htmlDataSbPos; } /* usage example: data-mcs-scrollbar-position="outside" */
                            if (htmlDataTheme) { /* usage example: data-mcs-theme="minimal" */
                                o.theme = htmlDataTheme;
                                _theme(o); /* theme-specific options */
                            }

                            _pluginMarkup.call(this); /* add plugin markup */

                            if (d && o.callbacks.onCreate && typeof o.callbacks.onCreate === "function") { o.callbacks.onCreate.call(this); } /* callbacks: onCreate */

                            $("#mCSB_" + d.idx + "_container img:not(." + classes[2] + ")").addClass(classes[2]); /* flag loaded images */

                            methods.update.call(null, $this); /* call the update method */

                        }

                    });

                },
                /* ---------------------------------------- */



                /* 
                plugin update method 
                updates content and scrollbar(s) values, events and status 
                ----------------------------------------
                usage: $(selector).mCustomScrollbar("update");
                */

                update: function(el, cb) {

                    var selector = el || _selector.call(this); /* validate selector */

                    return $(selector).each(function() {

                        var $this = $(this);

                        if ($this.data(pluginPfx)) { /* check if plugin has initialized */

                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                mCSB_container = $("#mCSB_" + d.idx + "_container"),
                                mCustomScrollBox = $("#mCSB_" + d.idx),
                                mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];

                            if (!mCSB_container.length) { return; }

                            if (d.tweenRunning) { _stop($this); } /* stop any running tweens while updating */

                            if (cb && d && o.callbacks.onBeforeUpdate && typeof o.callbacks.onBeforeUpdate === "function") { o.callbacks.onBeforeUpdate.call(this); } /* callbacks: onBeforeUpdate */

                            /* if element was disabled or destroyed, remove class(es) */
                            if ($this.hasClass(classes[3])) { $this.removeClass(classes[3]); }
                            if ($this.hasClass(classes[4])) { $this.removeClass(classes[4]); }

                            /* css flexbox fix, detect/set max-height */
                            mCustomScrollBox.css("max-height", "none");
                            if (mCustomScrollBox.height() !== $this.height()) { mCustomScrollBox.css("max-height", $this.height()); }

                            _expandContentHorizontally.call(this); /* expand content horizontally */

                            if (o.axis !== "y" && !o.advanced.autoExpandHorizontalScroll) {
                                mCSB_container.css("width", _contentWidth(mCSB_container));
                            }

                            d.overflowed = _overflowed.call(this); /* determine if scrolling is required */

                            _scrollbarVisibility.call(this); /* show/hide scrollbar(s) */

                            /* auto-adjust scrollbar dragger length analogous to content */
                            if (o.autoDraggerLength) { _setDraggerLength.call(this); }

                            _scrollRatio.call(this); /* calculate and store scrollbar to content ratio */

                            _bindEvents.call(this); /* bind scrollbar events */

                            /* reset scrolling position and/or events */
                            var to = [Math.abs(mCSB_container[0].offsetTop), Math.abs(mCSB_container[0].offsetLeft)];
                            if (o.axis !== "x") { /* y/yx axis */
                                if (!d.overflowed[0]) { /* y scrolling is not required */
                                    _resetContentPosition.call(this); /* reset content position */
                                    if (o.axis === "y") {
                                        _unbindEvents.call(this);
                                    } else if (o.axis === "yx" && d.overflowed[1]) {
                                        _scrollTo($this, to[1].toString(), { dir: "x", dur: 0, overwrite: "none" });
                                    }
                                } else if (mCSB_dragger[0].height() > mCSB_dragger[0].parent().height()) {
                                    _resetContentPosition.call(this); /* reset content position */
                                } else { /* y scrolling is required */
                                    _scrollTo($this, to[0].toString(), { dir: "y", dur: 0, overwrite: "none" });
                                    d.contentReset.y = null;
                                }
                            }
                            if (o.axis !== "y") { /* x/yx axis */
                                if (!d.overflowed[1]) { /* x scrolling is not required */
                                    _resetContentPosition.call(this); /* reset content position */
                                    if (o.axis === "x") {
                                        _unbindEvents.call(this);
                                    } else if (o.axis === "yx" && d.overflowed[0]) {
                                        _scrollTo($this, to[0].toString(), { dir: "y", dur: 0, overwrite: "none" });
                                    }
                                } else if (mCSB_dragger[1].width() > mCSB_dragger[1].parent().width()) {
                                    _resetContentPosition.call(this); /* reset content position */
                                } else { /* x scrolling is required */
                                    _scrollTo($this, to[1].toString(), { dir: "x", dur: 0, overwrite: "none" });
                                    d.contentReset.x = null;
                                }
                            }

                            /* callbacks: onImageLoad, onSelectorChange, onUpdate */
                            if (cb && d) {
                                if (cb === 2 && o.callbacks.onImageLoad && typeof o.callbacks.onImageLoad === "function") {
                                    o.callbacks.onImageLoad.call(this);
                                } else if (cb === 3 && o.callbacks.onSelectorChange && typeof o.callbacks.onSelectorChange === "function") {
                                    o.callbacks.onSelectorChange.call(this);
                                } else if (o.callbacks.onUpdate && typeof o.callbacks.onUpdate === "function") {
                                    o.callbacks.onUpdate.call(this);
                                }
                            }

                            _autoUpdate.call(this); /* initialize automatic updating (for dynamic content, fluid layouts etc.) */

                        }

                    });

                },
                /* ---------------------------------------- */



                /* 
                plugin scrollTo method 
                triggers a scrolling event to a specific value
                ----------------------------------------
                usage: $(selector).mCustomScrollbar("scrollTo",value,options);
                */

                scrollTo: function(val, options) {

                    /* prevent silly things like $(selector).mCustomScrollbar("scrollTo",undefined); */
                    if (typeof val == "undefined" || val == null) { return; }

                    var selector = _selector.call(this); /* validate selector */

                    return $(selector).each(function() {

                        var $this = $(this);

                        if ($this.data(pluginPfx)) { /* check if plugin has initialized */

                            var d = $this.data(pluginPfx),
                                o = d.opt,
                                /* method default options */
                                methodDefaults = {
                                    trigger: "external",
                                    /* method is by default triggered externally (e.g. from other scripts) */
                                    scrollInertia: o.scrollInertia,
                                    /* scrolling inertia (animation duration) */
                                    scrollEasing: "mcsEaseInOut",
                                    /* animation easing */
                                    moveDragger: false,
                                    /* move dragger instead of content */
                                    timeout: 60,
                                    /* scroll-to delay */
                                    callbacks: true,
                                    /* enable/disable callbacks */
                                    onStart: true,
                                    onUpdate: true,
                                    onComplete: true
                                },
                                methodOptions = $.extend(true, {}, methodDefaults, options),
                                to = _arr.call(this, val),
                                dur = methodOptions.scrollInertia > 0 && methodOptions.scrollInertia < 17 ? 17 : methodOptions.scrollInertia;

                            /* translate yx values to actual scroll-to positions */
                            to[0] = _to.call(this, to[0], "y");
                            to[1] = _to.call(this, to[1], "x");

                            /* 
                            check if scroll-to value moves the dragger instead of content. 
                            Only pixel values apply on dragger (e.g. 100, "100px", "-=100" etc.) 
                            */
                            if (methodOptions.moveDragger) {
                                to[0] *= d.scrollRatio.y;
                                to[1] *= d.scrollRatio.x;
                            }

                            methodOptions.dur = _isTabHidden() ? 0 : dur; //skip animations if browser tab is hidden

                            setTimeout(function() {
                                /* do the scrolling */
                                if (to[0] !== null && typeof to[0] !== "undefined" && o.axis !== "x" && d.overflowed[0]) { /* scroll y */
                                    methodOptions.dir = "y";
                                    methodOptions.overwrite = "all";
                                    _scrollTo($this, to[0].toString(), methodOptions);
                                }
                                if (to[1] !== null && typeof to[1] !== "undefined" && o.axis !== "y" && d.overflowed[1]) { /* scroll x */
                                    methodOptions.dir = "x";
                                    methodOptions.overwrite = "none";
                                    _scrollTo($this, to[1].toString(), methodOptions);
                                }
                            }, methodOptions.timeout);

                        }

                    });

                },
                /* ---------------------------------------- */



                /*
                plugin stop method 
                stops scrolling animation
                ----------------------------------------
                usage: $(selector).mCustomScrollbar("stop");
                */
                stop: function() {

                    var selector = _selector.call(this); /* validate selector */

                    return $(selector).each(function() {

                        var $this = $(this);

                        if ($this.data(pluginPfx)) { /* check if plugin has initialized */

                            _stop($this);

                        }

                    });

                },
                /* ---------------------------------------- */



                /*
                plugin disable method 
                temporarily disables the scrollbar(s) 
                ----------------------------------------
                usage: $(selector).mCustomScrollbar("disable",reset); 
                reset (boolean): resets content position to 0 
                */
                disable: function(r) {

                    var selector = _selector.call(this); /* validate selector */

                    return $(selector).each(function() {

                        var $this = $(this);

                        if ($this.data(pluginPfx)) { /* check if plugin has initialized */

                            var d = $this.data(pluginPfx);

                            _autoUpdate.call(this, "remove"); /* remove automatic updating */

                            _unbindEvents.call(this); /* unbind events */

                            if (r) { _resetContentPosition.call(this); } /* reset content position */

                            _scrollbarVisibility.call(this, true); /* show/hide scrollbar(s) */

                            $this.addClass(classes[3]); /* add disable class */

                        }

                    });

                },
                /* ---------------------------------------- */



                /*
                plugin destroy method 
                completely removes the scrollbar(s) and returns the element to its original state
                ----------------------------------------
                usage: $(selector).mCustomScrollbar("destroy"); 
                */
                destroy: function() {

                        var selector = _selector.call(this); /* validate selector */

                        return $(selector).each(function() {

                            var $this = $(this);

                            if ($this.data(pluginPfx)) { /* check if plugin has initialized */

                                var d = $this.data(pluginPfx),
                                    o = d.opt,
                                    mCustomScrollBox = $("#mCSB_" + d.idx),
                                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                                    scrollbar = $(".mCSB_" + d.idx + "_scrollbar");

                                if (o.live) { removeLiveTimers(o.liveSelector || $(selector).selector); } /* remove live timers */

                                _autoUpdate.call(this, "remove"); /* remove automatic updating */

                                _unbindEvents.call(this); /* unbind events */

                                _resetContentPosition.call(this); /* reset content position */

                                $this.removeData(pluginPfx); /* remove plugin data object */

                                _delete(this, "mcs"); /* delete callbacks object */

                                /* remove plugin markup */
                                scrollbar.remove(); /* remove scrollbar(s) first (those can be either inside or outside plugin's inner wrapper) */
                                mCSB_container.find("img." + classes[2]).removeClass(classes[2]); /* remove loaded images flag */
                                mCustomScrollBox.replaceWith(mCSB_container.contents()); /* replace plugin's inner wrapper with the original content */
                                /* remove plugin classes from the element and add destroy class */
                                $this.removeClass(pluginNS + " _" + pluginPfx + "_" + d.idx + " " + classes[6] + " " + classes[7] + " " + classes[5] + " " + classes[3]).addClass(classes[4]);

                            }

                        });

                    }
                    /* ---------------------------------------- */

            },





            /* 
            ----------------------------------------
            FUNCTIONS
            ----------------------------------------
            */

            /* validates selector (if selector is invalid or undefined uses the default one) */
            _selector = function() {
                return (typeof $(this) !== "object" || $(this).length < 1) ? defaultSelector : this;
            },
            /* -------------------- */


            /* changes options according to theme */
            _theme = function(obj) {
                var fixedSizeScrollbarThemes = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    nonExpandedScrollbarThemes = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    disabledScrollButtonsThemes = ["minimal", "minimal-dark"],
                    enabledAutoHideScrollbarThemes = ["minimal", "minimal-dark"],
                    scrollbarPositionOutsideThemes = ["minimal", "minimal-dark"];
                obj.autoDraggerLength = $.inArray(obj.theme, fixedSizeScrollbarThemes) > -1 ? false : obj.autoDraggerLength;
                obj.autoExpandScrollbar = $.inArray(obj.theme, nonExpandedScrollbarThemes) > -1 ? false : obj.autoExpandScrollbar;
                obj.scrollButtons.enable = $.inArray(obj.theme, disabledScrollButtonsThemes) > -1 ? false : obj.scrollButtons.enable;
                obj.autoHideScrollbar = $.inArray(obj.theme, enabledAutoHideScrollbarThemes) > -1 ? true : obj.autoHideScrollbar;
                obj.scrollbarPosition = $.inArray(obj.theme, scrollbarPositionOutsideThemes) > -1 ? "outside" : obj.scrollbarPosition;
            },
            /* -------------------- */


            /* live option timers removal */
            removeLiveTimers = function(selector) {
                if (liveTimers[selector]) {
                    clearTimeout(liveTimers[selector]);
                    _delete(liveTimers, selector);
                }
            },
            /* -------------------- */


            /* normalizes axis option to valid values: "y", "x", "yx" */
            _findAxis = function(val) {
                return (val === "yx" || val === "xy" || val === "auto") ? "yx" : (val === "x" || val === "horizontal") ? "x" : "y";
            },
            /* -------------------- */


            /* normalizes scrollButtons.scrollType option to valid values: "stepless", "stepped" */
            _findScrollButtonsType = function(val) {
                return (val === "stepped" || val === "pixels" || val === "step" || val === "click") ? "stepped" : "stepless";
            },
            /* -------------------- */


            /* generates plugin markup */
            _pluginMarkup = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    expandClass = o.autoExpandScrollbar ? " " + classes[1] + "_expand" : "",
                    scrollbar = ["<div id='mCSB_" + d.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + d.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + expandClass + "'><div class='" + classes[12] + "'><div id='mCSB_" + d.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + d.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + d.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + expandClass + "'><div class='" + classes[12] + "'><div id='mCSB_" + d.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    wrapperClass = o.axis === "yx" ? "mCSB_vertical_horizontal" : o.axis === "x" ? "mCSB_horizontal" : "mCSB_vertical",
                    scrollbars = o.axis === "yx" ? scrollbar[0] + scrollbar[1] : o.axis === "x" ? scrollbar[1] : scrollbar[0],
                    contentWrapper = o.axis === "yx" ? "<div id='mCSB_" + d.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    autoHideClass = o.autoHideScrollbar ? " " + classes[6] : "",
                    scrollbarDirClass = (o.axis !== "x" && d.langDir === "rtl") ? " " + classes[7] : "";
                if (o.setWidth) { $this.css("width", o.setWidth); } /* set element width */
                if (o.setHeight) { $this.css("height", o.setHeight); } /* set element height */
                o.setLeft = (o.axis !== "y" && d.langDir === "rtl") ? "989999px" : o.setLeft; /* adjust left position for rtl direction */
                $this.addClass(pluginNS + " _" + pluginPfx + "_" + d.idx + autoHideClass + scrollbarDirClass).wrapInner("<div id='mCSB_" + d.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + wrapperClass + "'><div id='mCSB_" + d.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + d.langDir + "' /></div>");
                var mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (o.axis !== "y" && !o.advanced.autoExpandHorizontalScroll) {
                    mCSB_container.css("width", _contentWidth(mCSB_container));
                }
                if (o.scrollbarPosition === "outside") {
                    if ($this.css("position") === "static") { /* requires elements with non-static position */
                        $this.css("position", "relative");
                    }
                    $this.css("overflow", "visible");
                    mCustomScrollBox.addClass("mCSB_outside").after(scrollbars);
                } else {
                    mCustomScrollBox.addClass("mCSB_inside").append(scrollbars);
                    mCSB_container.wrap(contentWrapper);
                }
                _scrollButtons.call(this); /* add scrollbar buttons */
                /* minimum dragger length */
                var mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
                mCSB_dragger[0].css("min-height", mCSB_dragger[0].height());
                mCSB_dragger[1].css("min-width", mCSB_dragger[1].width());
            },
            /* -------------------- */


            /* calculates content width */
            _contentWidth = function(el) {
                var val = [el[0].scrollWidth, Math.max.apply(Math, el.children().map(function() { return $(this).outerWidth(true); }).get())],
                    w = el.parent().width();
                return val[0] > w ? val[0] : val[1] > w ? val[1] : "100%";
            },
            /* -------------------- */


            /* expands content horizontally */
            _expandContentHorizontally = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (o.advanced.autoExpandHorizontalScroll && o.axis !== "y") {
                    /* calculate scrollWidth */
                    mCSB_container.css({ "width": "auto", "min-width": 0, "overflow-x": "scroll" });
                    var w = Math.ceil(mCSB_container[0].scrollWidth);
                    if (o.advanced.autoExpandHorizontalScroll === 3 || (o.advanced.autoExpandHorizontalScroll !== 2 && w > mCSB_container.parent().width())) {
                        mCSB_container.css({ "width": w, "min-width": "100%", "overflow-x": "inherit" });
                    } else {
                        /* 
                        wrap content with an infinite width div and set its position to absolute and width to auto. 
                        Setting width to auto before calculating the actual width is important! 
                        We must let the browser set the width as browser zoom values are impossible to calculate.
                        */
                        mCSB_container.css({ "overflow-x": "inherit", "position": "absolute" })
                            .wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
                            .css({ /* set actual width, original position and un-wrap */
                                /* 
                                get the exact width (with decimals) and then round-up. 
                                Using jquery outerWidth() will round the width value which will mess up with inner elements that have non-integer width
                                */
                                "width": (Math.ceil(mCSB_container[0].getBoundingClientRect().right + 0.4) - Math.floor(mCSB_container[0].getBoundingClientRect().left)),
                                "min-width": "100%",
                                "position": "relative"
                            }).unwrap();
                    }
                }
            },
            /* -------------------- */


            /* adds scrollbar buttons */
            _scrollButtons = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_scrollTools = $(".mCSB_" + d.idx + "_scrollbar:first"),
                    tabindex = !_isNumeric(o.scrollButtons.tabindex) ? "" : "tabindex='" + o.scrollButtons.tabindex + "'",
                    btnHTML = [
                        "<a href='#' class='" + classes[13] + "' " + tabindex + " />",
                        "<a href='#' class='" + classes[14] + "' " + tabindex + " />",
                        "<a href='#' class='" + classes[15] + "' " + tabindex + " />",
                        "<a href='#' class='" + classes[16] + "' " + tabindex + " />"
                    ],
                    btn = [(o.axis === "x" ? btnHTML[2] : btnHTML[0]), (o.axis === "x" ? btnHTML[3] : btnHTML[1]), btnHTML[2], btnHTML[3]];
                if (o.scrollButtons.enable) {
                    mCSB_scrollTools.prepend(btn[0]).append(btn[1]).next(".mCSB_scrollTools").prepend(btn[2]).append(btn[3]);
                }
            },
            /* -------------------- */


            /* auto-adjusts scrollbar dragger length */
            _setDraggerLength = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    ratio = [mCustomScrollBox.height() / mCSB_container.outerHeight(false), mCustomScrollBox.width() / mCSB_container.outerWidth(false)],
                    l = [
                        parseInt(mCSB_dragger[0].css("min-height")), Math.round(ratio[0] * mCSB_dragger[0].parent().height()),
                        parseInt(mCSB_dragger[1].css("min-width")), Math.round(ratio[1] * mCSB_dragger[1].parent().width())
                    ],
                    h = oldIE && (l[1] < l[0]) ? l[0] : l[1],
                    w = oldIE && (l[3] < l[2]) ? l[2] : l[3];
                mCSB_dragger[0].css({
                    "height": h,
                    "max-height": (mCSB_dragger[0].parent().height() - 10)
                }).find(".mCSB_dragger_bar").css({ "line-height": l[0] + "px" });
                mCSB_dragger[1].css({
                    "width": w,
                    "max-width": (mCSB_dragger[1].parent().width() - 10)
                });
            },
            /* -------------------- */


            /* calculates scrollbar to content ratio */
            _scrollRatio = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    scrollAmount = [mCSB_container.outerHeight(false) - mCustomScrollBox.height(), mCSB_container.outerWidth(false) - mCustomScrollBox.width()],
                    ratio = [
                        scrollAmount[0] / (mCSB_dragger[0].parent().height() - mCSB_dragger[0].height()),
                        scrollAmount[1] / (mCSB_dragger[1].parent().width() - mCSB_dragger[1].width())
                    ];
                d.scrollRatio = { y: ratio[0], x: ratio[1] };
            },
            /* -------------------- */


            /* toggles scrolling classes */
            _onDragClasses = function(el, action, xpnd) {
                var expandClass = xpnd ? classes[0] + "_expanded" : "",
                    scrollbar = el.closest(".mCSB_scrollTools");
                if (action === "active") {
                    el.toggleClass(classes[0] + " " + expandClass);
                    scrollbar.toggleClass(classes[1]);
                    el[0]._draggable = el[0]._draggable ? 0 : 1;
                } else {
                    if (!el[0]._draggable) {
                        if (action === "hide") {
                            el.removeClass(classes[0]);
                            scrollbar.removeClass(classes[1]);
                        } else {
                            el.addClass(classes[0]);
                            scrollbar.addClass(classes[1]);
                        }
                    }
                }
            },
            /* -------------------- */


            /* checks if content overflows its container to determine if scrolling is required */
            _overflowed = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    contentHeight = d.overflowed == null ? mCSB_container.height() : mCSB_container.outerHeight(false),
                    contentWidth = d.overflowed == null ? mCSB_container.width() : mCSB_container.outerWidth(false),
                    h = mCSB_container[0].scrollHeight,
                    w = mCSB_container[0].scrollWidth;
                if (h > contentHeight) { contentHeight = h; }
                if (w > contentWidth) { contentWidth = w; }
                return [contentHeight > mCustomScrollBox.height(), contentWidth > mCustomScrollBox.width()];
            },
            /* -------------------- */


            /* resets content position to 0 */
            _resetContentPosition = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")];
                _stop($this); /* stop any current scrolling before resetting */
                if ((o.axis !== "x" && !d.overflowed[0]) || (o.axis === "y" && d.overflowed[0])) { /* reset y */
                    mCSB_dragger[0].add(mCSB_container).css("top", 0);
                    _scrollTo($this, "_resetY");
                }
                if ((o.axis !== "y" && !d.overflowed[1]) || (o.axis === "x" && d.overflowed[1])) { /* reset x */
                    var cx = dx = 0;
                    if (d.langDir === "rtl") { /* adjust left position for rtl direction */
                        cx = mCustomScrollBox.width() - mCSB_container.outerWidth(false);
                        dx = Math.abs(cx / d.scrollRatio.x);
                    }
                    mCSB_container.css("left", cx);
                    mCSB_dragger[1].css("left", dx);
                    _scrollTo($this, "_resetX");
                }
            },
            /* -------------------- */


            /* binds scrollbar events */
            _bindEvents = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt;
                if (!d.bindEvents) { /* check if events are already bound */
                    _draggable.call(this);
                    if (o.contentTouchScroll) { _contentDraggable.call(this); }
                    _selectable.call(this);
                    if (o.mouseWheel.enable) { /* bind mousewheel fn when plugin is available */
                        function _mwt() {
                            mousewheelTimeout = setTimeout(function() {
                                if (!$.event.special.mousewheel) {
                                    _mwt();
                                } else {
                                    clearTimeout(mousewheelTimeout);
                                    _mousewheel.call($this[0]);
                                }
                            }, 100);
                        }
                        var mousewheelTimeout;
                        _mwt();
                    }
                    _draggerRail.call(this);
                    _wrapperScroll.call(this);
                    if (o.advanced.autoScrollOnFocus) { _focus.call(this); }
                    if (o.scrollButtons.enable) { _buttons.call(this); }
                    if (o.keyboard.enable) { _keyboard.call(this); }
                    d.bindEvents = true;
                }
            },
            /* -------------------- */


            /* unbinds scrollbar events */
            _unbindEvents = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    sb = ".mCSB_" + d.idx + "_scrollbar",
                    sel = $("#mCSB_" + d.idx + ",#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper," + sb + " ." + classes[12] + ",#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal," + sb + ">a"),
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (o.advanced.releaseDraggableSelectors) { sel.add($(o.advanced.releaseDraggableSelectors)); }
                if (o.advanced.extraDraggableSelectors) { sel.add($(o.advanced.extraDraggableSelectors)); }
                if (d.bindEvents) { /* check if events are bound */
                    /* unbind namespaced events from document/selectors */
                    $(document).add($(!_canAccessIFrame() || top.document)).unbind("." + namespace);
                    sel.each(function() {
                        $(this).unbind("." + namespace);
                    });
                    /* clear and delete timeouts/objects */
                    clearTimeout($this[0]._focusTimeout);
                    _delete($this[0], "_focusTimeout");
                    clearTimeout(d.sequential.step);
                    _delete(d.sequential, "step");
                    clearTimeout(mCSB_container[0].onCompleteTimeout);
                    _delete(mCSB_container[0], "onCompleteTimeout");
                    d.bindEvents = false;
                }
            },
            /* -------------------- */


            /* toggles scrollbar visibility */
            _scrollbarVisibility = function(disabled) {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    contentWrapper = $("#mCSB_" + d.idx + "_container_wrapper"),
                    content = contentWrapper.length ? contentWrapper : $("#mCSB_" + d.idx + "_container"),
                    scrollbar = [$("#mCSB_" + d.idx + "_scrollbar_vertical"), $("#mCSB_" + d.idx + "_scrollbar_horizontal")],
                    mCSB_dragger = [scrollbar[0].find(".mCSB_dragger"), scrollbar[1].find(".mCSB_dragger")];
                if (o.axis !== "x") {
                    if (d.overflowed[0] && !disabled) {
                        scrollbar[0].add(mCSB_dragger[0]).add(scrollbar[0].children("a")).css("display", "block");
                        content.removeClass(classes[8] + " " + classes[10]);
                    } else {
                        if (o.alwaysShowScrollbar) {
                            if (o.alwaysShowScrollbar !== 2) { mCSB_dragger[0].css("display", "none"); }
                            content.removeClass(classes[10]);
                        } else {
                            scrollbar[0].css("display", "none");
                            content.addClass(classes[10]);
                        }
                        content.addClass(classes[8]);
                    }
                }
                if (o.axis !== "y") {
                    if (d.overflowed[1] && !disabled) {
                        scrollbar[1].add(mCSB_dragger[1]).add(scrollbar[1].children("a")).css("display", "block");
                        content.removeClass(classes[9] + " " + classes[11]);
                    } else {
                        if (o.alwaysShowScrollbar) {
                            if (o.alwaysShowScrollbar !== 2) { mCSB_dragger[1].css("display", "none"); }
                            content.removeClass(classes[11]);
                        } else {
                            scrollbar[1].css("display", "none");
                            content.addClass(classes[11]);
                        }
                        content.addClass(classes[9]);
                    }
                }
                if (!d.overflowed[0] && !d.overflowed[1]) {
                    $this.addClass(classes[5]);
                } else {
                    $this.removeClass(classes[5]);
                }
            },
            /* -------------------- */


            /* returns input coordinates of pointer, touch and mouse events (relative to document) */
            _coordinates = function(e) {
                var t = e.type,
                    o = e.target.ownerDocument !== document && frameElement !== null ? [$(frameElement).offset().top, $(frameElement).offset().left] : null,
                    io = _canAccessIFrame() && e.target.ownerDocument !== top.document && frameElement !== null ? [$(e.view.frameElement).offset().top, $(e.view.frameElement).offset().left] : [0, 0];
                switch (t) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return o ? [e.originalEvent.pageY - o[0] + io[0], e.originalEvent.pageX - o[1] + io[1], false] : [e.originalEvent.pageY, e.originalEvent.pageX, false];
                        break;
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                            touches = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document ? [touch.screenY, touch.screenX, touches > 1] : [touch.pageY, touch.pageX, touches > 1];
                        break;
                    default:
                        return o ? [e.pageY - o[0] + io[0], e.pageX - o[1] + io[1], false] : [e.pageY, e.pageX, false];
                }
            },
            /* -------------------- */


            /* 
            SCROLLBAR DRAG EVENTS
            scrolls content via scrollbar dragging 
            */
            _draggable = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    draggerId = ["mCSB_" + d.idx + "_dragger_vertical", "mCSB_" + d.idx + "_dragger_horizontal"],
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = $("#" + draggerId[0] + ",#" + draggerId[1]),
                    draggable, dragY, dragX,
                    rds = o.advanced.releaseDraggableSelectors ? mCSB_dragger.add($(o.advanced.releaseDraggableSelectors)) : mCSB_dragger,
                    eds = o.advanced.extraDraggableSelectors ? $(!_canAccessIFrame() || top.document).add($(o.advanced.extraDraggableSelectors)) : $(!_canAccessIFrame() || top.document);
                mCSB_dragger.bind("contextmenu." + namespace, function(e) {
                    e.preventDefault(); //prevent right click
                }).bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function(e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    if (!_mouseBtnLeft(e)) { return; } /* left mouse button only */
                    touchActive = true;
                    if (oldIE) { document.onselectstart = function() { return false; } } /* disable text selection for IE < 9 */
                    _iframe.call(mCSB_container, false); /* enable scrollbar dragging over iframes by disabling their events */
                    _stop($this);
                    draggable = $(this);
                    var offset = draggable.offset(),
                        y = _coordinates(e)[0] - offset.top,
                        x = _coordinates(e)[1] - offset.left,
                        h = draggable.height() + offset.top,
                        w = draggable.width() + offset.left;
                    if (y < h && y > 0 && x < w && x > 0) {
                        dragY = y;
                        dragX = x;
                    }
                    _onDragClasses(draggable, "active", o.autoExpandScrollbar);
                }).bind("touchmove." + namespace, function(e) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    var offset = draggable.offset(),
                        y = _coordinates(e)[0] - offset.top,
                        x = _coordinates(e)[1] - offset.left;
                    _drag(dragY, dragX, y, x);
                });
                $(document).add(eds).bind("mousemove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, function(e) {
                    if (draggable) {
                        var offset = draggable.offset(),
                            y = _coordinates(e)[0] - offset.top,
                            x = _coordinates(e)[1] - offset.left;
                        if (dragY === y && dragX === x) { return; } /* has it really moved? */
                        _drag(dragY, dragX, y, x);
                    }
                }).add(rds).bind("mouseup." + namespace + " touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function(e) {
                    if (draggable) {
                        _onDragClasses(draggable, "active", o.autoExpandScrollbar);
                        draggable = null;
                    }
                    touchActive = false;
                    if (oldIE) { document.onselectstart = null; } /* enable text selection for IE < 9 */
                    _iframe.call(mCSB_container, true); /* enable iframes events */
                });

                function _drag(dragY, dragX, y, x) {
                    mCSB_container[0].idleTimer = o.scrollInertia < 233 ? 250 : 0;
                    if (draggable.attr("id") === draggerId[1]) {
                        var dir = "x",
                            to = ((draggable[0].offsetLeft - dragX) + x) * d.scrollRatio.x;
                    } else {
                        var dir = "y",
                            to = ((draggable[0].offsetTop - dragY) + y) * d.scrollRatio.y;
                    }
                    _scrollTo($this, to.toString(), { dir: dir, drag: true });
                }
            },
            /* -------------------- */


            /* 
            TOUCH SWIPE EVENTS
            scrolls content via touch swipe 
            Emulates the native touch-swipe scrolling with momentum found in iOS, Android and WP devices 
            */
            _contentDraggable = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    draggable, dragY, dragX, touchStartY, touchStartX, touchMoveY = [],
                    touchMoveX = [],
                    startTime, runningTime, endTime, distance, speed, amount,
                    durA = 0,
                    durB, overwrite = o.axis === "yx" ? "none" : "all",
                    touchIntent = [],
                    touchDrag, docDrag,
                    iframe = mCSB_container.find("iframe"),
                    events = [
                        "touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, //start
                        "touchmove." + namespace + " pointermove." + namespace + " MSPointerMove." + namespace, //move
                        "touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace //end
                    ],
                    touchAction = document.body.style.touchAction !== undefined && document.body.style.touchAction !== "";
                mCSB_container.bind(events[0], function(e) {
                    _onTouchstart(e);
                }).bind(events[1], function(e) {
                    _onTouchmove(e);
                });
                mCustomScrollBox.bind(events[0], function(e) {
                    _onTouchstart2(e);
                }).bind(events[2], function(e) {
                    _onTouchend(e);
                });
                if (iframe.length) {
                    iframe.each(function() {
                        $(this).bind("load", function() {
                            /* bind events on accessible iframes */
                            if (_canAccessIFrame(this)) {
                                $(this.contentDocument || this.contentWindow.document).bind(events[0], function(e) {
                                    _onTouchstart(e);
                                    _onTouchstart2(e);
                                }).bind(events[1], function(e) {
                                    _onTouchmove(e);
                                }).bind(events[2], function(e) {
                                    _onTouchend(e);
                                });
                            }
                        });
                    });
                }

                function _onTouchstart(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) { touchable = 0; return; }
                    touchable = 1;
                    touchDrag = 0;
                    docDrag = 0;
                    draggable = 1;
                    $this.removeClass("mCS_touch_action");
                    var offset = mCSB_container.offset();
                    dragY = _coordinates(e)[0] - offset.top;
                    dragX = _coordinates(e)[1] - offset.left;
                    touchIntent = [_coordinates(e)[0], _coordinates(e)[1]];
                }

                function _onTouchmove(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) { return; }
                    if (!o.documentTouchScroll) { e.preventDefault(); }
                    e.stopImmediatePropagation();
                    if (docDrag && !touchDrag) { return; }
                    if (draggable) {
                        runningTime = _getTime();
                        var offset = mCustomScrollBox.offset(),
                            y = _coordinates(e)[0] - offset.top,
                            x = _coordinates(e)[1] - offset.left,
                            easing = "mcsLinearOut";
                        touchMoveY.push(y);
                        touchMoveX.push(x);
                        touchIntent[2] = Math.abs(_coordinates(e)[0] - touchIntent[0]);
                        touchIntent[3] = Math.abs(_coordinates(e)[1] - touchIntent[1]);
                        if (d.overflowed[0]) {
                            var limit = mCSB_dragger[0].parent().height() - mCSB_dragger[0].height(),
                                prevent = ((dragY - y) > 0 && (y - dragY) > -(limit * d.scrollRatio.y) && (touchIntent[3] * 2 < touchIntent[2] || o.axis === "yx"));
                        }
                        if (d.overflowed[1]) {
                            var limitX = mCSB_dragger[1].parent().width() - mCSB_dragger[1].width(),
                                preventX = ((dragX - x) > 0 && (x - dragX) > -(limitX * d.scrollRatio.x) && (touchIntent[2] * 2 < touchIntent[3] || o.axis === "yx"));
                        }
                        if (prevent || preventX) { /* prevent native document scrolling */
                            if (!touchAction) { e.preventDefault(); }
                            touchDrag = 1;
                        } else {
                            docDrag = 1;
                            $this.addClass("mCS_touch_action");
                        }
                        if (touchAction) { e.preventDefault(); }
                        amount = o.axis === "yx" ? [(dragY - y), (dragX - x)] : o.axis === "x" ? [null, (dragX - x)] : [(dragY - y), null];
                        mCSB_container[0].idleTimer = 250;
                        if (d.overflowed[0]) { _drag(amount[0], durA, easing, "y", "all", true); }
                        if (d.overflowed[1]) { _drag(amount[1], durA, easing, "x", overwrite, true); }
                    }
                }

                function _onTouchstart2(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) { touchable = 0; return; }
                    touchable = 1;
                    e.stopImmediatePropagation();
                    _stop($this);
                    startTime = _getTime();
                    var offset = mCustomScrollBox.offset();
                    touchStartY = _coordinates(e)[0] - offset.top;
                    touchStartX = _coordinates(e)[1] - offset.left;
                    touchMoveY = [];
                    touchMoveX = [];
                }

                function _onTouchend(e) {
                    if (!_pointerTouch(e) || touchActive || _coordinates(e)[2]) { return; }
                    draggable = 0;
                    e.stopImmediatePropagation();
                    touchDrag = 0;
                    docDrag = 0;
                    endTime = _getTime();
                    var offset = mCustomScrollBox.offset(),
                        y = _coordinates(e)[0] - offset.top,
                        x = _coordinates(e)[1] - offset.left;
                    if ((endTime - runningTime) > 30) { return; }
                    speed = 1000 / (endTime - startTime);
                    var easing = "mcsEaseOut",
                        slow = speed < 2.5,
                        diff = slow ? [touchMoveY[touchMoveY.length - 2], touchMoveX[touchMoveX.length - 2]] : [0, 0];
                    distance = slow ? [(y - diff[0]), (x - diff[1])] : [y - touchStartY, x - touchStartX];
                    var absDistance = [Math.abs(distance[0]), Math.abs(distance[1])];
                    speed = slow ? [Math.abs(distance[0] / 4), Math.abs(distance[1] / 4)] : [speed, speed];
                    var a = [
                        Math.abs(mCSB_container[0].offsetTop) - (distance[0] * _m((absDistance[0] / speed[0]), speed[0])),
                        Math.abs(mCSB_container[0].offsetLeft) - (distance[1] * _m((absDistance[1] / speed[1]), speed[1]))
                    ];
                    amount = o.axis === "yx" ? [a[0], a[1]] : o.axis === "x" ? [null, a[1]] : [a[0], null];
                    durB = [(absDistance[0] * 4) + o.scrollInertia, (absDistance[1] * 4) + o.scrollInertia];
                    var md = parseInt(o.contentTouchScroll) || 0; /* absolute minimum distance required */
                    amount[0] = absDistance[0] > md ? amount[0] : 0;
                    amount[1] = absDistance[1] > md ? amount[1] : 0;
                    if (d.overflowed[0]) { _drag(amount[0], durB[0], easing, "y", overwrite, false); }
                    if (d.overflowed[1]) { _drag(amount[1], durB[1], easing, "x", overwrite, false); }
                }

                function _m(ds, s) {
                    var r = [s * 1.5, s * 2, s / 1.5, s / 2];
                    if (ds > 90) {
                        return s > 4 ? r[0] : r[3];
                    } else if (ds > 60) {
                        return s > 3 ? r[3] : r[2];
                    } else if (ds > 30) {
                        return s > 8 ? r[1] : s > 6 ? r[0] : s > 4 ? s : r[2];
                    } else {
                        return s > 8 ? s : r[3];
                    }
                }

                function _drag(amount, dur, easing, dir, overwrite, drag) {
                    if (!amount) { return; }
                    _scrollTo($this, amount.toString(), { dur: dur, scrollEasing: easing, dir: dir, overwrite: overwrite, drag: drag });
                }
            },
            /* -------------------- */


            /* 
            SELECT TEXT EVENTS 
            scrolls content when text is selected 
            */
            _selectable = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    namespace = pluginPfx + "_" + d.idx,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    action;
                mCSB_container.bind("mousedown." + namespace, function(e) {
                    if (touchable) { return; }
                    if (!action) { action = 1;
                        touchActive = true; }
                }).add(document).bind("mousemove." + namespace, function(e) {
                    if (!touchable && action && _sel()) {
                        var offset = mCSB_container.offset(),
                            y = _coordinates(e)[0] - offset.top + mCSB_container[0].offsetTop,
                            x = _coordinates(e)[1] - offset.left + mCSB_container[0].offsetLeft;
                        if (y > 0 && y < wrapper.height() && x > 0 && x < wrapper.width()) {
                            if (seq.step) { _seq("off", null, "stepped"); }
                        } else {
                            if (o.axis !== "x" && d.overflowed[0]) {
                                if (y < 0) {
                                    _seq("on", 38);
                                } else if (y > wrapper.height()) {
                                    _seq("on", 40);
                                }
                            }
                            if (o.axis !== "y" && d.overflowed[1]) {
                                if (x < 0) {
                                    _seq("on", 37);
                                } else if (x > wrapper.width()) {
                                    _seq("on", 39);
                                }
                            }
                        }
                    }
                }).bind("mouseup." + namespace + " dragend." + namespace, function(e) {
                    if (touchable) { return; }
                    if (action) { action = 0;
                        _seq("off", null); }
                    touchActive = false;
                });

                function _sel() {
                    return window.getSelection ? window.getSelection().toString() :
                        document.selection && document.selection.type != "Control" ? document.selection.createRange().text : 0;
                }

                function _seq(a, c, s) {
                    seq.type = s && action ? "stepped" : "stepless";
                    seq.scrollAmount = 10;
                    _sequentialScroll($this, a, c, "mcsLinearOut", s ? 60 : null);
                }
            },
            /* -------------------- */


            /* 
            MOUSE WHEEL EVENT
            scrolls content via mouse-wheel 
            via mouse-wheel plugin (https://github.com/brandonaaron/jquery-mousewheel)
            */
            _mousewheel = function() {
                if (!$(this).data(pluginPfx)) { return; } /* Check if the scrollbar is ready to use mousewheel events (issue: #185) */
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_dragger = [$("#mCSB_" + d.idx + "_dragger_vertical"), $("#mCSB_" + d.idx + "_dragger_horizontal")],
                    iframe = $("#mCSB_" + d.idx + "_container").find("iframe");
                if (iframe.length) {
                    iframe.each(function() {
                        $(this).bind("load", function() {
                            /* bind events on accessible iframes */
                            if (_canAccessIFrame(this)) {
                                $(this.contentDocument || this.contentWindow.document).bind("mousewheel." + namespace, function(e, delta) {
                                    _onMousewheel(e, delta);
                                });
                            }
                        });
                    });
                }
                mCustomScrollBox.bind("mousewheel." + namespace, function(e, delta) {
                    _onMousewheel(e, delta);
                });

                function _onMousewheel(e, delta) {
                    _stop($this);
                    if (_disableMousewheel($this, e.target)) { return; } /* disables mouse-wheel when hovering specific elements */
                    var deltaFactor = o.mouseWheel.deltaFactor !== "auto" ? parseInt(o.mouseWheel.deltaFactor) : (oldIE && e.deltaFactor < 100) ? 100 : e.deltaFactor || 100,
                        dur = o.scrollInertia;
                    if (o.axis === "x" || o.mouseWheel.axis === "x") {
                        var dir = "x",
                            px = [Math.round(deltaFactor * d.scrollRatio.x), parseInt(o.mouseWheel.scrollAmount)],
                            amount = o.mouseWheel.scrollAmount !== "auto" ? px[1] : px[0] >= mCustomScrollBox.width() ? mCustomScrollBox.width() * 0.9 : px[0],
                            contentPos = Math.abs($("#mCSB_" + d.idx + "_container")[0].offsetLeft),
                            draggerPos = mCSB_dragger[1][0].offsetLeft,
                            limit = mCSB_dragger[1].parent().width() - mCSB_dragger[1].width(),
                            dlt = o.mouseWheel.axis === "y" ? (e.deltaY || delta) : e.deltaX;
                    } else {
                        var dir = "y",
                            px = [Math.round(deltaFactor * d.scrollRatio.y), parseInt(o.mouseWheel.scrollAmount)],
                            amount = o.mouseWheel.scrollAmount !== "auto" ? px[1] : px[0] >= mCustomScrollBox.height() ? mCustomScrollBox.height() * 0.9 : px[0],
                            contentPos = Math.abs($("#mCSB_" + d.idx + "_container")[0].offsetTop),
                            draggerPos = mCSB_dragger[0][0].offsetTop,
                            limit = mCSB_dragger[0].parent().height() - mCSB_dragger[0].height(),
                            dlt = e.deltaY || delta;
                    }
                    if ((dir === "y" && !d.overflowed[0]) || (dir === "x" && !d.overflowed[1])) { return; }
                    if (o.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) { dlt = -dlt; }
                    if (o.mouseWheel.normalizeDelta) { dlt = dlt < 0 ? -1 : 1; }
                    if ((dlt > 0 && draggerPos !== 0) || (dlt < 0 && draggerPos !== limit) || o.mouseWheel.preventDefault) {
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                    if (e.deltaFactor < 5 && !o.mouseWheel.normalizeDelta) {
                        //very low deltaFactor values mean some kind of delta acceleration (e.g. osx trackpad), so adjusting scrolling accordingly
                        amount = e.deltaFactor;
                        dur = 17;
                    }
                    _scrollTo($this, (contentPos - (dlt * amount)).toString(), { dir: dir, dur: dur });
                }
            },
            /* -------------------- */


            /* checks if iframe can be accessed */
            _canAccessIFrameCache = new Object(),
            _canAccessIFrame = function(iframe) {
                var result = false,
                    cacheKey = false,
                    html = null;
                if (iframe === undefined) {
                    cacheKey = "#empty";
                } else if ($(iframe).attr("id") !== undefined) {
                    cacheKey = $(iframe).attr("id");
                }
                if (cacheKey !== false && _canAccessIFrameCache[cacheKey] !== undefined) {
                    return _canAccessIFrameCache[cacheKey];
                }
                if (!iframe) {
                    try {
                        var doc = top.document;
                        html = doc.body.innerHTML;
                    } catch (err) { /* do nothing */ }
                    result = (html !== null);
                } else {
                    try {
                        var doc = iframe.contentDocument || iframe.contentWindow.document;
                        html = doc.body.innerHTML;
                    } catch (err) { /* do nothing */ }
                    result = (html !== null);
                }
                if (cacheKey !== false) { _canAccessIFrameCache[cacheKey] = result; }
                return result;
            },
            /* -------------------- */


            /* switches iframe's pointer-events property (drag, mousewheel etc. over cross-domain iframes) */
            _iframe = function(evt) {
                var el = this.find("iframe");
                if (!el.length) { return; } /* check if content contains iframes */
                var val = !evt ? "none" : "auto";
                el.css("pointer-events", val); /* for IE11, iframe's display property should not be "block" */
            },
            /* -------------------- */


            /* disables mouse-wheel when hovering specific elements like select, datalist etc. */
            _disableMousewheel = function(el, target) {
                var tag = target.nodeName.toLowerCase(),
                    tags = el.data(pluginPfx).opt.mouseWheel.disableOver,
                    /* elements that require focus */
                    focusTags = ["select", "textarea"];
                return $.inArray(tag, tags) > -1 && !($.inArray(tag, focusTags) > -1 && !$(target).is(":focus"));
            },
            /* -------------------- */


            /* 
            DRAGGER RAIL CLICK EVENT
            scrolls content via dragger rail 
            */
            _draggerRail = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    namespace = pluginPfx + "_" + d.idx,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    mCSB_draggerContainer = $(".mCSB_" + d.idx + "_scrollbar ." + classes[12]),
                    clickable;
                mCSB_draggerContainer.bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace, function(e) {
                    touchActive = true;
                    if (!$(e.target).hasClass("mCSB_dragger")) { clickable = 1; }
                }).bind("touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace, function(e) {
                    touchActive = false;
                }).bind("click." + namespace, function(e) {
                    if (!clickable) { return; }
                    clickable = 0;
                    if ($(e.target).hasClass(classes[12]) || $(e.target).hasClass("mCSB_draggerRail")) {
                        _stop($this);
                        var el = $(this),
                            mCSB_dragger = el.find(".mCSB_dragger");
                        if (el.parent(".mCSB_scrollTools_horizontal").length > 0) {
                            if (!d.overflowed[1]) { return; }
                            var dir = "x",
                                clickDir = e.pageX > mCSB_dragger.offset().left ? -1 : 1,
                                to = Math.abs(mCSB_container[0].offsetLeft) - (clickDir * (wrapper.width() * 0.9));
                        } else {
                            if (!d.overflowed[0]) { return; }
                            var dir = "y",
                                clickDir = e.pageY > mCSB_dragger.offset().top ? -1 : 1,
                                to = Math.abs(mCSB_container[0].offsetTop) - (clickDir * (wrapper.height() * 0.9));
                        }
                        _scrollTo($this, to.toString(), { dir: dir, scrollEasing: "mcsEaseInOut" });
                    }
                });
            },
            /* -------------------- */


            /* 
            FOCUS EVENT
            scrolls content via element focus (e.g. clicking an input, pressing TAB key etc.)
            */
            _focus = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    namespace = pluginPfx + "_" + d.idx,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent();
                mCSB_container.bind("focusin." + namespace, function(e) {
                    var el = $(document.activeElement),
                        nested = mCSB_container.find(".mCustomScrollBox").length,
                        dur = 0;
                    if (!el.is(o.advanced.autoScrollOnFocus)) { return; }
                    _stop($this);
                    clearTimeout($this[0]._focusTimeout);
                    $this[0]._focusTimer = nested ? (dur + 17) * nested : 0;
                    $this[0]._focusTimeout = setTimeout(function() {
                        var to = [_childPos(el)[0], _childPos(el)[1]],
                            contentPos = [mCSB_container[0].offsetTop, mCSB_container[0].offsetLeft],
                            isVisible = [
                                (contentPos[0] + to[0] >= 0 && contentPos[0] + to[0] < wrapper.height() - el.outerHeight(false)),
                                (contentPos[1] + to[1] >= 0 && contentPos[0] + to[1] < wrapper.width() - el.outerWidth(false))
                            ],
                            overwrite = (o.axis === "yx" && !isVisible[0] && !isVisible[1]) ? "none" : "all";
                        if (o.axis !== "x" && !isVisible[0]) {
                            _scrollTo($this, to[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: overwrite, dur: dur });
                        }
                        if (o.axis !== "y" && !isVisible[1]) {
                            _scrollTo($this, to[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: overwrite, dur: dur });
                        }
                    }, $this[0]._focusTimer);
                });
            },
            /* -------------------- */


            /* sets content wrapper scrollTop/scrollLeft always to 0 */
            _wrapperScroll = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    namespace = pluginPfx + "_" + d.idx,
                    wrapper = $("#mCSB_" + d.idx + "_container").parent();
                wrapper.bind("scroll." + namespace, function(e) {
                    if (wrapper.scrollTop() !== 0 || wrapper.scrollLeft() !== 0) {
                        $(".mCSB_" + d.idx + "_scrollbar").css("visibility", "hidden"); /* hide scrollbar(s) */
                    }
                });
            },
            /* -------------------- */


            /* 
            BUTTONS EVENTS
            scrolls content via up, down, left and right buttons 
            */
            _buttons = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    namespace = pluginPfx + "_" + d.idx,
                    sel = ".mCSB_" + d.idx + "_scrollbar",
                    btn = $(sel + ">a");
                btn.bind("contextmenu." + namespace, function(e) {
                    e.preventDefault(); //prevent right click
                }).bind("mousedown." + namespace + " touchstart." + namespace + " pointerdown." + namespace + " MSPointerDown." + namespace + " mouseup." + namespace + " touchend." + namespace + " pointerup." + namespace + " MSPointerUp." + namespace + " mouseout." + namespace + " pointerout." + namespace + " MSPointerOut." + namespace + " click." + namespace, function(e) {
                    e.preventDefault();
                    if (!_mouseBtnLeft(e)) { return; } /* left mouse button only */
                    var btnClass = $(this).attr("class");
                    seq.type = o.scrollButtons.scrollType;
                    switch (e.type) {
                        case "mousedown":
                        case "touchstart":
                        case "pointerdown":
                        case "MSPointerDown":
                            if (seq.type === "stepped") { return; }
                            touchActive = true;
                            d.tweenRunning = false;
                            _seq("on", btnClass);
                            break;
                        case "mouseup":
                        case "touchend":
                        case "pointerup":
                        case "MSPointerUp":
                        case "mouseout":
                        case "pointerout":
                        case "MSPointerOut":
                            if (seq.type === "stepped") { return; }
                            touchActive = false;
                            if (seq.dir) { _seq("off", btnClass); }
                            break;
                        case "click":
                            if (seq.type !== "stepped" || d.tweenRunning) { return; }
                            _seq("on", btnClass);
                            break;
                    }

                    function _seq(a, c) {
                        seq.scrollAmount = o.scrollButtons.scrollAmount;
                        _sequentialScroll($this, a, c);
                    }
                });
            },
            /* -------------------- */


            /* 
            KEYBOARD EVENTS
            scrolls content via keyboard 
            Keys: up arrow, down arrow, left arrow, right arrow, PgUp, PgDn, Home, End
            */
            _keyboard = function() {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    namespace = pluginPfx + "_" + d.idx,
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    editables = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    iframe = mCSB_container.find("iframe"),
                    events = ["blur." + namespace + " keydown." + namespace + " keyup." + namespace];
                if (iframe.length) {
                    iframe.each(function() {
                        $(this).bind("load", function() {
                            /* bind events on accessible iframes */
                            if (_canAccessIFrame(this)) {
                                $(this.contentDocument || this.contentWindow.document).bind(events[0], function(e) {
                                    _onKeyboard(e);
                                });
                            }
                        });
                    });
                }
                mCustomScrollBox.attr("tabindex", "0").bind(events[0], function(e) {
                    _onKeyboard(e);
                });

                function _onKeyboard(e) {
                    switch (e.type) {
                        case "blur":
                            if (d.tweenRunning && seq.dir) { _seq("off", null); }
                            break;
                        case "keydown":
                        case "keyup":
                            var code = e.keyCode ? e.keyCode : e.which,
                                action = "on";
                            if ((o.axis !== "x" && (code === 38 || code === 40)) || (o.axis !== "y" && (code === 37 || code === 39))) {
                                /* up (38), down (40), left (37), right (39) arrows */
                                if (((code === 38 || code === 40) && !d.overflowed[0]) || ((code === 37 || code === 39) && !d.overflowed[1])) { return; }
                                if (e.type === "keyup") { action = "off"; }
                                if (!$(document.activeElement).is(editables)) {
                                    e.preventDefault();
                                    e.stopImmediatePropagation();
                                    _seq(action, code);
                                }
                            } else if (code === 33 || code === 34) {
                                /* PgUp (33), PgDn (34) */
                                if (d.overflowed[0] || d.overflowed[1]) {
                                    e.preventDefault();
                                    e.stopImmediatePropagation();
                                }
                                if (e.type === "keyup") {
                                    _stop($this);
                                    var keyboardDir = code === 34 ? -1 : 1;
                                    if (o.axis === "x" || (o.axis === "yx" && d.overflowed[1] && !d.overflowed[0])) {
                                        var dir = "x",
                                            to = Math.abs(mCSB_container[0].offsetLeft) - (keyboardDir * (wrapper.width() * 0.9));
                                    } else {
                                        var dir = "y",
                                            to = Math.abs(mCSB_container[0].offsetTop) - (keyboardDir * (wrapper.height() * 0.9));
                                    }
                                    _scrollTo($this, to.toString(), { dir: dir, scrollEasing: "mcsEaseInOut" });
                                }
                            } else if (code === 35 || code === 36) {
                                /* End (35), Home (36) */
                                if (!$(document.activeElement).is(editables)) {
                                    if (d.overflowed[0] || d.overflowed[1]) {
                                        e.preventDefault();
                                        e.stopImmediatePropagation();
                                    }
                                    if (e.type === "keyup") {
                                        if (o.axis === "x" || (o.axis === "yx" && d.overflowed[1] && !d.overflowed[0])) {
                                            var dir = "x",
                                                to = code === 35 ? Math.abs(wrapper.width() - mCSB_container.outerWidth(false)) : 0;
                                        } else {
                                            var dir = "y",
                                                to = code === 35 ? Math.abs(wrapper.height() - mCSB_container.outerHeight(false)) : 0;
                                        }
                                        _scrollTo($this, to.toString(), { dir: dir, scrollEasing: "mcsEaseInOut" });
                                    }
                                }
                            }
                            break;
                    }

                    function _seq(a, c) {
                        seq.type = o.keyboard.scrollType;
                        seq.scrollAmount = o.keyboard.scrollAmount;
                        if (seq.type === "stepped" && d.tweenRunning) { return; }
                        _sequentialScroll($this, a, c);
                    }
                }
            },
            /* -------------------- */


            /* scrolls content sequentially (used when scrolling via buttons, keyboard arrows etc.) */
            _sequentialScroll = function(el, action, trigger, e, s) {
                var d = el.data(pluginPfx),
                    o = d.opt,
                    seq = d.sequential,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    once = seq.type === "stepped" ? true : false,
                    steplessSpeed = o.scrollInertia < 26 ? 26 : o.scrollInertia,
                    /* 26/1.5=17 */
                    steppedSpeed = o.scrollInertia < 1 ? 17 : o.scrollInertia;
                switch (action) {
                    case "on":
                        seq.dir = [
                            (trigger === classes[16] || trigger === classes[15] || trigger === 39 || trigger === 37 ? "x" : "y"),
                            (trigger === classes[13] || trigger === classes[15] || trigger === 38 || trigger === 37 ? -1 : 1)
                        ];
                        _stop(el);
                        if (_isNumeric(trigger) && seq.type === "stepped") { return; }
                        _on(once);
                        break;
                    case "off":
                        _off();
                        if (once || (d.tweenRunning && seq.dir)) {
                            _on(true);
                        }
                        break;
                }

                /* starts sequence */
                function _on(once) {
                    if (o.snapAmount) { seq.scrollAmount = !(o.snapAmount instanceof Array) ? o.snapAmount : seq.dir[0] === "x" ? o.snapAmount[1] : o.snapAmount[0]; } /* scrolling snapping */
                    var c = seq.type !== "stepped",
                        /* continuous scrolling */
                        t = s ? s : !once ? 1000 / 60 : c ? steplessSpeed / 1.5 : steppedSpeed,
                        /* timer */
                        m = !once ? 2.5 : c ? 7.5 : 40,
                        /* multiplier */
                        contentPos = [Math.abs(mCSB_container[0].offsetTop), Math.abs(mCSB_container[0].offsetLeft)],
                        ratio = [d.scrollRatio.y > 10 ? 10 : d.scrollRatio.y, d.scrollRatio.x > 10 ? 10 : d.scrollRatio.x],
                        amount = seq.dir[0] === "x" ? contentPos[1] + (seq.dir[1] * (ratio[1] * m)) : contentPos[0] + (seq.dir[1] * (ratio[0] * m)),
                        px = seq.dir[0] === "x" ? contentPos[1] + (seq.dir[1] * parseInt(seq.scrollAmount)) : contentPos[0] + (seq.dir[1] * parseInt(seq.scrollAmount)),
                        to = seq.scrollAmount !== "auto" ? px : amount,
                        easing = e ? e : !once ? "mcsLinear" : c ? "mcsLinearOut" : "mcsEaseInOut",
                        onComplete = !once ? false : true;
                    if (once && t < 17) {
                        to = seq.dir[0] === "x" ? contentPos[1] : contentPos[0];
                    }
                    _scrollTo(el, to.toString(), { dir: seq.dir[0], scrollEasing: easing, dur: t, onComplete: onComplete });
                    if (once) {
                        seq.dir = false;
                        return;
                    }
                    clearTimeout(seq.step);
                    seq.step = setTimeout(function() {
                        _on();
                    }, t);
                }
                /* stops sequence */
                function _off() {
                    clearTimeout(seq.step);
                    _delete(seq, "step");
                    _stop(el);
                }
            },
            /* -------------------- */


            /* returns a yx array from value */
            _arr = function(val) {
                var o = $(this).data(pluginPfx).opt,
                    vals = [];
                if (typeof val === "function") { val = val(); } /* check if the value is a single anonymous function */
                /* check if value is object or array, its length and create an array with yx values */
                if (!(val instanceof Array)) { /* object value (e.g. {y:"100",x:"100"}, 100 etc.) */
                    vals[0] = val.y ? val.y : val.x || o.axis === "x" ? null : val;
                    vals[1] = val.x ? val.x : val.y || o.axis === "y" ? null : val;
                } else { /* array value (e.g. [100,100]) */
                    vals = val.length > 1 ? [val[0], val[1]] : o.axis === "x" ? [null, val[0]] : [val[0], null];
                }
                /* check if array values are anonymous functions */
                if (typeof vals[0] === "function") { vals[0] = vals[0](); }
                if (typeof vals[1] === "function") { vals[1] = vals[1](); }
                return vals;
            },
            /* -------------------- */


            /* translates values (e.g. "top", 100, "100px", "#id") to actual scroll-to positions */
            _to = function(val, dir) {
                if (val == null || typeof val == "undefined") { return; }
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    t = typeof val;
                if (!dir) { dir = o.axis === "x" ? "x" : "y"; }
                var contentLength = dir === "x" ? mCSB_container.outerWidth(false) - wrapper.width() : mCSB_container.outerHeight(false) - wrapper.height(),
                    contentPos = dir === "x" ? mCSB_container[0].offsetLeft : mCSB_container[0].offsetTop,
                    cssProp = dir === "x" ? "left" : "top";
                switch (t) {
                    case "function":
                        /* this currently is not used. Consider removing it */
                        return val();
                        break;
                    case "object":
                        /* js/jquery object */
                        var obj = val.jquery ? val : $(val);
                        if (!obj.length) { return; }
                        return dir === "x" ? _childPos(obj)[1] : _childPos(obj)[0];
                        break;
                    case "string":
                    case "number":
                        if (_isNumeric(val)) { /* numeric value */
                            return Math.abs(val);
                        } else if (val.indexOf("%") !== -1) { /* percentage value */
                            return Math.abs(contentLength * parseInt(val) / 100);
                        } else if (val.indexOf("-=") !== -1) { /* decrease value */
                            return Math.abs(contentPos - parseInt(val.split("-=")[1]));
                        } else if (val.indexOf("+=") !== -1) { /* inrease value */
                            var p = (contentPos + parseInt(val.split("+=")[1]));
                            return p >= 0 ? 0 : Math.abs(p);
                        } else if (val.indexOf("px") !== -1 && _isNumeric(val.split("px")[0])) { /* pixels string value (e.g. "100px") */
                            return Math.abs(val.split("px")[0]);
                        } else {
                            if (val === "top" || val === "left") { /* special strings */
                                return 0;
                            } else if (val === "bottom") {
                                return Math.abs(wrapper.height() - mCSB_container.outerHeight(false));
                            } else if (val === "right") {
                                return Math.abs(wrapper.width() - mCSB_container.outerWidth(false));
                            } else if (val === "first" || val === "last") {
                                var obj = mCSB_container.find(":" + val);
                                return dir === "x" ? _childPos(obj)[1] : _childPos(obj)[0];
                            } else {
                                if ($(val).length) { /* jquery selector */
                                    return dir === "x" ? _childPos($(val))[1] : _childPos($(val))[0];
                                } else { /* other values (e.g. "100em") */
                                    mCSB_container.css(cssProp, val);
                                    methods.update.call(null, $this[0]);
                                    return;
                                }
                            }
                        }
                        break;
                }
            },
            /* -------------------- */


            /* calls the update method automatically */
            _autoUpdate = function(rem) {
                var $this = $(this),
                    d = $this.data(pluginPfx),
                    o = d.opt,
                    mCSB_container = $("#mCSB_" + d.idx + "_container");
                if (rem) {
                    /* 
                    removes autoUpdate timer 
                    usage: _autoUpdate.call(this,"remove");
                    */
                    clearTimeout(mCSB_container[0].autoUpdate);
                    _delete(mCSB_container[0], "autoUpdate");
                    return;
                }
                upd();

                function upd() {
                    clearTimeout(mCSB_container[0].autoUpdate);
                    if ($this.parents("html").length === 0) {
                        /* check element in dom tree */
                        $this = null;
                        return;
                    }
                    mCSB_container[0].autoUpdate = setTimeout(function() {
                        /* update on specific selector(s) length and size change */
                        if (o.advanced.updateOnSelectorChange) {
                            d.poll.change.n = sizesSum();
                            if (d.poll.change.n !== d.poll.change.o) {
                                d.poll.change.o = d.poll.change.n;
                                doUpd(3);
                                return;
                            }
                        }
                        /* update on main element and scrollbar size changes */
                        if (o.advanced.updateOnContentResize) {
                            d.poll.size.n = $this[0].scrollHeight + $this[0].scrollWidth + mCSB_container[0].offsetHeight + $this[0].offsetHeight + $this[0].offsetWidth;
                            if (d.poll.size.n !== d.poll.size.o) {
                                d.poll.size.o = d.poll.size.n;
                                doUpd(1);
                                return;
                            }
                        }
                        /* update on image load */
                        if (o.advanced.updateOnImageLoad) {
                            if (!(o.advanced.updateOnImageLoad === "auto" && o.axis === "y")) { //by default, it doesn't run on vertical content
                                d.poll.img.n = mCSB_container.find("img").length;
                                if (d.poll.img.n !== d.poll.img.o) {
                                    d.poll.img.o = d.poll.img.n;
                                    mCSB_container.find("img").each(function() {
                                        imgLoader(this);
                                    });
                                    return;
                                }
                            }
                        }
                        if (o.advanced.updateOnSelectorChange || o.advanced.updateOnContentResize || o.advanced.updateOnImageLoad) { upd(); }
                    }, o.advanced.autoUpdateTimeout);
                }
                /* a tiny image loader */
                function imgLoader(el) {
                    if ($(el).hasClass(classes[2])) { doUpd(); return; }
                    var img = new Image();

                    function createDelegate(contextObject, delegateMethod) {
                        return function() { return delegateMethod.apply(contextObject, arguments); }
                    }

                    function imgOnLoad() {
                        this.onload = null;
                        $(el).addClass(classes[2]);
                        doUpd(2);
                    }
                    img.onload = createDelegate(img, imgOnLoad);
                    img.src = el.src;
                }
                /* returns the total height and width sum of all elements matching the selector */
                function sizesSum() {
                    if (o.advanced.updateOnSelectorChange === true) { o.advanced.updateOnSelectorChange = "*"; }
                    var total = 0,
                        sel = mCSB_container.find(o.advanced.updateOnSelectorChange);
                    if (o.advanced.updateOnSelectorChange && sel.length > 0) { sel.each(function() { total += this.offsetHeight + this.offsetWidth; }); }
                    return total;
                }
                /* calls the update method */
                function doUpd(cb) {
                    clearTimeout(mCSB_container[0].autoUpdate);
                    methods.update.call(null, $this[0], cb);
                }
            },
            /* -------------------- */


            /* snaps scrolling to a multiple of a pixels number */
            _snapAmount = function(to, amount, offset) {
                return (Math.round(to / amount) * amount - offset);
            },
            /* -------------------- */


            /* stops content and scrollbar animations */
            _stop = function(el) {
                var d = el.data(pluginPfx),
                    sel = $("#mCSB_" + d.idx + "_container,#mCSB_" + d.idx + "_container_wrapper,#mCSB_" + d.idx + "_dragger_vertical,#mCSB_" + d.idx + "_dragger_horizontal");
                sel.each(function() {
                    _stopTween.call(this);
                });
            },
            /* -------------------- */


            /* 
            ANIMATES CONTENT 
            This is where the actual scrolling happens
            */
            _scrollTo = function(el, to, options) {
                var d = el.data(pluginPfx),
                    o = d.opt,
                    defaults = {
                        trigger: "internal",
                        dir: "y",
                        scrollEasing: "mcsEaseOut",
                        drag: false,
                        dur: o.scrollInertia,
                        overwrite: "all",
                        callbacks: true,
                        onStart: true,
                        onUpdate: true,
                        onComplete: true
                    },
                    options = $.extend(defaults, options),
                    dur = [options.dur, (options.drag ? 0 : options.dur)],
                    mCustomScrollBox = $("#mCSB_" + d.idx),
                    mCSB_container = $("#mCSB_" + d.idx + "_container"),
                    wrapper = mCSB_container.parent(),
                    totalScrollOffsets = o.callbacks.onTotalScrollOffset ? _arr.call(el, o.callbacks.onTotalScrollOffset) : [0, 0],
                    totalScrollBackOffsets = o.callbacks.onTotalScrollBackOffset ? _arr.call(el, o.callbacks.onTotalScrollBackOffset) : [0, 0];
                d.trigger = options.trigger;
                if (wrapper.scrollTop() !== 0 || wrapper.scrollLeft() !== 0) { /* always reset scrollTop/Left */
                    $(".mCSB_" + d.idx + "_scrollbar").css("visibility", "visible");
                    wrapper.scrollTop(0).scrollLeft(0);
                }
                if (to === "_resetY" && !d.contentReset.y) {
                    /* callbacks: onOverflowYNone */
                    if (_cb("onOverflowYNone")) { o.callbacks.onOverflowYNone.call(el[0]); }
                    d.contentReset.y = 1;
                }
                if (to === "_resetX" && !d.contentReset.x) {
                    /* callbacks: onOverflowXNone */
                    if (_cb("onOverflowXNone")) { o.callbacks.onOverflowXNone.call(el[0]); }
                    d.contentReset.x = 1;
                }
                if (to === "_resetY" || to === "_resetX") { return; }
                if ((d.contentReset.y || !el[0].mcs) && d.overflowed[0]) {
                    /* callbacks: onOverflowY */
                    if (_cb("onOverflowY")) { o.callbacks.onOverflowY.call(el[0]); }
                    d.contentReset.x = null;
                }
                if ((d.contentReset.x || !el[0].mcs) && d.overflowed[1]) {
                    /* callbacks: onOverflowX */
                    if (_cb("onOverflowX")) { o.callbacks.onOverflowX.call(el[0]); }
                    d.contentReset.x = null;
                }
                if (o.snapAmount) { /* scrolling snapping */
                    var snapAmount = !(o.snapAmount instanceof Array) ? o.snapAmount : options.dir === "x" ? o.snapAmount[1] : o.snapAmount[0];
                    to = _snapAmount(to, snapAmount, o.snapOffset);
                }
                switch (options.dir) {
                    case "x":
                        var mCSB_dragger = $("#mCSB_" + d.idx + "_dragger_horizontal"),
                            property = "left",
                            contentPos = mCSB_container[0].offsetLeft,
                            limit = [
                                mCustomScrollBox.width() - mCSB_container.outerWidth(false),
                                mCSB_dragger.parent().width() - mCSB_dragger.width()
                            ],
                            scrollTo = [to, to === 0 ? 0 : (to / d.scrollRatio.x)],
                            tso = totalScrollOffsets[1],
                            tsbo = totalScrollBackOffsets[1],
                            totalScrollOffset = tso > 0 ? tso / d.scrollRatio.x : 0,
                            totalScrollBackOffset = tsbo > 0 ? tsbo / d.scrollRatio.x : 0;
                        break;
                    case "y":
                        var mCSB_dragger = $("#mCSB_" + d.idx + "_dragger_vertical"),
                            property = "top",
                            contentPos = mCSB_container[0].offsetTop,
                            limit = [
                                mCustomScrollBox.height() - mCSB_container.outerHeight(false),
                                mCSB_dragger.parent().height() - mCSB_dragger.height()
                            ],
                            scrollTo = [to, to === 0 ? 0 : (to / d.scrollRatio.y)],
                            tso = totalScrollOffsets[0],
                            tsbo = totalScrollBackOffsets[0],
                            totalScrollOffset = tso > 0 ? tso / d.scrollRatio.y : 0,
                            totalScrollBackOffset = tsbo > 0 ? tsbo / d.scrollRatio.y : 0;
                        break;
                }
                if (scrollTo[1] < 0 || (scrollTo[0] === 0 && scrollTo[1] === 0)) {
                    scrollTo = [0, 0];
                } else if (scrollTo[1] >= limit[1]) {
                    scrollTo = [limit[0], limit[1]];
                } else {
                    scrollTo[0] = -scrollTo[0];
                }
                if (!el[0].mcs) {
                    _mcs(); /* init mcs object (once) to make it available before callbacks */
                    if (_cb("onInit")) { o.callbacks.onInit.call(el[0]); } /* callbacks: onInit */
                }
                clearTimeout(mCSB_container[0].onCompleteTimeout);
                _tweenTo(mCSB_dragger[0], property, Math.round(scrollTo[1]), dur[1], options.scrollEasing);
                if (!d.tweenRunning && ((contentPos === 0 && scrollTo[0] >= 0) || (contentPos === limit[0] && scrollTo[0] <= limit[0]))) { return; }
                _tweenTo(mCSB_container[0], property, Math.round(scrollTo[0]), dur[0], options.scrollEasing, options.overwrite, {
                    onStart: function() {
                        if (options.callbacks && options.onStart && !d.tweenRunning) {
                            /* callbacks: onScrollStart */
                            if (_cb("onScrollStart")) { _mcs();
                                o.callbacks.onScrollStart.call(el[0]); }
                            d.tweenRunning = true;
                            _onDragClasses(mCSB_dragger);
                            d.cbOffsets = _cbOffsets();
                        }
                    },
                    onUpdate: function() {
                        if (options.callbacks && options.onUpdate) {
                            /* callbacks: whileScrolling */
                            if (_cb("whileScrolling")) { _mcs();
                                o.callbacks.whileScrolling.call(el[0]); }
                        }
                    },
                    onComplete: function() {
                        if (options.callbacks && options.onComplete) {
                            if (o.axis === "yx") { clearTimeout(mCSB_container[0].onCompleteTimeout); }
                            var t = mCSB_container[0].idleTimer || 0;
                            mCSB_container[0].onCompleteTimeout = setTimeout(function() {
                                /* callbacks: onScroll, onTotalScroll, onTotalScrollBack */
                                if (_cb("onScroll")) { _mcs();
                                    o.callbacks.onScroll.call(el[0]); }
                                if (_cb("onTotalScroll") && scrollTo[1] >= limit[1] - totalScrollOffset && d.cbOffsets[0]) { _mcs();
                                    o.callbacks.onTotalScroll.call(el[0]); }
                                if (_cb("onTotalScrollBack") && scrollTo[1] <= totalScrollBackOffset && d.cbOffsets[1]) { _mcs();
                                    o.callbacks.onTotalScrollBack.call(el[0]); }
                                d.tweenRunning = false;
                                mCSB_container[0].idleTimer = 0;
                                _onDragClasses(mCSB_dragger, "hide");
                            }, t);
                        }
                    }
                });
                /* checks if callback function exists */
                function _cb(cb) {
                    return d && o.callbacks[cb] && typeof o.callbacks[cb] === "function";
                }
                /* checks whether callback offsets always trigger */
                function _cbOffsets() {
                    return [o.callbacks.alwaysTriggerOffsets || contentPos >= limit[0] + tso, o.callbacks.alwaysTriggerOffsets || contentPos <= -tsbo];
                }
                /* 
                populates object with useful values for the user 
                values: 
                	content: this.mcs.content
                	content top position: this.mcs.top 
                	content left position: this.mcs.left 
                	dragger top position: this.mcs.draggerTop 
                	dragger left position: this.mcs.draggerLeft 
                	scrolling y percentage: this.mcs.topPct 
                	scrolling x percentage: this.mcs.leftPct 
                	scrolling direction: this.mcs.direction
                */
                function _mcs() {
                    var cp = [mCSB_container[0].offsetTop, mCSB_container[0].offsetLeft],
                        /* content position */
                        dp = [mCSB_dragger[0].offsetTop, mCSB_dragger[0].offsetLeft],
                        /* dragger position */
                        cl = [mCSB_container.outerHeight(false), mCSB_container.outerWidth(false)],
                        /* content length */
                        pl = [mCustomScrollBox.height(), mCustomScrollBox.width()]; /* content parent length */
                    el[0].mcs = {
                        content: mCSB_container,
                        /* original content wrapper as jquery object */
                        top: cp[0],
                        left: cp[1],
                        draggerTop: dp[0],
                        draggerLeft: dp[1],
                        topPct: Math.round((100 * Math.abs(cp[0])) / (Math.abs(cl[0]) - pl[0])),
                        leftPct: Math.round((100 * Math.abs(cp[1])) / (Math.abs(cl[1]) - pl[1])),
                        direction: options.dir
                    };
                    /* 
                    this refers to the original element containing the scrollbar(s)
                    usage: this.mcs.top, this.mcs.leftPct etc. 
                    */
                }
            },
            /* -------------------- */


            /* 
            CUSTOM JAVASCRIPT ANIMATION TWEEN 
            Lighter and faster than jquery animate() and css transitions 
            Animates top/left properties and includes easings 
            */
            _tweenTo = function(el, prop, to, duration, easing, overwrite, callbacks) {
                if (!el._mTween) { el._mTween = { top: {}, left: {} }; }
                var callbacks = callbacks || {},
                    onStart = callbacks.onStart || function() {},
                    onUpdate = callbacks.onUpdate || function() {},
                    onComplete = callbacks.onComplete || function() {},
                    startTime = _getTime(),
                    _delay, progress = 0,
                    from = el.offsetTop,
                    elStyle = el.style,
                    _request, tobj = el._mTween[prop];
                if (prop === "left") { from = el.offsetLeft; }
                var diff = to - from;
                tobj.stop = 0;
                if (overwrite !== "none") { _cancelTween(); }
                _startTween();

                function _step() {
                    if (tobj.stop) { return; }
                    if (!progress) { onStart.call(); }
                    progress = _getTime() - startTime;
                    _tween();
                    if (progress >= tobj.time) {
                        tobj.time = (progress > tobj.time) ? progress + _delay - (progress - tobj.time) : progress + _delay - 1;
                        if (tobj.time < progress + 1) { tobj.time = progress + 1; }
                    }
                    if (tobj.time < duration) { tobj.id = _request(_step); } else { onComplete.call(); }
                }

                function _tween() {
                    if (duration > 0) {
                        tobj.currVal = _ease(tobj.time, from, diff, duration, easing);
                        elStyle[prop] = Math.round(tobj.currVal) + "px";
                    } else {
                        elStyle[prop] = to + "px";
                    }
                    onUpdate.call();
                }

                function _startTween() {
                    _delay = 1000 / 60;
                    tobj.time = progress + _delay;
                    _request = (!window.requestAnimationFrame) ? function(f) { _tween(); return setTimeout(f, 0.01); } : window.requestAnimationFrame;
                    tobj.id = _request(_step);
                }

                function _cancelTween() {
                    if (tobj.id == null) { return; }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(tobj.id);
                    } else { window.cancelAnimationFrame(tobj.id); }
                    tobj.id = null;
                }

                function _ease(t, b, c, d, type) {
                    switch (type) {
                        case "linear":
                        case "mcsLinear":
                            return c * t / d + b;
                            break;
                        case "mcsLinearOut":
                            t /= d;
                            t--;
                            return c * Math.sqrt(1 - t * t) + b;
                            break;
                        case "easeInOutSmooth":
                            t /= d / 2;
                            if (t < 1) return c / 2 * t * t + b;
                            t--;
                            return -c / 2 * (t * (t - 2) - 1) + b;
                            break;
                        case "easeInOutStrong":
                            t /= d / 2;
                            if (t < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                            t--;
                            return c / 2 * (-Math.pow(2, -10 * t) + 2) + b;
                            break;
                        case "easeInOut":
                        case "mcsEaseInOut":
                            t /= d / 2;
                            if (t < 1) return c / 2 * t * t * t + b;
                            t -= 2;
                            return c / 2 * (t * t * t + 2) + b;
                            break;
                        case "easeOutSmooth":
                            t /= d;
                            t--;
                            return -c * (t * t * t * t - 1) + b;
                            break;
                        case "easeOutStrong":
                            return c * (-Math.pow(2, -10 * t / d) + 1) + b;
                            break;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var ts = (t /= d) * t,
                                tc = ts * t;
                            return b + c * (0.499999999999997 * tc * ts + -2.5 * ts * ts + 5.5 * tc + -6.5 * ts + 4 * t);
                    }
                }
            },
            /* -------------------- */


            /* returns current time */
            _getTime = function() {
                if (window.performance && window.performance.now) {
                    return window.performance.now();
                } else {
                    if (window.performance && window.performance.webkitNow) {
                        return window.performance.webkitNow();
                    } else {
                        if (Date.now) { return Date.now(); } else { return new Date().getTime(); }
                    }
                }
            },
            /* -------------------- */


            /* stops a tween */
            _stopTween = function() {
                var el = this;
                if (!el._mTween) { el._mTween = { top: {}, left: {} }; }
                var props = ["top", "left"];
                for (var i = 0; i < props.length; i++) {
                    var prop = props[i];
                    if (el._mTween[prop].id) {
                        if (!window.requestAnimationFrame) {
                            clearTimeout(el._mTween[prop].id);
                        } else { window.cancelAnimationFrame(el._mTween[prop].id); }
                        el._mTween[prop].id = null;
                        el._mTween[prop].stop = 1;
                    }
                }
            },
            /* -------------------- */


            /* deletes a property (avoiding the exception thrown by IE) */
            _delete = function(c, m) {
                try { delete c[m]; } catch (e) { c[m] = null; }
            },
            /* -------------------- */


            /* detects left mouse button */
            _mouseBtnLeft = function(e) {
                return !(e.which && e.which !== 1);
            },
            /* -------------------- */


            /* detects if pointer type event is touch */
            _pointerTouch = function(e) {
                var t = e.originalEvent.pointerType;
                return !(t && t !== "touch" && t !== 2);
            },
            /* -------------------- */


            /* checks if value is numeric */
            _isNumeric = function(val) {
                return !isNaN(parseFloat(val)) && isFinite(val);
            },
            /* -------------------- */


            /* returns element position according to content */
            _childPos = function(el) {
                var p = el.parents(".mCSB_container");
                return [el.offset().top - p.offset().top, el.offset().left - p.offset().left];
            },
            /* -------------------- */


            /* checks if browser tab is hidden/inactive via Page Visibility API */
            _isTabHidden = function() {
                var prop = _getHiddenProp();
                if (!prop) return false;
                return document[prop];

                function _getHiddenProp() {
                    var pfx = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden"; //natively supported
                    for (var i = 0; i < pfx.length; i++) { //prefixed
                        if ((pfx[i] + "Hidden") in document)
                            return pfx[i] + "Hidden";
                    }
                    return null; //not supported
                }
            };
        /* -------------------- */





        /* 
        ----------------------------------------
        PLUGIN SETUP 
        ----------------------------------------
        */

        /* plugin constructor functions */
        $.fn[pluginNS] = function(method) { /* usage: $(selector).mCustomScrollbar(); */
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === "object" || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error("Method " + method + " does not exist");
            }
        };
        $[pluginNS] = function(method) { /* usage: $.mCustomScrollbar(); */
            if (methods[method]) {
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === "object" || !method) {
                return methods.init.apply(this, arguments);
            } else {
                $.error("Method " + method + " does not exist");
            }
        };

        /* 
        allow setting plugin default options. 
        usage: $.mCustomScrollbar.defaults.scrollInertia=500; 
        to apply any changed default options on default selectors (below), use inside document ready fn 
        e.g.: $(document).ready(function(){ $.mCustomScrollbar.defaults.scrollInertia=500; });
        */
        $[pluginNS].defaults = defaults;

        /* 
        add window object (window.mCustomScrollbar) 
        usage: if(window.mCustomScrollbar){console.log("custom scrollbar plugin loaded");}
        */
        window[pluginNS] = true;

        $(window).bind("load", function() {

            $(defaultSelector)[pluginNS](); /* add scrollbars automatically on default selector */

            /* extend jQuery expressions */
            $.extend($.expr[":"], {
                /* checks if element is within scrollable viewport */
                mcsInView: $.expr[":"].mcsInView || function(el) {
                    var $el = $(el),
                        content = $el.parents(".mCSB_container"),
                        wrapper, cPos;
                    if (!content.length) { return; }
                    wrapper = content.parent();
                    cPos = [content[0].offsetTop, content[0].offsetLeft];
                    return cPos[0] + _childPos($el)[0] >= 0 && cPos[0] + _childPos($el)[0] < wrapper.height() - $el.outerHeight(false) &&
                        cPos[1] + _childPos($el)[1] >= 0 && cPos[1] + _childPos($el)[1] < wrapper.width() - $el.outerWidth(false);
                },
                /* checks if element or part of element is in view of scrollable viewport */
                mcsInSight: $.expr[":"].mcsInSight || function(el, i, m) {
                    var $el = $(el),
                        elD, content = $el.parents(".mCSB_container"),
                        wrapperView, pos, wrapperViewPct,
                        pctVals = m[3] === "exact" ? [
                            [1, 0],
                            [1, 0]
                        ] : [
                            [0.9, 0.1],
                            [0.6, 0.4]
                        ];
                    if (!content.length) { return; }
                    elD = [$el.outerHeight(false), $el.outerWidth(false)];
                    pos = [content[0].offsetTop + _childPos($el)[0], content[0].offsetLeft + _childPos($el)[1]];
                    wrapperView = [content.parent()[0].offsetHeight, content.parent()[0].offsetWidth];
                    wrapperViewPct = [elD[0] < wrapperView[0] ? pctVals[0] : pctVals[1], elD[1] < wrapperView[1] ? pctVals[0] : pctVals[1]];
                    return pos[0] - (wrapperView[0] * wrapperViewPct[0][0]) < 0 && pos[0] + elD[0] - (wrapperView[0] * wrapperViewPct[0][1]) >= 0 &&
                        pos[1] - (wrapperView[1] * wrapperViewPct[1][0]) < 0 && pos[1] + elD[1] - (wrapperView[1] * wrapperViewPct[1][1]) >= 0;
                },
                /* checks if element is overflowed having visible scrollbar(s) */
                mcsOverflow: $.expr[":"].mcsOverflow || function(el) {
                    var d = $(el).data(pluginPfx);
                    if (!d) { return; }
                    return d.overflowed[0] || d.overflowed[1];
                }
            });

        });

    }))
}));
//# sourceMappingURL=vendor5.js.map
