import { todoListState } from '../stores'
import { useSetRecoilState } from 'recoil';
import { useState } from 'react'

// ----------------------TodoItemCreator------------------------------------------
function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
      ...oldTodoList,
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// 用于创建唯一 id 的工具函数
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
