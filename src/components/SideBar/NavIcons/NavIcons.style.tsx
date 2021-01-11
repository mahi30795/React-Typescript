import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    iconNav:{
        padding: '16px',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            display: 'block',
            '& ul':{
                padding: '0 !important'
            }
        },
        ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
            display: 'none'
          }
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