import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    box:{
        backgroundColor: 'white',
        width: '100%',
        height: '15vh',
        border: '1px solid white',
        borderRadius: '15px',
        padding: '3vh',
        ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
           height: '10vh'
        }
    },
    innerBox:{
        display: 'flex',
        flexDirection: 'column',
    },
    title:{
        fontSize: '1rem'
    },
    count:{
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