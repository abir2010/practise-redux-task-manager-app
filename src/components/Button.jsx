/* eslint-disable react/prop-types */

export default function Button({ children, handleDelete }) {
    let btnClass =
        "w-full rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
    if (children === "Delete") {
        btnClass =
            "w-full rounded-md bg-red-500 px-2 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 fa-solid fa-trash";
    }
    return (
        <div>
            <button
                onClick={handleDelete ? handleDelete : null}
                type="submit"
                className={btnClass}
            >
                {children}
            </button>
        </div>
    );
}
