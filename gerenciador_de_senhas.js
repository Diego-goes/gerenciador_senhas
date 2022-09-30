// função que recebe um array e retorna um objeto de chave: Logim, e valor:senha
// function filt_senhas(arr){
//     console.log(arr)
// }
// filt_senhas()

// let inputs_btn = document.querySelectorAll('.input_btn')
// for (let input_atual of inputs_btn){
//     console.log(input_atual)
// }
let senhas = ''
function mudar_tema() {
    let tag_html = document.querySelector('html')
    tag_html.classList.toggle('dark-mode')
    let status_tema = document.querySelector('#status_tema')
    let code_icon = ''
    let primary_color = ''
    let secondary_color = ''
    let primarySrc = ''
    let secondarySrc = ''
    if (tag_html.classList.contains('dark-mode')) {
        code_icon = 'tgnqhsfe'
        primary_color = '#ffffff'
        secondary_color = '#a39cf4'
        status_tema.textContent = 'Escuro'
        primarySrc = 'dark'
        secondarySrc = 'light'
    } else {
        status_tema.textContent = 'Claro'
        code_icon = 'lytdihcu'
        primary_color = '#121331'
        secondary_color = '#545454'
        primarySrc = 'light'
        secondarySrc = 'dark'
    }
    document.querySelector('#icon_tema').attributes[0].nodeValue = `https://cdn.lordicon.com/${code_icon}.json`
    document.querySelectorAll('lord-icon').forEach((lord_icon_atual) => {
        lord_icon_atual.attributes.colors.textContent = `primary:${primary_color},secondary:${secondary_color}`
    })
    document.querySelectorAll('.icon_btn').forEach((icon_btn_atual) => {
        icon_btn_atual.src = icon_btn_atual.src.replace(primarySrc,secondarySrc)
    })
}
function eventSaveFile(idInput, cb) {
    let inputFile = document.getElementById(idInput);
    inputFile.addEventListener('change', () => {

        // Definir extensão do arquivo
        var fileExtension = /text.*/;

        // Extrair o arquivo como objeto
        let file = inputFile.files[0]

        // Verificar se o arquivo tem a extensão correta
        if (file.type.match(fileExtension)) {

            //Inicialização do fileReader para ler o 'file'
            let fileReader = new FileReader();

            fileReader.onload = () => {
                cb(fileReader)
            }
            fileReader.readAsText(file);
        } else {
            alert("Por favor selecione arquivo texto");
        }
    })
}
eventSaveFile('btn_importar', (fr) => {
    senhas = fr.result
    senhas = formatacaoSenhas(senhas)
    let campo_2_display = document.querySelector('#campo_2_display')
    campo_2_display.innerHTML = ''
    for (let senha of senhas) {
        senha = senha.split(',')
        let passwordItem = new PasswordListItem(...senha)
        let elemento = passwordItem.criarElementoHtml()
        campo_2_display.appendChild(elemento)
    }
    eventOtherOptions()
})
function addPasswordItems() {

}
function formatacaoSenhas(string) {
    return string.split('\n')
}

class PasswordListItem {
    constructor(nome_site, endereco_site, usuario, senha) {
        this.nome_site = nome_site
        this.endereco_site = endereco_site
        this.usuario = usuario
        this.senha = senha
    }
    criarElementoHtml() {
        let elemento = document.createElement('div')
        elemento.className = 'div_infos relevo_saltado'
        elemento.innerHTML = `
        <a href="${this.endereco_site}" title="Visitar" target="_blank">${this.nome_site}</a>
        <input type="text" value="${this.usuario}">
        <input type="password" value="${this.senha}">
        <div class="btns_option">
            <img src="assets/icon-globe-light.svg" class="input_btn icon_btn" title="Revelar">
            <div class="other_options">
                <img src="assets/icon-globe-light.svg" class="input_btn icon_btn" title="Mais opções">
                <img src="assets/icon-globe-light.svg" class="input_btn icon_btn" title="Copiar">
                <img src="assets/icon-globe-light.svg" class="input_btn icon_btn" title="Visitar Site">
                <img src="assets/icon-globe-light.svg" class="input_btn icon_btn" title="Gerar senha aleatória">
            </div>
        </div>`
        return elemento
    }
}



/* <div class="div_infos relevo_saltado">
                <a href="endereco@site.com.br" title="Visitar" target="_blank">nome_site</a>
                <input type="text" value="login_usuario">
                <input type="password" value="senhaaaaaaaaaaaaaaaaaaaaaaaaaaaa">
                <div class="btns_option">
                    <img src="assets/icon-globe-light.svg" class="input_btn btn_ver" title="Revelar">
                    <div class="other_options">
                        <img src="assets/icon-globe-light.svg" class="input_btn" title="Mais opções">
                        <img src="assets/icon-globe-light.svg" class="input_btn" title="Copiar">
                        <img src="assets/icon-globe-light.svg" class="input_btn" title="Visitar Site">
                        <img src="assets/icon-globe-light.svg" class="input_btn" title="Gerar senha aleatória">
                    </div>
                </div>
            </div> */

function eventOtherOptions() {
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
}

// Ideias de funcionalidades
// Gerador de chave aleatória
// Filtro de senhas
// Exibir todas as senhas salvas