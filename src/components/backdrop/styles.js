import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    backdrop:{
        display: 'block',
        background: 'rgba(0, 0, 0, 0.3)',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        '@media (min-width: 900px)':{
            display: 'none'
          },
    }
})