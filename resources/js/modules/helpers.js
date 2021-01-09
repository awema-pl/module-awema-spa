/**
 * Detect if clicked element is a link and it should use SPA mode
 * 
 * @param  {HTMLElement}  el - element to check
 * 
 * @return {Boolean} false if link element doesn't mathc all cases and {String} href otherwise
 *
 * @example
 * 
 * ```html
 * <!-- returns false on location https://site.com/page -->
 * <a href="">blank href</a>
 * <a href="/" class="awema-spa-ignore">first page</a>
 * <a>no href</a>
 * <a href="#anchor">anchor</a>
 * <a href="http://site.com/">protocol missmatch</a>
 * <a href="/some-page" target="_blank">target blank</a>
 * <a href="/resource" download>download</a>
 * <a href="tel:123123">tel</a>
 * <a href="mailto:mail@mail.com">mailto</a>
 *
 * <!-- returns true on https://site.com/page  -->
 * <a href="/">first page</a>
 * <a href="https://site.com/">first page</a>
 * <a href="/other-page">other page</a>
 * <a href="https://site.com/other-page">other page</a>
 * ```
 */
export function isSpaTarget(el) {

    let loc = window.location
    let current = loc.origin + loc.pathname
    let hrefText = el && el.getAttribute('href')

    return el.className.indexOf('awema-spa-ignore') === -1 && // self prevent class
        el.target !== '_blank' &&                            // not external
        !!hrefText &&                                          // href attribute exists and not empty
        hrefText[0] !== '#' &&                               // not an anchor
        el.href.indexOf(loc.origin) === 0 &&                 // location matches
        ! el.hasAttribute('download')                        // not a download link
}


/**
 * Detect if mouse click was with key pressed
 * CTRL + Click opens a new tab
 * 
 * @param  {HTMLClickEvent}  event - click event
 * @return {Boolean}    true if any key was pressed
 */
export function isKeyPressed(event) {

    return event.which > 1 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey;
}

/**
 * String query to array
 *
 * @param  {String}  url
 * @return {Array}    true if any key was pressed
 */
export function queryToArray(query) {

   let array = {};
    (new URLSearchParams(query)).forEach((value, key) => {
        array[key] = value
    });
   return array;
}
