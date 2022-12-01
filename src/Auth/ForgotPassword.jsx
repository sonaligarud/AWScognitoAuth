import React, { useState } from "react";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () =>
{
    const [stage, setStage] = useState(1); // 1 = username stage, 2 = code stage 
    const [username, setUsername] = useState("");
    const navigation = useNavigate();
    const [code, setCode ]= useState('');
    const [newPassword, setNewPassword ]= useState('');

    const onSubmit = (e) =>
    {
        e.preventDefault()
        const UserPool = new CognitoUserPool({
            UserPoolId: 'eu-central-1_revPjcIqO',
            ClientId: '26pqlv6cp30qali9mdtlvc20if'
        });
        var cognitoUser = new CognitoUser({ 
            Username:username,
            Pool: UserPool
        });

        if(stage == 1)
        {
            //request reset password
            cognitoUser.forgotPassword({
                onSuccess: function(data) 
                {
                    console.log('CodeDeliveryData from forgotPassword: ' + data);
                    setStage(2);
                    console.log(stage);
                },
                onFailure: function(err) 
                {
                    alert(err.message || JSON.stringify(err));
                }
            });
        }
        else
        {
            // set New Password
            cognitoUser.confirmPassword(code, newPassword, {
                onSuccess() 
                {
                    console.log('Password confirmed!');
                },
                onFailure(err) 
                {
                    console.log('Password not confirmed!');
                },
            });
        }        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-5">
                {stage === 1 && (<form onSubmit={onSubmit}>
                        <h4 className="text-center">Forgot Password</h4>
                        <label>Username</label>
                        <input type="text" className="form-control" value={username} onChange={event => setUsername(event.target.value)} />
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    )
                }
                {stage === 2 && (<form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="OTP">Enter OTP:</label>
                            <input type="text" className="form-control" value={code} onChange={(event) => setCode(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Enter New Password:</label>
                            <input type="password" className="form-control" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit Code</button>
                        <button className="btn btn-info" style={{ float: 'right'}} onClick={(event) => setStage(1)}>Back</button>
                    </form>
                )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;