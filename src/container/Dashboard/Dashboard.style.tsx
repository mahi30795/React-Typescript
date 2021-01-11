import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrap:{
        margin:'5vh 5vh'
    },
    countWrap:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '10px',
        height: '22vh',
        display: 'flex',
        flexDirection: 'row',
        padding: '3vh',
        margin: '10px 0',
    },
    dataWrap:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '10px',
        height: '50vh',
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    sideWrap:{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: '10px',
        height: '50vh',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: '3vh'
    }
})

export default useStyles;