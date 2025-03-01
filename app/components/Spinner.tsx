const Spinner = () => {
  return (
    <>
      {/* <strong>Submitting...</strong> */}
      <div
        className="ml-auto inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </>
  );
};

export default Spinner;
