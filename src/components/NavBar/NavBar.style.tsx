import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    header:{
        padding:'10px 10px',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'space-between',
        margin:'0px 30px',
        width: '100%',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            padding: '10px 0',
            margin: '0 15px'
        }
    }
})

export default useStyles;