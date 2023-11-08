import "./about.css";
import Award from "../../img/award.png";
import Degree from "../../img/degree.jpg";
import Me from "../../img/selfImg.jpg"
import bckgrnd from "../../img/funky3.jpg"

const About = () => {
  return (
    <div className="a" id="about">
      <div className="a-left">
        <div className="a-card bg">
        <img
            src={bckgrnd}
            alt=""
            className="a-img"
          />
        </div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        "I'm not just a tech enthusiast; I'm a devoted family man, a proud father, and a loving husband. 
        Nerdy but still cool af."
        </p>

        <p className="a-desc">
        Born and raised in Harare, Zimbabwe, I embarked on a transformative journey at the age of 19 when I left my hometown and ventured to China to pursue my dream of becoming a Software Engineer. Over nearly a decade of relentless dedication, 
        unwavering determination, and a passion for creativity, my path has led me to this pivotal moment.
        </p>
        <div className="a-award">
          <img src={Degree} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">BS in IT: Application and Databse Development</h4>
            <p className="a-award-desc">
              I aqcuired a bacherlors degeree in Information Technology from  Liberty University.
            </p>
          </div>
        </div>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
            In 2021, I achieved distinction by being honored with the Best Creative Design Award at the prestigious Afrotech Awards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
