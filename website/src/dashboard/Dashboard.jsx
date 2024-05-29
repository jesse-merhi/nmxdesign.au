function Dashboard() {
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-[60%] flex items-center justify-center flex-col'>
        <div className='font-inter font-black text-3xl '>
          Explore innovative ideas
        </div>
        <div className='font-inter font-black text-3xl text-white border-black flex w-[80%] mt-2 '>
          <div className='relative inline-block text-white text-border2 m-1'>
            Interact with{' '}
            <div className='absolute font-normal text-black top-0 right-[2px]'>
              with
            </div>{' '}
          </div>
          <div className='font-bungee font-normal text-[#FF97D9] text-border1 m-1'>design</div>
        </div>
        <div className='w-[80%] text-sm pt-[5rem] '>Get to know me by chatting with one of my virtual assistants</div>
      </div>
      <div className='w-[40%] '>RIGHT</div>
    </div>
  );
}

export default Dashboard;
