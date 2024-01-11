import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './components/Loging/loging';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { NetflixIndex } from './components/netflix/netflix-index';
import { OnewayBinding } from './components/Oneway-binding/one-waybinding';
import { DataTypesBinding } from './components/Oneway-binding/DatatypesBinding';
import { ComplexDataBinding } from './components/Oneway-binding/complexData';
import { ComplexData } from './components/Oneway-binding/complexData2';
import { UseState } from './components/useState()/UseStateHook';
import { TwowayBinding } from './components/Twoway-binding/TwowayBinding';
import { ExampleSecond } from './components/Twoway-binding/exampleSecond';
import { Flipkart } from './components/Flipkart/flipkart';
import { FlipkartPracExam } from './components/Flipkart/FlipkartpracExam';
import { UseEffecHook } from './components/useEffectHook/UseEffectHook';
import { UseEffectExample } from './components/useEffectHook/useEffectExample';
import { FackStore } from './components/useEffectHook/fakestoreapi';
import { Shopping } from './components/useEffectHook/shopping';
import { StyleBinding } from './components/Style-Binding/styleBinding';
import { HideShow } from './components/Style-Binding/hindshowStyleBinding';
import { ClassBinding } from './components/ClassBinding/classbinding';
import { ClassBindingEx } from './components/ClassBinding/class-binding-ex';
import { PreventDefault } from './components/Event-Binding/Eventbinding- prevent-default';
import { EventBindingPropagation } from './components/Event-Binding/eventbinding-propagation';
import { EventBinding } from './components/Event-Binding/event-binding';
import { CustomArgumentsEx } from './components/Event-Binding/custom-ArgumentsEx';
import { MouseOverEvent } from './components/Event-Binding/mouse-event';
import { MouseMoveEvent } from './components/Event-Binding/mouse-move';
import { KeyPressKeyUpEvents } from './components/Event-Binding/keypress-keyup-event';
import { ContextMenuEvent } from './components/Event-Binding/context-emnu-event';
import { PropsExample } from './components/Props/props';
import { Props2 } from './components/Props/props2';
import { Props3 } from './components/Props/props3';
import { ConditionalRendering } from './components/Conditional rendering/conditional-rendering';
import { RenderDemo } from './components/Conditional rendering/render-demo';
import { ConditionalRenderForDynamicGrid } from './components/Conditional rendering/render-dynamic-using-condition';
import { ConditionalRender } from './components/Conditional rendering/Comp-rend-on-condi';
import { RenCompoOnCondition } from './components/Conditional rendering/render-example1';
import { EditSave } from './components/Conditional rendering/edit-save';
import { HooksDemo } from './components/Custome-Hooks-Demo/hooks-demo';
import { ApiFetchHook } from './components/Custome-Hooks-Demo/apifetch-hook';
import { UseEfeectHook } from './components/useEffectHook()/useeffecthook-demo';
import { InsertRecord } from './components/useEffectHook()/insert-data';
import { ContextDemo } from './components/useContext()/context-demo';
import { DisplayPropsCompo } from './components/Props/paraent-component';
import DisplayContextDataTranfer from './components/useContext()/display-conetxt-tranfer-data';
import { PracticeUseContext } from './components/useContext()/prctice-usecontext';
import {ReducerDemo} from './components/useReducer()/usereducer-demo';
import { UseReducerExample } from './components/useReducer()/usereducer-example';
import { AddOrRemoveItem } from './components/useReducer()/addremove.example';
import ListMain from './TodoList/todolist-main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ListMain />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
