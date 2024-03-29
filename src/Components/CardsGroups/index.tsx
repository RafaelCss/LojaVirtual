import { ReactElement, useState } from 'react';
import { ContainerCard, ContainerCards } from './Style';
import { listaImagens, listaDeCategorias } from '../ListaTeste/Lista';
import { Cards } from '../Cards';

function CardExibicao(): ReactElement {
  const [item, setItem] = useState(0);

  return (
    <ContainerCards>
      {listaDeCategorias &&
        listaDeCategorias.map((categoria) => (
          <>
            <h1
              style={{
                display:'flex',
                justifyContent:'center',
                background: 'white',
                fontSize: '24px',
                width: '80%',
                margin: '',
                alignItems:'center'
              }}
            >
              {categoria}
            </h1>
            <ContainerCard key={categoria}>
              {listaImagens &&
                listaImagens.map((imagem) =>
                  imagem.categoria === categoria ? (
                    <Cards item={item} imagem={imagem} />
                  ) : (
                    <></>
                  ),
                )}
            </ContainerCard>
          </>
        ))}
    </ContainerCards>
  );
}

export default CardExibicao;
