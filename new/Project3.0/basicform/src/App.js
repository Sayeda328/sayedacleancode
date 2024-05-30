// 

import{useEffect,useState} from "react";
export default function App() {
  const [data, setData]  = useState([]);
  const [count, setount]  = useState(0);

  const Datafetching = () => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => setData(data.products))
    .catch((err) => console.log(err.message));

  };
  useEffect(() => {
    Datafetching();
    console.log(data);
  }
  ,[]);
  console.log(data);
  return (
    < div className="App">
      <h1> i am a prouct pg</h1>
      {
        data.map((el,ind) => (
          <div>
            <img src={el.thumbnail} alt="" />
            </div>
        ))}
    </div>
  )

  }
