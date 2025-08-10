# language: pt
Funcionalidade: Armazenamento e organização de imagens no Google Fotos

  Cenário: Validar salvamento automático de novas fotos tiradas
    Dado que o usuário tem o backup automático ativado no Google Fotos
    E tirou uma nova foto com o dispositivo conectado à internet
    Quando acessar o Google Fotos
    Então a nova foto deve aparecer na galeria

  Cenário: Criar um novo álbum de fotos
    Dado que o usuário está na tela inicial do Google Fotos
    Quando clicar em "Criar" e selecionar "Álbum"
    E adicionar um nome para o álbum
    E selecionar ao menos uma foto
    E salvar o álbum
    Então o novo álbum deve ser criado e listado entre os álbuns existentes

  Cenário: Cancelar exclusão de uma foto
    Dado que o usuário selecionou uma foto da galeria
    Quando clicar no ícone de lixeira
    E escolher "Cancelar" na confirmação da exclusão
    Então a foto não deve ser removida da galeria

  Cenário: Excluir uma foto com sucesso
    Dado que o usuário selecionou uma foto da galeria
    Quando clicar no ícone de lixeira
    E confirmar a exclusão
    Então a foto deve ser movida para a lixeira

  Cenário: Compartilhar uma foto com outro usuário
    Dado que o usuário está visualizando uma foto na galeria
    Quando clicar no botão de "Compartilhar"
    E escolher um contato válido
    E confirmar o envio
    Então a foto deve ser compartilhada com sucesso



