const balao = document.querySelector('#balaozinho');
const regiao = document.querySelectorAll('.marcacao');
const botao = document.querySelector('#definir-marcacao');
let x = document.querySelector('#marcacao-x');
var y = document.querySelector('#marcacao-y');
var larg = document.querySelector('#marcacao-largura');
var alt = document.querySelector('#marcacao-altura');

botao.addEventListener('click', clicou);
balao.style.display = 'none';

for(regiaoU of regiao){
    regiaoU.addEventListener('mouseover',entraRegiao);
    regiaoU.addEventListener('mouseout',saiRegiao);
    regiaoU.style.cursor = 'help';
}

function entraRegiao(e){
    balao.style.display = '';
    let selecionado = e.currentTarget;
    balao.innerHTML="<h2>"+selecionado.dataset.titulo+"</h2>" 
    +"<p>"+selecionado.dataset.conteudo+"</p>";
    selecionado.addEventListener('mousemove', (e) =>{
        balao.style.top = e.pageY+'px';
        balao.style.left = e.pageX+'px';
    });
}
function saiRegiao() {
    balao.innerHTML = '';
    balao.style.display = 'none';
}
function clicou() {
    regiao[0].style.transition ='all 200ms ease';
    regiao[0].style.left = x.value+'px';
    regiao[0].style.top = y.value+'px';
    regiao[0].style.width = larg.value+'px';
    regiao[0].style.height = alt.value+'px';
}
