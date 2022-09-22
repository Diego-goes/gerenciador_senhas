// função que recebe um array e retorna um objeto de chave: Logim, e valor:senha
// function filt_senhas(arr){
//     console.log(arr)
// }
// filt_senhas()

// let inputs_btn = document.querySelectorAll('.input_btn')
// for (let input_atual of inputs_btn){
//     console.log(input_atual)
// }

document.querySelectorAll('.input_btn').forEach((e)=>{
    e.addEventListener('click',()=>{
        e.classList.toggle('teste')
        setTimeout(()=>{e.classList.toggle('teste')},200)
    })
})
let btn_imporatar = document.querySelector('#btn_importar')
btn_imporatar.addEventListener('click',(event)=>{
    btn_imporatar.classList.toggle('clique_vazado')
})
// Ideias de funcionalidades
// Gerador de chave aleatória
// Filtro de senhas
// Exibir todas as senhas salvas