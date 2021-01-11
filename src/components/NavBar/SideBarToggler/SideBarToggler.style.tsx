import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    ham:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 0 0 40px',
        '& div':{
            width: '35px',
            height: '5px',
            backgroundColor: 'grey',
            margin: '4px 0',
          }
    }
});

export default useStyles;