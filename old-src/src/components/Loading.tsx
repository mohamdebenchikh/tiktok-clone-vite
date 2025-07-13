const Loading = () => {
  return (
    <div
      className="fixed inset-0 bg-white flex items-center justify-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <img
        src="https://cdn.builder.io/o/assets%2F7a6cf1ea8b3f415fa58df77ad36d3334%2F06b0272fce644c85bcb436cf9871def2?alt=media&token=9be55199-fb49-4e12-b172-54b0bc5311c8&apiKey=7a6cf1ea8b3f415fa58df77ad36d3334"
        alt="Loading"
        style={{
          width: "80px",
          height: "80px",
        }}
      />
    </div>
  );
};

export default Loading;
