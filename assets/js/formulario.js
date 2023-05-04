let username;
let password;

const credentials = {
  username: "user123",
  password: "123456"
};

let tentativas = 3; 

while (tentativas > 0) {
  
  username = prompt("Insira seu nome de usuário:");
  password = prompt("Insira sua senha:");

  if (username === credentials.username && password === credentials.password) {
    console.log("Login bem-sucedido!");
    break; 
    
  } else {
    console.log("Credenciais inválidas. Tente novamente.");
    tentativas--;
  }
}

if (tentativas === 0) {
  console.log("Número máximo de tentativas excedido. Tente novamente mais tarde.");
}
