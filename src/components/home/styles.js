import makestyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makestyles(()=>({
    appContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
    },
    mainContainer:{
        '&>h4':{
            fontSize: 20,
            lineHeight: '28px',
            marginBottom: 78
        },
        '&>h1':{
            fontSize: 32,
            lineHeight: '44px',
            marginBottom: 0
        },
        '&>h2':{
            fontSize: 24,
            lineHeight: '44px',
            fontWeight: 500,
            marginBottom: 43,
            marginTop: 0
        },
    },
    formGroup:{

    },
    radio: {
        '&>span':{
            color: '#333!important',
            fontSize: 18
        }
    },
    categoriesStyle:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '20px 0',
        '&>div':{
            border: '2px solid #F8F8F8',
            borderRadius: 6,
            padding: '6px 15px',
            marginRight: 10,
            marginBottom: 15,
            '&:hover':{
                cursor: 'pointer'
            },
            '&>span':{
                textTransform: 'uppercase',
                color: '#ABABAB',
                fontWeight: 500,
                fontSize: 12,
                lineHeight: '16px',
                letterSpacing: 2
            }
        },
    },
    categoriesActive: {
        background: '#F8F8F8',
            '&>span':{
                color: '#333!important'
            }
    },
    searchInput:{
        width: '100%',
        borderRadius: 6,
        border: '2px solid #333',
        padding: '10px 0 10px 15px',
        marginTop: 20,
        fontSize: 16,
        lineHeight: '22px'
    },
    buttonSubmit: {
        background: 'linear-gradient(92.01deg, #8EA7FF 0%, #7291FF 100%)',
        borderRadius: '10px!important',
        margin: '20px 0!important',
        padding: '10px 40px!important',
        '&>span':{
            textTransform: 'none',
            fontWeight: 700,
            fontSize: 16,
            lineHeight: '22px'
        }
    }
}))
