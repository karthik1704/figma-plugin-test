const App = () => {
  const handleClick = () => {
    parent.postMessage({ pluginMessage: { type: "create-rectangles" } }, "*");
  };

  return (
    <div>
      <h1>Figma Plugin UI</h1>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Create Rectangle
      </button>{" "}
    </div>
  );
};

export default App;
