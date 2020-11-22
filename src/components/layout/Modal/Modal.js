import React from 'react';
import './Modal.css';

function Modal({ type, isShow, functionHandler }) {
  const [input, setInput] = React.useState(null)

  return (
    <div class="container ">
      <div class={"modal " + (isShow ? "display-block" : "display-none")}>
        <div class="card modal-main">
          <div class="m-2 justify-content-center">
            <div> Succeed! Now Enter your pokemon name</div>
            <input class="form-control mb-2" placeholder="Input pokemon name" aria-label="Pokemon name" onChange={(e) => setInput(e.target.value)}></input>
            <button type="button" class="mr-2 btn btn-success" onClick={() => functionHandler.catchPokemon(input)}>Save</button>
            <button type="button" class="btn btn-danger" onClick={() => functionHandler.setIsShown(!isShow)}>Release</button>
          </div>
        </div>
      </div>
    </div>

  )


};

export default Modal;
