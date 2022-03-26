import fetch from 'node-fetch';

export class Profile {
    /**
     *
     * @param {RockstarAPI} main
     */
    constructor(main) {
        this._m = main;
    }

    async getAnalyticsData() {
        const headers = this._m._headers();
        const url = this._m._url('/api/profile/getanalyticsdata');

        const res = await fetch(url, {
            method: 'POST',
            headers,
            body: '{"Nickname":"dummy"}'
        });

        return res.json();
    }

    async getSignedInUserAccountInfo() {
        const headers = this._m._headers();
        const url = this._m._url('/api/profile/getsignedinuseraccountinfo');

        const response = await fetch(url, {
            method: 'POST',
            headers
        });

        return response.json();
    }

    async getSteam() {
        const headers = this._m._headers();
        const url = this._m._url('/api/profile/getsteam');
        const body = this._m._body();

        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        return response.json();
    }

    async getUserAccountInfo() {
        const headers = this._m._headers();
        const url = this._m._url('/api/profile/getuseraccountinfo');

        const res = await fetch(url, {
            method: 'POST',
            headers
        });

        return res.json();
    }

    async getUserNetworks() {
        const headers = this._m._headers();
        const url = this._m._url('/api/profile/getusernetworks');
        const body = this._m._body();

        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        return response.json();
    }
}
