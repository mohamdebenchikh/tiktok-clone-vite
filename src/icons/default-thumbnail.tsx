
export default function DefaultThumbnail({className = "",...props}:{className:string}) {
    return (
        <svg
            width="120"
            height="160"
            viewBox="0 0 120 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <rect width="120" height="160" fill="#f1f1f2" />
            <rect x="30" y="40" width="60" height="80" rx="8" fill="#e1e1e1" />
            <circle cx="60" cy="80" r="15" fill="#666" />
            <path d="M54 72l12 8-12 8v-16z" fill="#fff" />
        </svg>
    )
}