import makestyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makestyles(()=>({
    jokeContainer:{
        display: 'flex',
        flexDirection: 'column',    
        padding: '40px',
        borderRadius: 20,
        background: '#F8F8F8',
        marginTop: 40,
        '&>div':{
            '&:nth-of-type(1)':{
                alignSelf: 'flex-end',
                '&>svg':{
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }
            }
        },
        '@media (max-width: 900px)':{
            padding: 25,
            marginTop: 20
        },
        '@media (max-width: 600px)':{
            padding: 10,
            marginTop: 10
        }
    },
    jokeInner:{
        '&>img':{
            width: 40,
            height: 40,
            marginRight: 20
        },
        display: 'flex',
        flexDirection: 'row',
       
    },
    jokeContent: {
        fontSize: 18,
        lineHeight: '26px',
        color: '#333',
        fontWeight: 500,
        marginBottom: 28,
        '&>div':{
            fontSize: 10,
            color: '#ABABAB',
            marginBottom: 5,
            '&>a':{
                color: '#8EA7FF',
                textDecoration: 'underline',
                marginRight: 5,
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        }
    },
    jokeInfo:{
        display: 'flex',
        justifyContent: 'space-between',
        '&>div':{
            '&:nth-of-type(1)':{
                color: '#ABABAB',
                fontSize: 10,
                lineHeight: '14px',
                marginLeft: 60,
                '&>span':{
                    fontWeight: 700
                }
            }
        }
    },
    categoriesActive: {
        borderRadius: 6,
        padding: '6px 15px',
        marginRight: 10,
        marginBottom: 15,
        background: '#FFF',
        '&>span':{
            textTransform: 'uppercase',
            color: '#333',
            fontWeight: 500,
            fontSize: 12,
            lineHeight: '16px',
            letterSpacing: 2
        }
    },
    jokeContainerFav:{
        display: 'flex',
        flexDirection: 'column',    
        padding: '40px',
        borderRadius: 20,
        background: '#FFFFFF',
        marginTop: 40,
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        '&>div':{
            '&:nth-of-type(1)':{
                alignSelf: 'flex-end',
                '&>svg':{
                    '&:hover': {
                        cursor: 'pointer'
                    }
                }
            }
        }
    },
    '@media (max-width: 900px)':{
        padding: '20px',
        marginTop: 20
    },
    '@media (max-width: 600px)':{
        padding: '10px',
        marginTop: 10
    }
}))