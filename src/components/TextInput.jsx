export default function TextInput({ ...rest }) {
    return (
        <div>
            <label
                htmlFor="task"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Task Name
            </label>
            <div className="mt-2">
                <input
                    {...rest}
                    id="task"
                    name="task"
                    type="text"
                    autoComplete="task"
                    placeholder="Type Here"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
}
