export default function TextArea({ ...rest }) {
    return (
        <div>
            <label
                htmlFor="task"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Task Details
            </label>
            <div className="mt-2">
                <textarea
                    {...rest}
                    placeholder="Add details to your task"
                    name="details"
                    id=""
                    className="w-full h-32"
                ></textarea>
            </div>
        </div>
    );
}
