// FIXME: Include help button to launch overlay

module.exports = ({ children, ...properties }) => {
    return <div
        style="width: 100%; height: fit-content; padding: 1.2rem; margin: 0;"
        class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
        >
        <div class="relative flex items-center justify-between">
            <a
                href="/"
                aria-label="GitBug"
                title="GitBug"
                class="inline-flex items-center"
            >

                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                    GitBug
                </span>
            </a>
            <ul class="flex items-center hidden space-x-8 lg:flex">
            </ul>
        </div>
    </div>
}
