# language: pt

Funcionalidade: Instalação, remoção e avaliação de aplicativos na Google Play Store

  Cenário: Baixar um aplicativo com sucesso
    Dado que o usuário está logado na Play Store
    E buscou por um aplicativo válido
    Quando clicar em "Instalar"
    Então o download deve ser iniciado
    E o aplicativo deve ser instalado com sucesso

  Cenário: Desinstalar um aplicativo pela Play Store
    Dado que o usuário está na página de um aplicativo instalado
    Quando clicar em "Desinstalar"
    E confirmar a ação
    Então o aplicativo deve ser removido do dispositivo

  Cenário: Avaliar um aplicativo com estrelas e comentário
    Dado que o usuário tem um aplicativo instalado
    Quando acessar a página do app na Play Store
    E clicar em "Avaliar"
    E selecionar 4 estrelas
    E escrever um comentário
    E clicar em "Publicar"
    Então a avaliação deve ser registrada com sucesso

  Cenário: Atualizar um aplicativo instalado
    Dado que o usuário possui um aplicativo desatualizado
    E há uma nova versão disponível na Play Store
    Quando clicar em "Atualizar"
    Então o aplicativo deve ser atualizado para a versão mais recente

  Cenário: Buscar por um aplicativo específico
    Dado que o usuário está na tela inicial da Play Store
    Quando digitar o nome do aplicativo na barra de pesquisa
    E pressionar "Enter"
    Então o aplicativo correspondente deve ser exibido nos resultados