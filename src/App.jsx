import Subscription from "./Subscription.jsx";
import TotalSubs from "./Total.jsx";
import AddSubButton from "./AddSub.jsx";
import DeleteSubButton from "./DeleteSub.jsx";

function App() {
  return (
    <div>
      <TotalSubs />
      <AddSubButton />
      <DeleteSubButton />
      <Subscription />
    </div>
  );
}

export default App;
