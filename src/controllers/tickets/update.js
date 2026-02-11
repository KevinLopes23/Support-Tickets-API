export function update({ request, response, database }) {
  const { id } = request.params;
  const { title, description } = request.body;

  database.update("tickets", id, {
    title,
    description,
  });

  return response.writeHead(204).end();
}