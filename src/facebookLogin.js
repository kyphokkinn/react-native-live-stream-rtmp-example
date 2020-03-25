import React, {Component} from 'react';
import {View} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import Utils from './Utils';

export default class FBLoginButton extends Component {

    handleLogin = async() => {
        AccessToken.getCurrentAccessToken().then((data)=>{
            console.log('fb id = '+data.userID);
            fetch(Utils.getSocketIOIP()+'/create_user', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: data.userID,
                    userName: 'test',
                })
            }).then((response)=>{
                console.log(response);
            });
        });
    }
    render() {
        return (
            <View>
                <LoginButton
                publishPermission={["email"]}
                onLoginFinished={
                    (error,result) => {
                        if (error) {
                            alert('Login failed with error: ' + error.message);
                        } else if (result.isCancelled) {
                            alert('Login was cancel')
                        } else {
                            this.handleLogin();
                            console.log(result.grantedPermissions.toString());
                        }
                    }
                }
                onLogoutFinished={()=>alert("User log out")}
                >
                </LoginButton>
            </View>
        );
    }
}