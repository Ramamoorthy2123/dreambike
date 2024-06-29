import './Hero.css';
import arrow_btn from "../../Asset/arrow-btn.png"
// import arrow-btn from "../../Asset/arrow-btn.jpg";
import play_btn from "../../Asset/play-btn.png";
import pause_btn from "../../Asset/pause-btn.png";

const Hero = ({ bmwData, setbmwCount,bmwCount, setplayStatus,playStatus}) => {

    
    return (
        <div className='bmw'>
        <div className="bmw-txt">
        <p>{bmwData.text1}</p>
        <p>{bmwData.text2}</p>
        </div>
        <div className="bmw-explore">
        <p>Explore the features</p>
        <img src={arrow_btn}/>
        </div>
        <div className="bmw-dot-play">
        <ul className="bmw-dots">
        <li onClick={  () => setbmwCount(0)} className= {bmwCount === 0 ? "bmw-dot orange" : "bmw-dot"}></li>

        <li onClick={  () => setbmwCount(1)} className= {bmwCount === 1 ? "bmw-dot orange" : "bmw-dot"}></li>

        <li onClick={  () => setbmwCount(2)} className= {bmwCount === 2 ? "bmw-dot orange" : "bmw-dot"}></li>
        </ul>

        <div className="bmw-play">
        <img  onClick = { () => setplayStatus(!playStatus)} src={playStatus? pause_btn : play_btn} alt="controls" />
        <p>See the video</p>
        </div>
        </div>
        </div>
    )
}

export default Hero;