import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/addTask/actions";
import Task from "./Task";

export default function Display() {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const deleteHandler = (id) => {
        dispatch(deleteTask(id));
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-9/12 grid lg:grid-cols-3 gap-2 sm:grid-cols-1 md:grid-cols-2">
                {state.map((task) => (
                    <Task
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        taskDetails={task.taskDetails}
                        priority={task.priority}
                        deleteHandler={deleteHandler}
                    />
                ))}
            </div>
        </div>
    );
}
