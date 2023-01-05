import ExpenceItem from "./Component/ExpenceItem";

const App=()=> {
  const Expense = [
    {
      id: "a1",
      LocationOfExpenditure: "Agra",
      Title: "CarInsaurance",
      Amount: 10345,
      date: new Date(2023, 1, 31),
    },
    {
      id: "b2",
      LocationOfExpenditure: "New Delhi",
      Title: "Petrol",
      Amount: 1000,
      date: new Date(2022, 12, 20),
    },
    {
      id: "c3",
      LocationOfExpenditure: "Nodia",
      Title: "Lunch",
      Amount: 836,
      date: new Date(2023, 1, 17),
    },
    {
      id: "c4",
      LocationOfExpenditure: "Jaipur",
      Title: "AmusementPark",
      Amount: 1200,
      date: new Date(2023, 1, 31),
    },
  ];
  return (
    <div className="App">
      {Expense.map((element, i) => (
        <h1>
          <ExpenceItem
            Title={element.Title}
            Amount={element.Amount}
            date={element.date}
            LocationOfExpenditure={element.LocationOfExpenditure}
            id={element.id}
          ></ExpenceItem>
        </h1>
      ))}
    </div>
  );
}

export default App;
