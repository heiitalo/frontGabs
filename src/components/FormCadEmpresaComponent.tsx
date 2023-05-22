import { FormEvent, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ApiCadEmpresa from '../api/CadEmpresa';

function GridComplexExample() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  function cadastrarEmpresa(event: FormEvent){
    event.preventDefault();
    ApiCadEmpresa([nomeCompleto, nomeEmpresa, email, telefone]);
  }
  return (
    <Form  onSubmit={cadastrarEmpresa}>
      <Form.Group className="mb-3" controlId="nomeCompleto">
        <Form.Label>Nome Complete</Form.Label>
        <Form.Control type='text' placeholder="Digite seu nome completo" onChange={event=>setNomeCompleto(event.target.value)}
            value={nomeCompleto}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="nomeEmpresa">
        <Form.Label>Nome da empresa</Form.Label>
        <Form.Control type='text' placeholder="Digite o nome da empresa" onChange={event=>setNomeEmpresa(event.target.value)}
            value={nomeEmpresa} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" onChange={event=>setEmail(event.target.value)}
            value={email} />
        </Form.Group>

        <Form.Group as={Col} controlId="telefone">
          <Form.Label>telefone</Form.Label>
          <Form.Control type="text" placeholder="(xx) xxxx-xxxx"  onChange={event=>setTelefone(event.target.value)}
            value={telefone}/>
        </Form.Group>
      </Row>



      <Button variant="success" type="submit">
        cadastrar
      </Button>
    </Form>
  );
}

export default GridComplexExample;