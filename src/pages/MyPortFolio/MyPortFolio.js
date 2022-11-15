import React from 'react';

const MyPortFolio = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='h-full' src="https://i.ibb.co/LrnnkCb/SEBOK-DAS.png" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title mt-7"><span className='font-bold'>Name</span>: Sebok Das</h2>
                    <h2 className="card-title"><span className='font-bold'>Email</span>: sebok.das66@gmail.com</h2>
                    <h2 className="card-title"><span className='font-bold'>Education</span>: BBA in Accounting</h2>
                    <h2 className="text-xl"><span className='font-bold'>Portfolio</span>: <span className='text-green'><a target="_blank" href="https://sebokdas-33115.web.app/">https://sebokdas-33115.web.app</a></span></h2>
                    <h2 className="card-title font-bold mt-2">Skills:</h2>
                    <ul>
                        <li className='text-xl'><span className='font-bold'>Expertise:</span> JavaScript (ES6), React.js, Bootstrap5, Tailwind, Daisy UI</li>
                        <li className='text-xl mt-2'><span className='font-bold'>Comfortable:</span> Express JS, Node JS, MongoDB</li>
                        <li className='text-xl mt-2'><span className='font-bold'>Familiar:</span> Type Script, Sass</li>
                        <li className='text-xl mt-2'><span className='font-bold'>Design Skills:</span> Adobe Photoshop, Figma</li>
                        <li className='text-xl mt-2'><span className='font-bold'>Tools & Software's:</span> Git, VS Code, Chrome dev tools, Heroku, Netlify, Firebase.</li>
                    </ul>
                    <div className='mt-5'>
                        <ul className='flex justify-evenly'>

                            <a className='bg-[#0072b1] text-white px-5 py-1' target="_blank" href="https://www.linkedin.com/in/sebokdasbd">Linkedin</a>
                            <a className='bg-[#333] text-white px-5 py-1' target="_blank" href="https://github.com/sebokdas1">Github</a>
                            <a className='bg-[#3b5998] text-white px-5 py-1' target="_blank" href="https://www.facebook.com/sebokdasbd/">Facebook</a>

                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyPortFolio;