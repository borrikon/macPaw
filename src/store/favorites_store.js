import { createContext } from 'react';
import { observable, action, decorate } from 'mobx';

class Favorite {
    favoritesList = [];

    addOrRemoveFavorite(joke) {
        const checkJokeExist = this.favoritesList.findIndex(jokeItem => jokeItem.id === joke.id ) !== - 1;
        if (checkJokeExist) {
            this.favoritesList = this.favoritesList.filter(favorite => favorite.id !== joke.id);
        } else {
            this.favoritesList.push(joke);
        }
        this.updateInsideLocalstorage();
    }

    updateInsideLocalstorage() {
        localStorage.setItem('favoritesList', JSON.stringify(this.favoritesList));
    }

    constructor() {
        this.favoritesList = JSON.parse(localStorage.getItem('favoritesList')) || [];
        this.addOrRemoveFavorite = this.addOrRemoveFavorite.bind(this);
        this.updateInsideLocalstorage = this.updateInsideLocalstorage.bind(this);
    }
}

decorate(Favorite, {
    addOrRemoveFavorite: action,
    updateInsideLocalstorage: action,
    changeFillOfHeat: action,
    favoritesList: observable,
})

export const favorite_store = new Favorite();
export const favorite_store_ctx = createContext(favorite_store);
