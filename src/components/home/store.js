import { createContext } from 'react'
import { observable, action, decorate } from 'mobx'

import { main_store } from '../../store/main_store'

class ChooseJoke {
    searchValue = '';
    typeOfJoke = 'random';
    chosedCategory = '';

    handleChangeSearchValue(inputValue) {
        this.searchValue = inputValue;
    }

    changeTypeOfJoke(jokeType) {
        this.typeOfJoke = jokeType;
    }

    choseCategory(categoryName) {
        this.chosedCategory = categoryName;
    }

    getJokeButtonPressed() {
        main_store.isFavoiriteJoke = false;
        if(this.typeOfJoke === 'random') {
            main_store.getRandomJoke();
        } else if (this.typeOfJoke === 'search') {
            main_store.getJokeBySearchField(this.searchValue);
        } else if (this.typeOfJoke === 'categories') {
            main_store.getJokeByCategory(this.chosedCategory);
        }
    }

    constructor() {
        this.handleChangeSearchValue = this.handleChangeSearchValue.bind(this);
        this.changeTypeOfJoke = this.changeTypeOfJoke.bind(this);
        this.choseCategory = this.choseCategory.bind(this);
        this.getJokeButtonPressed = this.getJokeButtonPressed.bind(this);
    }
}

decorate(ChooseJoke, {
    searchValue: observable,
    typeOfJoke: observable,
    chosedCategory: observable,
    handleChangeSearchValue: action,
    changeTypeOfJoke: action,
    getJokeButtonPressed: action,
    choseCategory: action
})

export const choose_joke_store = new ChooseJoke();
export const choose_joke_store_ctx = createContext(choose_joke_store);
