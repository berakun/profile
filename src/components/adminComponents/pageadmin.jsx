import { createElement, useEffect, useState } from "react";
import { Delete, Pencil } from '../../assets/icon/index';
import { gorilla } from "../../plugins/useAxios";

function Pageadmin() {


    const header = [
        { text: 'no', value: '' },
        { text: 'product_name', value: 'product_name' },
        { text: 'color', value: 'color' },
        { text: 'category', value: 'category' },
        { text: 'price', value: 'price' },
        { text: 'action', value: '' },
        { text: 'delete', value: '' }
    ]

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

    //SEARCH DATA

    const [searchValue, setSearchValue] = useState('')
    const filteredData = filterData(data, searchValue);
    function filterData(data, searchValue) {
        return data.filter((data) =>
            data.product_name.toLowerCase().includes(searchValue.toLowerCase())
        );
    }

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

        window.location.reload();
    }

    //DELETE DATA

    // const [showModal, setShowModal] = useState(false);
    // const valModal = () => {
    //     setShowModal(!showModal);
    // }

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => {
        console.log("rawr")
        setShowModal(true);
        console.log(showModal)
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

        window.location.reload();

        loadData();
        handleClose();
    };

    return (

        <div className="container mx-auto py-4 h-screen">
            {/* POPUP */}
            {showPopup ? (
                <div className="popup absolute bg-white rounded ring-2 dark:ring-gray-500 p-8">
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

            {showModal ? (
                <div tabIndex="-1" className="absolute top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="w-full max-w-md max-h-full">
                        <div className="bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-6 text-center">
                                <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                    Yes, I'm sure
                                </button>
                                <button data-modal-hide="popup-modal" onClick={() => handleClose()} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            <div className="container mx-auto grid grid-cols-2 py-2">
                <div className="flex pr-10 justify-start items-center">
                    <input type="text" onInput={(event) => { setSearchValue(event.target.value) }} value={searchValue} placeholder="Search by product name, color, or category"
                        className="w-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div className="flex justify-end items-center">
                    <button onClick={togglePopup} className="rounded-md ring-2 dark:ring-black py-2 px-4">
                        Add
                    </button>
                </div>
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {header.map((head) => (
                            <th scope="col" className="px-6 py-3">
                                {head.text}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((data, index) => (
                        <tr
                            key={data.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4">
                                {index + 1}
                            </td>
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
                                {/* <button type="Submit" onClick={() => handleDelete(data.id)} className="bg-inherit">
                                {createElement(Delete)}
                                </button> */}

                                <button onClick={() => { handleShow() }} className="bg-inherit" type="button">
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