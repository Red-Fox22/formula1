let des = document.getElementById('des').getContext('2d')

let carro = new Carro(100,500,80,80,'green')
let c2  = new Carro2(400,-40,80,80,'orange')
let c3  = new Carro2(200,-280,80,80,'blue')
let ee  = new Estrada(2,2,10,696,'yellow')
let ed  = new Estrada(488,2,10,696,'yellow')
let ec1 = new Estrada(246,10,10,80,'yellow')
let ec2 = new Estrada(246,150,10,80,'yellow')
let ec3 = new Estrada(246,290,10,80,'yellow')
let ec4 = new Estrada(246,430,10,80,'yellow')
let ec5 = new Estrada(246,570,10,80,'yellow')
let ec6 = new Estrada(246,690,10,80,'yellow')
let ec7 = new Estrada(246,810,10,80,'yellow')

let t1 = new Text()
let t2 = new Text()

document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    if(e.key === 'a'){
        carro.dir -= 40
    }else if(e.key === 'd'){
        carro.dir += 40
    }
})
document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        carro.dir = 0
    }else if(e.key === 'd'){
        carro.dir = 0
    }
})

function desenha(){
    t1.des_text('Pontos: ',360,20,'yellow','26px Times')
    t2.des_text('Vida: ',40,20,'yellow','26px Times')
    ee.des_estrada()
    ed.des_estrada()
    ec1.des_estrada()
    ec2.des_estrada()
    ec3.des_estrada()
    ec4.des_estrada()
    ec5.des_estrada()
    ec6.des_estrada()
    ec7.des_estrada()
    c2.des_obj()
    c3.des_obj()
    carro.des_obj()

}
function atualiza(){
    ec1.mov_est()
    ec2.mov_est()
    ec3.mov_est()
    ec4.mov_est()
    ec5.mov_est()
    ec6.mov_est()
    ec7.mov_est()
    c2.atual_carro2()
    c3.atual_carro2()
    carro.atual_carro()

}
function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
}

setInterval(main,10)