;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-cha1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M959.292416 127.2576 897.709056 65.163264 509.898752 450.018304 125.151232 65.29024 63.310848 127.1296 448.509952 512.347136 63.310848 897.565696 125.151232 959.404032 509.898752 574.675968 897.709056 959.531008 959.292416 897.437696 571.247616 512.347136Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cha" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M765.814384 702.922331 569.691762 510.694261 765.790847 318.500984 705.461405 259.343653 509.349017 451.550233 313.247885 259.343653 252.919466 318.500984 449.010364 510.686075 252.868299 702.922331 313.247885 762.02952 509.355157 569.82908 705.461405 762.02952Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M712.967616 64.095807 280.019043 64.095807c-20.512173 0-37.149085 18.720364-37.149085 41.797965l0 811.495118c0 23.078625 16.636912 41.797965 37.149085 41.797965l432.948573 0c20.511149 0 37.119409-18.71934 37.119409-41.797965L750.087025 105.893772C750.088048 82.816171 733.478765 64.095807 712.967616 64.095807zM480.948285 103.139032l26.51284 0c5.652743 0 10.227945 5.114484 10.227945 11.422144 0 6.307659-4.575202 11.42112-10.227945 11.42112l-26.51284 0c-5.652743 0-10.225899-5.113461-10.225899-11.42112C470.722386 108.253516 475.295542 103.139032 480.948285 103.139032zM496.479003 938.979628c-23.310915 0-42.189891-18.879999-42.189891-42.190915 0-23.307845 18.878976-42.189891 42.189891-42.189891s42.189891 18.881023 42.189891 42.189891C538.667871 920.099628 519.789918 938.979628 496.479003 938.979628zM700.846554 808.881594c0 13.69593-9.93528 24.811082-22.172999 24.811082L316.733223 833.692676c-12.266371 0-22.203698-11.115152-22.203698-24.811082L294.529525 165.94445c0-13.694907 9.936303-24.810059 22.203698-24.810059l361.940332 0c12.237719 0 22.172999 11.115152 22.172999 24.810059L700.846554 808.881594z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M100.047 470.079l240.331 191.46 598.43-551.307c0 0 40.172-36.645 75.21-8.035 10.438 8.633 22.482 33.022-4.662 71.22l-624.777 731.925c0 0-47.933 65.539-104.797-0.718l-269.598-364.089c0 0-32.003-49.269 8.021-78.836 13.506-9.905 44.221-25.345 81.844 8.38v0 0zM100.047 470.079z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xialajiantoushixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M466.830518 660.21138C491.776934 685.283135 532.017433 685.489801 557.169482 660.21138L786.830515 429.396461C811.776934 404.324704 802.837478 384.000032 768.294554 384.000032L255.705444 384.000032C220.521899 384.000032 212.017433 404.118035 237.169482 429.396461L466.830518 660.21138Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-asterisk" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M530.323 489.143c14.152-6.564 27.892-13.194 40.815-19.711 12.922-6.609 23.267-11.486 30.902-14.54 7.657-2.985 13.788-4.58 18.437-4.58 7.657 0 14.267 2.507 19.873 7.747 5.605 5.106 8.386 11.6 8.386 19.233 0 4.375-1.39 8.979-4.124 13.673-2.712 4.717-5.652 7.747-8.707 9.068-28.303 11.12-59.501 19.301-93.479 24.361 6.176 5.605 13.743 13.239 22.743 22.629 9 9.526 13.743 14.54 14.107 15.177 3.327 4.58 7.908 10.3 13.834 17.093 5.927 6.836 10.027 12.124 12.329 15.974 2.301 3.898 3.464 8.478 3.464 13.969 0 7.02-2.622 13.194-7.909 18.437-5.219 5.286-12.08 7.93-20.418 7.93s-17.661-6.518-28.144-19.415c-10.413-12.899-23.884-36.211-40.336-69.778-16.658 30.218-27.893 50.249-33.546 59.913-5.719 9.571-11.212 16.886-16.453 21.854-5.286 4.923-11.28 7.431-18.117 7.431-8.113 0-14.88-2.781-20.304-8.387-5.266-5.605-8.022-11.646-8.022-17.958 0-5.926 1.072-10.414 3.282-13.447 20.19-27.415 41.225-51.343 63.217-71.421-18.437-2.894-34.867-6.109-49.337-9.571-14.495-3.578-29.9-8.661-46.101-15.496-2.665-1.344-5.219-4.375-7.748-9.068-2.461-4.649-3.691-9.024-3.691-12.967 0-7.633 2.781-14.108 8.387-19.233 5.605-5.219 12.009-7.747 19.279-7.747 5.286 0 11.828 1.595 19.758 4.763 7.862 3.213 17.887 7.793 30.059 13.81 12.193 6.038 26.093 12.786 41.659 20.259-2.849-13.834-5.219-29.717-7.087-47.537-1.868-17.888-2.78-30.127-2.78-36.736 0-8.113 2.576-15.018 7.703-20.897 5.219-5.812 11.781-8.707 19.917-8.707 7.978 0 14.425 2.895 19.598 8.707 5.197 5.881 7.747 13.582 7.747 23.243 0 2.622-0.433 7.816-1.186 15.656-0.683 7.816-1.868 17.206-3.26 28.258-1.436 11.075-3.03 23.792-4.739 38.012z" fill="#d81e06" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)