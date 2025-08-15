import { repositoryPodcast } from "../repositories/podcasts-repositories";

export const serviceFilterEpisodes = async (podcastName: string) => {
    const data = await repositoryPodcast(podcastName);
    
    return data;
}