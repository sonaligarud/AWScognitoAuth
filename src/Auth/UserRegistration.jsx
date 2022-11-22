import React,{ useState } from "react";
import { CognitoUserPool } from 'amazon-cognito-identity-js';


function Registration(){
  const [name,setName] = useState('');
  const [family_name,setFamily_name] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  
  const poolData = {
    UserPoolId: 'eu-central-1_revPjcIqO',
    ClientId: '26pqlv6cp30qali9mdtlvc20if'
  };

  const UserPool = new CognitoUserPool(poolData);

  const onSubmit = event => {
    event.preventDefault();
    const attributeList = [
        {
            Name:'name',
            Value:name,
        },
        {
            Name:'family_name',
            Value:family_name,
        },
        {
            Name:'email',
            Value:email,
        },
        {
            Name:'gender',
            Value:gender,
        }
    ];
  
    UserPool.signUp(username, password, attributeList, null, (err, data) => {
        if (err) {
          console.log(err);
          alert("Couldn't sign up");
        } else {
          console.log(data);
          alert('User Added Successfully');
        }
      });
  };

  function onChangeValue(event) {
    setGender(event.target.value);
  }

return(
    <div className="container">
        <div className="row">
            <div className="col-md-12 shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <form onSubmit={onSubmit}>
                    <h4 className="text-center">Register Here</h4>
                    <div className="form-group">
                        <label htmlFor="Family name">Enter Name</label>
                        <input type="text" className="form-control" value={name}
                         onChange={event => setName(event.target.value)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Family name">Surname</label>
                        <input type="text" className="form-control" value={family_name}
                         onChange={event => setFamily_name(event.target.value)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input type="text" className="form-control" value={username} 
                        onChange={event => setUsername(event.target.value)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" value={password} 
                        onChange={event => setPassword(event.target.value)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control" value={email} 
                        onChange={event => setEmail(event.target.value)}  />
                    </div>
                    <div className="form-group">
                        <div onChange={onChangeValue}>
                        <label htmlFor="Gender">Gender</label> <br/>
                        <input className="" type="radio" value="Male" name="gender" checked={gender === "Male"} /> Male <br/>
                        <input type="radio" value="Female" name="gender" checked={gender === "Female"}/> Female <br/>
                        <input type="radio" value="Other" name="gender" checked={gender === "Other"} /> Other
                        </div>
                    </div>
                   
                   <button type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Registration