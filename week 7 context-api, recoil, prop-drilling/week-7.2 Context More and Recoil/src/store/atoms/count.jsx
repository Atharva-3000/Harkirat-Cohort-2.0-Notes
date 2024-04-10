//  define an atom

import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom",
  default: 0,
});


export const evenSelector=selector({
    key:"evenSelector",
    //get is used to get the value of the atom 
    get:({get})=>{
        const count=get(countAtom);
        return count%2==0
    }
})
