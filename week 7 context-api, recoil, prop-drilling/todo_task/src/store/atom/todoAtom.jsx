import { atom, selector } from "recoil";

export const todos = atom({
  key: "todos",
  default: [],
});

export const filter = atom({
  key: "filter",
  default: "",
});

// export const filteredTodos = atom({
//   key: "filteredTodos",
//   default: [],
// });

export const filterSelector = selector({
  key: "filterSelector",
  get: ({ get }) => {
    const count = get(todos);
    const filtering = get(filter);
    if (filtering === "") {
      return count;
    } else {
      return count.filter((todo) => {
        return todo.title.toLowerCase().includes(filtering.toLowerCase()) || todo.description.toLowerCase().includes(filtering.toLowerCase());
      });
    }
  },
});
