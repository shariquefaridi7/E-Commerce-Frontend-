import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useData } from "../context/DataContext"

const Body = () => {
    const { arr, setArr, setSharedData, setAmount } = useData();

    const handleItem = (id, name) => {
        setArr((prev) => {
            return prev.map((e, i) => {
                if (i === id) {
                    console.log(name);
                    if (name === 'large' && e.large > 0) {
                        setSharedData((prevSharedData) => {
                            const existingItemIndex = prevSharedData.findIndex(item => item.name === e.name && item.large == "L");
                            if (existingItemIndex !== -1) {
                                const totalAmount = prevSharedData.reduce((total, item) => total + item.price, 0);
                                setAmount(totalAmount);
                                const updatedSharedData = [...prevSharedData];
                                updatedSharedData[existingItemIndex].lQuan += 1;
                                updatedSharedData[existingItemIndex].price += parseInt(e.price);
                                return updatedSharedData;
                            } else {
                                return [...prevSharedData, { name: e.name, price: parseInt(e.price), large: "L", lQuan: 1 }];
                            }
                        });
                        return { ...e, large: e.large - 1 };
                    } else if (name === 'medium' && e.medium > 0) {
                        setSharedData((prevSharedData) => {
                            const existingItemIndex = prevSharedData.findIndex(item => item.name === e.name && item.medium == "M");
                            if (existingItemIndex !== -1) {
                                const totalAmount = prevSharedData.reduce((total, item) => total + item.price, 0);
                                setAmount(totalAmount);
                                const updatedSharedData = [...prevSharedData];
                                updatedSharedData[existingItemIndex].mQuan += 1;
                                updatedSharedData[existingItemIndex].price += parseInt(e.price); // Fix here
                                return updatedSharedData;
                            } else {
                                return [...prevSharedData, { name: e.name, price: parseInt(e.price), medium: 'M', mQuan: 1 }];
                            }
                        });
                        return { ...e, medium: e.medium - 1 };
                    } else if (name === 'small' && e.small > 0) {
                        setSharedData((prevSharedData) => {
                            const existingItemIndex = prevSharedData.findIndex(item => item.name === e.name && item.small == "S");
                            if (existingItemIndex !== -1) {
                                const totalAmount = prevSharedData.reduce((total, item) => total + item.price, 0);
                                setAmount(totalAmount)
                                const updatedSharedData = [...prevSharedData];
                                updatedSharedData[existingItemIndex].sQuan += 1;
                                updatedSharedData[existingItemIndex].price += parseInt(e.price); // Fix here
                                return updatedSharedData;
                            } else {
                                return [...prevSharedData, { name: e.name, price: parseInt(e.price), small: 'S', sQuan: 1 }];
                            }
                        });
                        return { ...e, small: e.small - 1 };
                    } else {
                        return e;
                    }
                } else {
                    return e;
                }
            });
        });
    };





    return (
        <div>
            <TableContainer component={Paper} sx={{
                color: "white", border: 1, borderColor: "black", '@media (min-width:600px)': { p: '2rem' }, p: 1
            }}>
                <Table >
                    <TableHead >
                        <TableRow  >
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}> Shoe_Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Description</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>Price</TableCell>
                            <TableCell sx={{ fontWeight: "bold", fontSize: "1.3rem", }}>Available Sizes</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            arr?.map((item, i) => {

                                return (
                                    <>
                                        <TableRow>

                                            <TableCell sx={{ fontSize: "1.3rem", width: "23%" }}>{item?.name}</TableCell>
                                            <TableCell sx={{ fontSize: "1.3rem" }}>{item?.des}</TableCell>
                                            <TableCell sx={{ fontSize: "1.3rem", width: "23%" }}>Rs.{item?.price} </TableCell>
                                            <TableCell >
                                                <Button variant="contained" color="success" sx={{ mr: "1rem" }} onClick={() => handleItem(i, "large")}>{`Buy Large (${item?.large})`}</Button>


                                                <Button variant="contained" color="success" sx={{ mr: "1rem" }} onClick={() => handleItem(i, "medium")}>{`Buy Medium (${item?.medium})`}</Button>

                                                <Button variant="contained" color="success" onClick={() => handleItem(i, "small")}>{`Buy Small (${item?.small})`}</Button>


                                            </TableCell>

                                        </TableRow>
                                    </>
                                )

                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Body
