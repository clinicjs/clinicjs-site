// Stores each attach scrollChange function
const scrollListeners = {}
// Flags registration of scroll change DOM event to ensure it happens only once
let hasRegisteredScrollChange = false

// Disables scrolling on the body
export const disableScroll = () => setBodyOverflow('hidden')

// Enables scrolling on the body
export const enableScroll = () => setBodyOverflow('auto')

// Attaches scroll change handler
export const onScrollChange = func => {
  initScrollChange()

  scrollListeners[func] = func

  return () => delete scrollListeners[func]
}

// Binds scroll event used to handle scroll changes
const initScrollChange = () => {
  if (hasRegisteredScrollChange) {
    return
  }

  let lastScrollOffset
  let lastScrollDirection
  let canEmitScrollChangeEvent = true
  let scrollThrottleTimeoutId

  window.addEventListener('scroll', e => {
    if (!lastScrollOffset) {
      lastScrollOffset = getScrollOffset()
    }

    const scrollOffset = getScrollOffset()
    const direction = scrollOffset < lastScrollOffset ? 'down' : 'up'

    // Prevents offset values being set when no listeners are attached
    if (!Object.keys(scrollListeners).length) {
      lastScrollOffset = scrollOffset
      lastScrollDirection = direction

      return
    }

    // Avoid emmitting continually unless changed
    if (canEmitScrollChangeEvent || lastScrollDirection !== direction) {
      Object.keys(scrollListeners).forEach(id =>
        scrollListeners[id]({ e, direction })
      )

      canEmitScrollChangeEvent = false
    }

    clearTimeout(scrollThrottleTimeoutId)

    // Clear flag to allow event broadcast if appropriate timeout is observed
    scrollThrottleTimeoutId = setTimeout(
      () => (canEmitScrollChangeEvent = true),
      250
    )

    lastScrollOffset = scrollOffset
    lastScrollDirection = direction
  })

  hasRegisteredScrollChange = true
}

// Sets the body element overflow style
const setBodyOverflow = val => (window.document.body.style.overflow = val)

const getScrollOffset = () => {
  const bodyRect = window.document.body.getBoundingClientRect()

  // Returns a constant value regardless of body height.
  // +- 1 tolerance added to offset irregular Mac behaviour
  return Math.ceil(
    bodyRect.height + Math.abs(bodyRect.y) === 1 ? 0 : bodyRect.y
  )
}
