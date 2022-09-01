import React from 'react'
import { useNavigate } from 'react-router-dom';

//Alertas
import sweetAl from '@sweetalert/with-react'

function Buscador() {

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.target.keyword.value.trim();
        if (keyword.length < 4) {
            sweetAl (
                <h5>You need to type the movie name 😒</h5>
            )
        } else {
            e.target.keyword.value = '';
            navigate(`/results?keyword=${keyword}`)
        }

    }

  return (
    <form className='d-flex align-items-center' onSubmit={submitHandler}>
        <label className='form-label mb-0'>
            <input type="text" className='form-control' name='keyword' placeholder='Movie title...' />
        </label>
        <button className='btn btn-primary ms-2'>Search</button>
    </form>
  )
}

export default Buscador