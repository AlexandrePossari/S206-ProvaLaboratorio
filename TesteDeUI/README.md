# Prova de Testes Automatizados com Cypress

Este repositório contém o código de testes para o site [https://automationintesting.online/](https://automationintesting.online/), utilizando o framework **Cypress**. Foram criados três cenários de teste, sendo um caso positivo e dois casos negativos, com o objetivo de validar a funcionalidade de envio de mensagens pelo formulário de contato.

---

## Descrição dos Casos de Teste

### 1. **Envio de E-mail Corretamente** (Caso Positivo)  
- **Objetivo:** Validar o envio de uma mensagem com informações completas e válidas.  
- **Critério de Aceitação:** Após o envio, o sistema deve exibir a mensagem _"Thanks for getting in touch"_.  

### 2. **Erro ao Enviar Mensagem com Menos de 20 Caracteres** (Caso Negativo)  
- **Objetivo:** Verificar se o sistema impede o envio de mensagens muito curtas.  
- **Critério de Aceitação:** O sistema deve exibir o erro _"Message must be between 20 and 2000 characters."_.

### 3. **Erro ao Enviar Mensagem sem E-mail** (Caso Negativo)  
- **Objetivo:** Confirmar que o sistema exige um endereço de e-mail válido para envio da mensagem.  
- **Critério de Aceitação:** O sistema deve exibir o erro _"Email may not be blank"_.

---

## Estrutura do Projeto

- **Arquivo de Testes:** `cypress/e2e/prova.cy.js`  
  Contém os testes automatizados.  
- **Configuração de Reporter:** O projeto utiliza o **cypress-mochawesome-reporter** para gerar relatórios detalhados.

---

## Requisitos

- **Node.js** instalado.  
- Dependências instaladas via `npm install`.  

---

## Como Executar os Testes

1. Instale as dependências do Cypress e do reporter com o comando:  
   ```sh
   npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator 
   ```
   
2. Para rodar os testes e obter o relatório, execute:  
   ```sh
   ./node_modules/.bin/cypress run --spec 'cypress/e2e/prova.cy.js'
   ```

---

## Configuração do Reporter

O **Mochawesome** foi configurado como o reporter padrão. As configurações estão definidas no arquivo `cypress.config.js`:

Após a execução, os relatórios serão gerados no diretório `cypress/reports`.