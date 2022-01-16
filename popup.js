document.addEventListener("DOMContentLoaded", documentEvents, false);



function documentEvents() {
  const clearBtn = document.getElementById("clear");
  const submitBtn = document.getElementById("submit");
  var textSize = document.getElementById("size").value;
  document.getElementById("outputSize").innerHTML = textSize;

  submitBtn.addEventListener("click", () => {
   
    });

   

  clearBtn.addEventListener("click", () => {
    });
}

function convertIntoCss(url) {
  const css = `html body { 
        background: url(${url}); \n
        image-rendering: crisp-edges; \n        
        image-rendering: -webkit-optimize-contrast; \n
        background-size:     cover; \n
        background-repeat:   no-repeat; \n
        background-position: center center; \n    
      }\n`;
  return css;
}
