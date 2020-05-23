import React from 'react'

import { useStyles } from './styles'

const Backdrop = (props) => {

    const {backdrop} = useStyles({})

    return (
        <div
            onClick={()=>props.toggleMenu()} 
            className={backdrop}>

        </div>
    )
}
export default Backdrop