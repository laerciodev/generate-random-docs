// Este é o arquivo principal do seu plugin.
// Ele exporta um array de 'templateTags'.

// --- Funções Auxiliares Comuns ---

// Função para gerar dígitos aleatórios
function gerarDigitosAleatorios(quantidade) {
    let digitos = '';
    for (let i = 0; i < quantidade; i++) {
        digitos += Math.floor(Math.random() * 10);
    }
    return digitos;
}

// --- Funções Específicas para CPF ---

function calcularDigitoVerificadorCPF(base) {
    let soma = 0;
    let peso = base.length + 1;
    for (let i = 0; i < base.length; i++) {
        soma += parseInt(base.charAt(i)) * peso--;
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function gerarCpfNumeros() {
    let cpfParcial = gerarDigitosAleatorios(9);

    const primeiroDigito = calcularDigitoVerificadorCPF(cpfParcial);
    cpfParcial += primeiroDigito;

    const segundoDigito = calcularDigitoVerificadorCPF(cpfParcial);
    cpfParcial += segundoDigito;

    return cpfParcial;
}

// --- Funções Específicas para CNPJ ---

function calcularDigitoVerificadorCNPJ(base) {
    let soma = 0;
    // Pesos para o primeiro dígito verificador do CNPJ
    // 5,4,3,2,9,8,7,6,5,4,3,2
    const pesosPrimeiroDV = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    // Pesos para o segundo dígito verificador do CNPJ
    // 6,5,4,3,2,9,8,7,6,5,4,3,2
    const pesosSegundoDV = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    
    let pesosUsar;
    // O CNPJ sem os DVs tem 12 dígitos, e com o primeiro DV tem 13.
    // Base 12 para o primeiro DV, base 13 para o segundo DV.
    if (base.length === 12) {
        pesosUsar = pesosPrimeiroDV;
    } else if (base.length === 13) {
        pesosUsar = pesosSegundoDV;
    } else {
        // Deveria ser 12 ou 13 dígitos para CNPJ
        return null;
    }

    for (let i = 0; i < base.length; i++) {
        soma += parseInt(base.charAt(i)) * pesosUsar[i];
    }

    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function gerarCnpjNumeros() {
    // 8 dígitos aleatórios para a parte principal (ex: 12.345.678)
    let cnpjParcial = gerarDigitosAleatorios(8);
    // 4 dígitos para a filial (ex: 0001)
    cnpjParcial += '0001'; // Geralmente começa com 0001 para a primeira filial

    const primeiroDigito = calcularDigitoVerificadorCNPJ(cnpjParcial);
    cnpjParcial += primeiroDigito;

    const segundoDigito = calcularDigitoVerificadorCNPJ(cnpjParcial);
    cnpjParcial += segundoDigito;

    return cnpjParcial;
}


// --- Exportação das Template Tags para o Insomnia ---

module.exports.templateTags = [
  {
    name: 'gerarCpf', // Nome interno da sua tag
    displayName: 'Gerar CPF', // Nome exibido na interface do Insomnia
    description: 'Gera um CPF aleatório e válido.',
    args: [
      {
        displayName: 'Formato',
        type: 'enum',
        options: [
          { displayName: 'Com Pontos e Hífen', value: 'formatted' },
          { displayName: 'Apenas Números', value: 'raw' }
        ],
        defaultValue: 'formatted'
      }
    ],
    async run(context, formato = 'formatted') { // `context` é o contexto do Insomnia, `formato` é o valor do argumento
      const cpfGerado = gerarCpfNumeros();
      // Retorna o CPF de acordo com o formato escolhido
      if (formato === 'formatted') {
        return cpfGerado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
      } else {
        return cpfGerado;
      }
    }
  },
  {
    name: 'gerarCnpj', // Nome interno da sua tag
    displayName: 'Gerar CNPJ', // Nome exibido na interface do Insomnia
    description: 'Gera um CNPJ aleatório e válido.',
    args: [
      {
        displayName: 'Formato',
        type: 'enum',
        options: [
          { displayName: 'Com Pontos, Barra e Hífen', value: 'formatted' },
          { displayName: 'Apenas Números', value: 'raw' }
        ],
        defaultValue: 'formatted'
      }
    ],
    async run(context, formato = 'formatted') { // `context` é o contexto do Insomnia, `formato` é o valor do argumento
      const cnpjGerado = gerarCnpjNumeros();
      // Retorna o CNPJ de acordo com o formato escolhido
      if (formato === 'formatted') {
        return cnpjGerado.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
      } else {
        return cnpjGerado;
      }
    }
  }
];