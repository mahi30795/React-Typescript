import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    iconNav:{
        padding: '16px',
    },
    icon:{
        float: 'left',
        listStyleType:'none',
        margin:'0 10px',
        '& img':{
            width: '35px',
            height: '35px',
        }
    }
});

export default useStyles;