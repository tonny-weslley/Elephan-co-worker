import swaggerAutogenFactory from "swagger-autogen";

const swaggerAutogen = swaggerAutogenFactory({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "1.0.0",
    title: "Desafio Elephan",
    description: "Teste técnico para vaga de desenvolvedor backend na Elephan",
  },
  servers: [
    {
      url: "http://localhost:8000",
    },
  ],
  components: {
    schemas: {
      insightRequest: {
        $marketing_service: "hubspot",
        $ai_agent: "gemini",
        $marketing_service_token: "jhkDJ323-jdhadkj@-kfaslfkjha",
      },
    },
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["../app.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  const { default: app } = await import("../app.js");
});
