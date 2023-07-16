type GreetingProps = {
  person: {
    firstName: string;
    lastName: string;
  };
};

function Greeting(props: GreetingProps) {
  const { person } = props;

  const firstName = person.firstName;
  const lastName = person.lastName;

  return (
    <h1 className="greeting">
      Olá {`${firstName} ${lastName}`}
      <img src="https://i.imgur.com/rqvLd3q.png" alt="" />
    </h1>
  );
}

export default Greeting;
