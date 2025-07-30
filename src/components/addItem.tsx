import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AddItem = () => {
    return (
        <Box sx={{display: "flex", my:3}}>
            <TextField size="small" label="Enter your title"/>
            <Button variant={"contained"}>Add</Button>
        </Box>
    )
}

export default AddItem;