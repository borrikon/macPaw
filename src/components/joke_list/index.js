import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import JokeItem from '../joke_item';

import { main_store_ctx } from '../../store/main_store';


export const JokeList = observer(() => {
    const { jokeList, jokeLikeOrUnlike, isFavoiriteJoke } = useContext(main_store_ctx);

    if (!jokeList.length) return null;

    return jokeList.map(joke => (
        <JokeItem
            key={joke.id}
            categories={joke.categories}
            updated_at={joke.updated_at}
            id={joke.id}
            value={joke.value}
            jokeLikeOrUnlike={()=>jokeLikeOrUnlike()}
            isFavouriteJoke={isFavoiriteJoke}
        />
    ));
});
