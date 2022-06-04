import { environment } from "src/environments/environment";

export abstract class DefaultApiGateway {
    private api = environment.apiUrl;

    protected get apiUrl(): string {
        return this.api;
    }

}