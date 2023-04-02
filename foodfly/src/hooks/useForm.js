import { useState } from 'react';

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

    const callbackErrors = await callback(values);
    if (callbackErrors) {
      setErrors(callbackErrors);
      setShowNotification(true);
    }
    // for (const key in values) {
    //   if (values.hasOwnProperty(key) && values[key] === "") {
    //     setErrors(errors=> [...errors,`${key} is required` ] )
    //   }
    // }

    //  if(errors.length==0){
      
    //  }
    //  else {

    //  }
  };
const changeValues = (newValues) => {
      // TODO: Validate newValues shape (like initialValues)
      
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