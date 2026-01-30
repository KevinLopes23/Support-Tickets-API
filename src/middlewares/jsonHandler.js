import { request } from "node:http";

export async function jsonBodyHandler(resquest, response) {
  //Adiciona cada chunk
  const buffers = [];

  //Coleta os chunks de dados do corpo da requisição
  for await (const chunk of resquest) {
    buffers.push(chunk);
  }

  try {
    //Concatena os chunk e converte para string. Em seguida, converte a string para JSON.
    resquest.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  //Define o header de resposta como JSON
  response.setHeader("Content-Type", "application/json");
}
