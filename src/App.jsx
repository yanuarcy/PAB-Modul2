/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import UseState from './component/01_usestate_01';
import State from './component/02_state_02';
import Usestate from './component/03_usestate_02/usestate';
import ReRender from './component/04_rerender_func';
import UseRef from './component/05_useref';
import RefClass from './component/06_ref_class';
import FormRealTime from './component/08_form_realtime';
import FormState from './component/09_form_state';
import FormRef from './component/10_form_ref';
import LifeCycleClass from './component/11_lifecycle_class';
import LifeCycleFunctional from './component/12_lifecycle_functional';



function App() {

    return (
        <>
            <LifeCycleFunctional />
        </>
        
    )
}

export default App;
