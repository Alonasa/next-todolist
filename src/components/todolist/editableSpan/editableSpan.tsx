import formatDate from "@/utils/formatDate";
import s from "./editableSpan.module.css";
import {useState} from "react";
import Box from "@mui/material/Box";
import UniversalTextfield from "@/components/todolist/addItem/universalTextfield";

type Props = {
    title: string,
    created: number,
    changeTitle: (title: string) => void
    isDone?: boolean
    isTodolist?: boolean
}

const EditableSpan = ({
                          title, created, isDone, changeTitle, isTodolist
                      }: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputTitle, setInputTitle] = useState<string>(title);

    const onDoubleClickHandler = () => {
        setIsEditing(true);
    }

    const onChangeHandler = (newTitle: string) => {
        setInputTitle(newTitle);
    }

    const onBlurHandler = () => {
        changeTitle(inputTitle);
        setIsEditing(false);
    }


    const renderTitle = () => {
        if (isEditing) {
            return (<>
                    <UniversalTextfield
                        onKeyDown={onBlurHandler}
                        newTitle={inputTitle}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                    />
                </>);
        }

        return (<>
                {isTodolist ? (
                    <h3 className={`${s.title} ${s.todolistTitle}`} onDoubleClick={onDoubleClickHandler}>
                        {inputTitle}
                    </h3>) : (
                    <span className={s.title} onDoubleClick={onDoubleClickHandler}>
                    {inputTitle}
                </span>)}
            </>);
    };

    const renderDate = () => (
        <span className={`${s.date} ${isTodolist ? s.todolistDate : ''}`}>
        {isTodolist ? 'Created' : 'Added'}: {formatDate(created)}
    </span>);

    return (<Box
            className={s.content}
            sx={{
                display: "flex", flexDirection: "column",
                textDecoration: isDone ? "line-through" : "none",
                opacity: isDone ? 0.5 : 1,
            }}
        >
            {renderTitle()}
            {renderDate()}
        </Box>);
}
export default EditableSpan;