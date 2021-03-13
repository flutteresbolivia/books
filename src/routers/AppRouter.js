import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { startLoadingBooks } from '../actions/books';

import { Books } from '../components/Books';
import { Search } from '../components/Search';

export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('APP ROUTER')
    dispatch(startLoadingBooks());
  }, [dispatch]);
  // const [checking, setChecking] = useState(true);
  // const [isLoggedIn, setisLoggedIn] = useState(false)
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(async (user) => {
  //     if (user?.uid) {
  //       dispatch(login(user.uid, user.displayName));
  //       setisLoggedIn(true);
  //       dispatch(startLoadingNotes(user.uid))

  //     }else{
  //       setisLoggedIn(false);

  //     }
  //     setChecking(false);
  //   });
  // }, [dispatch, setChecking,setisLoggedIn]);
  // console.log(isLoggedIn)
  // if (checking) {
  //   return <h1>Espere porfavor...</h1>;
  // }
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Books} />
          <Route exact path='/search' component={Search} />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};
