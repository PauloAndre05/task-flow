import { Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Overview } from "../pages/oeverview/Overview";
import { Setting } from "../pages/setting/Setting";
import { Task } from "../pages/Task/Task";
import { Message } from "../pages/message/Message";
import { Mentors } from "../pages/mentors/Mentors";


export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={ <Layout /> }>
                <Route index element={ <Overview /> }/>
                <Route path="/mentors" element={ <Mentors /> }/>
                <Route path="task" element={ <Task /> }/>
                <Route path="/message" element={ <Message /> }/>
                <Route path="/setting" element={ <Setting /> }/>
            </Route>
        </Routes>
    )
}