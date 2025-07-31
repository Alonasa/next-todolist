import Card from "@mui/material/Card";
import List from "@mui/material/List";
import {CardContent} from "@mui/material";
import AddItem from "@/components/addItem/addItem";
import TaskItem, {TaskProps} from "@/components/task/taskItem";
import s from "./todolistItem.module.css";
import formatDate from "@/utils/formatDate";
import IconButton from "@mui/material/IconButton";
import DeleteOutline from "@mui/icons-material/DeleteOutline";


export type TodolistProps = {
    id: string,
    created: number,
    title: string,
}

type Props = {
    todolist: TodolistProps,
    tasks: TaskProps[]
    createTask: (tlId: TodolistProps["id"], title: TaskProps["title"]) => void
    deleteTask: (tlId: TodolistProps["id"], taskId: TaskProps["id"]) => void
    deleteTodolist: (tlId: TodolistProps["id"]) => void
    changeTaskStatus: (tlId: TodolistProps["id"], taskId: TaskProps["id"], isDone: TaskProps["isDone"]) => void
    changeTaskTitle: (tlId: TodolistProps["id"], taskId: TaskProps["id"], title: TaskProps["title"]) => void
}

const TodolistItem = ({
                          todolist,
                          tasks,
                          createTask,
                          changeTaskStatus,
                          changeTaskTitle,
                          deleteTask,
                          deleteTodolist
                      }: Props) => {
    const {id, title, created} = todolist;

    const createTaskHandler = (title: TodolistProps["title"]) => {
        createTask(id, title);
    }

    const deleteTaskHandler = (taskId: TaskProps["id"]) => {
        deleteTask(id, taskId);
    }

    const deleteTodolistHandler = () => {
        deleteTodolist(id);
    }

    const changeTaskStatusHandler = (taskId: TaskProps["id"], isDone: TaskProps["isDone"]) => {
        changeTaskStatus(id, taskId, isDone);
    }

    const changeTaskTitleHandler = (taskId: TaskProps["id"], title: TaskProps["title"]) => {
        changeTaskTitle(id, taskId, title);
    }

    return (
        <Card elevation={4} sx={{maxWidth: 250, m: 1}}>
            <CardContent>
                <div className={s.title}>
                    <h3>{title}</h3>
                    <span className={s.date}>Created: {formatDate(created)}</span>
                    <IconButton sx={{ml: "auto"}} onClick={deleteTodolistHandler}>
                        <DeleteOutline/>
                    </IconButton>
                </div>
                <AddItem title={"Add"} cb={createTaskHandler}/>
                {tasks.length ?
                    <List>
                        {tasks.map(t => {
                            return (
                                <TaskItem key={t.id} task={t}
                                          deleteTask={deleteTaskHandler}
                                          changeStatus={changeTaskStatusHandler}
                                          changeTaskTitle={changeTaskTitleHandler}
                                />
                            )
                        })}
                    </List>
                    : <h5>Add your first task...</h5>}
            </CardContent>
        </Card>
    )
}

export default TodolistItem;