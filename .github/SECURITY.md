# Política de Segurança

## Versões Suportadas

| Versão | Suportada |
|---------|-----------|
| 0.1.x   | ✅        |

## Relatando uma Vulnerabilidade

Se você descobrir uma vulnerabilidade de segurança, por favor NÃO abra uma issue pública.

Em vez disso, relate-a privadamente por:

- Abrindo um GitHub Security Advisory

[//]: # (- Ou contatando: security@yourdomain.com)

Responderemos dentro de 48 horas.

## Considerações de Segurança

### Versão Atual (MVP)

O MVP do IBAV (v0.1.0) foi projetado para operar **offline sem APIs externas**, o que reduz significativamente a superfície de ataque:

- **Sem chamadas de rede externa**: Todos os cálculos são realizados no lado do cliente
- **Sem armazenamento de dados**: As informações do veículo são processadas na memória e não persistidas
- **Sem autenticação necessária**: O sistema é aberto e transparente por design
- **Sem dependências de terceiros**: Elimina vetores de ataque da cadeia de suprimentos de serviços externos

### Privacidade de Dados

Como o sistema opera offline e não armazena dados do usuário:

- Informações do veículo (valor FIPE, ano, quilometragem, estado) são processadas localmente
- Nenhum dado pessoal é coletado ou transmitido
- Nenhum rastreamento ou analytics é implementado
- Usuários mantêm controle total de seus dados

### Transparência e Auditabilidade

Seguindo os princípios centrais do IBAV:

- A metodologia de avaliação é pública, documentada e versionada
- As fórmulas de cálculo são transparentes e reproduzíveis
- O código é open-source para revisão da comunidade
- Vulnerabilidades de segurança podem ser auditadas pela comunidade

### Considerações de Segurança Futuras

Conforme descrito no roadmap, versões futuras podem introduzir:

- **Versão 2**: Integrações com APIs externas (consulta automática da FIPE)
  - Requererá gerenciamento de chaves de API
  - Limitação de taxa e validação de requisições
  - Armazenamento seguro de credenciais

- **Versão 3**: API pública e fontes de dados adicionais
  - Mecanismos de autenticação e autorização
  - Limitação de taxa e prevenção de abuso
  - Transmissão segura de dados (HTTPS/TLS)
  - Validação e sanitização de entrada

### Melhores Práticas

Ao usar o IBAV:

- Verifique a integridade dos arquivos baixados
- Use releases oficiais do GitHub
- Revise o código-fonte para transparência
- Relate qualquer comportamento suspeito imediatamente

## Política de Divulgação

Seguimos práticas de divulgação responsável:

1. **Relato privado**: Vulnerabilidades são relatadas privadamente
2. **Avaliação**: A equipe de segurança avalia o relato dentro de 48 horas
3. **Remediação**: Correções são desenvolvidas e testadas
4. **Divulgação coordenada**: A divulgação pública é coordenada com o relator
5. **Crédito**: Pesquisadores de segurança são creditados por suas contribuições (se desejado)