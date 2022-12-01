import React, { useState } from "react";
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate, useNavigation } from "react-router-dom";
import { Link } from 'react-router-dom';

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  var AWS = require("aws-sdk");

  const onSubmit = event => {
    event.preventDefault();

    var authenticationData = {
        Username: username,
        Password: password,
    };
    var authenticationDetails = new AuthenticationDetails(
        authenticationData
    );
    var poolData = {
        UserPoolId: 'eu-central-1_revPjcIqO', // Your user pool id here
        ClientId: '26pqlv6cp30qali9mdtlvc20if', // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    var userData = {
        Username: username,
        Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) 
        {
            alert("Login done successfully");
            navigation('/Homepage');
            var accessToken = result.getAccessToken().getJwtToken();
    
            AWS.config.region = 'eu-central-1';
    
            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'eu-central-1:ab4b71e0-14d9-4555-8cb3-459614ec6f1e', 
                Logins: {
                    'cognito-idp.eu-central-1.amazonaws.com/eu-central-1_revPjcIqO': result
                        .getIdToken()
                        .getJwtToken(),
                },
            });
            AWS.config.credentials.refresh(error => {
                if (error) {
                    console.error(error);
                } else {
                    console.log('Successfully logged!');
                }
            });
        },
    
        onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
        },
    });
  };

  return (
    
    <div className="container">
        <div className="row">
            <div className="col-md-6 mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <form onSubmit={onSubmit}>
                    <h4 className="text-center">Login</h4>
                    <label>Username</label>
                    <input type="text" className="form-control" value={username} onChange={event => setUsername(event.target.value)} />
                    <br/>
                    <label>Password</label>
                    <input type="password" className="form-control"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    />
                    <br/>
                    <div className="form-group text-center">
                        <h6>Need an account <Link className="border-bottom" to="/">Register</Link></h6>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
  );
};