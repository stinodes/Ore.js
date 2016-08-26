const events = () => {
  const es = {
    'abort': null,
    'afterprint': null,
    'animationend': null,
    'animationiteration': null,
    'animationstart': null,
    'audioprocess': null,
    'audioend': null,
    'audiostart': null,
    'beforeprint ': null,
    'beforeunload': null,
    'beginEvent': null,
    'blocked': null,
    'blur': null,
    'boundary': null,
    'cached': null,
    'canplay': null,
    'canplaythrough': null,
    'change': null,
    'chargingchange': null,
    'chargingtimechange': null,
    'checking': null,
    'click': null,
    'close': null,
    'complete': null,
    'compositionend': null,
    'compositionstart': null,
    'compositionupdate': null,
    'contextmenu': null,
    'copy': null,
    'cut': null,
    'dblclick': null,
    'devicelight': null,
    'devicemotion': null,
    'deviceorientation': null,
    'deviceproximity': null,
    'dischargingtimechange': null,
    'downloading': null,
    'drag': null,
    'dragend': null,
    'dragenter': null,
    'dragleave': null,
    'dragover': null,
    'dragstart': null,
    'drop': null,
    'durationchange': null,
    'emptied': null,
    'end': null,
    'ended': null,
    'endEvent': null,
    'error': null,
    'focus': null,
    'fullscreenchange': null,
    'fullscreenerror': null,
    'gamepadconnected': null,
    'gamepaddisconnected': null,
    'gotpointercapture': null,
    'hashchange': null,
    'lostpointercapture': null,
    'input': null,
    'invalid': null,
    'keydown': null,
    'keypress': null,
    'keyup': null,
    'languagechange': null,
    'levelchange': null,
    'load': null,
    'loadeddata': null,
    'loadedmetadata': null,
    'loadend': null,
    'loadstart': null,
    'mark': null,
    'message': null,
    'mousedown': null,
    'mouseenter': null,
    'mouseleave': null,
    'mousemove': null,
    'mouseout': null,
    'mouseover': null,
    'mouseup': null,
    'nomatch': null,
    'notificationclick': null,
    'noupdate': null,
    'obsolete': null,
    'offline': null,
    'online': null,
    'open': null,
    'orientationchange': null,
    'pagehide': null,
    'pageshow': null,
    'paste': null,
    'pause': null,
    'pointercancel': null,
    'pointerdown': null,
    'pointerenter': null,
    'pointerleave': null,
    'pointerlockchange': null,
    'pointerlockerror': null,
    'pointermove': null,
    'pointerout': null,
    'pointerover': null,
    'pointerup': null,
    'play': null,
    'playing': null,
    'popstate': null,
    'progress': null,
    'push': null,
    'pushsubscriptionchange': null,
    'ratechange': null,
    'readystatechange': null,
    'repeatEvent': null,
    'reset': null,
    'resize': null,
    'resourcetimingbufferfull': null,
    'result': null,
    'resume': null,
    'scroll': null,
    'seeked': null,
    'seeking': null,
    'select': null,
    'selectstart': null,
    'selectionchange': null,
    'show': null,
    'soundend': null,
    'soundstart': null,
    'speechend': null,
    'speechstart': null,
    'stalled': null,
    'start': null,
    'storage': null,
    'submit': null,
    'success': null,
    'suspend': null,
    'SVGAbort': null,
    'SVGError': null,
    'SVGLoad': null,
    'SVGResize': null,
    'SVGScroll': null,
    'SVGUnload': null,
    'SVGZoom': null,
    'timeout': null,
    'timeupdate': null,
    'touchcancel': null,
    'touchend': null,
    'touchenter': null,
    'touchleave': null,
    'touchmove': null,
    'touchstart': null,
    'transitionend': null,
    'unload': null,
    'updateready': null,
    'upgradeneeded': null,
    'userproximity': null,
    'voiceschanged': null,
    'versionchange': null,
    'visibilitychange': null,
    'volumechange': null,
    'waiting': null,
    'wheel': null
  }

  return eventname => {
    if (typeof es[eventname] === 'undefined')
      return false
    return es[eventname]
  }

}