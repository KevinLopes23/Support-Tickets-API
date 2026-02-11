export function update({ request, response, database }) {
  const { id } = request.params;
  const { equipment, description } = request.body;

  const ticket = database.update("tickets", id, {
    equipment,
    description,
    updatedAt: new Date(),
  });

  return response.writeHead(204).end();
}
