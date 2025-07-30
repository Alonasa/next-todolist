import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import s from "./taskItem.module.css";
import formatDate from "@/utils/formatDate";

export type TaskProps = {
    id: string,
    created: number,
    title: string,
    isDone: boolean
}

type Props = {
    task: TaskProps
}

const TaskItem = ({task}: Props) => {
   const {id, title, created, isDone} = task;

    return (
        <ListItem key={id} disablePadding={true}>
            <Checkbox checked={isDone}>
            </Checkbox>
            <Box sx={{display: "flex", flexDirection: "column"}}>
                <span>{title}</span>
                <span className={s.date}>Added: {formatDate(created)}</span>
            </Box>
            <IconButton sx={{ml: "auto"}}>
                <DeleteOutline/>
            </IconButton>
        </ListItem>
    )
}

export default TaskItem;