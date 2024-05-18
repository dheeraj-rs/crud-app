import React, { useEffect, useState } from 'react';
import ListItem from '../components/ListItem';
import { DeleteContacts, ListContacts } from '../components/api-collection';

const ListPage = () => {
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    ListContacts()
      .then(response => {
        setItems(response)
      })
      .catch(error => console.error('Error fetching items:', error))
  }, [refresh]);

  const deleteUser = (id) => {
    DeleteContacts(id).then(() => {
      setRefresh(!refresh)
    });
  };

  return (
    <div className=" bg-gray-900 font-sans text-white p-10 h-[88vh]">
      <div className="p-4 flex">
        <h1 className="text-3xl">
          Users
        </h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-gray-900  shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">No</th>
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th></th>
            </tr>
            {items?.map((user, index) => (
              <ListItem user={user} index={index} deleteUser={deleteUser} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPage;
