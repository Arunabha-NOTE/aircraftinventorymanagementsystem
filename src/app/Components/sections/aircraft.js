import React, {useEffect, useState} from 'react';

const Aircraft = () => {

    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/aircraft')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='font-bold text-2xl text-white'>Aircraft Details</h1>
            <div className="relative mx-auto overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Manufacturer
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Registration
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Model
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Engine Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Range
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((d, i) => (
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {d.aircraft_id}
                        </th>
                        <td className="px-6 py-4">
                            {d.manufacturer}
                        </td>
                        <td className="px-6 py-4">
                            {d.registration}
                        </td>
                        <td className="px-6 py-4">
                            {d.model}
                        </td>
                        <td className="px-6 py-4">
                            {d.engine_type}
                        </td>
                        <td className="px-6 py-4">
                            {d.ranges}
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Aircraft;