const Br = ({ id }: { id?: string }) => {
  return (
    <div
      className="center-ball md:mt-24 mt-16 md:mb-16 sm:mb-10 mb-0 w-[300px] h-[2px] bg-[var(--theme-red)] relative mx-auto"
      id={id}
    />
  );
};

export default Br;
