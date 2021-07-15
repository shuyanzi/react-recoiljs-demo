import { atom, selector } from 'recoil';

export const textState = atom({
  key: 'xxState', // unique ID (with respect to other atoms/selectors)
  default: 'test', // default value (aka initial value)
});

export const charCountState = selector({
  key: 'xxCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  },
});

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});
