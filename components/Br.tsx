const Br = ({ id }: { id?: string }) => {
  return (
    <div
      className="center-ball md:mt-20 mt-16 md:mb-16 mb-10 w-[300px] h-[2px] bg-[var(--theme-red)] relative mx-auto"
      id={id}
    />
  );
};

export default Br;
