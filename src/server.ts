import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';

const PORT = process.env.PORT

const server = http.createServer(
async (req: http.IncomingMessage, res: http.ServerResponse) => {
    //Make a query string to get the podcast name
    const[baseUrl, queryString] = req.url?.split('?') || ["", ""];


    if(req.method === 'GET' && baseUrl === '/api/list') {
        await getListEpisodes(req, res);
    } else if (req.method === 'GET' && baseUrl === '/api/episode') {
        await getFilterEpisodes(req, res);
    }
  }
);

server.listen(process.env.PORT, () => {
  console.log(`Server running at ${PORT}`);
});
