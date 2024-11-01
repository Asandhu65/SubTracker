import Subscription from "./Subscription.jsx";
import TotalSubs from "./Total.jsx";
import AddSubButton from "./AddSub.jsx";
import DeleteSubButton from "./DeleteSub.jsx";
import ChangeMode from "./ChangeMode.jsx";

function App() {
  return (
    <div>
      <h1>Subscription Tracker</h1>
      <TotalSubs />
      <AddSubButton />
      <br />
      <DeleteSubButton />
      <Subscription />
      <ChangeMode />
    </div>
  );
}

export default App;
