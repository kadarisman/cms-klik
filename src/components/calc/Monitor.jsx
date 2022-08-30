const Monitor = ({satu, dua, operasi, hasil}) => {
    return (
        <>
            <div className="box-border p-4 text-4xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <p>{satu} {operasi == "" ? "?" : operasi} {dua} = {hasil}</p>
            </div>
        </>
    )
}
export default Monitor