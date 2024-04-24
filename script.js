// command line - npm install react-scripts@latest
// npm install axios
//https://api.openweathermap.org/data/2.5/weather?q=São Paulo&lang=pt_br&appid={chave}&units=metric
//via browser - https://api.openweathermap.org/data/2.5/weather?q=São Paulo&lang=pt_br&appid=999a9f3a09cc0480b478add5d0b9be86&units=metric

const chave = '999a9f3a09cc0480b478add5d0b9be86'
const url = `https://api.openweathermap.org/data/2.5/weather?q=São Paulo&lang=pt_br&appid=${chave}&units=metric`

novaTemp() {
    return console.log(temperatura);
}

const obterTemp = () =>{

  fetch(url)
        .then(resposta =>{
          console.log(resposta)
          return resposta.json()
        })
          .then(dados =>{
            console.log(dados)
            const temp = dados.main.temp;

          })
          .catch(erro => {
            console.log(erro)
          })
 }

 
 
