module.exports = ({ children, title, actions=[], ...properties }) => {
    return (
        <div class="row">
            <div class="col s12 m7">
                <div class="card" {...properties}>
                    <div class="card-content">
                        {title && <span class="card-title">{title}</span>}
                        {children}
                    </div>
                    {actions.map(each=> <div class="card-action">
                        {each}
                    </div>)}
                </div>
            </div>
        </div>
    )
}
