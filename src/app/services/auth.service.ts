import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    constructor() {

    }

    isAutenticated() {
        return true;
    }
}