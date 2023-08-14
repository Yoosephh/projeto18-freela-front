/* eslint-disable react/prop-types */

import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import { useContext, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function ControlledCheckbox({id, isActive}) {
  const [checked, setChecked] = useState(isActive);
  const {user} = useContext(AuthContext);
  const config = {
    headers: {'Authorization': `Bearer ${user.token}`}
  }

  function handleChange (event) {
    setChecked(event.target.checked);
    axios.put(`http://localhost:5000/service/${id}`, "", config)
  }

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}