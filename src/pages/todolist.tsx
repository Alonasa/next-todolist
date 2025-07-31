import {useState} from "react";
import AddItem from "@/components/todolist/addItem/addItem";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {v4} from "uuid";
import TodolistItem, { TodolistProps } from "@/components/todolist/todolistItem/todolistItem";
import { TaskProps } from "@/components/todolist/taskItem/taskItem";

type TasksStateProps = { [key: TodolistProps["id"]]: TaskProps[] };
export default function () {
    const [tasks, setTasks] = useState<TasksStateProps>({});
    const [todolists, setTodolists] = useState<TodolistProps[]>([])

    const addTodolist = (title: TodolistProps["title"]) => {
        const newTlId = v4();
        const tl: TodolistProps = {id: newTlId, title, created: Date.now()}
        setTodolists([...todolists, tl]);
        setTasks({...tasks, [newTlId]: []});
    }

    const deleteTodolist = (tlId: TodolistProps["id"]) => {
        setTodolists(todolists.filter(tl => tl.id !== tlId));
        delete tasks[tlId];
        setTasks({...tasks});
    }

    const addTask = (tlId: TodolistProps["id"], title: TaskProps["id"]) => {
        const task = {id: v4(), title, created: Date.now(), isDone: false};
        setTasks({...tasks, [tlId]: [task, ...tasks[tlId]]});
    }

    const deleteTask = (tlId: TodolistProps["id"], taskId: TaskProps["id"]) => {
        setTasks({...tasks, [tlId]: tasks[tlId].filter(t => t.id !== taskId)});
    }

    const changeTaskStatus = (tlId: TodolistProps["id"], taskId: TaskProps["id"], isDone: TaskProps["isDone"]) => {
        setTasks({...tasks,
                     [tlId]: tasks[tlId].map(t => t.id === taskId ? {...t, isDone} : t)
                 });
    }

    const changeTaskTitle = (tlId: TodolistProps["id"], taskId: TaskProps["id"], title: TaskProps["title"]) => {
       setTasks({...tasks, [tlId]: tasks[tlId].map(t => t.id === taskId ? {...t, title} : t)})
    }

    const changeTodolistTitle = (tlId: TodolistProps["id"], title: TaskProps["title"]) => {
        setTodolists(todolists.map(tl=> tl.id === tlId ? {...tl, title} : tl));
    }


    return (
        <>
            <Container maxWidth="lg" sx={{my: 3}}>
                <AddItem cb={addTodolist}/>
                <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
                    {todolists.length ? todolists.map(tl => {
                        return (
                            <TodolistItem key={tl.id}
                                          todolist={tl}
                                          tasks={tasks[tl.id]}
                                          createTask={addTask}
                                          deleteTask={deleteTask}
                                          deleteTodolist={deleteTodolist}
                                          changeTaskStatus={changeTaskStatus}
                                          changeTaskTitle={changeTaskTitle}
                                          changeTodolistTitle={changeTodolistTitle}
                            />
                        )
                    }) : <span>No todolists yet...</span>}
                </Box>
            </Container>
        </>

    )
}
