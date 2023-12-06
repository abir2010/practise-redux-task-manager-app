export default function SelectInput({ ...rest }) {
    return (
        <div>
            <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                Priority
            </label>
            <div className="mt-2">
                <select
                    {...rest}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                    
                    <option value="Top">Top</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
        </div>
    );
}
