import { FaSearchengin } from "react-icons/fa6"

export const SubHeader = () => {
    return(
        <div className="flex justify-between">
            <div>
                <form>
                    <input type="text" placeholder="Search Task" />
                    <FaSearchengin />
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}