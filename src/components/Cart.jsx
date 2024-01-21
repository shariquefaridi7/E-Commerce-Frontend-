import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, Typography } from "@mui/material"
import { useData } from "../context/DataContext";
import { useEffect } from "react";



const Cart = () => {
    const { sharedata, setopen, open, setcount, count, setSharedData, setAmount, Amount } = useData();



    useEffect(() => {
        setcount(sharedata.length);
    }, [sharedata])

    useEffect(() => {
        const totalAmount = sharedata.reduce((total, item) => total + item.price, 0);
        setAmount(totalAmount)
    }, [count])



    return (
        <div>

            <Dialog
                open={open}
                fullWidth
            >
                <DialogTitle sx={{ bgcolor: "brown", color: "white", lineHeight: 0 }} >
                    <h2>Cart </h2>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {

                            sharedata?.map((item) => {
                                return (<>
                                    <Stack direction={"row"} justifyContent={"space-between"}>
                                        <Stack direction={"row"} mt="0.5rem" >
                                            <Typography fontSize="1.2rem" fontWeight="bold">{item.name}</Typography>
                                        </Stack>
                                        <Stack mt="0.5rem" width="20%">
                                            <Typography fontSize="1.2rem" fontWeight="bold">{item?.lQuan}{item?.large}</Typography>

                                            <Typography fontSize="1.2rem" fontWeight="bold">{item?.mQuan}{item?.medium}</Typography>

                                            <Typography fontSize="1.2rem" fontWeight="bold">{item?.sQuan}{item?.small}</Typography>
                                        </Stack>
                                        <Stack direction={"row"} spacing={2} mt="0.5rem" width="20%" >
                                            <Typography fontSize="1.2rem" fontWeight="bold">{item.price}</Typography>
                                        </Stack >
                                    </Stack>
                                    <hr />
                                </>
                                )
                            })

                        }
                        <Typography textAlign="end" fontWeight="bold" fontSize="1.3rem">Total Amount : {Amount}</Typography>
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setopen(false)} sx={{ bgcolor: "white", color: "brown", borderColor: "brown" }} variant="outlined">close</Button>
                    <Button onClick={() => setSharedData([])} sx={{ bgcolor: "brown" }} variant="contained">Order</Button>

                </DialogActions>
            </Dialog>

        </div >
    )
}

export default Cart
