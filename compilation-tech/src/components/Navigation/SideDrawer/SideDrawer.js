import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';
import Backdrop from './Backdrop/Backdrop';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/index';
import {animateScroll as scroll } from "react-scroll";



const Sidedrawer = () => {

   const dispatch = useDispatch();
   const sideDrawerState = useSelector(state=> {
      return state.layout.sideDrawerState;
   });
   const moveToHome = useSelector(state => {
      return state.layout.moveToHomeState;
   });

   const hideSideDrawerMethod = () => {
      dispatch(actions.showDrawerToggle(true));
      dispatch(actions.showSideDrawer(false));
   } 
   

   const navigateToHomePage = () => {
      dispatch(actions.showDrawerToggle(true));
      dispatch(actions.showSideDrawer(false));
      dispatch(actions.moveToHomePage(true));
   }

   const scrollToTop = () => {
      scroll.scrollToTop();
   };

   console.log("renderSideDrawer");

   let sideDrawer = <div className={classes.SideDrawer}>
                        <div>
                           <Logo clicked={navigateToHomePage}/>
                        </div>
                        <nav>
                           <NavigationItems clicked={hideSideDrawerMethod}/> 
                        </nav>
                     </div>;

   if(sideDrawerState) {
       return <div>
                   {moveToHome ? scrollToTop() : null}
                   {sideDrawer}
                   <Backdrop sideDrawerState={sideDrawerState} clicked={hideSideDrawerMethod}/>
              </div>
   }else{
      return null;
   }
}

export default Sidedrawer;