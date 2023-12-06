/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Button from "./Button";

export default function Task({
    id,
    task,
    taskDetails,
    priority,
    deleteHandler,
}) {
    return (
        <div key={id} className="w-full p-2 border-gray-300 border-2">
            <div className="rounded-lg bg-blue-100 flex justify-between items-center p-5 w-full">
                <div className="text-sm bg-blue-200 px-2 rounded-lg text-blue-600">
                    {priority}
                </div>
                <div className="font-bold text-sm">{task}</div>
                <Button handleDelete={() => deleteHandler(id)}>Delete</Button>
            </div>
            <div className=" text-sm bg-gray-200 flex justify-between items-center p-5 w-full mt-1">
                {taskDetails}
            </div>
        </div>
    );
}
