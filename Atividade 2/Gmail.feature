# language: pt
Funcionalidade: Funcionalidades de e-mails no Gmail

  Cenário: Enviar um novo e-mail preenchendo todos os campos obrigatórios
    Dado que o usuário está logado no Gmail
    E clicou no botão "Escrever"
    Quando preencher o campo "Para" com um e-mail válido
    E preencher o assunto e o corpo da mensagem
    E clicar em "Enviar"
    Então o e-mail deve ser enviado com sucesso
    E deve aparecer na pasta "Enviados"

  Cenário: Erro ao tentar enviar e-mail sem preencher o destinatário
    Dado que o usuário está na tela de composição de e-mail
    E preencheu apenas o assunto e o corpo
    Quando clicar em "Enviar"
    Então uma mensagem de erro deve ser exibida indicando que o destinatário é obrigatório

  Cenário: Filtrar apenas e-mails não lidos
    Dado que o usuário está na caixa de entrada do Gmail
    Quando aplicar o filtro "Não lidos"
    Então apenas os e-mails ainda não lidos devem ser exibidos na lista

  Cenário: Excluir um e-mail com sucesso
    Dado que o usuário está na caixa de entrada
    E selecionou um e-mail
    Quando clicar no ícone de "Lixeira"
    Então o e-mail deve ser movido para a pasta "Lixeira"

  Cenário: Buscar e-mails usando a barra de pesquisa
    Dado que o usuário está logado no Gmail
    Quando digitar um termo válido na barra de pesquis
    E pressionar "Enter"
    Então os resultados devem ser exibidos