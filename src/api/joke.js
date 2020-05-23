import axios from 'axios'

import { BASE_URL } from '../constants/api_helper';

class Joke {
    getCategoryList(){
        return axios.get(BASE_URL + 'jokes/categories');
    }
    getJokeFromCat(category){
        return axios.get(BASE_URL + `jokes/random?category=${category}`);
    }
    getFreeTextSearch(query){
        return axios.get(BASE_URL + `jokes/search?query=${query}`);
    }
    getRandomJoke(){
        return axios.get(BASE_URL + 'jokes/random');
    }
}

export const joke_api = new Joke();
