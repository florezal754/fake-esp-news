const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function showHideImage(){ 
  //create an object reference to the div containing images 
  var oImageDiv=document.getElementById('myimageDiv') 
  //set display to inline if currently none, otherwise to none 
  oImageDiv.style.display=(oImageDiv.style.display=='none')?'inline':'none' 
} 

function showHideVideo(){ 
  //create an object reference to the div containing images 
  var oVideoDiv=document.getElementById('myvideoDiv') 
  //set display to inline if currently none, otherwise to none 
  oVideoDiv.style.display=(oVideoDiv.style.display=='none')?'inline':'none' 
} 


/*script de web*/

$(document).ready(function()
{
    $("#clasi").click(function()
    {
        var noticia = $("#noticia").val();

        $.ajax(
{
                    method: "GET",
                    url: "http://localhost:5000/clasificar-noticia",
                    dataType: 'text',
                    data: {text: noticia},
                    success: function(result)
                    {
      
                        var resultado = JSON.parse(result);
                        if(resultado.Resultado[0]==0)
                        {
                            $('#result').html("<p>Noticia verdadera</p>" + "<p>Confianza: " + (resultado.Confianza[0][0] * 100).toFixed(2) + "%</p>")
                        }
                        else
                        {
                            if(resultado.Resultado[0]==1)
                            {
                                $('#result').html("<p>Noticia falsa</p>" +"<p>Confianza: " + (resultado.Confianza[0][1] * 100).toFixed(2) + "%</p>")
                            }
                        } 
                    }
});
    });

});
