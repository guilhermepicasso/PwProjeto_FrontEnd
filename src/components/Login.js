
function Login(props) {

    const {UserID, senha} = props;

    return(
        <section>
        <label>Usuário:</label>
        <input type="text" value={UserID} id="username" />
        <br/>
        <label>Senha:</label>
        <input type="password" value={senha} id="password" />
        <br/>
        <button onClick={Confirmar}> Confirmar</button>
         
        </section>
    );

    function Confirmar() {
        if (document.getElementById("username").value === props.UserID && document.getElementById("password").value === props.senha) {
            window.alert("Entrada com sucesso!")
        }else{
            window.alert("Usuário ou senha incorretos.")
        } 
    }

    
};

export default Login;