

export function isSameDate(date1, date2) {
    if (!date1 || !date2) return false
    return date1.getDate() === date2.getDate()
}
