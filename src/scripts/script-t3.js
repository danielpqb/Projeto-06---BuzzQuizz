let T3_1 = `
<div class="T3-header">Comece pelo começo</div>
<div class="T3-box">
    <div class="T3-b">
        <input type="text" placeholder="Título do seu quizz">
        <input type="text" placeholder="URL da imagem do seu quizz">
        <input type="text" placeholder="Quantidade de perguntas do quizz">
        <input type="text" placeholder="Quantidade de níveis do quizz">
    </div>
</div>
<div class="T3-btn" onclick="btnCreateQuizz(this)">Prosseguir pra criar perguntas</div>`

let T3_2 = `
<div class="T3-header">Crie suas perguntas</div>
<div class="T3-box">
    <div class="T3-b">
        <div class="T3-h">
            <div>
                <h1>Pergunta 1</h1>
                <img class="T3-icon" onclick="toggleExpand(this)" src="img/edit.svg">
            </div>
        </div>
        <div class="T3-m">
            <input type="text" placeholder="Texto da pergunta">
            <input type="text" placeholder="Cor de fundo da pergunta">
            <div class="T3-correctAnswer">
                <h1>Resposta correta</h1>
                <input type="text" placeholder="Resposta correta">
                <input type="text" placeholder="URL da imagem">
            </div>
            <div class="T3-incorrectAnswer1">
                <h1>Respostas incorretas</h1>
                <input type="text" placeholder="Resposta incorreta 1">
                <input type="text" placeholder="URL da imagem 1">
            </div>
            <div class="T3-incorrectAnswer2">
                <input type="text" placeholder="Resposta incorreta 2">
                <input type="text" placeholder="URL da imagem 2">
            </div>
            <div class="T3-incorrectAnswer3">
                <input type="text" placeholder="Resposta incorreta 3">
                <input type="text" placeholder="URL da imagem 3">
            </div>
        </div>
    </div>
</div>
<div class="T3-btn" onclick="btnCreateQuizz(this)">Prosseguir pra criar níveis</div>`

let T3_3 = `
<div class="T3-header">Agora, decida os níveis!</div>
<div class="T3-box">
    <div class="T3-b">
        <div class="T3-h">
            <div>
                <h1>Nível 1</h1>
                <img class="T3-icon" onclick="toggleExpand(this)" src="img/edit.svg">
            </div>
        </div>
        <div class="T3-m">
            <input type="text" placeholder="Título do nível">
            <input type="text" placeholder="% de acerto mínima">
            <input type="text" placeholder="URL da imagem do nível">
            <textarea type="text" placeholder="Descrição do nível" rows="5"></textarea>
        </div>
    </div>
</div>
<div class="T3-btn" onclick="btnCreateQuizz(this)">Finalizar Quizz</div>`

let T3_4 = `
<div class="T3-header">Seu quizz está pronto!</div>
<div class="T3-boxQuizz">
    <img src="img/quizzHP.png">
    <h1>O quão Potterhead é você?</h1>
</div>
<div class="T3-btn" onclick="btnCreateQuizz(this)">Acessar Quizz</div>
<div class="T3-btn2" onclick="btnCreateQuizz(this)">Voltar pra home</div>`

let newQuizz = {
    title: '',
    imgURL: '',
    nQ: 3,
    nLv: 2,
    questions: [], //['Id', 'Title', 'Background-color']
    answers: [], //['Question Id', 'Answer', 'imgURL', 'true/false(correct/incorrect)']
    levels: [] //['Title', '% to achieve', 'imgURL', 'Description']
}

function btnCreateQuizz(element) {
    let box = document.querySelector('.T3-b')
    switch (element.innerHTML) {
        case 'Prosseguir pra criar perguntas':
            newQuizz.title = box.childNodes[1].value
            newQuizz.imgURL = box.childNodes[3].value
            newQuizz.nQ = box.childNodes[5].value
            newQuizz.nLv = box.childNodes[7].value

            if ((newQuizz.title.length <= 20 && newQuizz.title.length <= 65) &&
                (newQuizz.imgURL.search('https://') != -1) &&
                (newQuizz.nQ >= 3 && newQuizz.nLv >= 2)) {
                let html = `
                <div class="T3-header">Crie suas perguntas</div>
                <div class="T3-box">`
                for (let i = 1; i <= newQuizz.nQ; i++) {
                    html += `
                    <div class="T3-b" id="${i}">
                        <div class="T3-h">
                            <div>
                                <h1>Pergunta ${i}</h1>
                                <img class="T3-icon" onclick="toggleExpand(this)" src="img/edit.svg">
                            </div>
                        </div>
                        <div class="T3-m hide">
                            <input type="text" placeholder="Texto da pergunta">
                            <input type="text" placeholder="Cor de fundo da pergunta">
                            <div class="T3-correctAnswer">
                                <h1>Resposta correta</h1>
                                <input type="text" placeholder="Resposta correta">
                                <input type="text" placeholder="URL da imagem">
                            </div>
                            <div class="T3-incorrectAnswer1">
                                <h1>Respostas incorretas</h1>
                                <input type="text" placeholder="Resposta incorreta 1">
                                <input type="text" placeholder="URL da imagem 1">
                            </div>
                            <div class="T3-incorrectAnswer2">
                                <input type="text" placeholder="Resposta incorreta 2">
                                <input type="text" placeholder="URL da imagem 2">
                            </div>
                            <div class="T3-incorrectAnswer3">
                                <input type="text" placeholder="Resposta incorreta 3">
                                <input type="text" placeholder="URL da imagem 3">
                            </div>
                        </div>
                    </div>`
                }
                html += `
                </div>
                <div class="T3-btn" onclick="btnCreateQuizz(this)">Prosseguir pra criar níveis</div>`
                document.querySelector('main').innerHTML = html
            }
            else {
                alert('\nREGRAS PARA CRIAÇÃO DE QUIZZ:\n\n- Título do quizz: deve ter no mínimo 20 e no máximo 65 caracteres\n- URL da Imagem: deve ter formato de URL\n- Quantidade de perguntas: no mínimo 3 perguntas\n- Quantidade de níveis: no mínimo 2 níveis')
            }
            break;

        case 'Prosseguir pra criar níveis':

            if (box.childNodes[1].value.length < 20) {
                alert('REGRAS PARA CRIAÇÃO DE PERGUNTAS DO QUIZZ:\n\n- Texto da pergunta: no mínimo 20 caracteres.')
                return
            }
            //colorValues.match(/[0-9A-Fa-f]{6}/g)
            if (box.childNodes[3].value.search('#') == -1 || box.childNodes[3].value.length != 7) {
                alert('REGRAS PARA CRIAÇÃO DE PERGUNTAS DO QUIZZ:\n\n- Cor de fundo: deve ser uma cor em hexadecimal (começar em "#", seguida de 6 caracteres hexadecimais).')
                return
            }
            if (box.childNodes[5].value.childNodes[3] == '' || box.childNodes[7].value.childNodes[3] == '') {
                alert('REGRAS PARA CRIAÇÃO DE PERGUNTAS DO QUIZZ:\n\n- É obrigatória a inserção da resposta correta e de pelo menos 1 resposta errada.')
                return
            }
            if (box.childNodes[5].childNodes[5].value.search('https://') != -1 && box.childNodes[7].childNodes[5].value.search('https://') != -1) {
                alert('REGRAS PARA CRIAÇÃO DE PERGUNTAS DO QUIZZ:\n\n- URL das imagens de resposta: deve ter formato de URL.')
                return
            }

            newQuizz.questions = []
            //Question Title and Color
            newQuizz.questions.push([i, box.childNodes[1].value, box.childNodes[3].value])

            newQuizz.answers = []
            //Parei aqui

            for (let i = 1; i <= newQuizz.nQ; i++) {
                box = document.getElementById(i).childNodes[3]
                if ((box.childNodes[1].value == '' || box.childNodes[3].value == '' && i > 1) ||
                    (box.childNodes[5].childNodes[3].value == '' && box.childNodes[5].childNodes[5].value == '' && i > 1) ||
                    (box.childNodes[7].childNodes[3].value == '' && box.childNodes[7].childNodes[5].value == '' && i > 1)) {
                    alert('REGRAS PARA CRIAÇÃO DE PERGUNTAS DO QUIZZ:\n\n\n')
                    return
                }
                //Correct Answer
                newQuizz.answers.push([i, box.childNodes[5].childNodes[3].value, box.childNodes[5].childNodes[5].value, true])
                //Wrong answers
                newQuizz.answers.push([i, box.childNodes[7].childNodes[3].value, box.childNodes[7].childNodes[5].value, false])
                if (box.childNodes[9].childNodes[1].value != '' && box.childNodes[9].childNodes[3].value.search('https://') != -1) {
                    newQuizz.answers.push([i, box.childNodes[9].childNodes[1].value, box.childNodes[9].childNodes[3].value, false])
                }
                if (box.childNodes[11].childNodes[1].value != '' && box.childNodes[11].childNodes[3].value.search('https://') != -1) {
                    newQuizz.answers.push([i, box.childNodes[11].childNodes[1].value, box.childNodes[11].childNodes[3].value, false])
                }
            }
            console.log(newQuizz.questions)
            console.log(newQuizz.answers)
            break;
        case 'Finalizar Quizz':
            box = document.querySelector('.T3-m')
            if ((box.childNodes[1].value.length >= 10) &&
                (box.childNodes[3].value >= 0 && box.childNodes[3].value <= 100) &&
                (box.childNodes[5].value.search('https://') != -1) &&
                (box.childNodes[1].value.length >= 30)) {
                document.querySelector('main').innerHTML = T3_4
            }
            else {
                alert('REGRAS PARA CRIAÇÃO DE PERGUNTAS DO QUIZZ:\n\nTítulo do nível: mínimo de 10 caracteres.\n% de acerto mínima: um número entre 0 e 100.\nURL da imagem do nível: deve ter formato de URL.\nDescrição do nível: mínimo de 30 caracteres.\nÉ obrigatório existir pelo menos 1 nível cuja % de acerto mínima seja 0%')
            }
            break;
        case 'Acessar Quizz':
            //document.querySelector('main').innerHTML = T3_1
            break;
        case 'Voltar pra home':
            document.querySelector('main').innerHTML = T3_1
            break;
    }
}

function toggleExpand(element) {
    element.parentNode.parentNode.parentNode.querySelector('.T3-m').classList.toggle('hide')
}