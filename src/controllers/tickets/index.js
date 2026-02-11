import { Database } from "../../database/database.js";

const database = new Database();

export function index({ request, response }) {
  const { status } = request.query;

  const filters = status ? { status } : null;

  const tickets = database.select("tickets", filters);

  return response.end(JSON.stringify(tickets));
}
