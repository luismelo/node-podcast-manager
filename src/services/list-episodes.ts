import { repositoryPodcast } from "../repositories/podcasts-repositories";

export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();

    return data;
}