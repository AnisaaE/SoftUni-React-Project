import { useState } from 'react';
import { validateValues } from '../validations/validations';

const useForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

 
  const handleSubmit = async(event) => {
    event.preventDefault();
    if (callback && callback.name === 'onCommentSubmit'){
      setValues(initialValues)
    }
    setShowNotification(false);
    setErrors([]);
  
    const validationErrors = validateValues(values);
    if (validationErrors.length) {
      setErrors(validationErrors);
      setShowNotification(true);
    } else {
      const callbackErrors = await callback(values);
      if (callbackErrors) {
        setErrors(callbackErrors);
        setShowNotification(true);
      }
    }
  };

const changeValues = (newValues) => {      
      setValues(newValues);
  };
  return {
    values,
    handleChange,
    handleSubmit,
    changeValues,
    errors, 
    showNotification
  };
};

export default useForm;