import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    sidebar:{
        height: '100%',
        width: '75%',
        backgroundColor: 'white',
        zIndex: 500,
        position: 'fixed',
        top: 0,
        left: 0,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        transition: 'transform 0.3s ease-out', 
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
        }
    },
    logoandclose:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        '& div':{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    open:{
        transform: 'translateX(0)'
    },
    close:{
        transform: 'translateX(-100%)'
    }
    
});

export default useStyles;