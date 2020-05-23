import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import mess from '../../assets/message.png'
import {ReactComponent as HeartEmpt} from '../../assets/heartFill.svg'
import linkimg from '../../assets/link.png'
import { favorite_store_ctx } from '../../store/favorites_store'

import {useStyles} from './styles'
import { main_store_ctx } from '../../store/main_store';


export default observer(({ categories, updated_at,
    id, value, isFavourite, isFavouriteJoke }) => {
    const {
        jokeContainer, jokeContent, jokeInfo, categoriesActive,
        jokeContainerFav, jokeInner
    } = useStyles({})
    
    const { addOrRemoveFavorite } = useContext(favorite_store_ctx);
    const { jokeLikeOrUnlike } = useContext(main_store_ctx)


    function favoriteButtonPress() { 
        addOrRemoveFavorite({
            categories, updated_at,
            id, value
        })
        jokeLikeOrUnlike()
    }

    let lastUpdated = Math.floor((new Date()-new Date(updated_at))/3600000)

    return (
        <div className={isFavourite ? jokeContainerFav : jokeContainer}>
            <div onClick={favoriteButtonPress}>
                <HeartEmpt fill={(isFavouriteJoke || isFavourite ) ? '#FF6767' : '#F8F8F8'}/>
            </div>
            <div className={jokeInner}>
                <img src={mess} alt='message'/>
                <div className={jokeContent}>
                    <div>
                        ID <a 
                            target='blank' 
                            href={`https://api.chucknorris.io/jokes/${id}`}
                            >
                                {id}
                            </a>
                        <img src={linkimg} alt='link' />
                    </div>
                    {value}
                </div>
            </div>
            <div className={jokeInfo}>
                <div>Last update: <span>{lastUpdated}</span> hours ago</div>  
                {   (categories === undefined || categories.length === 0) 
                    ?  null
                    : <div className={categoriesActive}>
                        <span>
                            {categories}
                        </span>
                    </div>
                }
            </div>
        </div>
    )
});
