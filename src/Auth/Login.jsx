import React, { useState } from "react";
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate, useNavigation } from "react-router-dom";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const onSubmit = event => {
    event.preventDefault();

    // const user = new CognitoUser({
    //   Username: username,
    //   Pool: UserPool
    // });
    // const authDetails = new AuthenticationDetails({
    //   Username: username,
    //   Password: password
    // });

    // user.authenticateUser(authDetails, {
    //   onSuccess: data => {
    //     console.log("onSuccess:", data);
    //   },

    //   onFailure: err => {
    //     console.error("onFailure:", err);
    //   },

    //   newPasswordRequired: data => {
    //     console.log("newPasswordRequired:", data);
    //   }
    // });

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
            // var accessToken = result.getAccessToken().getJwtToken();
    
            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            // AWS.config.region = '<region>';
    
            // AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            //     IdentityPoolId: '...', // your identity pool id here
            //     Logins: {
            //         // Change the key below according to the specific region your user pool is in.
            //         'cognito-idp.<region>.amazonaws.com/<YOUR_USER_POOL_ID>': result
            //             .getIdToken()
            //             .getJwtToken(),
            //     },
            // });
    
            // //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
            // AWS.config.credentials.refresh(error => {
            //     if (error) {
            //         console.error(error);
            //     } else {
            //         // Instantiate aws sdk service objects now that the credentials have been updated.
            //         // example: var s3 = new AWS.S3();
            //         console.log('Successfully logged!');
            //     }
            // });
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
                    <label>Username</label>
                    <input type="text" className="form-control" value={username} onChange={event => setUsername(event.target.value)} />
                    <br/>
                    <label>Password</label>
                    <input type="password" className="form-control"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    />
                    <br/>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
  );
};