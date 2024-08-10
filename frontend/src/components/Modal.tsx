const Modal = ({
    open,
    onClose,
    children,
}: {
    open: any;
    onClose: any;
    children: any;
}) => {
    return (
        <div
            className={`fixed inset-0 flex justify-center items-center transition-colors ${
                open ? "visible bg-black/20" : "invisible"
            }`}
        >
            <div className="bg-indigo-200 rounded-lg shadow-lg">
                <button onClick={onClose} className="m-4">
                    Close
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
