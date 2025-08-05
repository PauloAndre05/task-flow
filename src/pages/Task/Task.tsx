import { useEffect } from "react"
import { TimeLimite } from "../../components/Task/Time-Limite"
import { NewTask } from "../../components/Task/New-Task"

export const Task = () => {
    useEffect(() => {
        document.title = "Task Flow - Tasks"
    }, [])
    return(
        <div className="flex flex-col gap-4 pl-6 pt-6 pb-6">
            <TimeLimite />
            <NewTask />
        </div>
    )
}