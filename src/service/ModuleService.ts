import { APIClient, APIMapping } from '../http';
import { AxiosResponse } from 'axios';

export class ModuleService extends APIClient {

    constructor() {
        super(APIMapping.moduleService);
    }

    /**
     * Get all active modules for the current company
     * @returns {Promise<AxiosResponse>}
     */
    async fetchActiveModules(): Promise<AxiosResponse> {
        return await this.invokeApi('/modules', 'GET', undefined, {
            queryParams: {
                active: 'true'
            }
        });
    }

    /**
     * Get all modules for the current company
     * @returns {Promise<AxiosResponse>}
     */
    async fetchAllModules(): Promise<AxiosResponse> {
        return await this.invokeApi('/modules', 'GET');
    }

    /**
     * Get a module by his name
     * @param {string} moduleName
     * @returns {Promise<AxiosResponse>}
     */
    async fetchModule(moduleName: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/modules/${moduleName}`, 'GET');
    }

    /**
     * Activate a new or a an deactivated module for the current company
     * @param {string} moduleName
     * @returns {Promise<AxiosResponse>}
     */
    async activateModule(moduleName: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/modules/activateModule/${moduleName}`, 'POST');
    }

    /**
     * Deactivates a new or an activate module for the current company
     * @param {string} moduleName
     * @returns {Promise<AxiosResponse>}
     */
    async deactivateModule(moduleName: string): Promise<AxiosResponse> {
        return await this.invokeApi(`/modules/deactivateModule/${moduleName}`, 'POST');
    }
}

export default new ModuleService();