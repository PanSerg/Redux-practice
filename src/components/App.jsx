import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/operations";
import { getTasks } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
    // Получаем части состояния
  const { items, isLoading, error } = useSelector(getTasks);

   // Вызываем операцию
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};
