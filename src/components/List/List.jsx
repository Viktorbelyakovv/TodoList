import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { selectList } from "../../store/tasks/selectors";
import {
  uploadListAction,
  deleteTaskAction,
  changeTitleAction,
  changeCompletedAction,
  changeFavoriteAction,
} from "../../store/tasks/reducer";
import {
  uploadListServer,
  deleteTaskServer,
  changeTitleServer,
  changeCompletedServer,
  changeFavoriteServer,
} from "../../utils/api";
import Item from "../Item";
import "./List.css";

const List = ({ isCompleted }) => {
  const list = useSelector(selectList);
  const dispatch = useDispatch();

  const onDeleteItem = (id) => {
    deleteTaskServer(id).then(({ status }) => {
      if (status === 200) {
        dispatch(deleteTaskAction(id));
      } else {
        alert("Error status = " + status);
      }
    });
  };

  const onChangeTitle = (id, title) => {
    changeTitleServer(id, title).then(({ status }) => {
      if (status === 200) {
        dispatch(changeTitleAction({ id, title }));
      } else {
        alert("Error status = " + status);
      }
    });
  };

  const onChangeCompleted = (id) => {
    const item = list.find((item) => item.id === id);

    if (item) {
      changeCompletedServer(id, !item.completed).then(({ status }) => {
        if (status === 200) {
          dispatch(changeCompletedAction(id));
          if (item.favorite) {
            changeFavoriteServer(id, !item.favorite).then(({ status }) => {
              if (status === 200) {
                dispatch(changeFavoriteAction(id));
              } else {
                alert("Error status = " + status);
              }
            });
          }
        } else {
          alert("Error status = " + status);
        }
      });
    }
  };

  const onChangeFavorite = (id) => {
    const item = list.find((item) => item.id === id);

    if (item) {
      changeFavoriteServer(id, !item.favorite).then(({ status }) => {
        if (status === 200) {
          dispatch(changeFavoriteAction(id));
        } else {
          alert("Error status = " + status);
        }
      });
    }
  };

  useEffect(() => {
    uploadListServer().then((list) => list && dispatch(uploadListAction(list)));
  }, [dispatch]);

  return (
    <div className="List">
      {list.length ? (
        isCompleted ? (
          list.map(
            (item) =>
              item.completed && (
                <Item
                  item={item}
                  deleteItem={onDeleteItem}
                  changeTitle={onChangeTitle}
                  changeCompleted={onChangeCompleted}
                  changeFavorite={onChangeFavorite}
                  key={item.id}
                />
              )
          )
        ) : (
          list.map(
            (item) =>
              !item.completed && (
                <Item
                  item={item}
                  deleteItem={onDeleteItem}
                  changeTitle={onChangeTitle}
                  changeCompleted={onChangeCompleted}
                  changeFavorite={onChangeFavorite}
                  key={item.id}
                />
              )
          )
        )
      ) : (
        <h2>No tasks</h2>
      )}
    </div>
  );
};

List.propTypes = {
  isCompleted: PropTypes.bool,
};

export default List;
