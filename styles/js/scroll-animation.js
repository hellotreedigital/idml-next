function inViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

function getPercentangeInViewport(el) {
    var elHeight = el.offsetHeight;
    var elOffsetTop = el.offsetTop;
    var elOffsetBottom = elOffsetTop + elHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        elOffsetTop += el.offsetTop;
    }

    var pageOffsetTop = window.pageYOffset + window.innerHeight;

    return 100 * (pageOffsetTop - elOffsetTop) / (elOffsetBottom + window.innerHeight - elOffsetTop);
}

function triggerScroll() {
    var animatedElements = document.querySelectorAll('[animate]');
    for (let i = 0; i < animatedElements.length; i++) {
        if (inViewport(animatedElements[i])) {
            animatedElements[i].classList.add('show');
        }
    }

    var scrollStylesElements = document.querySelectorAll('[scroll-styles]');
    for (let i = 0; i < scrollStylesElements.length; i++) {
        scrollStylesElements[i].style.transform = "translate(0," + ((-getPercentangeInViewport(scrollStylesElements[i]) + 50) * scrollStylesElements[i].getAttribute('scroll-styles')) + "%)";
    }
}

window.addEventListener('scroll', triggerScroll);