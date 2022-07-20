import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Car from '../Products/Car';
import Cars from "../Products/Cars";
import Navigation from "../Products/Navigation";
import penjelasan from '../tigab/penjelasan';
import belajar from '../tigab/belajar';
import berlatih from '../tigab/berlatih';
import bertanding from '../tigab/bertanding';
import { AnimatePresence } from "framer-motion";

const Rute = () => {
const location = useLocation();
  return (
    <div>
    <Navigation />
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/car" component={Cars} />
        <Route exact path="/car/:id" component={Car} />
        <Route exact path="/penjelasan" component={penjelasan} />
        <Route exact path="/belajar" component={belajar} />
        <Route exact path="/berlatih" component={berlatih} />
        <Route exact path="/bertanding" component={bertanding} />
        <Route path='/diskonlengkap' component={() => { 
          window.location.href = 'https://ganeshaoperation.com/diskon.html'; 
          return null;
        }}/>
      </Switch>
    </AnimatePresence>
  </div>
  )
}

export default Rute