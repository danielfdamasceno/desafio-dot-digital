// import { faker } from '@faker-js/faker';

// elementos
const botao_ = '#btnRegister'
const campo_nome = '#user'
const campo_email = '#email'
const campo_senha = '#password'

const mensagem_sucesso_titulo = '#swal2-title'
const mensagem_campo_ivalido = '.errorLabel'

export default {

    // ações
    preencherNome(nome) {
        cy.get(campo_nome).type(nome)
    },

    preencherEmail(email) {
        cy.get(campo_email).type(email)
    },

    preencherSenha(senha) {
        cy.get(campo_senha).type(senha)
    },

    botaoCadastrar() {
        cy.get(botao_).click();
    },

    validarCadastroComSucesso(nome) {
        cy.get(mensagem_sucesso_titulo)
            .should('have.text', 'Cadastro realizado!')
    },

    validarMensagemCampoInválido(mensagem) {
        cy.get(mensagem_campo_ivalido)
            .should('have.text', mensagem)
    },

    cadastrarUsuarioValido(nome, email, senha) {
        this.preecherNome(faker.person.fullName())
        this.preecherEmail(faker.internet.email())
        this.preecherSenha('123456')
        this.botaoCadastrar()
    }

}
