

const App = () => {
  const handleClick = () => {
    parent.postMessage({ pluginMessage: { type: 'create-rectangles' } }, '*');
  };

  return (
    <div>
      <h1>Figma Plugin UI</h1>
      <button onClick={handleClick}>Create Rectangle</button>
    </div>
  );
};

export default App;
