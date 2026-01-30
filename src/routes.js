import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: (request, response) => {
      return res.end("Lista de produtos");
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: (request, response) => {
      return response.end(JSON.stringify(request.body));
    },
  },

  {
    method: "DELETE",
    path: "/products/:id",
    controller: (request, response) => {
      return response.end("Produto removido com o ID: " + request.params.id);
    },
  },
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
