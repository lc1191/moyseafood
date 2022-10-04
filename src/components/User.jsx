import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material';

const User = ({ data }) => {
    const location = useLocation();
    let navigation = useNavigate();
    
    const [user, setUser] = useState(data.find(user => user.id === location.state));
    
    const updateData = (e) => {
        e.preventDefault();

        fetch('https://jsonplaceholder.typicode.com/users/' + user.id, {
            method: 'PUT',
            body: JSON.stringify({
                email: user.email,
                phone: user.phone,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                navigation('/');
            });
    }

    return (
        <>
            <Box component="form" onSubmit={updateData} sx={{ boxShadow: 6, width: 'fit-content', margin: '0 auto', mt: 15, p:6 }}>
                <TextField id="standard-basic" label="Name" variant="standard" disabled defaultValue={user.name} sx={{ mt: 2, width:250 }} /><br />
                <TextField id="standard-basic" label="User Name" variant="standard" disabled defaultValue={user.username} sx={{ mt: 2, width:250 }} /><br />
                <TextField id="standard-basic" label="Email" variant="standard" defaultValue={user.email} 
                    onChange={e => setUser({ ...user, email: e.target.value })} sx={{ mt: 2, width:250 }}/><br />
                <TextField id="standard-basic" label="Phone" variant="standard" defaultValue={user.phone} 
                    onChange={p => setUser({ ...user, phone: p.target.value })} sx={{ my: 2, width:250 }}/><br />
                <Button type="submit" value={'Send'} variant="outlined" sx={{ ml: 12 }}> SEND </Button>
            </Box>
        </>
    )
}

export default User;