import React,{ useState } from "react";
import * as AmazonCognitoIdentity from 'amazon-cognito-identity-js';
import { useParams } from "react-router-dom";

function VerifyCode()
{
    const [ code, setCode ]= useState('');
    const { username } = useParams();

    const verifyCode = (event) =>
    {
        event.preventDefault();
        var poolData = {
            UserPoolId: 'eu-central-1_revPjcIqO', 
            ClientId: '26pqlv6cp30qali9mdtlvc20if',
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
        var userData = {
            Username: username,
            Pool: userPool,
        };
        
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.confirmRegistration(code, true, function(err, result) 
        {
            if (err) 
            {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log('call result: ' + result);
        });
    }

return(
    <div className="container">
        <div className="row">
            <div className="col-md-12 shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <form onSubmit={(event) => verifyCode(event) }>
                    <div className="form-group">
                        <label htmlFor="OTP">Enter OTP:</label>
                        <input type="text" className="form-control" value={code} onChange={(event) => setCode(event.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Code</button>
                </form>
            </div>
        </div>
    </div>
)
}


export default VerifyCode