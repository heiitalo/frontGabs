import axios from "axios";

function ApiCadEmpresa(dados:string[]){
   
        console.log(dados);
        const data = {
            name: dados[0],
            empresaName: dados[1],
            email: dados[2],
            telefone: dados[3],
        }
        axios.post('http://localhost:3333/empresas', data)
    
}

export default ApiCadEmpresa