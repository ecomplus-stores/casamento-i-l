// Add your custom JavaScript for storefront pages here.
document.getElementById('c-62c9df90eb859112167f9c39').href = 'https://lista.camicado.com.br/igorelaura'
document.getElementById('c-62e69598eb859112169ed421').href = '#o-pedido'
document.getElementById('c-62e695eaeb859112169ed48d').href = '#os-noivos'
document.getElementById('c-62e69edfeb859112169edb46').href = '#os-padrinhos'
document.getElementById('c-62e69f87eb859112169edbea').href = '#o-local'
document.getElementById('c-62c9df90eb859112167f9c39').target = '_blank'
document.getElementById('c-630036c7f8d4267de7105fc6').href = '/pages/dicas-do-casal'

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

