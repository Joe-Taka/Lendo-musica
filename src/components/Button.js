const Button = ({text,style, action = null}) => {

  let executeFunction;

  if (typeof action == 'function') {
    executeFunction =  true
  } else {executeFunction = false}

  return (
  <>
    <button style={style} onClick={() => executeFunction ? (action(),window.location.reload()) : null}>{text}</button>
  </>

  );
}

export default Button;