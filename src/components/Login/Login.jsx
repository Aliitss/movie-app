import React from "react"; // esto no es necesario tenerlo pero al usar el shortcut se escribe automáticamente
import axios from "axios"; //axios hace la llamada a la api (cual sea)
import sweetAl from "@sweetalert/with-react"; //alertas agradables a la vista. Estas dependencias se llaman, SWEET ALERT y SWEET ALERT WITH REACT son necesarias ambas para poder trabajar con react
import { useNavigate, Navigate } from "react-router-dom";

//style
import './Login.css'

function Login() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === "" || password === "") {
      sweetAl(<h2>Fields shouldn't be empty</h2>);
    }

    if (email !== "" && !regexEmail.test(email)) {
      sweetAl(<h2>You should enter a valid email address</h2>);
    }

    if (email !== "challenge@alkemy.org" && password !== "react") {
      sweetAl(<h2>Invalid credentials 😥</h2>);
      return;
    }

    sweetAl(<h2>Nice!🥳 You're in!!</h2>);
    axios
      .post("http://challenge-react.alkemy.org", { email, password }) //en este caso axios debe setearse luego de todas las validaciones necesarias, al enviar su respuesta (del login) arroja un token
      .then((res) => {
        console.log(res.data); // 'data' hace referencia a un objeto dentro de la respuesta que trae axios, el cual contiene el token mencionado arriba.
        const tokenRecibido = res.data.token;
        sessionStorage.setItem("token", tokenRecibido); // local storage es un objeto que ya viene con los browsers y nos ayuda a guardar info, en este caso la info de logeo del usuario, para que cada vez que se haga una petición a la api el usuario no tenga que logearse una y otra vez.
        navigate("/list");
      });
  };

  let token = sessionStorage.getItem("token");

  return (
    <>
      {token && <Navigate to="/list" />}
      
      <form className="contenedor" onSubmit={submitHandler}>
        <h1 className="login" >Login</h1>
        <label>
          <span className="title">Email address:</span> <br />
          <input type="text" name="email" className="container1" placeholder="   challenge@alkemy.org"/>
        </label>
        <br />
        <label >
          <span className="title">Password:</span> <br />
          <input type="password" name="password" className="container1" placeholder="   react"/>
        </label>
        <br />
        <button className="btn" type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
