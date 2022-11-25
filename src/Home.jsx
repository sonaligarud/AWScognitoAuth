import React,{ useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Homepage(){
return(
    <div className="container">
        <div className="row">
            <div className="col-md-6 mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-5">
                <h5 className="text-center p-4">Welcome !!</h5>
            </div>
        </div>
    </div>
)
}

export default Homepage