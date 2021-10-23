import {makeStyles} from '@material-ui/core'
import { auto, right } from '@popperjs/core';

const useStyles = makeStyles((theme) => ({

    text: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '24px',
        marginLeft: '30px'
    },
    text5: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '24px',
        marginLeft: '65px',
        marginTop: '30px'
    },
    text1: {
        textDecoration: 'none',
        fontWeight: '400px',
        fontSize: '20px',
        color: 'white'
    },
    text4: {
        textDecoration: 'none',
        fontSize: '16px',
        color: 'white'
    },
    text2: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '24px',
        marginLeft: '65px',
        marginTop: '30px'
    },
    text3: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '24px',
        marginLeft: '65px',
        marginTop: '40px'
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
        margin: '50px 0px 0px 70px',
        fontSize: '28px'
    },
    course1: {
        margin: '10px 0px 0px 30px',
        fontSize: '28px'
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
        width: '100%'
    },
    course_style: {
        margin: 'auto',
        marginTop: '50px',
        marginBottom: '30px',
        padding: '10px 10px 10px 10px',
        width: '80%',
        borderRadius: '10px',
        borderColor: 'black',
        borderStyle: 'solid'
    },
    course_detail: {
        display: 'flex',
        fontSize: '30px'
    },
    list_course_detail: {
        listStyle: 'None',
        marginTop: '25px',
        fontSize: '26px'
    },
    list_course_detail2: {
        margin: '10px auto 10px auto'
    },
    view_course_style: {
        textDecoration: 'None',
        marginLeft: '15px'
    },
    button_style: {
        backgroundColor: '#6dd400'
    },
    list_project_detail : {
        listStyle: 'None',
        marginTop: '10px',
        fontSize: '26px',
    },
    header_style : {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '30px'
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
        borderRadius: '10px',
        borderColor: 'black',
        borderStyle: 'solid'
    },
    project_detail: {
        display: 'flex',
    },
    view_course_detail: {
        textDecoration: 'None',
        fontSize: '18px'
    },
    view_project_detail: {
        textDecoration: 'None',
        fontSize: '18px'
    },
    project_info: {
        listStyle: 'none',
        margin: '20px auto 20px auto',
        fontWeight: 'bold'
    },
    page_wrapper : {
        border: '1px solid',
        boxShadow: '0px 0px 3px grey',
        margin: '50px auto',
        width: '60%',
        borderRadius: '10px',
    },
    header: {
        marginTop: '15px'
    },
    profile_wrapper: {
        margin: '0px 100px 0px 80px'
    },
    img_google: {
        marginTop: '40px'
    }
}));

export default useStyles

