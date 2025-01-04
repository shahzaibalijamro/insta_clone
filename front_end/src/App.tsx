import { useDispatch, useSelector } from "react-redux"
import { addCount, reduceCount } from "./config/reducers/counterSlice";

const App = () => {
  const selector = useSelector((state: {counter: {count: number}}) => state.counter.count);
  console.log(selector);
  const dispatch = useDispatch();
  const wishCounter = () => {
    const num = +prompt("Enter a number");
    console.log(num);
    
    if (Number.isNaN(num)) return alert("Enter a number")
  }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world! {selector}
      </h1>
      <button onClick={() => dispatch(addCount())}>Add Count</button>
      <button onClick={() => {selector > 0 && dispatch(reduceCount())}}>Reduce Count</button>
      <button onClick={() => {wishCounter()}}>Wish</button>
    </div>
  )
}

export default App