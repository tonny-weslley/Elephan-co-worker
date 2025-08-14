export const insights = `
Analise os três objetos JSON abaixo:

- **contatos** → lista de contatos.
- **engajamentos** → lista de engajamentos.
- **negócios** → lista de negócios.

Cada engajamento está vinculado a um contato pelo campo \`contactIds\` presente em \`associations\`.
Cada negócio está vinculado a um contato pelo respectivo identificador de contato.

Calcule para cada contato um campo \`score_engajamento\` entre **0,00** e **10,00** seguindo exatamente as regras abaixo:

1. **Pontuação por tipo de engajamento:**
   - INCOMING_EMAIL (e-mail recebido) → +7,0 pontos
   - EMAIL (e-mail enviado) → +2,0 pontos
   - FORWARDED_EMAIL (e-mail encaminhado) → +3,0 pontos
   - TASK (tarefa) → +4,0 pontos
   - NOTE (nota) → +1,0 ponto
   - MEETING (reunião) → +6,0 pontos
   - CALL (ligação) → +7,0 pontos

2. **Pontuação por status de negócio:**
   - COMPROMISSO AGENDADO → +2,0 pontos
   - QUALIFICADO PARA COMPRA → +3,0 pontos
   - APRESENTAÇÃO AGENDADA → +4,0 pontos
   - TOMAR DECISÃO ENVOLVIDO → +5,0 pontos
   - CONTRATO ENVIADO → +6,0 pontos
   - NEGÓCIO FECHADO → +7,0 pontos
   - NEGÓCIO PERDIDO → 0,0 pontos

3. **Pontuação extra por conteúdo da mensagem:**
   - Mensagem curta ou resposta rápida → +3,0 pontos
   - Mensagem detalhada ou com perguntas → +5,0 pontos
   - Analisar emoção da mensagem:
     - Negativa → +0,0 pontos
     - Neutra → +1,0 ponto
     - Positiva → +2,0 pontos

4. **Regras adicionais para o cálculo do score:**
   - Se o contato não tiver engajamentos, atribuir 0,00.
   - O score final é a soma de todos os pontos, **limitado a 50,00**.

5. **Geração de insights exclusivos para cada contato**, considerando:
   - Histórico de engajamento.
   - Padrões de interação.
   - Comportamento observado nos engajamentos.
   - Frequência de interações e tempo médio de resposta.
   - Status atual do negócio.
   - Caso não haja engajamento, sugerir uma abordagem com o meio de comunicação mais eficaz da empresa.

6. **Regras específicas para insights:**
   - Score 0,00 → sugerir abordagem proativa para reengajar o contato.
   - Negócio em aberto → sugerir abordagem focada em fechar o negócio.
   - Negócio fechado → sugerir formas de expandir a relação ou vender mais, indicando um canal de comunicação já utilizado.
   - Negócio perdido → sugerir nova abordagem ou estratégia de reengajamento.
   - Tarefas não são consideradas canal de comunicação para insights.

7. **Formato obrigatório da resposta**:
O retorno deve ser **exclusivamente** um JSON no formato:
{
  "scores": [
    {
      "contactId": id,
      "name": "Nome do contato",
      "engagement_score": número
    }
  ],
  "insights": [
    {
      "contactId": id,
      "insight": "Texto do insight exclusivo"
    }
  ]
}

8. **Ordenação**:
- A lista de **scores** deve estar em ordem decrescente pelo campo \`score_engajamento\`.

9. **Restrições**:
- Não incluir explicações, comentários ou qualquer texto fora do JSON.
`;
