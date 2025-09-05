import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox(){
    return(
        <div>
            <h3>Seach for the weather</h3>
            <form>
                <TextField id="city" label="Search City" variant="outlined" />
                <Button variant="contained">Search</Button>
            </form>
        </div>
    )
}