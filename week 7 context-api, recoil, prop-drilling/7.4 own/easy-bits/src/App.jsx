import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atoms";
// import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}
function MainApp() {
  const newtworkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);

  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(()=>{
  //   return newtworkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount
  // }, [newtworkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount])
  return (
    <div>
      <button>Home</button>

      <button>
        My Network (
        {newtworkNotificationCount >= 100 ? "99+" : newtworkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Me ({totalNotificationCount})</button>
    </div>
  );
}
export default App;
