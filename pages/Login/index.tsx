import React, { useState } from 'react';
import axios from 'axios';
import {ImageBackground, TouchableOpacity} from 'react-native';
import { Text, View } from '../../components/Themed';
import {TextInputBox} from '../../components/TextInputBox';
import GradientButton from 'react-native-gradient-buttons';
import { useSelector, useDispatch } from 'react-redux';
import { loginRequest } from '../../actions';
import styles from './styles';
import Layout from '../../constants/Layout';
import { StyledComponentError } from '../../components/styles'
import { testMail } from '../../util/validation';

export default function LoginScreen() {

    const [user, setUser ] = useState('');
    const [pass, setPass ] = useState('');
    const [mailError, setMailError ] = useState('');
    const [passError, setPassError ] = useState('');
    const dispatch = useDispatch();
    const tablet = Layout.isTablet;

    function login() {
        const params = {user, pass}

        setMailError('');
        if(testMail(user)) {
            setMailError('Necessário um e-mail válido');
        }

        setPassError('');
        if(!pass) {
            setPassError('Necessário digitar uma senha');
        }

        axios.get('https://6035b2616496b9001749f32d.mockapi.io/api/v1/login', params)
            .then(res => {
                if(res.data.success == 1){
                    dispatch({type: 'login', payload: res.data.user})
                }

            }).catch(function(e) {
                throw e;
            });
    }

    function handleUserChange(user) {
        setUser(user)
    }

    function handlePassChange(pass) {
        setPass(pass)
    } 
        
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/images/background.png')} style={[tablet ? styles.imageTablet : styles.image]}>            
            </ImageBackground>
            <View style={ [tablet ? styles.tablet : styles.mobile]}>
                <View style={[tablet ? styles.loginBoxTablet : styles.loginBox]}>
                    <Text style={[tablet ? styles.titleTablet : styles.title]}>Olá, seja{"\n"}bem-vindo!</Text>
                    <Text style={[tablet ? styles.subTitleTablet : styles.subTitle]}>Para acessar a plataforma, faça seu login.</Text>
                    <View>
                        <TextInputBox 
                            placeholder="user.name@gmail.com"
                            label="E-MAIL"
                            value={user}
                            style={[mailError ? styles.inputError : null]}
                            onChangeText={(user) => handleUserChange(user)}
                        />
                        {mailError ? <StyledComponentError>{mailError}</StyledComponentError> : null}
                        <TextInputBox 
                            placeholder="*******"
                            label="SENHA"
                            secureTextEntry={true}
                            style={[passError ? styles.inputError : null]}
                            onChangeText={(pass) => handlePassChange(pass)}
                        />
                        {passError ? <StyledComponentError>{passError};</StyledComponentError> : null}
                        
                    </View>
                </View>
                <View style={[tablet ? styles.buttonLoginBoxTablet : styles.buttonLoginBox]}>
                    <GradientButton
                          style={[tablet ? styles.buttonTablet : styles.button]}
                          text="ENTRAR"
                          textStyle={{ fontSize: 20 }}
                          gradientBegin="#9D25B0"
                          gradientEnd="#383E71"
                          gradientDirection="diagonal"
                          height={50}
                          width={300}
                          radius={10}
                          disabled={false}
                          onPressAction={() => login()}
                        />
                </View>
                <View style={styles.infoForgotPass}>
                    <Text style={[tablet ? styles.textTablet : styles.text]}>Esqueceu seu login ou senha?</Text>
                    <Text style={[tablet ? styles.textTablet : styles.text]}>Clique <Text style={[tablet ? styles.linkTablet : styles.link]}>aqui</Text></Text>
                </View>
            </View>
            
        </View>
    );
}