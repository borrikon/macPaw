import React, { useContext } from 'react'
import { observer } from 'mobx-react';

import JokeItem from '../joke_item'
import { favorite_store_ctx } from '../../store/favorites_store'

import { useStyles } from './styles'


export default  observer(() => {
    const {
        favContainer
    } = useStyles({})

    const { favoritesList } = useContext(favorite_store_ctx);

    if (!favoritesList.length) return (
            <div className={favContainer}>
                <h2>Favourite</h2>
                <p> You did not choose favorites jokes yet </p>
            </div>
    )

    return (
            <div className={favContainer}>
                <h2>Favourite</h2>
                {
                    favoritesList.map(favorite => (
                        <JokeItem
                            key={favorite.id}
                            categories={favorite.catefories}
                            updated_at={favorite.updated_at}
                            icon_url={favorite.icon_url}
                            id={favorite.id}
                            value={favorite.value}
                            isFavourite={true}
                        />
                    ))
                }
            </div>
    )
});
