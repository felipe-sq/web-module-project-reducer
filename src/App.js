import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState, calculateResult } from './reducers/index';
import { addOne, applyNumber, changeOperation, clearDisplay, setMemory, addMemory, clearMemory } from './actions/index';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAdd = (e) => {
  //   dispatch(addOne(e.target.value))
  // }

  const addNumber = (e) => {
    dispatch(applyNumber(e))
  }

  const changeOperator = (e) => {
    dispatch(changeOperation(e))
  }

  const clearHandler = (e) => {
    dispatch(clearDisplay(e))
  }

  const memorySetter = (e) => {
    dispatch(setMemory(e))
  }

  const memoryAdder = (e) => {
    dispatch(addMemory(e))
  }

  const memoryClear = (e) => {
    dispatch(clearMemory(e))
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={memorySetter} />
              <CalcButton value={"MR"} onClick={memoryAdder} />
              <CalcButton value={"MC"} onClick={memoryClear} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => addNumber(1)}/>
              <CalcButton value={2} onClick={() => addNumber(2)}/>
              <CalcButton value={3} onClick={() => addNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => addNumber(4)}/>
              <CalcButton value={5} onClick={() => addNumber(5)}/>
              <CalcButton value={6} onClick={() => addNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => addNumber(7)}/>
              <CalcButton value={8} onClick={() => addNumber(8)}/>
              <CalcButton value={9} onClick={() => addNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => changeOperator("+")} />
              <CalcButton value={"*"} onClick={() => changeOperator("*")}/>
              <CalcButton value={"-"} onClick={() => changeOperator("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
