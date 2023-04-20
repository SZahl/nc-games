export const FormatDate = ({date}) => {

    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10)
    const time = date.slice(11, 16);
    const hour = date.slice(11, 13)
    let meridian = ''

    if (hour < 12) {
        meridian = 'am'
    } else if (hour > 12) {
        meridian = 'pm'
    }

    return (
        <>
        {time}{meridian} - {day}/{month}/{year}
        </>
    )
}