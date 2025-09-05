import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox() {

    let [city, setCity] = useState("");

    let handleChange = (evt)=>{
        setCity(evt.target.value);
    };

    let handleSubmit = (evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
    }

    return (
        <div className='SearchBox'>
            <h3>Seach for the weather</h3>
            <form>
                <TextField id="city" label="Search City" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type='submit' onClick={handleSubmit}>Search</Button>
            </form>
        </div>
    )
}