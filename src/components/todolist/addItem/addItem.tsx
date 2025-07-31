import Box from "@mui/material/Box";
import {useState} from "react";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import UniversalTextfield from "@/components/todolist/addItem/universalTextfield";


type Props = {
    cb: (title: string) => void
}

const AddItem = ({
                     cb
                 }: Props) => {
    const [inputTitle, setInputTitle] = useState<string>("");

    const onClickHandler = () => {
        cb(inputTitle.trim());
        setInputTitle("");
    }

    const onKeyDownHandler = () => {
        onClickHandler()
    }


    return (<Box
        sx={{
            maxWidth: 250, display: "flex", justifyContent: "space-between",
            alignItems: "flex-start", my: 1
        }}>
        <UniversalTextfield newTitle={inputTitle} onChange={setInputTitle} onKeyDown={onKeyDownHandler}/>
        <IconButton
            onClick={onClickHandler}
            disabled={inputTitle.trim().length < 2}>
            <Add/>
        </IconButton>
    </Box>)
}

export default AddItem;