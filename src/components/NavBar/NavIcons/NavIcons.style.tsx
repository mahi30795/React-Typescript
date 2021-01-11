import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    iconNav:{
        '& ul':{
            '& li':{
                float: 'left',
                listStyleType:'none'
            }
        }
    },
    icon:{
        width: '30px',
        height: '30px',
        padding: '16px 10px'
    }
});

export default useStyles;