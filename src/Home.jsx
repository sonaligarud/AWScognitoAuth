import React, { useEffect, useState } from "react";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import { useNavigate } from 'react-router-dom';

const Homepage = () =>
{
    const [profile ,setProfile] = useState([]);
    const nav = useNavigate();
    useEffect(() => 
    {
        GetProfile()
    },[]);

    const GetProfile = () =>
    {
        var userPool = new CognitoUserPool({
            UserPoolId: 'eu-central-1_revPjcIqO', 
            ClientId: '26pqlv6cp30qali9mdtlvc20if',
        });
        var username = localStorage.getItem('CognitoIdentityServiceProvider.26pqlv6cp30qali9mdtlvc20if.LastAuthUser');
        var cognitoUser = new CognitoUser({
            Username:username,
            Pool: userPool,
        });

        cognitoUser.getSession(function(err, result) 
        {
            if(err)
            {
                alert(err.message || JSON.stringify(err));
                return 
            }
        });

        cognitoUser.getUserAttributes(function(err, result) 
        {
            if (err) 
            {
                alert(err.message || JSON.stringify(err));
                return;
            }
            console.log(result);
            let allow = ['gender','name','family_name','email'];
            let data = [];
            for (let i = 0; i < result.length; i++) 
            {
                if(allow.includes(result[i].getName()))
                {
                    data.push(result[i]);
                }
                
            }
            setProfile(data);
        });

       
        
    }
    const Logout= () =>
    {
       
        var userPool = new CognitoUserPool({
            UserPoolId: 'eu-central-1_revPjcIqO', 
            ClientId: '26pqlv6cp30qali9mdtlvc20if',
        });
        var username = localStorage.getItem('CognitoIdentityServiceProvider.26pqlv6cp30qali9mdtlvc20if.LastAuthUser');
        var cognitoUser = new CognitoUser({
            Username:username,
            Pool: userPool,
        });
        cognitoUser.signOut();
        nav("/login");
    }
    console.log(profile);

   return(
    <div className="container">
        <div className="row">
            <div className="col-md-6 mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-5">
            <div className="card bg-light text-dark">
                    <div className="card-body">
                        <h5>My Profile</h5>
                        <ul>
                            {
                                profile.map((item,index) =>
                                ( 
                                    <li key={index}> 
                                        { item.getName()  } : { item.getValue() } 
                                    </li>  
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <hr />
                <h5 className="text-center p-4">Welcome !!</h5>
                <button className="btn btn-danger text-center" onClick={Logout}>Log Out</button>
            </div>
        </div>
    </div>
)
}

export default Homepage