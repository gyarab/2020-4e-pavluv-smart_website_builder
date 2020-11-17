import "../styles/index.scss";
function App({ Component, pageProps }) {
  return (
    <div className="page">
      <title>Website Builder</title>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
