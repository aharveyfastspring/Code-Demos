import { useEffect, useState } from 'react'
import { FastSpringProvider } from './context/FastSpringContext'
import './App.css'

const STOREFRONTS = {
  light: 'aharvey.test.onfastspring.com/embedded-light',
  dark: 'aharvey.test.onfastspring.com/embedded-dark',
}

function App() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <FastSpringProvider storefront={STOREFRONTS[theme]}>
      <header className="app-header">
        <div className="brand">
          <svg className="brand-mark" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="3.5" width="14" height="5" rx="2.5" transform="rotate(-25 12 6)" fill="#ffb073" />
            <rect x="5" y="9.5" width="14" height="5" rx="2.5" transform="rotate(-25 12 12)" fill="#ff9a56" />
            <rect x="5" y="15.5" width="14" height="5" rx="2.5" transform="rotate(-25 12 18)" fill="#f2723a" />
          </svg>
          Dark Mode Toggle
        </div>
        <button
          type="button"
          className="theme-switch"
          role="switch"
          aria-checked={isDark}
          aria-label="Toggle dark mode"
          onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
        >
          <svg className="icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
          </svg>
          <svg className="icon moon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 14.5a8.5 8.5 0 1 1-9-11 7 7 0 0 0 9 11z"></path>
          </svg>
          <span className="thumb"></span>
        </button>
      </header>
      <div
        key={theme}
        id="fsc-embedded-checkout-container"
        style={{ width: '800px' }}
      >
        {/* This image will be the new checkout loading image */}
        <div id="fsc-embedded-checkout-skeleton" className="customloadingAnimation"></div>

        {/* Hide the skeleton loader */}
        <iframe
          id="fsc-embedded-checkout-skeleton-custom"
          name="fsc-embedded-checkout-skeleton-custom"
          width="0px"
          height="0%"
          frameBorder="0"
          style={{ display: 'none' }}
          src="https://sbl.onfastspring.com/sbl/1.0.5/skeleton.html">
        </iframe>
      </div>
    </FastSpringProvider>
  )
}

export default App
