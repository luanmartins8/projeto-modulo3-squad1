import axios from 'axios';
import React, { useState, useEffect } from 'react';




const Filmes = () => {
    document.title = "Filmes"

    const[apiData, setApiData] = useState([]);
    useEffect(() =>{
        axios.get('https://trabalhoindividualjs.vercel.app/terror')
        .then((getData) => {
            setApiData(getData.data); 
        })
    }, []); 

    const setID = (id) => {
        console.log(id);
        localStorage.setItem('ID', id)
    }
     
    const setData = (id, filme, diretor, duracao, lancamento) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('filme', filme)
        localStorage.setItem('diretor', diretor)
        localStorage.setItem('duracao', duracao)
        localStorage.setItem('lancamento', lancamento)
    }

  const getData = () => [
    axios.get('https://trabalhoindividualjs.vercel.app/terror')
    .then((getData) => {
        setApiData(getData.data);
    })

  ]


  const onDelete = (id) =>{
  axios.delete(`https://trabalhoindividualjs.vercel.app/terror/${id}`)
  .then(() =>{
    getData();
  })



  }


  

    return (
      
<div>
  <div className='nome'>
 
                      
<h1><span>Filmes</span></h1>
<br></br>
    <div className='devsfilmes'>
      
 <div className='listafilme'>
 {apiData.map((data) => {
   
   return( 
   
   <div className='lll'>
    
      <ul>
      <img className='imgg' src={`../imagemapi/`+ data.imagem}></img>
      <p> Nome:{data.nome} <br></br> Diretor: {data.diretor} <br></br> Duração: {data.duracao} <br></br> Lançamento: {data.lancamento}</p>
      </ul>
     

      </div>
  
 
    )
    })}
    </div></div>
</div>
  
</div>
    )
  };
 

  export default Filmes;
