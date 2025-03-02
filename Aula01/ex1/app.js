const conteudos = [
    [
        "Grécia me lembra filosofia",
        "Japão me lembra o goku",
        "Coreia do sul me lembra kpop"
    ],
    [
        "Alvorada RS me lembra ninguém",
        "Itália me lembra pizza",
        "Florianópolis me lembra praia"
    ],
    [
        "Diamantinha me lembra nataia",
        "Ouro Branco me lembra leveza",
        "Ouro Preto me lembra roles doidos"
    ]
];

const btnTab1 = document.getElementById('btn-tab1');
const btnTab2 = document.getElementById('btn-tab2');
const btnTab3 = document.getElementById('btn-tab3');
const content = document.getElementById('content');

function displayContent(items) {
    let listaConteudo = "";
    for(const item of items) {
        listaConteudo += `<li>${item}</li>`
    }
    const lista = document.createElement('ul')
    content.innerHTML = listaConteudo;
    content.append(lista)
}

function activateButton(btn) {
    btnTab1.className = "";
    btnTab2.className = "";
    btnTab3.className = "";
    btn.className = 'active';
    
}

function handleClick(event) {
    const btnId = event.target.id;
    activateButton(event.target);

    if(btnId === 'btn-tab1') {
        displayContent(conteudos[0]);
    } else if (btnId === 'btn-tab2') {
        displayContent(conteudos[1]);
    } else {
        displayContent(conteudos[2])
    }
}

displayContent(conteudos[0]);

btnTab1.addEventListener('click', handleClick)
btnTab2.addEventListener('click', handleClick)
btnTab3.addEventListener('click', handleClick)