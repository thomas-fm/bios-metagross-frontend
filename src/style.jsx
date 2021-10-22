import {makeStyles} from '@material-ui/core'
import { auto } from '@popperjs/core';

const useStyles = makeStyles((theme) => ({

    text: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '24px',
        marginLeft: '30px'
    },
    text1: {
        textDecoration: 'none',
        fontWeight: '400px',
        fontSize: '20px',
        color: 'white'
    },
    text2: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '24px',
        marginLeft: '70px'
    },
    list: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    profile: {
        marginRight: '80px',
        border: '1px solid',
        borderRadius: '10px',
        padding: '5px 15px 7px 15px',
        backgroundColor: '#6dd400'
    },
    profile1: {
        marginRight: '80px',
        marginTop: '10px',
        border: '1px solid',
        borderRadius: '10px',
        padding: '5px 15px 7px 15px',
        backgroundColor: '#6dd400'
    },
    navbar: {
        borderBottom: 'solid 1px grey',
        backgroundColor: 'white'
    },
    image: {
        width: '60%',
        height: '20%',
        margin: 'auto'
    },
    carousel: {
        width: '40%',
        height: '20%',
        margin: 'auto'
    },
    course: {
        margin: '50px 0px 0px 70px'
    },
    course1: {
        margin: '10px 0px 0px 30px'
    },
    section: {
        width: '80%',
        height: 'auto',
        margin: '40px auto',
        border: 'solid 1px',
        borderRadius: '5px',
        boxShadow: '0px 0px 3px grey'
    },
    list_enrolled_course: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: '5px',
        margin: '30px',
        width: '80%'
    },
    course_style: {
        margin: 'auto',
        marginTop: '100px',
        marginBottom: '30px',
        padding: '10px 10px 10px 10px',
        width: '80%',
        borderRadius: '5px',
        borderColor: 'black',
        borderStyle: 'solid'
    },
    course_detail: {
        display: 'flex',
        fontSize: '36px'
    },
    list_course_detail: {
        listStyle: 'None',
        marginTop: '25px'
    },
    view_course_style: {
        textDecoration: 'None'
    },
    button_style: {
        backgroundColor: '#6dd400'
      },
    list_project_detail : {
        listStyle: 'None',
        marginTop: '10px',
        fontSize: '32px'
    },
    header_project : {
        textAlign: 'center',
        marginTop: '20px'
    },
    project_style: {
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '30px',
        padding: '10px 10px 10px 10px',
        width: '80%',
        borderRadius: '5px',
        borderColor: 'black',
        borderStyle: 'solid'
    },
    project_detail: {
        display: 'flex',
        fontSize: '36px'
    }
}));

export default useStyles

