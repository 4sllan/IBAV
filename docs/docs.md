# IBAV - Instituto Brasileiro de Avaliação Veicular

> Documento de Especificação (MVP)

Versão: 0.1.0

---

# Visão Geral

O **IBAV (Instituto Brasileiro de Avaliação Veicular)** é um projeto que visa calcular o **Valor Justo do Veículo (VJV)** utilizando uma metodologia transparente.

Diferente da Tabela FIPE, que apresenta uma média nacional de preços, o IBAV considera características individuais do veículo para estimar um valor mais próximo da realidade.

O projeto será totalmente independente da FIPE.

Nesta primeira versão (MVP), o sistema **não utilizará APIs externas**, permitindo funcionamento offline e baixo custo de manutenção.

---

# Objetivos

- Criar uma metodologia transparente.
- Permitir que qualquer pessoa calcule o Valor Justo do Veículo.
- Não depender de APIs pagas.
- Possibilitar futura integração com dados públicos.
- Gerar um índice simples de qualidade do veículo.

---

# Conceitos

## FIPE

Valor médio nacional informado pelo usuário.

O sistema não consulta a FIPE automaticamente.

---

## VJV

**Valor Justo do Veículo**

Valor calculado pela metodologia do IBAV.

---

## IVB

**Índice de Valor Brasileiro**

Pontuação do veículo entre **0 e 1000 pontos**.

---

# Fluxo do Sistema

Usuário informa:

- Valor FIPE
- Ano do veículo
- Quilometragem atual
- Estado de conservação

Sistema calcula:

- Desvalorização por idade
- Ajuste por quilometragem
- Ajuste por conservação
- IVB
- Valor Justo do Veículo

---

# Campos de Entrada

| Campo | Tipo |
|--------|------|
| Valor FIPE | Número |
| Ano | Número |
| Quilometragem | Número |
| Conservação | Select |

---

# Conservação

Opções:

- Excelente
- Bom
- Regular
- Ruim

---

# Metodologia

## 1. Idade

A idade do veículo será calculada automaticamente.

```
idade = anoAtual - anoVeiculo
```

Cada ano reduz:

```
2%
```

Exemplo

```
4 anos

4 × 2%

= 8%
```

---

## 2. Quilometragem

Será considerada uma média de:

```
15.000 km por ano
```

Km esperado:

```
idade × 15.000
```

### Acima da média

A cada:

```
10.000 km
```

Desconto de:

```
0,5%
```

### Abaixo da média

A cada:

```
10.000 km
```

Acréscimo de:

```
0,3%
```

---

## 3. Conservação

| Estado | Ajuste |
|---------|--------:|
| Excelente | +3% |
| Bom | 0% |
| Regular | -3% |
| Ruim | -8% |

---

# Fórmula

```
Valor Justo

=

Valor FIPE

+

Ajuste Conservação

-

Desconto Idade

±

Ajuste Quilometragem
```

---

# Exemplo

Valor FIPE

```
R$ 80.000
```

Ano

```
2022
```

Ano atual

```
2026
```

Idade

```
4 anos
```

Desconto

```
8%
```

Km

```
90.000
```

Esperado

```
60.000
```

Diferença

```
30.000
```

Desconto

```
1,5%
```

Conservação

```
Excelente

+3%
```

Resultado

```
FIPE

R$ 80.000

-8%

-1,5%

+3%

================

Valor Justo

R$ 74.800
```

---

# Índice IVB

Pontuação inicial

```
1000 pontos
```

## Idade

```
-15 pontos por ano
```

## Quilometragem

```
-10 pontos

a cada 10.000 km acima da média
```

## Conservação

| Estado | Pontos |
|---------|--------:|
| Excelente | +30 |
| Bom | 0 |
| Regular | -30 |
| Ruim | -80 |

---

# Classificação

| Pontos | Classificação |
|---------|---------------|
| 900–1000 | Excelente |
| 800–899 | Muito Bom |
| 700–799 | Bom |
| 600–699 | Regular |
| abaixo de 600 | Atenção |

---

# Resultado

O sistema deverá apresentar:

```
Valor FIPE

R$ 80.000
```

```
Valor Justo (VJV)

R$ 74.800
```

```
IVB

842 pontos
```

```
Classificação

Muito Bom
```

---

# Vantagens

- Sem APIs
- Sem mensalidades
- Fácil manutenção
- Transparência total
- Funcionamento offline
- Cálculo reproduzível

---

# Roadmap

## MVP

- [ ] Formulário
- [ ] Cálculo do VJV
- [ ] Cálculo do IVB
- [ ] Página de resultado
- [ ] Compartilhamento

---

## Versão 2

- [ ] Consulta automática FIPE
- [ ] Histórico de preços
- [ ] Evolução da desvalorização
- [ ] Comparação entre veículos

---

## Versão 3

- [ ] Histórico de sinistros
- [ ] Histórico de leilão
- [ ] Recall
- [ ] Custos médios de manutenção
- [ ] Seguro médio
- [ ] Liquidez de mercado
- [ ] Estimativa de IPVA
- [ ] API pública do IBAV

---

# Princípios

O IBAV não pretende substituir a FIPE.

A FIPE continuará sendo utilizada como referência nacional.

O objetivo do IBAV é oferecer uma estimativa transparente do Valor Justo do Veículo, considerando fatores que normalmente não são refletidos na média de mercado.

---

# Licença

A metodologia do IBAV deverá ser pública, documentada e versionada para garantir transparência, auditabilidade e evolução contínua.