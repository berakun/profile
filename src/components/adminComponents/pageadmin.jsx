import { useEffect, useState } from "react";

import { gorilla } from "../../plugins/useAxios";

function Pageadmin() {


    const [form, setForm] = useState({ product: '', color: '', category: '', price: 0 })

    const handleInput = (key, e) => {
        setForm({
            ...form,
            [key]: e.target.value
        })
        console.log({ key, b: e.target.value, form });
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const res = await gorilla.post('/', form)
        console.log(res);
        loadData()
    }

    const [data, setData] = useState({})

    async function loadData() {
        const response = await gorilla.get('/');
        setData(response.data);
        console.log(response);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (



        <div class="rounded-lg relative overflow-x-auto container mx-auto py-10">



            <form onSubmit={handleClick}>
                <div className="mb-6">
                    <label for="input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">product name</label>
                    <input type="input" onInput={(e) => handleInput('product', e)} value={form.product.current} id="product" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label for="input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">color</label>
                    <input type="input" onInput={(e) => handleInput('color', e)} value={form.color.current} id="color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label for="input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">category</label>
                    <input type="input" onInput={(e) => handleInput('category', e)} value={form.category.current} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label for="input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">price</label>
                    <input type="input" onInput={(e) => handleInput('price', e)} value={form.price.current} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>


            {JSON.stringify(data)}

            <div className="pb-4 flex flex-row justify-end items-center">
                <button className="rounded-lg py-2 px-4">
                    Add
                </button>
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map(response => ( */}
                    <tr
                        // key={item.id}
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {/* {response.product} */}
                            adawdadawdcaw
                        </th>
                        <td class="px-6 py-4">
                            {/* {response.color} */}
                            awdadadawdad
                        </td>
                        <td class="px-6 py-4">
                            {/* {response.category} */}
                            adadadadada
                        </td>
                        <td class="px-6 py-4">
                            {/* {response.price} */}
                            azazazaz
                        </td>
                    </tr>
                    {/* ))} */}
                </tbody>
            </table>
        </div>

    )
}

export default Pageadmin;