# Contribuindo com o IBAV

Obrigado por considerar contribuir com o **IBAV (Instituto Brasileiro de Avaliação Veicular)**!  
Sua ajuda torna este projeto melhor para toda a comunidade.

Este documento explica como contribuir com código, documentação, relatórios de bugs e melhorias.

## Sobre o IBAV

O IBAV é um projeto que visa calcular o **Valor Justo do Veículo (VJV)** utilizando uma metodologia transparente. Diferente da tabela FIPE, que apresenta uma média nacional de preços, o IBAV considera características individuais do veículo para estimar um valor mais próximo da realidade.

O projeto é totalmente independente da FIPE e, nesta primeira versão (MVP), não utiliza APIs externas, permitindo funcionamento offline e baixo custo de manutenção.

---

## 📌 Formas de Contribuir

Você pode contribuir de várias formas:

- 🐛 Relatar bugs
- 💡 Sugerir novas funcionalidades
- 📖 Melhorar a documentação
- 🧪 Escrever testes
- 🔧 Corrigir bugs
- 🚀 Melhorar performance ou segurança

---

## 🐞 Relatar Bugs

Antes de abrir uma nova issue:

1. Pesquise issues existentes para evitar duplicatas.
2. Certifique-se de que o bug ocorre na versão mais recente.
3. Forneça o máximo de detalhes possível.

Ao criar um relatório de bug, inclua:

- Versão do IBAV
- Versão do Nuxt
- Navegador e versão (se aplicável)
- Passos para reproduzir
- Comportamento esperado
- Comportamento atual
- Valores de entrada utilizados (valor FIPE, ano, quilometragem, conservação)
- Screenshots ou logs se possível

---

## 💡 Sugerir Funcionalidades

Sugestões de funcionalidades são bem-vindas! Por favor, verifique o [Roadmap](docs/docs.md#roadmap) na documentação para ver as funcionalidades planejadas.

Ao sugerir uma funcionalidade, inclua:

- Uma descrição clara da funcionalidade
- O problema que ela resolve
- Como ela se relaciona com a metodologia do IBAV (cálculos VJV, IVB)
- Ideias de implementação possíveis (opcional)

---

## 🛠 Configuração de Desenvolvimento

Clone o repositório:

```bash
git clone https://github.com/4sllan/ibav.git
cd ibav
```
Instale as dependências:

```bash
pnpm install
```
Execute o ambiente de desenvolvimento:

```bash
pnpm dev
```

## 🌿 Estratégia de Branches

Por favor, siga este fluxo:

1. Faça um fork do repositório

2. Crie um novo branch a partir de main

Exemplo:

```bash
git checkout -b feat/minha-funcionalidade
```

| Tipo     | Exemplo                          |
| -------- | -------------------------------- |
| Feature  | `feat/add-ivb-calculation`       |
| Fix      | `fix/mileage-adjustment`         |
| Docs     | `docs/update-methodology`        |
| Refactor | `refactor/vjh-formula`           |

## ✍️ Diretrizes de Commit

Seguimos Conventional Commits:
```text
tipo(escopo): descrição
```

Exemplos:

```text
feat(calc): add IVB score calculation
fix(mileage): resolve adjustment formula
docs: update methodology guide
```

Tipos de commit comuns:

- feat
- fix
- docs
- refactor
- test
- chore

## 📦 Diretrizes de Pull Request

Antes de enviar um Pull Request, certifique-se do seguinte:

- Seu código segue o estilo de código do projeto
- A documentação é atualizada quando necessário
- A aplicação compila corretamente
- Alterações na metodologia de cálculo são devidamente documentadas e testadas

### Checklist de PR

Antes de abrir seu PR, confirme que:

- [ ] O código compila sem erros
- [ ] A documentação foi atualizada (se necessário)
- [ ] Nenhum arquivo desnecessário foi incluído
- [ ] O pull request contém uma explicação clara e descritiva
- [ ] Alterações nos cálculos incluem casos de teste com resultados esperados

## 🔐 Problemas de Segurança

Se descobrir uma vulnerabilidade de segurança, por favor, não abra uma issue pública.

Em vez disso, relate-a de forma privada entrando em contato com o mantenedor.

## ❤️ Comunidade

Por favor, seja respeitoso e construtivo nas discussões.

Nosso objetivo é construir um ambiente acolhedor para todos os contribuidores.

## 🙌 Obrigado

Obrigado por ajudar a melhorar o IBAV!

## 📚 Recursos Adicionais

- [Documentação do Projeto](docs/docs.md) - Metodologia completa e especificações
- [Roadmap](docs/docs.md#roadmap) - Funcionalidades planejadas e versões futuras
- [Metodologia](docs/docs.md#metodologia) - Fórmulas de cálculo VJV e IVB