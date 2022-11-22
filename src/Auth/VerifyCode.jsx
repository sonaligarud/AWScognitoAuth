import React,{ useState } from "react";
import { CognitoUserPool } from 'amazon-cognito-identity-js';

function VerifyCode(){
return(
    <div className="container">
        <div className="row">
            <div className="col-md-12 shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <form>
                    <div className="form-group">
                        <label htmlFor="OTP">Enter OTP:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Code</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default VerifyCode