const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const formatDate = (date: string, template: string) => {
    const dateObj = new Date(date)
    return template
    .replace(/M{4}/g, monthNames[dateObj.getMonth() - 1])
    .replace(/Y{4}/g, String(dateObj.getFullYear()))
}