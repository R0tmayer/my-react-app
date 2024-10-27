export default function Button({title, onClick}: {title: string; onClick: () => void}) {
    return(
        <button onClick={onClick}>{title}</button>
    )
}