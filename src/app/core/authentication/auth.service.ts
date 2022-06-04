import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as crypto from 'crypto-js';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly apiKey = environment.apiKey || '';
    private readonly prvKey = environment.prvApiKey || '';

    constructor() { }

    /**
     * 
     * @returns array com timestam, apikey e hash de autenticação
     */
    getCredentials(): string[] {
        
        const timestamp = new Date().getTime().toString();

        const hash = crypto.MD5(`${timestamp}${this.prvKey}${this.apiKey}`).toString()
         
        return [timestamp, this.apiKey, hash];
    }



}