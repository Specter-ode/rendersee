import { useState } from 'react';

const useForm = ({ onSubmitClick, initialState, initialStateErrors, clearFields = true }) => {
  const [state, setState] = useState({ ...initialState });
  const [errorsState, setErrorsState] = useState({...initialStateErrors});

  const handleChange = ({ target }) => {
    const { name, value, type, checked, validationMessage  } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setErrorsState(prevState => ({
      ...prevState,
    [name]: validationMessage,
    }));


    setState(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitClick({ ...state });

    if (clearFields) {
      setState({ ...initialState });
      setErrorsState({ ...initialStateErrors });
    }
  };

  return { errorsState, state, setState, handleChange, handleSubmit,   };
};

export default useForm;
