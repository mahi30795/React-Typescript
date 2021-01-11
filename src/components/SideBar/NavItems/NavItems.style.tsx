import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    nav:{
        '& ul':{
            margin: '0',
            padding: '0',
            '& li':{
                listStyleType: 'none',
                float: 'left',
                padding:'25px 10px',
                color: 'grey',
                ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
                    float: 'none'
                }
            }
        }
    }
})

export default useStyles;