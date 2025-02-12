module.exports = function renderPage (content, title) {
  document.open()
  document.write(`
<!DOCTYPE html>
<title>${title}</title>
<meta charset="utf-8"/>
<meta http-equiv="Content-Type" content="text/html charset=utf-8"/>
<link rel="stylesheet" href="hybrid://theme/style.css"/>
<link rel="stylesheet" href="hybrid://theme/highlight.css"/>
${content}
<script src="hybrid://theme/highlight.js"></script>
<script>
  const toAnchor = document.querySelectorAll('h1[id],h2[id],h3[id],h4[id]')

  for(let element of toAnchor) {
    const anchor = document.createElement('a')
    anchor.setAttribute('href', '#' + element.id)
    anchor.setAttribute('class', 'hybrid-header-anchor')
    anchor.innerHTML = element.innerHTML
    element.innerHTML = anchor.outerHTML
  }

  if(window.hljs) hljs.initHighlightingOnLoad()
</script>
`)
}
