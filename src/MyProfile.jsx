import React, { useState } from "react";
import { AuthenticationDetails, CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate, useNavigation } from "react-router-dom";

function Myprofile (){

  return (
    
    <div className="container">
        <div className="row">
            <div className="col-md-6 mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <div>My profile</div>
            </div>
        </div>
    </div>
  );
};
export default Myprofile;