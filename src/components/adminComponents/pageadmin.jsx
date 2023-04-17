import { createElement, useEffect, useState } from "react";
import { Delete, Pencil } from '../../assets/icon/index';
import { gorilla } from "../../plugins/useAxios";

function Pageadmin() {


    //MENAMBAH DATA KE REST API
    const [form, setForm] = useState({ product: '', color: '', category: '', price: 0 })

    const handleInput = (key, e) => {
        setForm({
            ...form,
            [key]: e.target.value
        })
        // console.log({ key, b: e.target.value, form });
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const res = await gorilla.post('/store', form)
        window.location.reload();
        // console.log(res);
        loadData()
    }


    //MENAMPILKAN DATA DARI REST API
    const [data, setData] = useState([])

    async function loadData() {
        const response = await gorilla.get('/');
        const data = await response.data.data;
        setData(data);
        // console.log(response);
    }

    useEffect(() => {
        loadData();
    }, []);


    //POPUP
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }


    // SIMPAN DATA REST API KETIKA DI KLIK
    // const [selectedId, setSelectedId] = useState(null);
    // useEffect(() => {
    //     fetch(gorilla)
    //         .then(response => response.json())
    //         .then(data => setData(data));
    // }, []);


    const [dataId] = useState([])
    function OnhandleClick(id) {
        // const id = event.target.id;
        fetch(`http://localhost:8000/api/posts/${id}`)
            .then(response => response.json())
            .then(dataId => console.log(dataId));
    }


    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:8000/api/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        loadData();
    };


    return (

        <div className="rounded-lg relative overflow-x-auto container mx-auto py-10">

            <div onClick={togglePopup} className="pb-1 flex flex-row justify-end items-center">
                <button className="rounded-md py-2 px-4">
                    Add
                </button>
            </div>

            {showPopup ? (
                <div className="popup">
                    <form onSubmit={handleClick}>
                        <div className="mb-6">
                            <label for="input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">product name</label>
                            <input type="input" onInput={(e) => handleInput('product_name', e)} value={form.product.current} id="product" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
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
                </div>
            ) : null}

            {/* {JSON.stringify(data)} */}

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data, index) => (
                        <tr
                            key={data.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                {index + 1}
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data.id}
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data.product_name}
                            </th>
                            <td className="px-6 py-4">
                                {data.color}
                            </td>
                            <td className="px-6 py-4">
                                {data.category}
                            </td>
                            <td className="px-6 py-4">
                                {data.price}
                            </td>
                            <td className="px-6 py-4 w-5 h-5">
                                <button type="Submit" onClick={() => OnhandleClick(data.id)} className="bg-inherit">
                                    {createElement(Pencil)}
                                </button>
                            </td>
                            <td className="px-6 py-4 w-5 h-5">
                                <button type="Submit" onClick={() => handleDelete(data.id)} className="bg-inherit">
                                    {createElement(Delete)}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Pageadmin;