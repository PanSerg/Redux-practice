import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { deleteTask } from 'redux/operations';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  //добавляем код запуска операции удаления задачи при клике по кнопке удаления,
  // и передаем ей идентификатор.
  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
      />
      <p>{task.text}</p>
      <button onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

// До...

  // return (
  //   <div className={css.wrapper}>
  //     <input
  //       type="checkbox"
  //       className={css.checkbox}
  //       checked={task.completed}
  //     />
  //     <p className={css.text}>{task.text}</p>
  //     <button className={css.btn}>
  //       <MdClose size={24} />
  //     </button>
  //   </div>
  // );
