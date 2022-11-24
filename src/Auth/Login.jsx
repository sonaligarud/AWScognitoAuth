import React,{ useState } from "react";

function Login(){
return(
    <div className="container">
        <div className="row">
            <div className="col-md-12 shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <form>
                    <h4 className="text-center">Login Here</h4>
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input type="text" className="form-control" name="username"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" name="password" />
                    </div>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
</div>

);
}

export default Login