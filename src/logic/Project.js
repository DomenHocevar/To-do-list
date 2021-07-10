
import ToDoWithKey from "./ToDoWithKey";

export default function Project(inputTitle, inputKey) {
    const title = inputTitle;
    const toDos = [];
    const key = inputKey;
    let nextToDoKey = 0;

    function addToDo(toDo) {
        toDos.push(ToDoWithKey(toDo, nextToDoKey));
        nextToDoKey++;
    }

    function removeToDo(toDoKey) {
        let target = -1;
        for (let i = 0; i < toDos.length; i++) {
            if (toDos[i].key == toDoKey) {
                target = i;
                break;
            }
        }
        toDos.splice(target, 1);
    }

    return {title, toDos, key, addToDo, removeToDo};
}