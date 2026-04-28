javascript:
if (true) {
var paragraph = "TICKLE ME ELMO";
var headertext = "GAAAAAAAYYYYYYY";
  
function run() {
  var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6, h7, h8, h9, header');
  var paragraphs = document.querySelectorAll('p, li, span');
    for (var i = 0; i < paragraphs.length; i++) {
      var item = paragraphs[i];
      item.textContent = (paragraph);
    }
  for (var i = 0; i < headers.length; i++) {
      var item = headers[i];
      item.textContent = (headertext);
    }
  
}
setInterval(run, 200);
}
