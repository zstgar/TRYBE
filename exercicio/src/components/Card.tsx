type CardProps = {

  cityInfo: {

    city: string,

    country: string,

    visited?: boolean,

  }

};

function Card({ cityInfo }: CardProps) {
  const { city, country, visited = false } = cityInfo;

  return (

    <div className="card">

      <div>

        <h2>{city}</h2>

        <h3>{country}</h3>

        {visited ? <p>Já Fui!</p> : <p className="red">Não Fui.</p>}

      </div>

    </div>

  );
}

export default Card;
