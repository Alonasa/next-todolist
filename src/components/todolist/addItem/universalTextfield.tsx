import TextField from "@mui/material/TextField";
import {ChangeEvent, KeyboardEvent, useState} from "react";

type Props = {
    newTitle: string,
    onChange: (title: string) => void
    onKeyDown: ()=> void
    onBlur?: () => void
}

const UniversalTextfield = ({newTitle, onChange, onBlur, onKeyDown}: Props) => {
    const [error, setError] = useState<string | null>(null);


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const title = e.currentTarget.value;
        onChange(title);

        if (title.trim().length < 2) {
            setError("Title must be at least 2 characters long");
        } else if (title.trim().length > 20) {
            setError("Title can't be longer than 20 characters");
            onChange(title.slice(0, 20));
        } else {
            error && setError(null);
        }
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            onKeyDown();
        }
    }


    return (<TextField
        size="small"
        label="Enter your title"
        error={error !== null}
        helperText={error}
        autoFocus={true}
        value={newTitle}
        onChange={(e) => onChangeHandler(e)}
        onBlur={onBlur}
        onKeyDown={(e) => onKeyDownHandler(e)}
    />)
}

export default UniversalTextfield;