import fetch from 'node-fetch';

export class Friends {
    /**
     *
     * @param {RockstarAPI} main
     */
    constructor(main) {
        this._m = main;
    }

    async getAccountActivity() {
        const headers = this._m._headers();
        const url = this._m._url('/api/friend/getaccountactivity');
        const body = this._m._body();

        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        return response.json();
    }

    async getFriends() {
        const headers = this._m._headers();
        const url = this._m._url('/api/friend/getfriends');
        const body = this._m._body();

        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        return response.json();
    }

    async getNickname(rockstarId) {
        const headers = this._m._headers();
        const url = this._m._url('/api/friend/getnickname');

        const body = Object.assign(this._m._body(), { rockstarId });

        const res = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        return res.body();
    }

    async getProfile(rockstarId) {
        const headers = this._m._headers();
        const url = this._m._url('/api/friend/getprofile');

        const body = Object.assign(this._m._body(), { rockstarId });

        const res = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        return res.json();
    }

    async search(nickname, page = 0) {
        const headers = this._m._headers();
        const url = this._m._url('/api/friend/accountsearch');

        const body = Object.assign(this._m._body(), { searchNickname: nickname, pageIndex: page });

        const res = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });

        return res.json();
    }
}
