import React from 'react';
import { Route } from 'react-router';
import Comp1 from "dasd";
export default function creatRoutesWithStore(){
    return (
        <Route>
            <Route path="" component={Comp1} />
        </Route>
    )
}