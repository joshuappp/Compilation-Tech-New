import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import React, { useEffect } from 'react';



import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/index';
import {animateScroll as scroll } from "react-scroll";

const Toolbar = () => {

   const dispatch = useDispatch();
   const showDrawerToggleState = useSelector(state => {
      return state.layout.showDrawerToggleState;
   });
   const moveToHome = useSelector(state => {
      return state.layout.moveToHomeState;
   });

   const showSideDrawerMethod = () => {
      dispatch(actions.showDrawerToggle(false));
      dispatch(actions.showSideDrawer(true));
   }
   
   let drawerToggle = null;

   if(showDrawerToggleState){
      drawerToggle  = <DrawerToggle clicked={showSideDrawerMethod} />
   }

   const navigateToHomePage = () => {
      dispatch(actions.moveToHomePage(true));
   }

   const scrollToTop = () => {
      scroll.scrollToTop();
   };

   useEffect(()=>{
      console.log("renderToolbarHome");
      dispatch(actions.moveToHomePage(false));
   },[moveToHome,dispatch]);


   console.log("renderToolbar");


   return <header className={classes.MainHeader}>
            {moveToHome ? scrollToTop() : null}
            <div className={classes.Toolbar}>
               <div>
                   <Logo clicked={navigateToHomePage}/>
               </div>
               <div className={classes.MobileOnly}>
                  {drawerToggle}
               </div>
               <div className={classes.DesktopOnly}>
                   <NavigationItems /> 
               </div>
            </div>
         </header>;
                   
}

export default Toolbar;