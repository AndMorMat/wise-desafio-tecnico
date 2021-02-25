import { StyleSheet } from 'react-native';
import dimensions from '../../constants/Layout';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#130525',
    flex: 1,
  },
  loginBox: {
  	padding: 10,
  	paddingBottom: 60,
  	marginRight: 0,
  	marginLeft: 0,
  	backgroundColor: "#fff",
  	borderRadius: 10,
  	flexDirection: "column",
  	width: '90%',
  	marginTop: 90,
  	paddingLeft: 28,
  	paddingRight: 28,
  },
  infoForgotPass: {
    marginTop: 25, 
    backgroundColor: 'rgba(255, 255, 255, 0)' 
  },
  blocoInputs: {
    marginTop: 20
  },
  inputError: {
    borderWidth:0.5, 
    borderColor: '#f00'
  },
  mobile: {
  	backgroundColor: 'rgba(255, 255, 255, 0)', 
  	width: '100%',
  	alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
  	textAlign: "center",
    fontSize: 36,
    lineHeight: 50,
    color: '#383E71'
  },
  subTitle: {
  	fontSize: 17,
  	textAlign: "center",
  	marginTop: 20,
  	color: '#989FDB'
  },
  buttonLoginBox: {
  	backgroundColor: 'rgba(255, 255, 255, 0)',
  	marginTop: -26
  },
  loginButton: {
  	padding: 15,
  	backgroundColor: '#d3d3d3',
  	width: 150,
  	borderRadius: 10,
  	marginTop: 10,
  },
  loginButtonText: {
  	textAlign: 'center',
  	fontSize: 20
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
    width: '100%',
    height: "70%"
  },
  button: { 
  	width:180
  },
  text: {
  	color: "#fff", 
  	textAlign: 'center', 
  	fontSize: 17
  },
  link: {
  	textDecorationLine: 'underline', 
  	color: "#fff"
  },
  linkTablet: {
  	textDecorationLine: 'underline', 
  	color: "#383E71"
  },
  textTablet: {
  	color: '#989FDB', 
  	textAlign: 'center', 
  	fontSize: 17
  },
  buttonTablet: { 
  	width:'100%',
    marginTop: 16
  },
  imageTablet: {
  	flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#130525',
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    left: 0,
    width: '60%',
    height: "100%",
  },
  tablet: {
  	backgroundColor: "#fff",
  	width: '60%',
	  height: '100%',
    position: 'absolute',
    right: 0

  },
  loginBoxTablet: {
  	padding: 10,
  	paddingBottom: 40,
  	marginRight: 0,
  	marginLeft: 0,
  	backgroundColor: "#fff",
  	borderRadius: 10,
  	flexDirection: "column",
  	width: '100%',
    justifyContent: 'flex-end',
  	paddingLeft: 28,
  	paddingRight: 28,
  	marginTop: '30%'
  },
  buttonLoginBoxTablet: {
  	backgroundColor: 'rgba(255, 255, 255, 0)',
  	marginTop: -30,
  	alignItems: 'center',
  	width: '100%',
  	paddingLeft: 28,
  	paddingRight: 28,
  },
  titleTablet: {
  	textAlign: "left",
    fontSize: 36,
    lineHeight: 50,
    color: '#383E71',
    marginTop: '20%'

  },
  subTitleTablet: {
  	fontSize: 17,
  	textAlign: "left",
  	marginTop: 20,
  	color: '#989FDB'
  },
});

export default styles;