const googleTagManager = {
  head: `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WDN6LH');</script>`,
  body: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDN6LH"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
}

export default ({ head, styles, scripts, mainBundle, root }) => `
<!doctype html>
<html ${head.htmlAttributes.toString()}>
  <head>
    ${head.title.toString()}
    ${head.meta.toString()}
    ${head.link.toString()}
    ${head.script.toString()}
    ${styles}
    <link rel="preload" as="font" type="font/woff2" crossorigin href="https://fonts.gstatic.com/s/atma/v2/4VYRJUTmCFM7TxNGjTCblw.woff2">
    <link rel="preload" as="font" type="font/woff2" crossorigin href="https://fonts.gstatic.com/s/robotomono/v4/hMqPNLsu_dywMa4C_DEpY44P5ICox8Kq3LLUNMylGO4.woff2">
    ${scripts.reduce(
      (string, file) =>
        (string += `<link rel="preload" as="script" href="/css-puns/${file}">`),
      ""
    )}
    ${googleTagManager.head}
  </head>
  <body>
    ${googleTagManager.body}
    <div id="root">${root}</div>
    <script src="/css-puns/${mainBundle}" defer></script>
  </body>
</html>
`
