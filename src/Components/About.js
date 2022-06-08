import React, { Component } from 'react'

export default class About extends Component {
linkedin= ()=>
  {
    window.location.href="https://www.linkedin.com/in/mohit-singh-726a611b1"
  }
  
  componentDidMount(){
      
      this.props.setProgress(100);
  }
  render() {
    return (
 
      <div className='container mt-80'>
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>About Me</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <h6><b>Learner | Engineer | Coder</b></h6><hr/>
                Yes, This three words describe me better.<br/>
                By profession, I am a Software Engineer having expertise in RPA.<br/>
                But web development is one of my intrest and I continously try to learn new techs.<br/>
                This is my first react web application.
                <br/>
                Hope, You have like it!!!

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Purpose</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        NewsBuzz - A digital plateform to update you with all news on daily basis. You can read top news from all over the world anytime 
        as per your comforts.<br/><br/>

        <b>Categories:</b><br/>
        <ul>
        <li>Business</li>
        <li>General</li>
        <li>Science</li>
        <li>Technology</li>
        <li>Sports</li>
        <li>Health</li>
        <li>Entertainment</li>
        </ul>  
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Contact Me</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <h6 className="text-dark"><b>Want to contact me?</b></h6><hr/>
                Feel free to reach if you have any feedback or suggestion.<br/><br />
                <i className="bi bi-envelope-fill"></i>&nbsp; &nbsp; mail to: mohitsinghkanpur2@gmail.com<br />
                <i className="bi-linkedin" onClick={this.linkedin} target="_blank"></i>&nbsp; <i className="bi bi-instagram"></i>&nbsp;&nbsp;<i className="bi bi-twitter"></i>
      </div>
    </div>
  </div>
</div>

      </div>
    )
  }
}
