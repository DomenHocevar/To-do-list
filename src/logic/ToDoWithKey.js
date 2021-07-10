

export default function ToDoWithKey(inputToDo, inputKey) {
    const key = inputKey;
    
    return Object.assign({}, inputToDo, {key});
}