import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {ChangeEvent, useState} from "react";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";


type Props = {
    title?: string,
    cb: (title: string) => void
}

const AddItem = ({title, cb}: Props) => {
    const [inputTitle, setInputTitle] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const onClickHandler = () => {
        cb(inputTitle);
        setInputTitle("");
        setError(null);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const title = e.currentTarget.value.trim();
        setInputTitle(title);

        if (title.length < 2) {
            setError("Title must be at least 2 characters long");
        } else if (title.length > 20) {
            setError("Title can't be longer than 20 characters");
            setInputTitle(title.slice(0, 20));
        } else {
            error && setError(null);
        }

    }


    return (
        <Box
            sx={{
                maxWidth: 250,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                my: 1
            }}>
            <TextField
                size="small"
                label="Enter your title"
                error={error !== null}
                helperText={error}
                value={inputTitle}
                onChange={(e) => onChangeHandler(e)}
            />
            <IconButton onClick={onClickHandler}
                        disabled={inputTitle.length < 2}>
                <Add></Add>
            </IconButton>
        </Box>
    )
}

export default AddItem;