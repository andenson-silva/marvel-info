import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { decryptMarvelKeys } from '@ne-luna/ntl-keys';
import { Auth } from './auth';
import * as cryptoJS from 'crypto-js';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor() { }
    /**
     * 
     * @returns array com timestam, apikey e hash de autenticação
     */
    getCredentials(): string[] {
        const credentials = decryptMarvelKeys(environment.sk)
        const keys: Auth = JSON.parse(credentials);

        const timestamp = new Date().getTime().toString();

        const hash = cryptoJS.MD5(`${timestamp}${keys.prvApiKey}${keys.apiKey}`).toString();

        return [timestamp, keys.apiKey, hash];
    }

}