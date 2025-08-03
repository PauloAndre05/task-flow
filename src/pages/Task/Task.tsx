import { useEffect } from "react"
import { SubHeader } from "../../components/subHeader/subHeader"

export const Task = () => {
    useEffect(() => {
        document.title = "Task Flow - Tasks"
    }, [])
    return(
        <div className="flex flex-col gap-4">
            Task
        </div>
    )
}