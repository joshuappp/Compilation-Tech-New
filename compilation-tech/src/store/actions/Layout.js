import * as actionTypes from './actionTypes';

export const showSideDrawer = (sideDrawerState) => {

    return {
        type: actionTypes.SIDE_DRAWER_CONTROL,
        sideDrawerState:  sideDrawerState
    };
    
};

export const showDrawerToggle = (showDrawerToggleState) => {
    
    return {
        type: actionTypes.SHOW_DRAWER_TOGGLE,
        showDrawerToggleState:  showDrawerToggleState
    };
    
};

export const moveToHomePage = (moveToHomeState) => {
    
    return {
        type: actionTypes.MOVE_TO_HOME_PAGE,
        moveToHomeState:  moveToHomeState
    };
    
};