/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "./Button";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/addTask/actions";
import TextArea from "./TextArea";

export default function Form() {
    const [task, setTask] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
    const [priority, setPriority] = useState("Top");
    const [id, setId] = useState(1);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const singleTask = {
            id: id,
            task,
            taskDetails,
            priority,
        };
        console.log(singleTask);
        // dispatch
        dispatch(addTask(singleTask));

        setId((prevId) => prevId + 1);
        setTask("");
        setTaskDetails("");
    };

    return (
        <div className="bg-blue-100 flex min-h-full flex-1 flex-col justify-center px-6 py-12 mb-3 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Add your Tasks for today !
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-1 justify-between content-center mb-2">
                        {/* task input field */}
                        <TextInput
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        {/* select input field */}
                        <SelectInput
                            onChange={(e) => setPriority(e.target.value)}
                        />
                    </div>
                    {/* task desc field */}
                    <TextArea
                        value={taskDetails}
                        onChange={(e) => setTaskDetails(e.target.value)}
                    />
                    {/* button */}
                    <Button>Add Task</Button>
                </form>
            </div>
        </div>
    );
}
