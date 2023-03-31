import React, { useState, useEffect } from 'react';
// import AddTodo from "./components/AddTodo";
// import TodoList from "./components/TodoList";
// import CheckoutForm from './components/checkoutForm/CheckoutForm';
// import Category  from './components/Categories/Categories';
// import SignInForm from './components/SignInForm/SignInForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';

// import HomePage from './Pages/HomePage';
// import Layout from './Layout/Layout'
// import LoginPage from './Pages/LoginPage'
// import PrivateRoute from './Routes/Routes';
// import CheckOut from './Pages/CheckOut'
// import PreOrder from './Pages/PreOrder';
// import store from './store/index'
// import { Provider } from "react-redux";



function App() {
  // const isAuthenticated = localStorage.getItem('token') !== null;

  return (
    <h1>hello world people</h1>
    // <Provider store={store}>
    //      <Router>
    //         <Layout>
    //             <Switch>
    //                 <Route exact path="/" component={HomePage} />
    //                 <Route exact path="/login" component={LoginPage} />
    //                 <PrivateRoute path="/checkout" component={CheckOut} />
    //                 <PrivateRoute path="/preorder" component={PreOrder} />

    //             </Switch>
    //         </Layout>
    // </Router>
    // </Provider>
   
  );
}
export default App;




// function App() {
//   return(
//     <SignInForm/>
//   )
  // const [todos, setTodo] = useState([]);

  // useEffect(() => {
  //   fetch('/saludos')
  //       .then((res)=>res.json())
  //       .then(res=>{
  //         console.log(res)
  //         // setTodo([...todos,{text: res.data.value}])
  //         // setTodo([...res])
  //       })
  // }, []);

  // const handleAddTodo = (value) => {
  //   axios
  //     .post("/api/api/todos", { text: value })
  //     .then(() => {
  //       setTodo([...todos,{text: value}])
  //     })
  //     .catch((e) => console.log("Error : ", e));
  // };

  // return (
  //   <div className="App container">
  //   <div className="container-fluid">
  //     <div className="row">
  //       <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
  //         <h1>Todos</h1>
  //         <div className="todo-app">
  //         <AddTodo handleAddTodo={handleAddTodo} />
  //         <TodoList todos={todos} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // );
  // return(
  //   <CheckoutForm/>
  // )
// }

// export default App;
  