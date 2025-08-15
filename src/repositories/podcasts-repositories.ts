import fs from 'fs';
import path from 'path';
import { Podcast } from '../models/podcasts';

const pathData = path.join(__dirname, '..', 'repositories', 'podcasts.json');

export const repositoryPodcast = async (podcastName?: string): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, 'utf-8');

    if (podcastName) {
        const data: Podcast[] = JSON.parse(rawData);
        const filteredData = data.filter(podcast => podcast.name === podcastName);
        return JSON.parse(JSON.stringify(filteredData));
    }
    
    return JSON.parse(rawData);
}