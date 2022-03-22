import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const LOAD_USERS = "LOAD_USERS";
const CREATE_USER = "CREATE_USER";
const REMOVE_USER = "REMOVE_USER";

const usersReducer = (state = [], action) => {
  if (action.type === LOAD_USERS) {
    state = action.users;
  }
  if (action.type === CREATE_USER) {
    state = [...state, action.user];
  }
  if (action.type === REMOVE_USER) {
    state = state.filter((user) => user.id !== action.user.id);
  }
  return state;
};

const reducer = combineReducers({
  users: usersReducer,
});

const _loadUser = (users) => ({ type: LOAD_USERS, users });

const loadUsers = () => {
  return async (dispatch) => {
    const users = (await axios.get("/api/users")).data;
    dispatch(_loadUser(users));
  };
};

const _createUser = (user) => ({ type: CREATE_USER, user });

const createUser = (name, history) => {
  return async (dispatch) => {
    const { data: user } = await axios.post("/api/users", name);
    dispatch(_createUser(user));
    history.push(`/users/${user.id}`);
  };
};

const _removeUser = (user) => ({ type: REMOVE_USER, user });

const removeUser = (user, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/users/${user.id}`);
    dispatch(_removeUser(user));
    history.push("/users");
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { loadUsers, createUser, removeUser };
