import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    backdrop:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100
    }
});

export default useStyles;