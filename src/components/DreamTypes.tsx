export default function DreamTypes(props: { types: string[]}) {
    return (
        <div className="flex flex-row flex-wrap">
            {props.types.map((type: string) => {
                return (
                    <span key={`dream-type-${type}`} className="mr-2 p-2 px-3 bg-purple-200 dark:bg-purple-800 rounded-full">
                        {type.toLowerCase().replace('_', ' ')}
                    </span>
                )
            })}
        </div>
    )
}