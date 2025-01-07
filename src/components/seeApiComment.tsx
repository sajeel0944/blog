async function SeeApiComment() {
  // ye jo nichy  comment section  ky andar is ki value ja rahe hai or ye is vlue UI main show ho
  const url = await fetch("http://localhost:3000/api/comment", {
    cache: "no-store",
  });

  const get = await url.json();

  // ye is liye use diya hai q ky mujy array ki first value nhi chaye
  const deletevalue = get.shift();

  return (
    <>
      <div className="max-w-2xl mx-auto -mt-8  p-4 bg-[#2F3151] rounded shadow-lg space-y-4">
        {get.map((list: { name: string }, index: any) => {
          // ye is liye diya hai q ky array 0 sy starte hota hai
          index++;
          return (
            <h6 key={index} className=" h-7 text-lg text-white">
              {index} &nbsp; {list.name} 
            </h6>
          );
        })}
      </div>
    </>
  );
}

export default SeeApiComment;
