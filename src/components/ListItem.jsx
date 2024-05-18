import React from 'react'
import { Link } from 'react-router-dom';

function ListItem({ user, index, deleteUser }) {
    return (
        <tr className="border-b hover:bg-black bg-gray-900 " key={index}>
            <td className="p-3 px-5"><input type="text" value={index + 1} className="bg-transparent" /></td>
            <td className="p-3 px-5"><input type="text" value={user.name} className="bg-transparent" /></td>
            <td className="p-3 px-5"><input type="text" value={user.email} className="bg-transparent" /></td>
            <td className="p-3 px-5 flex justify-end">
                <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                    <Link
                        to={`/edit/${user.id}`}
                    >
                        Edit
                    </Link>
                </button>
                <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                    <Link
                        to={`/details/${user.id}`}
                    >
                        View
                    </Link>
                </button>
                <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => {
                        deleteUser(user.id);
                    }}
                >Delete</button>
            </td>
        </tr>
    )
}

export default ListItem