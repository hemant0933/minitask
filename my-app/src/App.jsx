import "./App.css";
import ItemList from "./components/ItemList";

import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpg";

const items = [
  {
    id: 1,
    imageUrl: img1,
    description:
      "Item 1 - This is the first item in the list. It has a unique description.",
  },
  {
    id: 2,
    imageUrl: img2,
    description:
      "Item 2 - This is the second item in the list. It also has a unique description.",
  },
  {
    id: 3,
    imageUrl: img3,
    description:
      "Item 3 - This is the third item in the list. It has its own special description as well.",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
  );
}

export default App;
