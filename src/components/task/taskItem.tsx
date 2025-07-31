import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Checkbox from "@mui/material/Checkbox";
import EditableSpan from "@/components/editableSpan/editableSpan";

export type TaskProps = {
    id: string,
    created: number,
    title: string,
    isDone: boolean
}

type Props = {
    task: TaskProps
    deleteTask: (taskId: TaskProps["id"]) => void
    changeStatus: (taskId: TaskProps["id"], isDone: TaskProps["isDone"]) => void
    changeTaskTitle: (taskId: TaskProps["id"], title: string) => void
}

const TaskItem = ({
                      task, deleteTask, changeStatus, changeTaskTitle
                  }: Props) => {
    const {id, title, created, isDone} = task;

    const deleteTaskHandler = (taskId: TaskProps["id"]) => {
        deleteTask(taskId);
    }

    const changeStatusHandler = (taskId: TaskProps["id"], isDone: TaskProps["isDone"]) => {
        changeStatus(taskId, !isDone);
    }

    const changeTitleHandler = (title: string) => {
        changeTaskTitle(id, title);
    }


    return (<ListItem key={id} disablePadding={true}>
        <Checkbox checked={isDone} onChange={() => changeStatusHandler(id, isDone)}>
        </Checkbox>
        <EditableSpan title={title} isDone={isDone} created={created}
                      changeTitle={changeTitleHandler}></EditableSpan>
        <IconButton sx={{ml: "auto"}} onClick={() => deleteTaskHandler(id)}>
            <DeleteOutline/>
        </IconButton>
    </ListItem>)
}

export default TaskItem;