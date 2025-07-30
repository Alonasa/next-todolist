import Card from "@mui/material/Card";
import List from "@mui/material/List";
import {CardContent} from "@mui/material";
import AddItem from "@/components/addItem";
import TaskItem, {TaskProps} from "@/components/task/taskItem";
import s from "./todolistItem.module.css";
import formatDate from "@/utils/formatDate";


export type TodolistProps = {
    id: string,
    created: number,
    title: string,
    tasks: TaskProps[]
}

type Props = {
    todolist: TodolistProps
}

const TodolistItem = ({todolist}: Props) => {
    const {id, title, tasks, created} = todolist;
    return (
        <Card key={id} elevation={4} sx={{maxWidth: 300}}>
            <CardContent>
                <h3 className={s.title}>
                    {title}
                    <span className={s.date}>Created: {formatDate(created)}</span>
                </h3>
                <AddItem/>
                <List>
                    {tasks.map(t => {
                        return (
                            <TaskItem key={t.id} task={t}/>
                        )
                    })}
                </List>
            </CardContent>
        </Card>
    )
}

export default TodolistItem;