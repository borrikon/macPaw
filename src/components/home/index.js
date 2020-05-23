import React, { useEffect, useContext } from 'react'
import { observer } from 'mobx-react'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { main_store_ctx } from '../../store/main_store';

import { useStyles } from './styles'
import { choose_joke_store_ctx } from './store';


const ChooseJoke = observer(() => {

    const {
        mainContainer, radio, categoriesStyle, searchInput,
        categoriesActive, buttonSubmit, appContainer
    } = useStyles({});

    const {
        searchValue, handleChangeSearchValue, typeOfJoke,
        changeTypeOfJoke, chosedCategory, choseCategory,
        getJokeButtonPressed
    } = useContext(choose_joke_store_ctx);

    const {
        categories, getCategories
    } = useContext(main_store_ctx);

    useEffect(()=>{
        getCategories();
    }, []);

    const renderJokeCategory = () => {
        return (
            categories.map((item, index)=>{
                return (
                    <div
                        key={index}
                        className={ (chosedCategory === item) ? categoriesActive : null}
                        onClick={() => {choseCategory(item)}}
                    >
                        <span>
                            {item}
                        </span>
                    </div>
                )
            })
        )
    }

    return (
        <div className={appContainer}>
            <div className={mainContainer}>
                <h4>MSI 2020</h4>
                <h1>Hey!</h1>
                <h2>Let’s try to find a joke for you:</h2>
                <RadioGroup
                    aria-label="typeOfSearch"
                    name="typeOfSearch"
                    value={typeOfJoke}
                    onChange={(e) => changeTypeOfJoke(e.target.value)}
                >
                    <FormControlLabel
                        className={radio}
                        value="random"
                        control={<Radio  />}
                        label="Random"
                    />
                    <FormControlLabel
                        className={radio}
                        value="categories"
                        control={<Radio />}
                        label="From Categories"
                    />
                    {
                        typeOfJoke === 'categories'
                            ? <div className={categoriesStyle}>
                                { renderJokeCategory() }
                            </div>
                            : null
                        }
                    <FormControlLabel
                        className={radio}
                        value="search"
                        control={<Radio />}
                        label="Search"
                    />
                        {
                            typeOfJoke === 'search'
                            ? <input
                                className={searchInput}
                                type='text'
                                placeholder='Free text search...'
                                value = {searchValue}
                                onChange = {(e) => { handleChangeSearchValue(e.target.value) }}
                                />
                            : null
                        }
                </RadioGroup>
                <Button
                    className={buttonSubmit}
                    variant="contained"
                    color="primary"
                    onClick={getJokeButtonPressed}
                >
                    Get a joke
                </Button>
            </div>
        </div>
    )
});

export default ChooseJoke;
