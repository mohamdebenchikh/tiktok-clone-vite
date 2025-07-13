const Loading = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center z-[9999]">
      <img
        src="https://cdn.builder.io/o/assets%2F7a6cf1ea8b3f415fa58df77ad36d3334%2F06b0272fce644c85bcb436cf9871def2?alt=media&token=9be55199-fb49-4e12-b172-54b0bc5311c8&apiKey=7a6cf1ea8b3f415fa58df77ad36d3334"
        alt="Loading"
        className="w-20 h-20"
      />
    </div>
  );
};

export default Loading;
