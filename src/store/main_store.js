import { createContext } from 'react';
import { observable, action, decorate } from 'mobx';

import { joke_api } from '../api/joke';

class Main {
    categories = [];
    jokeList = [];
    isFavoiriteJoke = false;

    async getCategories() {
        const res = await joke_api.getCategoryList();
        this.categories = res.data;
    }

    async getJokeByCategory(category) {
        this.clean()
        const res = await  joke_api.getJokeFromCat(category);
        this.jokeList.push(res.data);
    }

    async getRandomJoke() {
        this.clean()
        const res = await joke_api.getRandomJoke()
        this.jokeList.push(res.data);
    }

    async getJokeBySearchField(searchText) {
        this.clean()
        const res = await joke_api.getFreeTextSearch(searchText);
        this.jokeList = res.data.result;
    }

    jokeLikeOrUnlike(){
        this.isFavoiriteJoke = !this.isFavoiriteJoke
    }

    clean() {
        this.jokeList = [];
    }

    constructor() {
        this.isFavoiriteJoke=false
        this.getCategories = this.getCategories.bind(this);
        this.getJokeBySearchField = this.getJokeBySearchField.bind(this);
        this.getJokeByCategory = this.getJokeByCategory.bind(this);
        this.getRandomJoke = this.getRandomJoke.bind(this);
        this.jokeLikeOrUnlike = this.jokeLikeOrUnlike.bind(this);
        this.clean = this.clean.bind(this);
    }
}

decorate(Main, {
    categories: observable,
    jokeList: observable,
    getCategories: action,
    getJokeByCategory: action,
    getJokeBySearchField: action,
    jokeLikeOrUnlike: action,
    isFavoiriteJoke: observable,
    clean: action,
    getRandomJoke: action
})

export const main_store = new Main();
export const main_store_ctx = createContext(main_store);
