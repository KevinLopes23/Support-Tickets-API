import { Database } from "../../database/database.js";

const database = new Database();

export function index({ request, response }) {
  const { status } = request.query;
  console.log(status);

  const tickets = database.select("tickets");

  return response.end(JSON.stringify(tickets));
}
