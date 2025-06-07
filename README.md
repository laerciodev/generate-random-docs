# Insomnia Plugin: Gerador de Documentos BR (CPF e CNPJ)

Um plugin simples e eficaz para o Insomnia que permite gerar CPFs (Cadastro de Pessoas Físicas) e CNPJs (Cadastro Nacional da Pessoa Jurídica) brasileiros válidos e aleatórios diretamente nas suas requisições. Ideal para testes de API, preenchimento de formulários e simulação de dados em ambientes de desenvolvimento.

✨ Funcionalidades
Geração de CPF Válido: Crie números de CPF aleatórios que passam pela validação de dígitos verificadores.
Geração de CNPJ Válido: Crie números de CNPJ aleatórios que seguem as regras de cálculo de dígitos verificadores.
Opções de Formatação: Escolha entre o formato numérico puro ou o formato padrão brasileiro (com pontos, barra e hífen) para CPF e CNPJ.
Fácil de Usar: Integração direta como uma Template Tag nas suas requisições do Insomnia.

🚀 Por que usar?
Ao desenvolver e testar APIs que lidam com documentos brasileiros, a necessidade de CPFs e CNPJs válidos (mas fictícios) é constante. Este plugin agiliza seu fluxo de trabalho, eliminando a necessidade de gerar esses números manualmente ou usar geradores externos, mantendo tudo dentro do seu ambiente de teste Insomnia.

📦 Instalação
Gere o Plugin (Recomendado):

Abra o Insomnia.
Vá em Application > Preferences (ou clique no ícone de engrenagem ⚙️).
Selecione a aba Plugins.
Clique em Generate New Plugin e digite insomnia-plugin-gerador-docs.
Isso criará a estrutura de pasta necessária.
Copie os Arquivos:

Após gerar a pasta, navegue até ela no seu sistema operacional (o caminho será exibido na interface do Insomnia).
Substitua o conteúdo do package.json e do index.js pelos arquivos fornecidos neste repositório.
Localização das pastas:

macOS: ~/Library/Application Support/Insomnia/plugins/insomnia-plugin-gerador-docs/
Windows: %APPDATA%\Insomnia\plugins\insomnia-plugin-gerador-docs\
Linux: $XDG_CONFIG_HOME/Insomnia/plugins/insomnia-plugin-gerador-docs/ ou ~/.config/Insomnia/plugins/insomnia-plugin-gerador-docs/
Recarregue os Plugins:

Volte ao Insomnia.
Na aba Plugins das Preferências, clique em "Reload Plugins" ou reinicie o Insomnia.

💡 Como Usar
Com o plugin instalado e recarregado, você pode usá-lo em qualquer campo de texto dinâmico (URL, corpo JSON, cabeçalhos, etc.) dentro das suas requisições:

Abra (ou crie) uma requisição no Insomnia.
Clique no campo onde deseja inserir o CPF ou CNPJ.
Pressione Ctrl + Espaço (Windows/Linux) ou Cmd + Espaço (macOS) para abrir o menu de Template Tags.
Pesquise por "Gerar CPF" ou "Gerar CNPJ".
Selecione a tag desejada.
Uma caixa de diálogo aparecerá, permitindo que você escolha o formato (com ou sem formatação).
Clique em "Done". O valor será automaticamente gerado e inserido ao enviar a requisição.

