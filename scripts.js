const formAdd = document.getElementById("formAdd");
formAdd.addEventListener("submit", function (event) {
    event.preventDefault();

    const msgInput = document.getElementById("campoMensagem");

    if (msgInput.value.trim() != "")
    {
        const nNovaMensagem = document.createElement("div");

        const nTitulo = document.createElement("h3");
        nTitulo.innerText = "Você diz:";
        nNovaMensagem.appendChild(nTitulo);

        const nMensagem = document.createElement("h4");
        nMensagem.innerText = msgInput.value;
        nNovaMensagem.appendChild(nMensagem);

        const mensagemFinal = document.querySelector("#mensagemEnviada")
        mensagemFinal.appendChild(nNovaMensagem)

        // Feito isso para a barra de rolagem acompanhar o texto
        const chat = document.querySelector(".chat");
        chat.scrollTop = chat.scrollHeight;

        msgInput.value = "";
    }
});