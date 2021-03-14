import "../styles/index.scss";

//app container
function App({ Component, pageProps }) {
  return (
    <div className="page">
      <title>Website Builder</title>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
