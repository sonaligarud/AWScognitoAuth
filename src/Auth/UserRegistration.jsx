import React,{ useState } from "react";
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";

const initialValues = {
    name: "",
    family_name: "",
    email: "",
    gender: "",
    username:"",
    password:"",
};


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

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
        console.log(
            "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
            values
        );
        action.resetForm();
        },
    });


return(
    <div className="container">
        <div className="row">
            <div className="col-md-12 shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <form onSubmit={onSubmit}>
                    <h4 className="text-center">Register Here</h4>
                    <div className="form-group">
                        <label htmlFor="Family name">Enter Name</label>
                        <input type="text" className="form-control" name="name" value={name}
                         onChange={event => setName(event.target.value)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Family name">Surname</label>
                        <input type="text" className="form-control" name="family_name" value={family_name}
                        onBlur={handleBlur}
                        onChange={event => setFamily_name(event.target.value)}/>
                        {errors.name && touched.name ? (
                        <p className="form-error">{errors.name}</p>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} 
                        onChange={event => setUsername(event.target.value)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} 
                        onChange={event => setPassword(event.target.value)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control" name="email" value={email} 
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