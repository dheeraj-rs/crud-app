import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateContacts } from '../components/api-collection';
import CreateForm from '../components/forms/CreateForm';

const CreatePage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateContacts(formData)
      .then(() => navigate('/'))
      .catch(error => console.error('Error fetching items:', error))
  };

  return (
    <div className="bg-gray-900 font-sans text-white p-10 h-[88vh]" >
      <CreateForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
}
export default CreatePage;
