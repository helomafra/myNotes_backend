module.exports = {
  bail: true, //se um dos testes falhar, para de executar os testes
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js" //dizendo quais são meus arquivos de teste
  ]
}