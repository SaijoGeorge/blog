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
  </head>
  <body>
    <div id="root">${root}</div>
    <script src="/css-puns/${mainBundle}" defer></script>
  </body>
</html>
`
