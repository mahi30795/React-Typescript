import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    box:{
        backgroundColor: 'white',
        width: '30vh',
        height: '15vh',
        border: '1px solid white',
        borderRadius: '15px',
        margin:'0 25px',
        borderTopWidth: '7px',
        
        '& div':{
            margin: '0 10px',
            display: 'flex',
            flexDirection: 'row',
        }
    },
    innerBox:{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        '& ul':{
            '& li':{
                listStyleType: 'none',
                padding: '1vh 0 2vh 0',
                justifyContent: 'center',
                textAlign: 'center'
            }
        }
    },
    count:{
        fontSize: '2rem'
    },
    title:{
        fontSize:'0.9rem'
    },
    iconBox:{
        display: 'flex',
        alignItems: 'center',
        padding: '0.5vh 1vh',
        width: '100%',
        justifyContent: 'center',
        '& img':{
            width: '30px',
            height: '30px'
        }
    }
});

export default useStyles;