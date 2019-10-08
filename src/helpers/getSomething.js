import getAuthKeys from '../keys';

class getSomething {
    constructor() {
        this.apiBase = 'http://gateway.marvel.com/v1/public';
    }


    async getData(url, params) {
        try {
            const tailQuery = params ? params.map((item) => {
                return `&${item.name}=${item.value}`
            }) : '';
            let data = await fetch(`${this.apiBase}/${url}?limit=100&${getAuthKeys()}${tailQuery}`);
            return await data.json();
        } catch {
            return new Error('Something went wrong');
        }
    }

    getCharacters = async (params) => {
        return await this.getData('characters', params);
    }

    getCharacter = async (id) => {
        return await this.getData(`characters/${id}`)

    }
}

export default getSomething;