import {React , useRef} from 'react'
import '../styles/CarouselStyles.css'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'

const Carousel = () => {

    const slider = useRef();
    let tx=0;

    const slideForward = () => {
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
  return (
    <div className="carousel">
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>1st Year</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias quis sit, quod doloremque autem exercitationem ullam aliquid praesentium suscipit dolorum fugit tempora odit blanditiis sapiente labore harum, provident illo.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>1st Year</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias quis sit, quod doloremque autem exercitationem ullam aliquid praesentium suscipit dolorum fugit tempora odit blanditiis sapiente labore harum, provident illo.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>1st Year</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias quis sit, quod doloremque autem exercitationem ullam aliquid praesentium suscipit dolorum fugit tempora odit blanditiis sapiente labore harum, provident illo.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>1st Year</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias quis sit, quod doloremque autem exercitationem ullam aliquid praesentium suscipit dolorum fugit tempora odit blanditiis sapiente labore harum, provident illo.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Carousel