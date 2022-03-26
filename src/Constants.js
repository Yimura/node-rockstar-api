export const SCAPI_URL = new URL('https://scui.rockstargames.com');

export const HEADERS = {
    "Content-Type": "application/json; charset=utf-8",
    "X-Requested-With": "XMLHttpRequest",
    "User-Agent": ~~(Math.random() * 1e16)
};
