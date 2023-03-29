import { useState } from 'react';

const useForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

 

  const handleSubmit = async(event) => {
    event.preventDefault();
     
    for (const key in values) {
      if (values.hasOwnProperty(key) && values[key] === "") {
        setErrors(errors=> [...errors,`${key} is required` ] )
      }
    }

     if(errors.length==0){
       setErrors(await callback(values));
     }
     else {
      

     }
   
  };

   
  

  return {
    values,
    handleChange,
    handleSubmit,
    errors
  };
};

export default useForm;