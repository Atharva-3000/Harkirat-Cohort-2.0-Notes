import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 10,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

// selectors
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get:({get})=>{
    // logic here like a simple function
    // using get tells ki whenever any of the atom changes, this selector will be re-evaluated
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationsAtomCount = get(notificationsAtom);
    const messagingAtomCount = get(messagingAtom);
    return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
  }
})

// asynchronous data queries
