import makestyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makestyles({
    favContainer:{
        width: '44.444%',
        maxWidth: '480px',
        padding: '40px',
        background: '#F8F8F8',
          '@media (max-width: 900px)':{
            minHeight: '-webkit-fill-available',
            width: '480px',
            padding: '88px 20px 20px',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 150
          },
          '@media (max-width: 600px)':{
            width: '95%',
            minWidth: '340px',
            padding: '88px 10px 10px',
          },
        '&>h2': {
            fontSize: 22,
            lineHeight: '28px',
            fontWeight: 500,
            color: '#ABABAB',
            marginBottom: 20,
            '@media (max-width: 900px)':{
                display: 'none'
              }
        },
        '&>p':{
            fontSize: 18,
            lineHeight: '20px',
            fontWeight: 400,
            marginTop: 50,
            color: '#ABABAB',
            textAlign: 'center',
        }
    },
    
    
});
