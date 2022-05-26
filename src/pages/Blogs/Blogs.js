import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl text-center uppercase font-bold  text-blue-400'>Blogs</h2>
            <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='collapse collapse-arrow'>
                        <input type="checkbox" />
                        <div class="collapse-title ">
                            <h1 class="text-3xl font-bold text-green-600">How will you improve the performance of a React Application?</h1>
                        </div>
                        <div class="collapse-content">
                            <h2 class="card-title">1. Keeping component state local where necessary</h2>
                            <p>We've learned that a state update in a parent component re-renders the parent and its child components.</p>
                            <h2 className='card-title'>2. Memoizing React components to prevent unnecessary re-renders</h2>
                            <p>Unlike the previous performance technique where refactoring our code gives us a performance boost, here we trade memory space for time. So, we must only memoize a component when necessary.</p>
                            <p>Memoization is an optimization strategy that caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.</p>
                            <h2 className='card-title'>3. Code-splitting in React using dynamic <span className='text-red-700'>import()</span></h2>
                            <p>Code-splitting is another important optimization technique for a React application. By default, when a React application renders in a browser, a “bundle” file containing the entire application code loads and serves to users at once. This file generates by merging all the code files needed to make a web application work.</p>
                            <p>The idea of bundling is useful because it reduces the number of HTTP requests a page can handle. However, as an application grows, the file sizes increase, thus increasing the bundle file. At a certain point, this continuous file increase slows the initial page load, reducing the user’s satisfaction.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card bg-base-100 shadow-lg mt-2'>
                <div className='card-body'>
                    <div className='collapse collapse-arrow'>
                        <input type="checkbox" />
                        <div class="collapse-title ">
                            <h1 class="text-3xl font-bold text-green-600">What are the different ways to manage a state in a React application?</h1>
                        </div>
                        <div className='collapse-content'>
                            <h2 className='card-title'>The Four Kinds of React State to Manage</h2>
                            <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter</p>
                            <p>There are four main types of state you need to properly manage in your React apps:</p>
                            <p className='font-bold'>1. Local state</p>
                            <p className='font-bold'>2. Global state</p>
                            <p className='font-bold'>3. Server state</p>
                            <p className='font-bold'>4. URL state</p>
                            <h5 className='font-bold'>Let's cover each of these in detail:</h5>
                            <p className='mt-1'><span className='font-bold'>Local (UI) state -</span> Local state is data we manage in one or another component.</p>
                            <p>Local state is most often managed in React using the useState hook.</p>
                            <p>For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs.</p>
                            <p className='mt-1'><span className='font-bold'>Global (UI) state -</span> Global state is data we manage across multiple components.</p>
                            <p>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                            <p>A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
                            <p className='mt-1'><span className='font-bold'>Server state -</span> Data that comes from an external server that must be integrated with our UI state.</p>
                            <p>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                            <p>There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.</p>
                            <p>Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
                            <p className='mt-1'><span className='font-bold'>URL state -</span> Data that exists on our URLs, including the pathname and query parameters.</p>
                            <p>URL state is often missing as a category of state, but it is an important one.
                                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
                            <p>There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card bg-base-100 shadow-lg mt-2'>
                <div className='card-body'>
                    <div className='collapse collapse-arrow'>
                        <input type="checkbox" />
                        <div class="collapse-title ">
                            <h1 class="text-3xl font-bold text-green-600">How does prototypical inheritance work?</h1>
                        </div>
                        <div className='collapse-content'>
                            <h2 className='card-title'>Prototypal inheritance</h2>
                            <p>In programming, we often want to take something and extend it.</p>
                            <p>For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We'd like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.</p>
                            <p>Prototypal inheritance is a language feature that helps in that.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card bg-base-100 shadow-lg mt-2'>
                <div className='card-body'>
                    <div className='collapse collapse-arrow'>
                        <input type="checkbox" />
                        <div class="collapse-title ">
                            <h1 class="text-3xl font-bold text-green-600"> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                        </div>
                        <div className='collapse-content'>
                            <h2 className='card-title'></h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card bg-base-100 shadow-lg mt-2'>
                <div className='card-body'>
                    <div className='collapse collapse-arrow'>
                        <input type="checkbox" />
                        <div class="collapse-title ">
                            <h1 class="text-3xl font-bold text-green-600">What is a unit test? Why should write unit tests?</h1>
                        </div>
                        <div className='collapse-content'>
                            <h2 className='card-title'>What is unit test?</h2>
                            <p>A unit test is a way to test a unit, the smallest code in a system that can logically be isolated. This is a function, a subroutine, a procedure, or a property in most programming languages.</p>
                            <h2 className='card-title'>Why should write unit tests?</h2>
                            <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card bg-base-100 shadow-lg mt-2'>
                <div className='card-body'>
                    <div className='collapse collapse-arrow'>
                        <input type="checkbox" />
                        <div class="collapse-title ">
                            <h1 class="text-3xl font-bold text-green-600">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                        </div>
                        <div className='collapse-content'>
                            <h2 className='card-title'></h2>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blogs;