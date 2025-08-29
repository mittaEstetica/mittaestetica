import { createServer } from 'vite';

const server = await createServer({
  configFile: './vite.config.js'
});

await server.listen(5173);
console.log('🚀 Vite dev server running at http://localhost:5173'); 