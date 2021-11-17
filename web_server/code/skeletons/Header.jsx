// FIXME: Include help button to launch overlay

module.exports = ({ children, ...properties }) => {
    return <div id="header" className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
            <a
                href="/"
                aria-label="GitBug"
                title="GitBug"
                className="inline-flex items-center"
            >

                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                    GitBug
                </span>
            </a>
            <ul className="flex items-center hidden space-x-8 lg:flex">
            </ul>
        </div>
    </div>
}
