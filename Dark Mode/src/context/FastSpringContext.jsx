import { createContext, useContext, useEffect, useRef, useState } from 'react'

const FASTSPRING_SCRIPT_ID = 'fsc-api'
const FASTSPRING_SCRIPT_SRC =
  'https://sbl.onfastspring.com/sbl/1.0.7/fastspring-builder.min.js'

const FastSpringContext = createContext({ isReady: false })

export function FastSpringProvider({ storefront, children }) {
  const [isReady, setIsReady] = useState(false)
  const hasAddedProduct = useRef(false)

  useEffect(() => {
    let cancelled = false
    let intervalId

    setIsReady(false)
    hasAddedProduct.current = false

    // Deferred by a tick so React StrictMode's synchronous mount/cleanup/
    // remount cycle can mark this run cancelled before the script is ever
    // inserted. Once a <script src> starts fetching, removing its node does
    // NOT stop the browser from loading and executing it later — so the
    // only reliable guard is to never insert the doomed instance at all.
    const timeoutId = setTimeout(() => {
      if (cancelled) return

      const script = document.createElement('script')
      script.id = FASTSPRING_SCRIPT_ID
      script.type = 'text/javascript'
      script.src = FASTSPRING_SCRIPT_SRC
      script.dataset.storefront = storefront
      document.head.appendChild(script)

      // The SBL script reads data-storefront once at load time and caches
      // it internally, so switching storefronts means tearing this script
      // down and letting a fresh instance re-read the new value. Poll for
      // readiness rather than relying on onload, which a StrictMode
      // remount could otherwise strip before it fires.
      intervalId = setInterval(() => {
        if (window.fastspring?.builder) {
          clearInterval(intervalId)
          if (!hasAddedProduct.current) {
            window.fastspring.builder.add('demo-product-1')
            hasAddedProduct.current = true
          }
          setIsReady(true)
        }
      }, 100)
    }, 0)

    return () => {
      cancelled = true
      clearTimeout(timeoutId)
      clearInterval(intervalId)
      document.getElementById(FASTSPRING_SCRIPT_ID)?.remove()
      delete window.fastspring
    }
  }, [storefront])

  return (
    <FastSpringContext.Provider value={{ isReady }}>
      {children}
    </FastSpringContext.Provider>
  )
}

export function useFastSpring() {
  return useContext(FastSpringContext)
}
