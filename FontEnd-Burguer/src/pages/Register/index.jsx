import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api.js'
import Logo from '../../assets/Logo 1.svg';
import { Button } from '../../components/Button/index.jsx';


import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link
} from './styles.js';


export function Register() {
  const navigate = useNavigate()

  const schema = yup
    .object({

      name: yup.string().required('O nome é obrigatório')
        .required('O e-email é obrigatório'),
      email: yup.string().email('Digite um e-mail válido')
        .required('O e-email é obrigatório'),
      password: yup.string().min(6, 'A senha deve ter no minimo 6 caracteres')
        .required('Digite uma senha válida'),
      confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas dever ser iguais').required('Confirma sua senha')

    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors)

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post('/users',
        {
          name: data.name,
          email: data.email,
          password: data.password
        },
        {
          validateStatus: () => true
        },
      )

      if (status === 201 || status === 200) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso !')
      } else if (status === 409) {
        toast.error('E-mail já cadastrado, tente outro !')
      } else {
        throw new Error()
      }
    } catch (error) {
      toast.error('Falha no sistema, tente novamente mais tarde 😒')

    }
  }



  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Criar Conta
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>


          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register("name")} />
            {/* usamos o Elvis Operator (?) no errors para evitar erro de propriedade indefinida */}
            <p>{errors?.name?.message} </p>
          </InputContainer>

          <InputContainer>
            <label>E-mail</label>
            <input type="email" {...register("email")} />
            {/* usamos o Elvis Operator (?) no errors para evitar erro de propriedade indefinida */}
            <p>{errors?.email?.message} </p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message} </p>
          </InputContainer>

          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message} </p>
          </InputContainer>
          <Button type="submit">Criar Conta</Button>
        </Form>
        <p>Já Possui Conta ? <Link to={"/login"}>Clique aqui.</Link></p>
      </RightContainer>
    </Container>
  );
}
