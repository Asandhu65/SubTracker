import Subscription from "./Subscription.jsx";
import TotalSubs from "./Total.jsx";
import AddSubButton from "./AddSub.jsx";
import DeleteSubButton from "./DeleteSub.jsx";
import ChangeMode from "./ChangeMode.jsx";
import { useEffect, useState } from "react";
import AddSubForm from "./AddSubForm.jsx";
import EditSubForm from "./EditSubForm.jsx";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState(null);

  useEffect(() => {
    const storedSubscriptions = JSON.parse(
      localStorage.getItem("subscriptions")
    );
    if (storedSubscriptions) {
      setSubmissions(storedSubscriptions);
    }
  }, []);

  const handleFormSubmit = newData => {
    const formattedData = {
      ...newData,
      price: parseFloat(newData.price),
      name: newData.name,
      id: Date.now(),
    };
    const updatedSubmissions = [...submissions, formattedData];
    setSubmissions(updatedSubmissions);
    localStorage.setItem("subscriptions", JSON.stringify(updatedSubmissions));
  };

  const handleEditClick = data => {
    setEditingData(data);
    setIsEditing(true);
  };

  const handleUpdate = updatedData => {
    const updatedSubmissions = submissions.map(sub =>
      sub.id === updatedData.id ? updatedData : sub
    );
    setSubmissions(updatedSubmissions);
    localStorage.setItem("subscriptions", JSON.stringify(updatedSubmissions));
    setIsEditing(false);
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
      {isEditing && (
        <EditSubForm
          data={editingData}
          onUpdate={handleUpdate}
          setIsEditing={setIsEditing}
        />
      )}
      <br />
      <DeleteSubButton />
      {submissions.map(submission => (
        <Subscription
          key={submission.id}
          data={submission}
          onEdit={() => handleEditClick(submission)}
        />
      ))}
    </div>
  );
}

export default App;
