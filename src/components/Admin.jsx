import { Badge, Box, Button, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useData } from "../context/DataContext";

const Admin = () => {
    const [data, setData] = useState({});

    const { setArr, arr, count, setopen, } = useData();

    const handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        if (name == 'name') {
            setData({ ...data, name: value })
        } else if (name == "description") {
            setData({ ...data, des: value })
        } else if (name == "large") {
            setData({ ...data, large: value })
        } else if (name == "medium") {
            setData({ ...data, medium: value })
        } else if (name == "small") {
            setData({ ...data, small: value })
        } else {
            setData({ ...data, price: value })
        }

    }

    const handleClick = () => {

        console.log(data.des, data.name, data.price, data.large, data.small, data.medium);
        setArr([...arr, { name: data.name, price: data.price, des: data.des, large: data.large, medium: data.medium, small: data.small }]);

        setData({ des: "", name: "", price: "", large: "", medium: "", small: "" })

    }



    return (
        <div>
            <Stack direction={"row"} sx={{ justifyContent: "space-around" }}  >
                <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 2 }}
                    sx={{ display: "inline-flex", mt: 2, bgcolor: "#FFECD6", p: 2, mb: 3, width: "68%", borderRadius: 5, textAlign: "center" }}
                >

                    <TextField label="Shoe_Name" type="text" color="secondary" size="small" name="name" value={data.name} onChange={handleChange} />
                    <TextField label="Description" type="text" color="secondary" size="small" name="description" value={data.des} onChange={handleChange} />
                    <TextField label="Price" type="number" color="secondary" size="small" name="price" sx={{ "@media(min-width:600px)": { width: "10%" } }} value={data.price} onChange={handleChange} />
                    <TextField label="Large" type="number" color="secondary" size="small" name="large" sx={{ "@media(min-width:600px)": { width: "7%" } }} value={data.large} onChange={handleChange} />
                    <TextField label="Medium" type="number" color="secondary" size="small" name="medium" sx={{ "@media(min-width:600px)": { width: "7%" } }} value={data.medium} onChange={handleChange} />
                    <TextField label="Small" type="number" color="secondary" size="small" name="small" sx={{ "@media(min-width:600px)": { width: "7%" } }} value={data.small} onChange={handleChange} />


                    <Button size="small" color="secondary" onClick={handleClick} variant="contained">Add Product</Button>

                </Stack>


                <Box sx={{ height: "100%", mt: "1.5rem", bgcolor: "black", color: "white", p: "0.9rem", borderRadius: "1rem" }}
                    onClick={() => setopen(true)}

                >
                    <Badge badgeContent={count} color="error">
                        <Typography variant="h6"> Cart </Typography>
                    </Badge>
                </Box>
            </Stack>


        </div >
    )
}

export default Admin
