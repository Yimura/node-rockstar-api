import { SCAPI_URL, HEADERS } from './Constants.js';
import { Friends } from './internal/Friends.js';
import { Profile } from './internal/Profile.js';

export class RockstarAPI {
    constructor(token) {
        this._t = token;

        this.friends = new Friends(this);
        this.profile = new Profile(this);
    }

    _body() {
        return {
            env: 'prod',
            title: 'gta5',
            version: 11
        };
    }

    _headers(token = this._t) {
        return Object.assign({}, HEADERS, { "Authorization": `SCAUTH val="${token}"` });
    }

    _url(path) {
        SCAPI_URL.pathname = path;
        return new URL(SCAPI_URL.toString());
    }
}
