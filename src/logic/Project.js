
import ToDoWithKey from "./ToDoWithKey";

export default function Project(inputTitle, inputKey) {
    const title = inputTitle;
    this.toDos = [];
    const key = inputKey;
    this.nextToDoKey = 0;

    function addToDo(toDo) {
        this.toDos.push(ToDoWithKey(toDo, this.nextToDoKey));
        this.nextToDoKey++;
    }

    function removeToDo(toDoKey) {
        let target = -1;
        for (let i = 0; i < this.toDos.length; i++) {
            if (this.toDos[i].key === toDoKey) {
                target = i;
                break;
            }
        }
        this.toDos.splice(target, 1);
    }

    return {title, toDos: this.toDos, key, addToDo, removeToDo, nextToDoKey: this.nextToDoKey};
}

