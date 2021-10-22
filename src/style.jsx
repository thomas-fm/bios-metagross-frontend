import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

    text: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '24px',
        marginLeft: '30px'
    },
    text1: {
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    list: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
    },
    profile: {
        marginRight: '80px',
        border: '1px solid',
        borderRadius: '10px',
        padding: '5px 15px'
    },
    navbar: {
        borderBottom: 'solid 1px grey',
    }
}));

export default useStyles

