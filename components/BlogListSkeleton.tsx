const BlogList = () => {
  return (
    <div className="w-full rounded-md px-5 py-5 flex justify-start items-start mb-8 shadowContact">
      <div className="pulseText min-h-[300px] min-w-[250px] object-cover rounded-sm border-[2px] border-[var(--theme-red)] bg-[#e6e6e6e5]"></div>
      <div className="ml-10 w-full">
        <div>
          <h1 className="h-[50px] min-w-[200px] font-medium pulseText mt-2 text-[var(--theme-yellow)] bg-[var(--theme-red)]"></h1>
          <p className="text-lg min-w-full h-[20px] bg-[#e6e6e6e5] pulseText mt-2"></p>
          <p className="text-lg min-w-full h-[20px] bg-[#e6e6e6e5] pulseText mt-2"></p>
          <p className="text-lg min-w-full h-[20px] bg-[#e6e6e6e5] pulseText mt-2"></p>
          <p className="text-lg min-w-[50%] h-[20px] bg-[#e6e6e6e5] pulseText mt-2"></p>
        </div>
      </div>
      {/* buttons to delete and edit*/}
      <div className="ml-10 min-w-[160px] flex justify-center items-end flex-col">
        <button className="min-w-[40px] pulseText min-h-[40px] bg-[var(--card-blue)] text-white rounded-sm expandButton"></button>
        <button className="min-w-[40px] pulseText min-h-[40px] bg-[var(--theme-red)] text-white rounded-sm expandButton"></button>
      </div>
    </div>
  );
};

export default BlogList;
