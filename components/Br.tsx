const Br = ({ id }: { id?: string }) => {
  return (
    <div
      className="center-ball mt-20 mb-16 w-[300px] h-[2px] bg-[var(--theme-red)] relative mx-auto"
      id={id}
    />
  );
};

export default Br;
