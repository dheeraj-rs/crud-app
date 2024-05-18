import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { DetailsContacts } from '../components/api-collection';

function DetailsPage() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      DetailsContacts(id)
        .then(response => setFormData(response))
        .catch(error => console.error('Error fetching items:', error));
    }
  }, [id]);

  return (
    <div className="bg-gray-900 font-sans text-white p-10 h-[88vh]" >
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <h1 className="rounded w-full py-2 px-4 text-white  "
            >{formData.name}</h1>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <h1 className="rounded w-full py-2 px-4 text-white  "
            >{formData.email}</h1>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DetailsPage

