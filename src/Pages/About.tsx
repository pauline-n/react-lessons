import React from 'react'
// import 

function About() {
    return (
        <div>
        
      <h2>Get to know Me</h2>
      <h5>Photo of me:</h5>
      <div className="images">
        <img src="../assets/img/BeautyPlus_20200828162818102_save.jpg" width="auto" alt="" />
      </div>
      <p>Software developer since 2020 during the pandemic lockdown</p>
      <h3>More Text</h3>
      <p>Passionate baout code. Can design nd build websites, webapps, mobilapps, security systems and hacking solutions.</p>
      <div className="images">
        <img src="https://picsum.photos/301/60" width="auto" alt="picture-perfect" />
      </div>
      <br />
      <div className="images">
        <img src="https://picsum.photos/302/60" width="auto" alt="" />
      </div>
      <br />
      <div className="images">
        <img src="https://picsum.photos/303/60" width="auto" alt="" />
      </div>
        </div>
    )
}

export default About
