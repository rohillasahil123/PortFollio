import React from 'react'
import ImageEcommarce from "../../assets/ecommarce.jpeg"
import BookStore from "../../assets/BookStore.png"
import QuizApplication from "../../assets/Quizapp.png"

const Project = () => {
    return (
        <div className='h-auto space-y-9'>
            <div className='h-[10vh]'></div>
            <div className="w-full text-center" >
                <h1 className="font-bold uppercase text-white text-4xl sm:text-5xl">Pr<span className="text-orange-500">oj</span>ect</h1>
                <p className=' font-medium text-orange-500'>Some Our Main Projects</p></div>
            <div className='flex flex-wrap text-white   mt-10 justify-around space-y-10 lg:space-y-0 lg:space-x-10 text-center '>
                <div className='h-[400px] w-[90%] md:w-[30%] border rounded-lg  space-y-5  items-center hover:shadow-[0_0_30px_15px_rgba(255,225,255)] hover:cursor-pointer transition-transform hover:scale-105   '>
                    <h1 className='font-bold text-2xl '>
                        e-commerce website
                    </h1>
                    <img src={ImageEcommarce} alt="" srcset="" className='rounded-lg h-[100px] w-[200px] object-cover mx-auto  mt-4 hover:shadow-[0_0_30px_15px_rgba(35,15,0.5)] hover:cursor-pointer transition-transform hover:scale-105  ' />
                    <p>This e-commerce frontend project is built using modern web technologies like HTML, CSS, JavaScript and React.
                        It features a clean, responsive design, user-friendly navigation, product listings, shopping cart functionality,
                        and checkout pages. The UI focuses on a seamless shopping experience, with smooth animations and optimized
                        mobile performance.</p>

                </div>
                <div className='h-[400px] w-[90%] md:w-[30%]   border rounded-lg  space-y-5 items-center hover:shadow-[0_0_30px_15px_rgba(255,255,255)] hover:cursor-pointer transition-transform hover:scale-105 '>
                    <h1 className='font-bold text-2xl'>
                        BookStore
                    </h1>
                    <img src={BookStore} alt="" srcset="" className='rounded-lg h-[100px] w-[200px] object-cover mx-auto  mt-4 hover:shadow-[0_0_30px_15px_rgba(35,15,0.5)] hover:cursor-pointer transition-transform hover:scale-105  ' />
                    <p>This Book Store website offers a sleek, responsive frontend built with HTML, CSS, JavaScript and React. Users can browse through categories, search for books, view details, and add them to their cart. The design prioritizes simplicity, easy navigation, and a smooth shopping experience across devices   .</p>
                </div>
                <div className='h-[400px] w-[90%] md:w-[30%] border rounded-lg  space-y-5 items-center hover:shadow-[0_0_30px_15px_rgba(255,255,255)] hover:cursor-pointer transition-transform hover:scale-105 '>
                    <h1 className='font-bold text-2xl'>
                        Quiz-Application
                    </h1>
                    <img src={QuizApplication} alt="" srcset="" className='rounded-lg h-[100px] w-[200px] object-cover mx-auto  mt-4 hover:shadow-[0_0_30px_15px_rgba(35,15,0.5)] hover:cursor-pointer transition-transform hover:scale-105  ' />
                    <p>A Quiz Application allows users to participate in various quizzes, testing their knowledge across multiple topics. Users can answer multiple-choice questions, track their scores, and compete with others on leaderboards. The app provides immediate feedback, rewards achievements, and offers personalized quizzes to improve learning and engagement.</p>
                </div>
            </div>
        </div>
    )
}
    
export default Project
