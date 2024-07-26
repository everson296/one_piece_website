
const dados = [
    {
        "id": '1',
        "nome": 'monkey d. luffy',
        "subNome": 'luffy chapéu de palha',
        "nomeSimples": 'luffy',
        "nomeBandeira": 'luffy.png',
        "forca": '80',
        "velocidade": '80',
        "akumaNoMi": 'gomu gomu no mi',
        "recompensa": '4.600.000.000',
    },
    
    {
        "id": '2',
        "nome": 'Roronoa zoro',
        "subNome": 'Caçador de Piratas',
        "nomeSimples": 'zoro',
        "nomeBandeira": 'zoro.png',
        "forca": '80',
        "velocidade": '80',
        "akumaNoMi": 'nenhuma',
        "recompensa": '1.500.000.000',
    },
    
    {
        "id": '3',
        "nome": 'god usopp',
        "subNome": 'Rei dos Atiradores Atiradores',
        "nomeSimples": 'usopp',
        "nomeBandeira": 'usopp.png',
        "forca": '30',
        "velocidade": '50',
        "akumaNoMi": 'nenhuma',
        "recompensa": '500.000.000',
    },
    
    {
        "id": '4',
        "nome": 'nami',
        "subNome": 'gata ladra',
        "nomeSimples": 'nami',
        "nomeBandeira": 'nami.png',
        "forca": '20',
        "velocidade": '40',
        "akumaNoMi": 'nenhuma',
        "recompensa": '300.000.000',
    },
    
    {
        "id": '5',
        "nome": 'Vinsmoke sanji',
        "subNome": 'oerna preta',
        "nomeSimples": 'sanji',
        "nomeBandeira": 'sanji.png',
        "forca": '70',
        "velocidade": '80',
        "akumaNoMi": 'nenhuma',
        "recompensa": '1.500.000.000',
    },
    
    {
        "id": '6',
        "nome": 'Tony Tony Chopper',
        "subNome": 'Amante de Algodão Doce',
        "nomeSimples": 'chopper',
        "nomeBandeira": 'chopper.png',
        "forca": '50',
        "velocidade": '50',
        "akumaNoMi": 'Hito Hito no Mi',
        "recompensa": '500',
    },
    
    {
        "id": '7',
        "nome": 'nico robin',
        "subNome": 'Criança Demônio',
        "nomeSimples": 'robin',
        "nomeBandeira": 'robin.png',
        "forca": '50',
        "velocidade": '50',
        "akumaNoMi": 'Hana Hana no Mi',
        "recompensa": '1.000.000.000',
    },
    
    {
        "id": '8',
        "nome": 'franky',
        "subNome": 'homem de ferro',
        "nomeSimples": 'franky',
        "nomeBandeira": 'franky.png',
        "forca": '60',
        "velocidade": '50',
        "akumaNoMi": 'nenhuma',
        "recompensa": '300.000.000',
    },
    
    {
        "id": '9',
        "nome": 'brook',
        "subNome": 'brook sussurante',
        "nomeSimples": 'brook',
        "nomeBandeira": 'brook.png',
        "forca": '60',
        "velocidade": '60',
        "akumaNoMi": 'Yomi Yomi no Mi',
        "recompensa": '200.000.000',
    },
    
    {
        "id": '10',
        "nome": 'jinbe',
        "subNome": 'cavaleiro do mar',
        "nomeSimples": 'jinbe',
        "nomeBandeira": 'jinbe.png',
        "forca": '70',
        "velocidade": '60',
        "akumaNoMi": 'nenhuma',
        "recompensa": '800.00.000',
    },
    
    {
        "id": '11',
        "nome": 'yamato',
        "subNome": 'kozuki oden',
        "nomeSimples": 'yamato',
        "nomeBandeira": 'yamato.png',
        "forca": '70',
        "velocidade": '70',
        "akumaNoMi": 'nenhuma',
        "recompensa": '600.000.000',
    },
    
    
]

const backgroundColor = document.getElementById('images');
const imgChild = document.getElementById('imgChild');
const imgTeenager = document.getElementById('imgTeenager');
const imgAdult = document.getElementById('imgAdult');
const imgBandeira = document.getElementById('bandeira');
const imgMain = document.getElementById('imgMain');
const namePersonagem = document.getElementById('name');
const subTitle = document.getElementById('subTitle');
const fruit = document.getElementById('fruit');
const reward = document.getElementById('reward');
const powerBar = document.getElementById('powerBar');
const speedBar = document.getElementById('speedBar');
let cont = 0;

const createCard = (dados) =>{
    backgroundColor.style.background = 'linear-gradient(var(--'+dados[cont].nomeSimples+'))';
    imgChild.src = 'img/personagens/'+dados[cont].nomeSimples+'/child.png';
    imgTeenager.src = 'img/personagens/'+dados[cont].nomeSimples+'/teenager.png';
    imgAdult.src = 'img/personagens/'+dados[cont].nomeSimples+'/adult.png';
    imgBandeira.src = 'img/bandeiras/'+dados[cont].nomeBandeira;
    imgMain.src = 'img/personagens/'+dados[cont].nomeSimples+'/wallpaper.png';
    namePersonagem.innerHTML = dados[cont].nome
    subTitle.innerHTML = dados[cont].subNome
    powerBar.style.setProperty('--progress', dados[cont].forca)
    speedBar.style.setProperty('--progress', dados[cont].velocidade)
    fruit.innerHTML = dados[cont].akumaNoMi
    reward.innerHTML = dados[cont].recompensa
    

    imgChild.style.left = '-100px'
    imgTeenager.style.left = '-100px'
    imgAdult.style.left = '-100px'
    imgMain.style.left = '-200px'
    namePersonagem.style.left = '-100px'
    subTitle.style.left = '-10px'
    fruit.style.left = '-100px'
    reward.style.left = '-100px'

    imgChild.classList.add('toRightAnimate')
    imgTeenager.classList.add('toRightAnimate')
    imgAdult.classList.add('toRightAnimate')
    imgMain.classList.add('toRightAnimate')
    namePersonagem.classList.add('toRightAnimate')
    subTitle.classList.add('toRightSubTitle')
    fruit.classList.add('toRightAnimate')
    reward.classList.add('toRightAnimate')

    setTimeout(()=>{
        
        imgChild.style.left = 0
        imgTeenager.style.left = 0
        imgAdult.style.left = 0
        imgMain.style.left = 0
        namePersonagem.style.left = 0
        subTitle.style.left = '30%'
        fruit.style.left = 0
        reward.style.left = 0

        imgChild.classList.remove('toRightAnimate')
        imgTeenager.classList.remove('toRightAnimate')
        imgAdult.classList.remove('toRightAnimate')
        imgMain.classList.remove('toRightAnimate')
        namePersonagem.classList.remove('toRightAnimate')
        subTitle.classList.remove('toRightSubTitle')
        fruit.classList.remove('toRightAnimate')
        reward.classList.remove('toRightAnimate')
    }, 550)
}

createCard(dados)
document.getElementById('prev').addEventListener('click', () => {
    if(cont <= 0){
        cont = dados.length - 1;
    }else{
        cont--
    }
    createCard(dados)
})

document.getElementById('next').addEventListener('click', () => {
    if(cont >= dados.length - 1){
        cont = 0;
    }else{
        cont++
    }
    createCard(dados)
})
