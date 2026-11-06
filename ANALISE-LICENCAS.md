# Análise de licenças das dependências do Orvixel

**Projeto:** Orvixel  
**Responsável:** Lucas Souza  
**Data da análise:** 05/11/2026

Foram escolhidas três dependências diretas que aparecem no arquivo `package.json` do projeto.

| Nome | Licença | Permite uso comercial? | Obriga abrir o código do projeto derivado? |
|---|---|---|---|
| Express | MIT | Sim | Não |
| dotenv | BSD-2-Clause | Sim | Não |
| cors | MIT | Sim | Não |

## Análise

As licenças MIT e BSD-2-Clause são permissivas. Elas permitem utilizar, modificar e distribuir o software, inclusive em projetos comerciais, sem exigir que o código do projeto que utiliza essas bibliotecas seja publicado.

Isso não significa ausência de obrigações: é necessário preservar os avisos de direitos autorais e incluir o texto da licença correspondente nas cópias ou partes substanciais redistribuídas, conforme os termos de cada licença.

## Fontes consultadas

- Express (MIT): https://www.npmjs.com/package/express
- dotenv (BSD-2-Clause): https://www.npmjs.com/package/dotenv
- cors (MIT): https://www.npmjs.com/package/cors

## Conclusão

As três dependências analisadas permitem uso comercial e não obrigam o Orvixel a disponibilizar seu próprio código-fonte. O projeto deve, porém, manter os avisos e as licenças das bibliotecas utilizadas. Esta análise cobre somente as três dependências diretas selecionadas; outras dependências instaladas indiretamente também devem ser verificadas antes de uma distribuição comercial.
