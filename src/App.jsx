import Subscription from "./Subscription.jsx";
import TotalSubs from "./Total.jsx";
import AddSubButton from "./AddSub.jsx";
import DeleteSubButton from "./DeleteSub.jsx";
import ChangeMode from "./ChangeMode.jsx";
import { useState } from "react";
import AddSubForm from "./AddSubForm.jsx";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <ChangeMode />
      <h1>Subscription Tracker</h1>
      <TotalSubs />
      <AddSubButton showForm={showForm} setShowForm={setShowForm} />
      {showForm && <AddSubForm/> showForm={showForm} setsh
      <br />
      <DeleteSubButton />
      <Subscription />
    </div>
  );
}

export default App;