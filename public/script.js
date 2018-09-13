window.onload = function() {

    var pad = document.getElementById('pad');
    var markdownArea = document.getElementById('markdown');

    var convertTextAreaToMarkdown = function(){
        var markdownText = pad.value;
        
        $.ajax({
            type:"POST",
            url:"/service",
            data : { content : markdownText }
        }).done((result)=>{
            markdownArea.innerHTML = result;    
        });   
    };

    pad.addEventListener('input', convertTextAreaToMarkdown);

    convertTextAreaToMarkdown();
};

let downloadMarkDown = ()=>{
    let htmlCont = $("#markdown").html();
    // let htmlCont = $("#pad").val();
    /*
        By markdown i believe you wanted the contents inside div#markdown
        though if you want the content inside div#pad
        change let htmlCont = $("#markdown").html();
        to let htmlCont = $("#pad").val();
    */
    download(`${new Date()}sample.txt`,htmlCont);
}
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}