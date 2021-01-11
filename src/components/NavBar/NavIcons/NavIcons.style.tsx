import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    iconNav:{
        padding: '16px',
        '& ul':{
            '& li':{
                float: 'left',
                listStyleType:'none'
            }
        }
    },
    icon:{
        margin:'0 10px',
        '& img':{
            width: '35px',
            height: '35px',
        }
    }
});

export default useStyles;