

export default function ToDo() {
    let title = "";
    let priority = "";
    let description = "";
    let date = "";
    let done = "";

    return {title, priority, description, date, done};
}


export function compareByDate(toDo1, toDo2) {
    const date1 = new Date(toDo1.date);
    const date2 = new Date(toDo2.date);
    console.log(date1 + " " + date2 + " " + (date1 < date2));
    if (date1 < date2) return -1;
    if (date1 > date2) return 1;
    return 0;
}