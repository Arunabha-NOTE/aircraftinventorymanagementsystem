import React, {useEffect, useState} from 'react';

const Factory = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/factory')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='font-bold text-2xl text-white'>Factory Details</h1>
            <div className="relative mx-auto overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Company Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Location
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contact Name
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Contact Age
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contact Gender
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((d, i) => (
                        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {d.factory_id}
                            </th>
                            <td className="px-6 py-4">
                                {d.company_name}
                            </td>
                            <td className="px-6 py-4">
                                {d.location}
                            </td>
                            <td className="px-6 py-4">
                                {d.contact_name}
                            </td>
                            <td className="px-6 py-4">
                                {d.contact_age}
                            </td>
                            <td className="px-6 py-4">
                                {d.contact_gender}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Factory;