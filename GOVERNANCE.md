# Governança do IBAV

**Instituto Brasileiro de Avaliação Veicular**

---

## Visão

O IBAV é um projeto open source que visa calcular o **Valor Justo do Veículo (VJV)** utilizando uma metodologia transparente, independente e acessível a todos.

---

## Missão

- Criar uma metodologia transparente para avaliação veicular
- Permitir que qualquer pessoa calcule o Valor Justo do Veículo
- Não depender de APIs pagas ou serviços externos
- Possibilitar futura integração com dados públicos
- Gerar um índice simples de qualidade do veículo (IVB)

---

## Princípios

### Transparência

A metodologia do IBAV é pública, documentada e versionada para garantir:
- Auditabilidade dos cálculos
- Evolução contínua e colaborativa
- Confiança dos usuários

### Independência

- O projeto é totalmente independente da FIPE
- Não utiliza APIs externas no MVP
- Funciona offline
- Sem custos de mensalidades ou assinaturas

### Complementaridade

O IBAV **não pretende substituir a FIPE**. A FIPE continuará sendo utilizada como referência nacional de preços médios. O objetivo do IBAV é oferecer uma estimativa transparente do Valor Justo do Veículo, considerando fatores individuais que normalmente não são refletidos na média de mercado.

---

## Metodologia

### Cálculo do Valor Justo do Veículo (VJV)

O sistema considera quatro fatores principais:

1. **Idade do veículo** - Desvalorização de 2% ao ano
2. **Quilometragem** - Ajuste baseado em média de 15.000 km/ano
3. **Estado de conservação** - Classificação (Excelente, Bom, Regular, Ruim)
4. **Valor FIPE** - Referência nacional informada pelo usuário

### Índice de Valor Brasileiro (IVB)

Pontuação de 0 a 1000 pontos que classifica o veículo:
- 900–1000: Excelente
- 800–899: Muito Bom
- 700–799: Bom
- 600–699: Regular
- Abaixo de 600: Atenção

---

## Manutenção do Projeto

### Versionamento

A metodologia do IBAV é versionada para garantir:
- Rastreabilidade de mudanças
- Estabilidade para usuários
- Possibilidade de rollback se necessário

### Atualizações

Mudanças na metodologia devem:
- Ser documentadas no CHANGELOG.md
- Manter compatibilidade quando possível
- Ser comunicadas claramente aos usuários

---

## Roadmap e Evolução

### MVP (Versão Atual)

- [x] Formulário de entrada
- [x] Cálculo do VJV
- [x] Cálculo do IVB
- [x] Página de resultado
- [x] Compartilhamento

### Versão 2 (Planejada)

- [ ] Consulta automática FIPE
- [ ] Histórico de preços
- [ ] Evolução da desvalorização
- [ ] Comparação entre veículos

### Versão 3 (Futura)

- [ ] Histórico de sinistros
- [ ] Histórico de leilão
- [ ] Recall
- [ ] Custos médios de manutenção
- [ ] Seguro médio
- [ ] Liquidez de mercado
- [ ] Estimativa de IPVA
- [ ] API pública do IBAV

---

## Licenciamento

O projeto IBAV é open source para garantir:
- Acesso livre à metodologia
- Contribuição da comunidade
- Melhoria contínua através de colaboração
- Verificação independente dos cálculos

---

## Contribuição

Contribuições são bem-vindas e devem seguir:
- O código de conduta do projeto (CODE_OF_CONDUCT.md)
- As diretrizes de contribuição (CONTRIBUTING.md)
- O processo de issues e pull requests do GitHub

---

## Contato e Suporte

Para dúvidas, sugestões ou reportar problemas:
- Abra uma issue no GitHub
- Consulte a documentação em docs/docs.md
- Revise o CHANGELOG.md para atualizações recentes