import { AxiosResponse } from 'axios';
import { APIClient, APIMapping } from '../http';
import { v4 as uuid } from 'uuid/interfaces';

export class SearchProfileService extends APIClient {
    constructor() {
        super(APIMapping.searchProfileService);
    }

    /**
     * Fetches the configuration on how the Matchmaking-UI should be displayed
     * Tries to retrieve config for current company, when none is found, falls back to a global config
     */
    async fetchConfiguration(): Promise<AxiosResponse> {
        return this.invokeApi(`/matchmaking/configuration`, 'GET');
    }

    /**
     * Creates a configuration on how the Matchmaking-UI should be displayed for the current company
     */
    async createConfiguration(config: any): Promise<AxiosResponse> {
        return this.invokeApi(`/matchmaking/configuration`, 'POST', config);
    }

    /**
     * Updates the configuration on how the Matchmaking-UI should be displayed for the current company
     */
    async updateConfiguration(config: any): Promise<AxiosResponse> {
        return this.invokeApi(`/matchmaking/configuration`, 'PUT', config);
    }

    /**
     * Deletes the configuration on how the Matchmaking-UI should be displayed for the current company
     */
    async deleteConfiguration(): Promise<AxiosResponse> {
        return this.invokeApi(`/matchmaking/configuration`, 'DELETE');
    }

    /**
     * TODO: Please comment this method
     * @param schemaGroup
     * @param schema
     */
    async fetchSearchProfileTemplate(schemaGroup: string, schema: string) : Promise<AxiosResponse> {
        return this.invokeApi(`/search-profiles/template/${schemaGroup}/${schema}`, 'GET');
    }

    /**
     * TODO: Please comment this method
     * @param page
     * @param size
     */
    async fetchAllSearchProfiles(page: number = 1, size: number = 10) : Promise<AxiosResponse> {
        const queryParams: any = {
            page: page.toString(),
            size: size.toString()
        };
        return this.invokeApi(`/search-profiles`, 'GET', undefined, { queryParams });
    }

    /**
     * TODO: Please comment this method
     * @param searchProfile
     */
    async createSearchProfile(searchProfile: any) : Promise<AxiosResponse> {
        return this.invokeApi(`/search-profiles`, 'POST', searchProfile);
    }

    /**
     * TODO: Please comment this method
     * @param searchProfileId
     */
    async fetchSearchProfile(searchProfileId: string) : Promise<AxiosResponse> {
        return this.invokeApi(`/search-profiles/${searchProfileId}`, 'GET', undefined);
    }

    /**
     * TODO: Please comment this method
     * @param searchProfile
     */
    async updateSearchProfile(searchProfile: any) : Promise<AxiosResponse> {
        return this.invokeApi(`/search-profiles/${searchProfile.id}`, 'PUT', searchProfile);
    }

    /**
     * TODO: Please comment this method
     * @param searchProfileId
     */
    async deleteSearchProfile(searchProfileId: string) : Promise<AxiosResponse> {
        return this.invokeApi(`/search-profiles/${searchProfileId}`, 'DELETE', undefined);
    }

    /**
     * TODO: Please comment this method
     * @param searchProfile
     */
    async searchEntities(searchProfile: any) : Promise<AxiosResponse> {
        return this.invokeApi(`/search`, 'POST', searchProfile);
    }

    /**
     * TODO: Please comment this method
     * @param searchProfile
     */
    async reverseSearchEntities(searchProfile: any, schemaGroup: string = 'estates', entityId: uuid) : Promise<AxiosResponse> {
        return this.invokeApi(`/search/reverse/${schemaGroup}/entity/${entityId}`, 'POST', searchProfile);
    }
}

export default new SearchProfileService();
