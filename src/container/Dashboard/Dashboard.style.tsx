import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrap:{
        margin:'5vh 5vh',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            margin: '0'
        }
    },
    countWrap:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '10px',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        flexDirection: 'row',
        padding: '2vh',
        margin: '10px 0',
        ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            padding: '0'
        }
    },
    dataWrap:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '10px',
        height: '50vh',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        margin: '15px 0'
    },
    sideWrap:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '10px',
        height: '50vh',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: '3vh',
        margin: '15px 0'
    }
})

export default useStyles;