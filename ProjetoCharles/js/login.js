

const spans = document.querySelectorAll(".span-required")
const spanCorrect = document.querySelectorAll(".span-correct")
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // impede recarregamento da página

  const emailInput = document.getElementById('loginEmail').value.trim();
  const senhaInput = document.getElementById('loginSenha').value.trim();

  // pega os dados salvos no localStorage
  const dadosSalvos = JSON.parse(localStorage.getItem('cadastroUsuario'));

  // verifica se o usuário existe
  if (dadosSalvos && dadosSalvos.email === emailInput && dadosSalvos.senha === senhaInput) {
    removeError
    // Redireciona para a página principal 
    setTimeout(() => {
  window.location.href = "../index.html";
    }, 1000);
    removeError()

  } else {
    setError()
  }
});


//função  insere mensagem de erro
  function setError(){
    document.querySelectorAll('.required').forEach((el) => {
        el.style.border ='2px solid rgb(252, 101, 101)';
    });
    spans.forEach((el) => {
      el.style.display= 'block';
    });
  }
//função remove o erro
function removeError(){
      document.querySelectorAll('.required').forEach((el) => {
        el.style.display='none';
    });
    spans.forEach((el) => {
      el.style.display= 'none';
    });
    document.querySelector('.span-correct').style.display='block';
}
