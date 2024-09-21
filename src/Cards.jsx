import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Cards() {

    const images = [
        "/img/1.png",
        "/img/2.png",
        "/img/3.png",
        "/img/4.png",
        "/img/5.png",
        "/img/6.png",
    ]

    useEffect(() =>{
        gsap.utils.toArray('.card').forEach(card =>{
            gsap.to(card, {
                scale: 0.8,
                opacity: 0,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 15%',
                    end: 'bottom 15%',
                    markers: true,
                    scrub:true
                }
            })
        })
    })

    return (
        <main className='w-full text-white flex flex-col gap-5 items-center py-[15vh]'>

            {
                images.map((image, index) => {
                    return (
                        <div id={index} className="card sticky top-[15vh] text-center w-[27vw] flex flex-col items-center gap-5 px-[30px] py-[10vh] rounded-lg bg-[#383027]">
                            <img src={image} alt="" className='w-[150px]' />
                            <h1 className='text-4xl'>
                                The <br />
                                <span className=' font-bold'>
                                    Algorithm
                                </span>
                            </h1>
                            <p className='font-thin'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, voluptatem.</p>
                        </div>
                    )
                })
            }



        </main>
    )
}

export default Cards