import { StaticImage } from 'gatsby-plugin-image';

const SobhiJamal = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100vh',
        padding: '50px',
        textAlign: 'center',
      }}
    >
      <h1>Sobhi Jamal believes in Spider-Man.</h1>

      <StaticImage src="../images/sj.jpeg" width={150} />
    </div>
  );
};

export default SobhiJamal;
