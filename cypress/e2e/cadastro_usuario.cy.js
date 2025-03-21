
///  <reference types="cypress" />

import { faker } from '@faker-js/faker';
import cadastro_usuario_page from '../support/pages/cadastro_usuario_pages';

describe('Cadastro de usuário', () => {

    const nome = faker.person.fullName()
    const email = faker.internet.email()
    const senha = Math.floor(Math.random() * 900000) + 100000;
    const email_invalido = 'aushuahsuashua'
    const senha_invalida = '123'

    beforeEach('Acessar tela de cadastro de usuário', () => {
        cy.visit('/register')
    })

    it('CT001 - Cadastro de usuário com sucesso', () => {
        // Dado
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.preencherSenha(senha)

        // Quando
        cadastro_usuario_page.botaoCadastrar()

        //Entao
        cadastro_usuario_page.validarCadastroSucesso
    })

    it('CT002 - Campos obrigatórios não preenchidos', () => {
        // Quando
        cadastro_usuario_page.botaoCadastrar()

        //Entao
        cadastro_usuario_page.validarMensagemCampoInválido('O campo nome deve ser prenchido')
    })

    it('CT003 - Nome - Campo Obrigatório', () => {
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.preencherSenha(senha)
        cadastro_usuario_page.botaoCadastrar()
        cadastro_usuario_page.validarMensagemCampoInválido('O campo nome deve ser prenchido')
    })

    it('CT004 - E-mail - Campo Obrigatório', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherSenha(senha)
        cadastro_usuario_page.botaoCadastrar()
        cadastro_usuario_page.validarMensagemCampoInválido('O campo e-mail deve ser prenchido corretamente')
    })

    it('CT005 - E-mail  inválido', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(email_invalido)
        cadastro_usuario_page.preencherSenha(senha)
        cadastro_usuario_page.botaoCadastrar()
        cadastro_usuario_page.validarMensagemCampoInválido('O campo e-mail deve ser prenchido corretamente')
    })

    it('CT006 - Senha - Campo Obrigatório', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.botaoCadastrar()
        cadastro_usuario_page.validarMensagemCampoInválido('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('CT007 - Senha com menos de 6 dígitos', () => {
        cadastro_usuario_page.preencherNome(nome)
        cadastro_usuario_page.preencherEmail(email)
        cadastro_usuario_page.preencherSenha(senha_invalida)
        cadastro_usuario_page.botaoCadastrar()
        cadastro_usuario_page.validarMensagemCampoInválido('O campo senha deve ter pelo menos 6 dígitos')
    })
})
