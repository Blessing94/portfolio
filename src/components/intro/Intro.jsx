import "./intro.css";
import time from "../../img/time.jpg";

const Intro = () => {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
         <div>
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Blessing Mutero</h1>
          </div>
<div>
          <h2 className="i-intro">I'm a certified:</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item"><p>Web Developer</p></div>
              <div className="i-title-item"><p>UI/UX Designer</p> </div>
              <div className="i-title-item"><p>Software Engineer</p></div>
              <div className="i-title-item">Front-End Designer</div>
              <div className="i-title-item">Cloud Specialist</div>
            </div>
          </div>
          </div>
          <p className="i-desc">
          I design and develop stylish and modern web applications. My skill set encompasses a wide range of technologies that includes Realational Databases, Cloud technologies and the Linux Operating System. 
            These skills have enabled me to develop and maintain robust, scalable software solutions that drive business growth and enhance user experience.
          </p>
        </div>
        
      </div>
      <div className="i-right"> 
      <div className="i-right-wrapper">
      <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
  <link
  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap"
  rel="stylesheet" />



<div class="header">
  <h1>Reliable Software Delivery</h1>
  <h1>Powered by Modern Technology</h1>

  <p>Whether working on projects solo or with a team of developers, I will see  to it that your project is a success.</p>
</div>
<div className="containers">
<div class="row1-container">
  <div class="box box-down cyan">
    <h2>Timely</h2>
    <p>All my projects are completed and delivered in a timely manner.</p>
    <img src={time} alt="https://assets.codepen.io/2301174/icon-supervisor.svg" />
  </div>

  <div class="box red">
    <h2>Team Builder</h2>
    <p>I will create an "Avangers" like team to meet the specific needs of your project.</p>
    <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
  </div>

  <div class="box box-down blue">
    <h2>Data Driven Developer</h2>
    <p>Using multiple streems of data enables me to develop high performing software.</p>
    <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" /> 
  </div>
</div>
<div class="row2-container">
  <div class="box bottom-box orange">
    <h2>Creative Designer</h2>
    <p>I make use of morden tools to create eye catching designs that attract and retain users. </p>
    <img src="https://assets.codepen.io/2301174/icon-karma.svg"  alt= ""/>
  </div>
</div>
</div>
      </div>    
</div>
</div>
  
  );
};

export default Intro;
