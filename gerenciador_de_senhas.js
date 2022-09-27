// função que recebe um array e retorna um objeto de chave: Logim, e valor:senha
// function filt_senhas(arr){
//     console.log(arr)
// }
// filt_senhas()

// let inputs_btn = document.querySelectorAll('.input_btn')
// for (let input_atual of inputs_btn){
//     console.log(input_atual)
// }

function mudar_tema() {
    let tag_html = document.querySelector('html')
    tag_html.classList.toggle('dark-mode')
    let status_tema = document.querySelector('#status_tema')
    let code_icon = ''
    let primary_color = ''
    let secondary_color = ''

    if (tag_html.classList.contains('dark-mode')) {
        code_icon = 'tgnqhsfe'
        primary_color = '#ffffff'
        secondary_color = '#a39cf4'
        status_tema.textContent = 'Escuro'
    } else {
        status_tema.textContent = 'Claro'
        code_icon = 'lytdihcu'
        primary_color = '#121331'
        secondary_color = '#545454'
    }
    document.querySelector('#icon_tema').attributes[0].nodeValue = `https://cdn.lordicon.com/${code_icon}.json`
    document.querySelectorAll('lord-icon').forEach((lord_icon_atual) => {
        lord_icon_atual.attributes.colors.textContent = `primary:${primary_color},secondary:${secondary_color}`
    })
}
// link attribute href value
let other_options = document.querySelectorAll('.other_options')
other_options.forEach((divElement) => {

    let btn_more_options = divElement.children[0]
    btn_more_options.addEventListener('click', () => {

        // Verificar se existem outros botões visíveis além do escolhido
        other_options.forEach((e) => {
            if (e.classList.contains('show_other_options') && e !== divElement) {
                e.classList.remove('show_other_options')
            }
        })

        // Add / remove classe que da visibilidade
        divElement.classList.toggle('show_other_options')
    })
})

// Ideias de funcionalidades
// Gerador de chave aleatória
// Filtro de senhas
// Exibir todas as senhas salvas