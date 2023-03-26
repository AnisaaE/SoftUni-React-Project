import { useState } from 'react';

const useForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(callback(values));
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors
  };
};

export default useForm;