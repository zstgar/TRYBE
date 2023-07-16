import Card from './Card.tsx';

const infoSaoPaulo = {

  city: 'Sao Paulo',

  country: 'Brasil',

  visited: true,

};

const infoRioGrandeDoSul = {

  city: 'Rio Grande do Sul',

  country: 'Brasil',

  visited: true,

};

const infoRioDeJaneiro = {

  city: 'Rio de Janeiro',

  country: 'Brasil',

};

function CardList() {
  return (

    <div className="card-list">

      <Card cityInfo={ infoSaoPaulo } />

      <Card cityInfo={ infoRioGrandeDoSul } />

      <Card cityInfo={ infoRioDeJaneiro } />

    </div>

  );
}

export default CardList;
