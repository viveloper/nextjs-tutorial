import withLayout from '../../components/MyLayout';

const Page = props => {
  return (
    <>
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
      <img src={props.show.image.medium} />
    </>
  );
};

Page.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
}

export default withLayout(Page);