
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.alert("Formulário submetido com sucesso!");
    form.reset(); 
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-sugerir");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.alert("Sugestão de receita, submetida com sucesso!");
    form.reset(); 
  });
});

function openHref(url){
  location.href=url;
}


function ajustarAltura(iframeId, px) {
  const iframe = document.getElementsByName(iframeId)[0];
  iframe.onload = function () {
    try {
      const altura = iframe.contentWindow.document.body.scrollHeight;
      iframe.style.height = altura + px + 'px';
    } catch (error) {
      console.warn("Erro ao ajustar altura do iframe:", error);
    }
  };
}