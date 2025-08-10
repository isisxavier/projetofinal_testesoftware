# language: pt
Funcionalidade: Funcionalidades meet   
   
   
    Cenário: Iniciar uma nova reunião instantaneamente
    Dado que o usuário está na página inicial do Google Meet
    Quando clicar em "Nova reunião"
    E escolher "Iniciar agora"
    Então uma sala de reunião deve ser criada e iniciada automaticamente

    Cenário: Criar uma reunião para mais tarde
    Dado que o usuário está na tela inicial do Google Meet
    Quando clicar em "Nova reunião"
    E escolher "Criar uma reunião para mais tarde"
    Então um link de reunião futura deve ser gerado e copiado para a área de transferência

    Cenário: Agendar uma reunião no Google Agenda
    Dado que o usuário selecionou "Agendar no Google Agenda" no Meet
    Quando preencher os dados do evento como título, data e horário
    E salvar o evento
    Então a reunião deve ser adicionada ao Google Agenda com sucesso

    Cenário: Encerrar uma reunião em andamento
    Dado que o usuário está participando de uma reunião
    Quando clicar no botão "Encerrar chamada"
    Então a reunião deve ser finalizada
    E o usuário deve retornar à tela inicial do Meet

    Cenário: Participar de uma reunião com código
    Dado que o usuário está na tela inicial do Google Meet
    Quando inserir um código de reunião válido no campo "Digite um código"
    E clicar em "Participar"
    Então o usuário deve ser direcionado para a sala da reunião correspondente