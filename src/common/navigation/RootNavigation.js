import * as React from 'react';
import { StackActions, DrawerActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export function openDrawer(...args) {
    navigationRef.current?.dispatch(DrawerActions.openDrawer(...args));
}

export function closeDrawer(...args) {
    navigationRef.current?.dispatch(DrawerActions.closeDrawer(...args));
}

export function getParent(...args){
    navigationRef.current?.getParent(...args);
}