import Subscription from "./Subscription.jsx";
import TotalSubs from "./Total.jsx";
import AddSubButton from "./AddSub.jsx";
import DeleteSubButton from "./DeleteSub.jsx";
import ChangeMode from "./ChangeMode.jsx";
import { useState } from "react";
import AddSubForm from "./AddSubForm.jsx";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const handleFormSubmit = newData => {
    setSubmissions(prevSubmission => [...prevSubmission, newData]);
  };
  return (
    <div>
      <ChangeMode />
      <h1>Subscription Tracker</h1>
      <TotalSubs />
      <AddSubButton showForm={showForm} setShowForm={setShowForm} />
      {showForm && (
        <AddSubForm
          showForm={showForm}
          setShowForm={setShowForm}
          onSubmit={handleFormSubmit}
        />
      )}
      <br />
      <DeleteSubButton />
      {submissions.map((submissions, index) => (
        <Subscription key={index} data={submissions} />
      ))}
    </div>
  );
}

export default App;
