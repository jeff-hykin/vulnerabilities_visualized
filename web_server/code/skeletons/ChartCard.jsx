module.exports = ({ children, style, ...props }) => {
    return <div
        class="centered our-weak-shadow animate"
        style={{
            width: "100%",
            height: "fit-content",
            minMeight: "8rem",
            marginTop: "1rem",
            backgroundColor: "white",
            borderRadius: "1.5rem",
            padding: "1.5rem",
            ...style,
        }}
        {...props}
        >
            {children}
    </div>
}