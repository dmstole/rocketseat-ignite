import { rest } from 'msw';

function LoginController() {
  function handle(req, res, ctx) {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }

  return { handle };
};

function GitHubRepositoriesController() {
  function handle(req, res, ctx) {
    return res(
      ctx.json([])
    )
  }

  return { handle };
}

export const handlers = [
  rest.post('/login', LoginController().handle),
  rest.get('/repo', GitHubRepositoriesController().handle)
]