import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const List = ({ data }) => {
    const rows = data.map((row) => (
        {
            id: row.id,
            name: row.name,
            username: row.username,
            email: row.email,
            phone: row.phone
        }
    ));

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 190,
            renderCell: (params) => (
                <Link to="/user" state={params.id}>{params.value}</Link>)
        },
        {
            field: 'username',
            headerName: 'User Name',
            width: 160,
            renderCell: (params) => (
                <Link to="/user" state={params.id}>{params.value}</Link>
            )
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 220,
            renderCell: (params) => (
                <Link to="/user" state={params.id}>{params.value}</Link>
            )
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 180,
            renderCell: (params) => (
                <Link to="/user" state={params.id}>{params.value}</Link>
            )
        },
    ];

    return (
        <Box sx={{ height: 380, width: 820, margin: 'auto', mt: 15 }}>
            <DataGrid
                sx={{
                    m: 2,
                    px: 1,
                    boxShadow: 6
                }}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
            />
        </Box>
    );
}

export default List;