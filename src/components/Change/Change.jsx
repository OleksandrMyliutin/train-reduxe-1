import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTemplate } from '../../redux/themeReducer';



const Change = () => {
  const mode = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(()=> {
    document.body.className = mode;
  }, [mode]);


  return (
    <div>
      <h2>Change your theme!</h2>
      <p>Current theme: {mode}</p>
      <button onClick={() => {dispatch(toggleTemplate())}}>{">"}Click me {"<"}</button>
    </div>
  )
}

export default Change
