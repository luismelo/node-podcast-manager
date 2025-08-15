import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes';
import { serviceFilterEpisodes } from '../services/filter-episodes';

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    await serviceListEpisodes()
        .then(data => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        })
        .catch(error => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
        }
        );
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const queryString = req.url?.split('?p=')[1] || '';

    const content = await serviceFilterEpisodes(queryString);
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify(content));
}
