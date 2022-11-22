import React,{ useState } from "react";
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";

const initialValues = {
    name: "",
    family_name: "",
    email: "",
    gender:"",
    username:"",
    password:"",
};


function Registration(){
  
  const poolData = {
    UserPoolId: 'eu-central-1_revPjcIqO',
    ClientId: '26pqlv6cp30qali9mdtlvc20if'
  };

    const UserPool = new CognitoUserPool(poolData);
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
        console.log(
            values
        );
            const attributeList = [
                {
                    Name:'name',
                    Value:values.name,
                },
                {
                    Name:'family_name',
                    Value:values.family_name,
                },
                {
                    Name:'email',
                    Value:values.email,
                },
                {
                    Name:'gender',
                    Value:values.gender,
                }
            ];
        
            UserPool.signUp(values.username, values.password, attributeList, null, (err, data) => 
            {
                if (err) {
                console.log(err);
                alert("Couldn't sign up");
                } else {
                console.log(data);
                alert('User Added Successfully');
                
                }
            });
            action.resetForm();
        },
    });


return(
    <div className="container">
        <div className="row">
            <div className="col-md-12 shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <form onSubmit={handleSubmit}>
                    <h4 className="text-center">Register Here</h4>
                    <div className="form-group">
                        <label htmlFor="Family name">Enter Name</label>
                        <input type="text" className="form-control" name="name"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                        {errors.name && touched.name ? (
                        <p className="text-danger">{errors.name}</p>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Family name">Surname</label>
                        <input type="text" className="form-control" name="family_name" 
                        value={values.family_name}
                        onBlur={handleBlur}
                        onChange={handleChange}/>
                        {errors.family_name && touched.family_name ? (
                        <p className="text-danger">{errors.family_name}</p>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input type="text" className="form-control" name="username" 
                        value={values.username} 
                        onBlur={handleBlur}
                        onChange={handleChange} />
                        {errors.username && touched.username ? (
                        <p className="text-danger">{errors.username}</p>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" name="password" 
                         value={values.password} 
                         onBlur={handleBlur}
                         onChange={handleChange} />
                         {errors.password && touched.password ? (
                         <p className="text-danger">{errors.password}</p>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" className="form-control" name="email" 
                        value={values.email} 
                        onBlur={handleBlur}
                        onChange={handleChange}  />
                        {errors.email && touched.email ? (
                         <p className="text-danger">{errors.email}</p>
                        ) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Gender">Gender</label> <br/>
                        <input className="" type="radio" value="Male" name="gender" 
                        onChange={handleChange}
                        defaultChecked={values.gender === "Male" }/> Male <br/>
                        <input type="radio" value="Female" name="gender"
                         onChange={handleChange}
                         defaultChecked={values.gender=== "Female"}/> Female <br/>
                        <div>Picked: {values.gender}</div>
                    </div>
                   <button type="submit" className="btn btn-primary">Signup</button>
                </form>
            </div>
        </div>
    </div>
)
}

export default Registration