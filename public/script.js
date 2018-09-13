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
