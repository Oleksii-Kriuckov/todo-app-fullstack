import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { getTodos } from "./redux/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="container p-4 py-sm-3 px-sm-2">
            <TodoForm />
            <h2 className="pt-3">New deals</h2>
            <TodoList />
        </section>
      </main>
    </>
  );
}

export default App;
function getTOdos(): any {
  throw new Error("Function not implemented.");
}

