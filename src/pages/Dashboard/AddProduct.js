import React from 'react';

const AddProduct = () => {



    const handlePostProduct = (e) => {
        e.preventDefault()
        const partName = e.target.name.value;
        const description = e.target.description.value;
        const img = e.target.image.value;
        const quantity = parseInt(e.target.quantity.value);
        const price = parseInt(e.target.price.value);

        const part = {
            name: partName,
            discription: description,
            img,
            quantity,
            price
        }

        fetch('http://localhost:5000/part', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(part)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    alert('product added successfully')
                }

            })

    }

    return (
        <div>
            <h2 className='text-2xl font-bold text-purple-500'>Add New Product</h2>
            <form onSubmit={handlePostProduct} >
                <span className='grid lg:grid-cols-2'>
                    <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Product Name
                        </span>
                        <input type="text" name="name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="product name" required />
                    </label>

                    <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Image URL
                        </span>
                        <input type="text" name="image" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="photo link/url.png" required />
                    </label>

                    <label class="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">
                            Description
                        </span>
                        <input required type="text" name="description" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="type here.." />
                    </label>

                    <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">
                            Stock Quantity
                        </span>
                        <input required type="number" name="quantity" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="10000" />
                    </label>

                    <label class="block">
                        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">
                            Per Price(usd)
                        </span>
                        <input required type="number" name="price" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="120" />
                    </label>


                </span>
                <input type="submit" value="Add Product" className='btn btn-primary  mt-3 text-white' />
            </form>
        </div>
    );
};

export default AddProduct;