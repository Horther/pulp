document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');


    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            console.log(botao);
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();

            aba.classList.add('scenes__container--is-active');
            removeBotaoAtivo();

            botao.target.classList.add('scenes__tabs__button--is-active');
        })
    }

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i=0;i<buttons.length; i++){
        buttons[i].classList.remove('scenes__tabs__button--is-active');
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for(let i=0;i<tabsContainer.length; i++){
        tabsContainer[i].classList.remove('scenes__container--is-active');
    }
}



})