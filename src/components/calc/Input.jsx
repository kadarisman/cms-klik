const Input = ({setValues, values }) => {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value, });
    }

    return (
        <>
            <div className="flex flex-row gap-2 mt-3">
                <input type="text" className="block p-3.5 w-2/4 h-20 text-4xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="satu" placeholder="0" value={values.satu} onChange={handleInputChange} />

                <input type="text" className="block p-3.5 w-2/4 h-20 text-4xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="dua" placeholder="0" value={values.dua} onChange={handleInputChange} />
            </div>
        </>
    )
}
export default Input