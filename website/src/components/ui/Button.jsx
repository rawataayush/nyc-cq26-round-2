const Button = ({
    children,
    type="button",
    onClick,
    className = "",
}) => {
    return (
        <button
        type={type}
        onClick={onClick}
        className={`rounded-xl bg-blue-700 px-6 py-3 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-blue-800 active:scale-95 ${className}`}
        >
            {children}
        </button>
    )
}

export default Button;