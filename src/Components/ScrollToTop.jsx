/**CORE LIBRARY IMPORTS */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Still keep the original behavior of scrolling up when a route changes (just in case)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Toggle visibility of the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  23:03: 26.623 Running build in Washington, D.C., USA(East) – iad1
  23:03: 26.624 Build machine configuration: 2 cores, 8 GB
  23:03: 26.730 Cloning github.com / IftikharDev / Agency(Branch: main, Commit: 1e56ebd)
  23:03: 26.731 Previous build caches not available.
23:03: 27.840 Cloning completed: 1.110s
  23:03: 28.121 Running "vercel build"
  23:03: 28.139 Vercel CLI 54.21.1
  23:03: 28.798 Installing dependencies...
  23:03: 32.394 npm warn deprecated whatwg - encoding@1.0.5: Use @exodus/bytes instead for a more spec-conformant and faster implementation
  23:03: 32.413 npm warn deprecated w3c - hr - time@1.0.2: Use your platform's native performance.now() and performance.timeOrigin.
  23:03: 32.719 npm warn deprecated stable @0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated.See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
  23:03: 32.873 npm warn deprecated rimraf @3.0.2: Rimraf versions prior to v4 are no longer supported
  23:03: 32.922 npm warn deprecated sourcemap - codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
  23:03: 32.924 npm warn deprecated rollup - plugin - terser@7.0.2: This package has been deprecated and is no longer maintained.Please use @rollup/plugin-terser
  23:03: 33.282 npm warn deprecated q @1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises.They can almost certainly migrate to the native JavaScript promise now.Thank you literally everyone for joining me in this bet against the odds.Be excellent to each other.
23:03: 33.283 npm warn deprecated
  23:03: 33.283 npm warn deprecated(For a CapTP with native promises, see @endo/eventual-send and @endo/captp)
  23:03: 33.408 npm warn deprecated workbox - cacheable - response@6.6.0: workbox - background - sync@6.6.0
  23:03: 33.639 npm warn deprecated workbox - google - analytics@6.6.0: It is not compatible with newer versions of GA starting with v4, as long as you are using GAv3 it should be ok, but the package is not longer being maintained
  23:03: 34.268 npm warn deprecated inflight @1.0.6: This module is not supported, and leaks memory.Do not use it.Check out lru - cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
23:03: 34.494 npm warn deprecated glob @7.2.3: Glob versions prior to v9 are no longer supported
  23:03: 35.194 npm warn deprecated domexception @2.0.1: Use your platform's native DOMException instead
  23:03: 35.771 npm warn deprecated abab @2.0.6: Use your platform's native atob() and btoa() methods instead
  23:03: 36.422 npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config - array instead
  23:03: 36.477 npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object - schema instead
  23:03: 37.015 npm warn deprecated @babel/plugin-proposal-private-methods@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin - transform - private - methods instead.
23:03: 37.016 npm warn deprecated @babel/plugin-proposal-nullish-coalescing-operator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin - transform - nullish - coalescing - operator instead.
23:03: 37.033 npm warn deprecated @babel/plugin-proposal-optional-chaining@7.21.0: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin - transform - optional - chaining instead.
23:03: 37.034 npm warn deprecated @babel/plugin-proposal-numeric-separator@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin - transform - numeric - separator instead.
23:03: 37.035 npm warn deprecated @babel/plugin-proposal-class-properties@7.18.6: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin - transform - class- properties instead.
23:03: 37.837 npm warn deprecated @babel/plugin-proposal-private-property-in-object@7.21.11: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin - transform - private - property -in -object instead.
23:03: 38.043 npm warn deprecated svgo @1.3.2: This SVGO version is no longer supported.Upgrade to v2.x.x.
23:03: 38.147 npm warn deprecated source - map@0.8.0 - beta.0: The work that was done in this beta branch won't be included in future versions
  23:03: 41.120 npm warn deprecated eslint @8.57.1: This version is no longer supported.Please see https://eslint.org/version-support for other options.
  23:03: 43.319
  23:03: 43.320 added 1361 packages in 14s
  23:03: 43.320
  23:03: 43.321 268 packages are looking for funding
23:03: 43.321   run `npm fund` for details
23:03: 43.323 npm notice
  23:03: 43.323 npm notice New minor version of npm available! 11.12.1 -> 11.18.0
  23:03: 43.323 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.18.0
  23:03: 43.323 npm notice To update run: npm install - g npm @11.18.0
  23:03: 43.324 npm notice
  23:03: 43.455 Running "npm run build"
  23:03: 43.574
  23:03: 43.574 > digicore - tech - company - based - theme@0.1.0 build
  23:03: 43.574 > react - scripts build
  23:03: 43.574
  23:03: 44.489(node: 172)[DEP0176] DeprecationWarning: fs.F_OK is deprecated, use fs.constants.F_OK instead
  23:03: 44.490(Use`node --trace-deprecation ...` to show where the warning was created)
  23:03: 44.531 Creating an optimized production build...
  23:03: 44.651 Browserslist: browsers data(caniuse - lite) is 7 months old.Please run:
  23:03: 44.652   npx update - browserslist - db@latest
  23:03: 44.652   Why you should do it regularly: https://github.com/browserslist/update-db#readme
  23:04: 13.697 Browserslist: browsers data(caniuse - lite) is 7 months old.Please run:
  23:04: 13.698   npx update - browserslist - db@latest
  23:04: 13.698   Why you should do it regularly: https://github.com/browserslist/update-db#readme
  23:04: 15.438
  23:04: 15.439 Treating warnings as errors because process.env.CI = true.
23:04: 15.439 Most CI servers set it automatically.
23:04: 15.439
  23:04: 15.440 Failed to compile.
23:04: 15.440
  23:04: 15.440[eslint]
  23:04: 15.441 src / Components / Header.jsx
  23:04: 15.441   Line 3: 10: 'Link' is defined but never used  no - unused - vars
  23:04: 15.441
  23:04: 15.441 src / Pages / Blog.jsx
  23:04: 15.441   Line 60: 27:  The href attribute requires a valid value to be accessible.Provide a valid, navigable address as the href value.If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
  23:04: 15.441
  23:04: 15.441
  23:04: 15.543 Error: Command "npm run build" exited with 1
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(0, 194, 255, 0.4)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "linear-gradient(90deg, #0D52AD, #00C2FF)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            zIndex: 9999,
          }}
          aria-label="Scroll to top"
        >
          <svg
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
