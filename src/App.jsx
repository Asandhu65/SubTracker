import Subscription from "./Subscription.jsx";
import TotalSubs from "./Total.jsx";
import AddSubButton from "./AddSub.jsx";
import DeleteSubButton from "./DeleteSub.jsx";
import ChangeMode from "./ChangeMode.jsx";
import { useEffect, useState } from "react";
import AddSubForm from "./AddSubForm.jsx";
import EditSubForm from "./EditSubForm.jsx";
import ConfirmDeleteAll from "./ConfirmDeleteAll.jsx";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [currency, setCurrency] = useState("$");

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

  const handleDelete = id => {
    const updatedSubmissions = submissions.filter(sub => sub.id !== id);
    setSubmissions(updatedSubmissions);
    localStorage.setItem("subscriptions", JSON.stringify(updatedSubmissions));
  };

  const handleCurrencyChange = newCurrency => {
    setCurrency(newCurrency);
  };

  const totalMonthlyPrice = submissions
    .filter(sub => sub.renewal === "Monthly")
    .reduce((total, sub) => total + sub.price, 0);

  const totalAnnualPrice = submissions
    .filter(sub => sub.renewal === "Annually")
    .reduce((total, sub) => total + sub.price, 0);

  const handleDeleteAllClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmDeleteAll = () => {
    setSubmissions([]);
    localStorage.removeItem("subscriptions");
    setShowConfirm(false);
  };

  const handleCancelDeleteAll = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <ChangeMode />
      <h1>Subscription Tracker</h1>
      <TotalSubs
        totalMonthlyPrice={totalMonthlyPrice}
        totalAnnualPrice={totalAnnualPrice}
        currency={currency}
      />
      <AddSubButton showForm={showForm} setShowForm={setShowForm} />

      {showForm && (
        <AddSubForm
          showForm={showForm}
          setShowForm={setShowForm}
          onSubmit={handleFormSubmit}
          onCurrencyChange={handleCurrencyChange}
        />
      )}
      {isEditing && (
        <EditSubForm
          data={editingData}
          onUpdate={handleUpdate}
          setIsEditing={setIsEditing}
          onCurrencyChange={handleCurrencyChange}
        />
      )}
      <br />
      {submissions.length >= 2 && (
        <DeleteSubButton onDelete={handleDeleteAllClick} />
      )}
      <div className="subscription-card-container">
        {submissions.map(submission => (
          <Subscription
            key={submission.id}
            data={submission}
            onEdit={() => handleEditClick(submission)}
            onDelete={() => handleDelete(submission.id)}
            currency={submission.currency}
          />
        ))}
      </div>

      {showConfirm && (
        <ConfirmDeleteAll
          message="Are you sure you want to delete all subscriptions?"
          onConfirm={handleConfirmDeleteAll}
          onCancel={handleCancelDeleteAll}
        />
      )}
    </div>
  );
}

export default App;
