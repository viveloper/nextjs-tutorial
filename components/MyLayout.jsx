import Header from './Header';
import hoistNonReactStatic from 'hoist-non-react-statics';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const withLayout = Page => {
  const NewPage = props => (
    <div style={layoutStyle}>
      <Header />
      <Page {...props} />
    </div>
  )
  hoistNonReactStatic(NewPage, Page);
  return NewPage;
}

export default withLayout;