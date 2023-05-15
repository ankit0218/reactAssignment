import logo from '../images/main.svg'
import './MainComponent.css'
import { useState } from "react";

const Main = () => {
    const[email, setEmail] = useState(" ");
    const[IsRegistered, SetisRegistered] = useState(false);
     
    const handler = e =>
    {
        setEmail(e.target.value)
    }

    function registerNow(){
        if(!email) return;


        SetisRegistered(true);
    }

    return (
        <>
    <div className='main'>
    <div className="mainheading">An inspiring design delivered to your inbox every morning
    <p className="para">Our team scouts the internet for the best designs, illustrations and art and delivers a
        truly inspiring
        one every day to your inbox </p>
        
        {IsRegistered ? <p className='after'><>Thank you!</> </p>: <> <p className="show">Show me how it looks</p>
        <input type="email" placeholder="    Your e-mail address" id="email" required onChange={handler} />
        <button className="registerbtn" onClick={registerNow} ><strong>Register Now</strong></button> </>}
        
    
    <p className="formdown">Free - No Spam - No Data Sharing</p>
    <img className="img" src={logo} alt='Person' />
    </div>
    </div>
    </>
  );
}

export default Main