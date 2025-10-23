interface ChatProps {
    id: number
}
export const Chat = ( {id}: ChatProps ) => {
    return(
        <div className="flex-1">{id}</div>
    )
}