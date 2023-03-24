//import Document,  { Head, Html, Main, NextScript } from 'next/document'
import { Head, Html, Main, NextScript } from 'next/document'

const themeScript = `

  <!--- INTERCOM -->
  window.intercomSettings = {
      app_id: "o8nvluwx",
      custom_launcher_selector:'#intercom'
  };

  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/o8nvluwx';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

  <!--- WE GLOT -->
  Weglot.initialize({ api_key: 'wg_63225af9b64f15f42e8baf7df8a6087c2' });


  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

  function updateTheme(theme) {
    theme = theme ?? window.localStorage.theme ?? 'system'

    if (theme === 'dark' || (theme === 'system' && isDarkMode.matches)) {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light' || (theme === 'system' && !isDarkMode.matches)) {
      document.documentElement.classList.remove('dark')
    }

    return theme
  }

  function updateThemeWithoutTransitions(theme) {
    updateTheme(theme)
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  document.documentElement.setAttribute('data-theme', updateTheme())

  new MutationObserver(([{ oldValue }]) => {
    let newValue = document.documentElement.getAttribute('data-theme')
    if (newValue !== oldValue) {
      try {
        window.localStorage.setItem('theme', newValue)
      } catch {}
      updateThemeWithoutTransitions(newValue)
    }
  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

  isDarkMode.addEventListener('change', () => updateThemeWithoutTransitions())
`

export default function Document() {

  return (
    <Html className="antialiased [font-feature-settings:'ss01']" lang="en">
      <Head>
        <script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js" />
        <script defer data-domain="guides.advigator.com" src="https://plausible.io/js/script.js"></script>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>

      <body className="bg-white dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


// class MyDocument extends Document {

//   static async getInitialProps(ctx) {
//     const originalRenderPage = ctx.renderPage


//     console.log("Locale: ", ctx.locale)
  

//     // Run the React rendering logic synchronously
//     ctx.renderPage = () =>
//       originalRenderPage({
//         // Useful for wrapping the whole react tree
//         enhanceApp: (App) => (props) => {
//             let pageProps = props.pageProps;

//             //console.log("props", pageProps.markdoc.file)
//             return <App {...props} />
//         },
//         // Useful for wrapping in a per-page basis
//         enhanceComponent: (Component) => Component,
//       })

//     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
//     const initialProps = await Document.getInitialProps(ctx)


//     return initialProps
//   }

//   render() {

//     return (
//       <Html className="antialiased [font-feature-settings:'ss01']" lang="en">
//         <Head>
//           <script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js" />
//           <script dangerouslySetInnerHTML={{ __html: themeScript }} />
//           <script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="84362880-a9b6-4031-8dd5-59099934f7bb" async></script>
//         </Head>

//         <body className="bg-white dark:bg-slate-900">
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )

//   }
// }

// export default MyDocument