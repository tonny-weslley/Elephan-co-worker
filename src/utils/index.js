import * as prompts from './prompts.js'

function excludeSamples(engagementsData) {
  if (Array.isArray(engagementsData.results)) {
    engagementsData.results = engagementsData.results.filter(
      item => item.engagement.sourceId !== "SAMPLE-ENGAGEMENTS"
    );
  }
  return engagementsData;
}

export { excludeSamples, prompts };
