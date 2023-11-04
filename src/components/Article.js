export default function Article({ title, date = 'January 1, 1970', minutes, preview }) {

    // Display the time taken to read article formatted, for example:  "☕️☕️ 7 min read"
    function getReadTime(time) {
        const numberOfEmojis = (time<30) ? Math.ceil(time/5) : Math.ceil(time/10)
        const emoji = (time<30) ? '☕' : '🍱'
        let prefix = ''
        for(let i = 0; i < numberOfEmojis; i++){ prefix = prefix + emoji }
        return ` •${prefix} ${time} min read`
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>{getReadTime(minutes)}</small>
            <p>{preview}</p>
        </article>
    )
}