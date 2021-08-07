import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    component: {
        height: '90vh',
        width: '120vh'
    },
    image: {
        background: '#2874f0',
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        backgroundRepeat: 'no-repeat',
        height: '90vh',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px'
    },
    typo: {
        color: '#FFFFFF',
        fontWeight: 600
    },
    login: {
        display: 'flex',
        flexDirection: 'column',
        padding: '25px 35px',
        '& > *': {
            marginTop: '20px'
        }
    },
    text :{
        color: '#878787',
        fontSize: 12,
    },
    loginButton: {
        textTransform: 'none',
        color: '#FFFFFF',
        backgroundColor: '#FB641B',
        height: 48,
        borderRadius: 2
    },
    requestButton: {
        textTransform: 'none',
        background: '#FFFFFF',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 /20%)'

    }, 
    createAcc: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    },
    error: {
        color: 'red',
        fontSize: 12
    }


}))