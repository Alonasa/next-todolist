import {useState} from "react";
import AddItem from "@/components/addItem";
import TodolistItem from "@/components/todolist/todolistItem";
import {Box} from "@mui/material";
import {TodolistProps} from "@/components/todolist/todolistItem";
import {TaskProps} from "@/components/task/taskItem";

type TasksStateProps = {[key: TodolistProps["id"]]: TaskProps[]};
export default function() {
    const todolistId1 = "1";
    const [tasks, setTasks] = useState<TasksStateProps>({
        [todolistId1]: [
        {id: "1", title: "Task 1", created: Date.now(), isDone: false},
        {id: "2", title: "Task 2",created: Date.now(), isDone: false},
        {id: "3", title: "Task 3", created: Date.now(), isDone: false},
    ]});

    const [todolists, setTodolists] = useState<TodolistProps[]>([
        {id: todolistId1, title: "Todolist 1", tasks: tasks[todolistId1], created: Date.now()},
    ])



    return (
        <>
            <AddItem/>
            <Box>
                {todolists.map(tl => {
                    return(
                        <TodolistItem key={tl.id} todolist={tl}/>
                    )
                })}
            </Box>
        </>

    )
}