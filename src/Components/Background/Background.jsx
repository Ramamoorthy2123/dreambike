import './Background.css';
import video1 from "../../Asset/video1.mp4"
import img1 from "../../Asset/img1.jpg"
import img2 from "../../Asset/img2.jpg"
import img3 from "../../Asset/img3.jpg"

const Background = ({ playStatus, bmwCount}) => {
   if(playStatus){
    return(
        <video className='background fade-in' autoPlay loop muted>
        <source  src={video1} type='video/mp4'/>
        </video>
    )
   }

   else if(bmwCount === 0){
    return <img src={img1}className='background fade-in' alt="BMW G310RR" />
   }
   else if(bmwCount === 1){
    return <img src={img2}className='background fade-in' alt="BMW G310RR" />
   }
   else if(bmwCount === 2){
    return <img src={img3}className='background fade-in' alt="BMW G310RR" />
   }
}

export default Background