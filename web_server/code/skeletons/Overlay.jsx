// FIXME:

module.exports = ({ children, ...properties }) => {
    return <div
        className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
    >
        <h2 className="text-center text-white text-xl font-semibold">Context instructions</h2>
        <button className="p-2 pl-5 pr-5 bg-transparent border-2 border-white text-white text-lg rounded-lg transition-colors duration-700 transform hover:bg-white hover:text-gray-700 focus:border-4 focus:border-white rounded-full" onClick={() => console.log("test")}>
            Got it
        </button>
    </div>
}
