import formatDate from "@/utils/formatDate";
import s from "./editableSpan.module.css";
import {ChangeEvent, useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

type Props = {
    title: string,
    created: number,
    isDone: boolean
    changeTitle: (title: string) => void
}

const EditableSpan = ({title, created, isDone, changeTitle}: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputTitle, setInputTitle] = useState<string>(title);

    const onDoubleClickHandler = () => {
        setIsEditing(true);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newTitle = e.currentTarget.value.trim();

        if (newTitle.length > 0) {
            setInputTitle(newTitle);
        }
    }


    const onBlurHandler = () => {
        changeTitle(inputTitle);
        setIsEditing(false);
    }

    return (
        <Box className={s.title} sx={{
            display: "flex", flexDirection: "column",
            textDecoration: isDone ? "line-through" : "none", opacity: isDone ? 0.5 : 1
        }}>
            {isEditing ? <TextField autoFocus={true} size="small" value={inputTitle} onChange={(e) => onChangeHandler(e)}
                                   onBlur={onBlurHandler}></TextField> :
                <span onDoubleClick={onDoubleClickHandler}>{inputTitle}</span>
            }
            <span className={s.date}>Added: {formatDate(created)}</span>
        </Box>
    )
}
export default EditableSpan;