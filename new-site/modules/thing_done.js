
export default function ThingDone({img, alt, text}) {
    return(
        <div style={{
            background: "var(--foreground)",
            borderRadius: "10px",
            padding: "10px"
        }}>
            <img
                src={img}
                alt={alt}
                style={{
                    objectFit: "cover",
                    height: "100px",
                    width: "100%",
                    borderRadius: "10px",
                }}
            />
            {text}
        </div>
    )
}
