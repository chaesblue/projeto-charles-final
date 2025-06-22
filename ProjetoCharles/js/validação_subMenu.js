

  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });

    // Fecha o menu ao clicar em um link
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
      });
    });
  });

  
  let currentFontSize = 16; // tamanho inicial em pixels
  let currentFontSize_title = 30; // tamanho inicial em pixels para os titulos

  function adjustFontSize(change) {
    currentFontSize += change;
    currentFontSize_title += change;

    // Limite mínimo e máximo
    if (currentFontSize < 10) currentFontSize = 10;
    if (currentFontSize > 26) currentFontSize = 26;
    // Limite minimo e maximo titulo
    if (currentFontSize_title < 20) currentFontSize_title = 20;
    if (currentFontSize_title > 40) currentFontSize_title = 40;

    document.body.style.fontSize = currentFontSize + "px";
    document.querySelectorAll("a").forEach((el) => {
      el.style.fontSize = currentFontSize + "px";
    });
    document.querySelectorAll("button").forEach((el) => {
      el.style.fontSize = currentFontSize + "px";
    });
    document.querySelectorAll("p").forEach((el) => {
      el.style.fontSize = currentFontSize + "px";
    });
    document.querySelectorAll("input").forEach((el) => {
      el.style.fontSize = currentFontSize + "px";
    });


    document.querySelectorAll("h1").forEach((el) => {
      el.style.fontSize = currentFontSize_title + "px";
    });
    document.querySelectorAll("h2").forEach((el) => {
      el.style.fontSize = currentFontSize_title + "px";
    });
    document.querySelectorAll("h3").forEach((el) => {
      el.style.fontSize = currentFontSize_title + "px";
    });
    document.querySelectorAll("h4").forEach((el) => {
      el.style.fontSize = currentFontSize_title + "px";
    });
    document.querySelectorAll("h5").forEach((el) => {
      el.style.fontSize = currentFontSize_title + "px";
    });
  }

  //função validação campos cadastro
  const cadastro = document.getElementById('cadastro');//pagando forms do cadastro
  const campos =document.querySelectorAll('.required');// elementos necessários
  const spans = document.querySelectorAll('.span-required');//spans do elementos necessarios
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //regex email
  const numberRegex =  /^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/;
  const cpfRegex=/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;

//função verifica se todos os campos estão corretos
 cadastro.addEventListener('submit', (event) => {
  let formValido = true;

  if (campos[0].value.length < 3) {
    setError(0);
    formValido = false;
  } else {
    removeError(0);
  }

  if (!numberRegex.test(campos[1].value)) {
    setError(1);
    formValido = false;
  } else {
    removeError(1);
  }

  if (!numberRegex.test(campos[2].value)) {
    setError(2);
    formValido = false;
  } else {
    removeError(2);
  }

  if (!cpfRegex.test(campos[3].value)) {
    setError(3);
    formValido = false;
  } else {
    removeError(3);
  }

  if (!emailRegex.test(campos[4].value)) {
    setError(4);
    formValido = false;
  } else {
    removeError(4);
  }

  if (campos[5].value.length < 6) {
    setError(5);
    formValido = false;
  } else {
    removeError(5);
  }

  if (campos[6].value !== campos[5].value) {
    setError(6);
    formValido = false;
  } else {
    removeError(6);
  }

  //  Impede o envio apenas se houver erro e envia parao  local storage caso esteja correto
  if (!formValido) {

     event.preventDefault();

  }else{
    const dadosCadastro = {
        email: campos[4].value,
        senha: campos[5].value
      }
        localStorage.setItem('cadastroUsuario', JSON.stringify(dadosCadastro));
        setTimeout(() => {
      window.location.href = "../login.html"; // redireciona após 500ms
    }, 500);
  
  }
});

  //função  insere mensagem de erro
  function setError(index){
    campos[index].style.border ='2px solid rgb(252, 101, 101)';
    spans[index].style.display= 'block';
  }
//função remove o erro
function removeError(index){
      campos[index].style.border= 'none';
      spans[index].style.display= 'none';
}


//funções que capturam o erro
  function namevalidate(){
    if(campos[0].value.length < 3){

      setError(0)

    }else{
      
      removeError(0)

    }
  }

  function numbervalidate(index){
    if(!numberRegex.test(campos[index].value)){

      setError(index)
      

    }else{

      
      removeError(index)
      
    }

  }

  function cpfvalidate(){
    if(!cpfRegex.test(campos[3].value)){
        setError(3)
    }else{
      removeError(3)
    }
  }

  function emailvalidate(){
    if(!emailRegex.test(campos[4].value)){
        setError(4)
    }else{
      removeError(4)
    }
  }
  
  function senhavalidate(){
    if(campos[5].value.length < 6){

      setError(5)

    }else{
      
      removeError(5)

    }
  }

  function senhaconfirmation(){
    if(campos[6].value!= campos[5].value){
      setError(6)
      
    }else{
      removeError(6)
      
    }
  }