import { put } from 'redux-saga/effects';
import { router, createHashHistory } from 'redux-saga-router';
import { changePage } from '../actions';

import Home from '../pages/home';
// import Category from '../pages/category';
// import Search from '../pages/search';
// import Cart from '../pages/cart';

const routes = {
  '/': function* homePage() {
    console.log('home');
    yield put(changePage(Home));
  },
  // '/categories/:id': function* categoryPage() {
  //   console.log('category');
  //   yield put(changePage(Category));
  // },
  // '/search': function* searchPage() {
  //   console.log('search');
  //   yield put(changePage(Search));
  // },
  // '/cart': function* cartPage() {
  //   console.log('cart');
  //   yield put(changePage(Cart));
  // },
};

export default function* routerSaga() {
  yield* router(createHashHistory(), routes);
}
