import makestyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makestyles({
    homeContainer:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        minHeight: '100vh',
    },
    searchContainer: {
        width: '66.666%',
        padding: '40px 140px 0 140px',
        maxWidth: 680,
        '@media (max-width: 900px)':{
            padding: '40px',
            width: 'auto'
          },
        '@media (max-width: 600px)':{
            padding: '20px',
            width: 'auto'
          }
    },
    mobileBurger: {
        position: 'absolute',
        top: 10,
        right: '20px',
        zIndex: 200,
        display: 'none',
        justifyContent: 'center',
        fontSize: 20,
        lineHeight: '22px',
        fontWeight: 500,
        color: '#ABABAB',
        '&>img': {
            marginRight: 10,
            '&:hover': {
                cursor: 'pointer'
            }
        },
        '@media (max-width: 900px)':{
            display: 'flex',
            top: 60,
          },
        '@media (max-width: 600px)':{
            display: 'flex',
            top: 40,
          } 
    },
    favouriteConteiner:{
        display: 'contents',
        '@media (max-width: 900px)':{
            display: 'none'
          }
    },
    mobileCont:{
        display: 'none',
        '@media (max-width: 900px)':{
            display: 'contents',
            position: 'relative'
          },
    },
    backdrop:{
        opacity: '1!important',
        visibility: 'visible!important',
        backgroundColor: 'rgba(0, 0, 0, 0.3)!important',
        zIndex: '1!important'
    }
});
