import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    nav:{
        '& ul':{
            '& li':{
                listStyleType: 'none',
                float: 'left',
                padding:'25px 10px',
                color: 'grey'
            }
        }
    }
})

export default useStyles;