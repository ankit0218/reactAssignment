import instagram from '../images/instaLogo.svg'
import linkedIn from '../images/LinkedInLogo.svg'
import './FooterComponent.css'
const Footer = ()=> {
  return (
  
    <div className="footer">
        <p className="left">
            Prompt Generator <br />
            Dweep Daily <br />
            All Contributors <br />
            Your data on Dweep.io <br />
            Contribute to Dweep <br />
        </p>
        <p className="right">
            Dweep.io<br />
            Made with love in India<br />

          <img src={instagram} className='img1' alt='instagram'/>
          <img src={linkedIn} className='img2' alt='linkedIn'/>

            hello@dweep.io <br />
        </p>
    </div> 
  ) 
}

export default Footer