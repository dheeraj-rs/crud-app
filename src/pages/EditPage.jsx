import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DetailsContacts, EditContacts } from '../components/api-collection';
import EditForm from '../components/forms/EditForm';

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (id) {
      DetailsContacts(id)
        .then(response => setFormData(response))
        .catch(error => console.error('Error fetching items:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('=>', formData);
    EditContacts(id, formData)
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating item:', error));
  };

  return (
    <div className="bg-gray-900 font-sans text-white p-10 h-[88vh]" >
      <EditForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default EditPage;
