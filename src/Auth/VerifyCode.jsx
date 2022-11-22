import React,{ useState } from "react";
import { CognitoUserPool } from 'amazon-cognito-identity-js';

function VerifyCode(){
return(
    <div className="container">
        <div className="row">
            <div className="col-md-12 shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <form>
                    <div class="form-group">
                        <label for="OTP">Enter OTP:</label>
                        <input type="text" class="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Code</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default VerifyCode