import React from 'react';

const MyPortFolio = () => {
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://media-exp1.licdn.com/dms/image/C5603AQG4Ej9u2LbCjA/profile-displayphoto-shrink_200_200/0/1649591514055?e=1655337600&v=beta&t=o4ySicZO7TqLnQ8YobFyFZ25BHpTkOWA8oUG4MjJScQ" alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name: Sebok Das</h2>
                    <h2 class="card-title">Email: sebok.das66@gmail.com</h2>
                    <h2 class="card-title">Education: BBA in Accounting</h2>
                    <h2 class="card-title">Skills:</h2>
                    <ul>
                        <li><span className='font-bold'>Expertise:</span> JavaScript (ES6), React.js, Bootstrap5, Tailwind, Daisy UI</li>
                        <li><span className='font-bold'>Comfortable:</span> Express JS, Node JS, MongoDB</li>
                        <li><span className='font-bold'>Familiar:</span> Type Script, Sass</li>
                        <li><span className='font-bold'>Design Skills:</span> Adobe Photoshop, Figma</li>
                        <li><span className='font-bold'>Tools & Software's:</span> Git, VS Code, Chrome dev tools, Heroku, Netlify, Firebase.</li>
                    </ul>
                    <h2 className='card-title'>Projects:</h2>
                    <p className='font-bold text-green-400'><a target="_blank" href="https://nutrio-warehouse.web.app/">Nutrio Warehouse</a></p>
                    <p className='font-bold text-green-400'><a target="_blank" href="https://sakib-al-hassan.web.app/">SAH75</a></p>

                </div>
            </div>
        </div>
    );
};

export default MyPortFolio;