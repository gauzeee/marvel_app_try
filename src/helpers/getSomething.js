import getAuthKeys from '../keys';

class GetSomething {
    constructor() {
        this.apiBase = 'http://gateway.marvel.com/v1/public';
    }


    async getData(url, params) {
        try {
            const tailQuery = params ? params.map((item) => {
                if(item.value.length > 0) return `&${item.name}=${item.value}`
            }) : '';
            console.log(tailQuery);
            let data = await fetch(`${this.apiBase}/${url}?limit=100&${getAuthKeys()}${tailQuery}`);
            const result = await data.json();
            console.log(result)
            return result;
        } catch(error) {
            return new Error(error);
        }
    }

    getCharacters = async (params) => {
        return await this.getData('characters', params);
    }

    getCharacter = async (id) => {
        return await this.getData(`characters/${id}`)

    }
}

export default new GetSomething();