import React ,{useState}  from 'react';
import ImgBack from '../../assets/foto.jpeg';
import ImgBack1 from '../../assets/black.png';
import { Container, Box, BoxTitle,BoxIMG, ImgBeer,Input, Btn} from "./styled";

//icons
import {SiFacebook} from "react-icons/si";
import {AiOutlineGithub} from "react-icons/ai";

//toast
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function Home({ boxData }) {
  const [email,setEmail] = useState('');

  function handleSubmit(){


    let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if(email === '' ){
      toast.info("Preencha o email!",{position: toast.POSITION.TOP_CENTER,
        autoClose: 5000}); 
      return false
    }

    if(reg.test(email)){
      if(email === localStorage.getItem('cadEmail')){
        toast.info("email ja cadastrado , aguarde!",{position: toast.POSITION.TOP_CENTER,
          autoClose: 5000}); 
      }else{
        localStorage.setItem('cadEmail', email)
        toast.success("Parabens!!! aguarde nossas promoções",{position: toast.POSITION.TOP_CENTER,
          autoClose: 5000}); 
      }
      setEmail("")
    }
    else{
      alert('email invalido')
    }
  }
  return (
      <>
        <Container>
        <BoxTitle>Gama Beer</BoxTitle> 
        </Container>

        <Container>
          <Box>
            <ImgBeer src={ImgBack}/>         
          </Box>
          
          <Box>   
                
            <BoxTitle><BoxIMG  src={ImgBack1} /> </BoxTitle>           
            <BoxTitle>Receba nossas ofertas!</BoxTitle>   
            
            <Input
              placeholder="Insira seu Email" 
              value={email} 
              onChange={e=> setEmail(e.target.value)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  handleSubmit()
                }
              }}                   
            >
            </Input>

            <Btn onClick={handleSubmit}   >Cadastrar</Btn>
         </Box>      
       </Container>

       <Container>
         <p>@Rafael Cena - 2021 | Todos os direitos reservados |
         <a target="_blank" href="https://github.com/DevRafaelCena"><button><AiOutlineGithub className="git"/></button></a></p>
       </Container>

    </>
  );
}