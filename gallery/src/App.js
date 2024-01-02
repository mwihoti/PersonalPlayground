import { useState } from 'react';
import { data } from './content/data';
import Modal from './modal/modal';
import Header from './components/header';


function App () {
  const [showModal, setShowModal] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  return (
    <>
    {showModal&&<Modal setShowModal={setShowModal} setSelectedContent={setSelectedContent} content={selectedContent} data={data}/>}
    <div className='flex justify-center items-center w-full h-full flex-col bg-gray-200'>
<Header title= "Food Gallery" subtitle= "Simple food gallery. Check-It_Out"/>
<div className='flex flex-wrap gap-10 max-w-60vw'>
{data.map((image_data, index) => {
  return (
    <div className='flex flex-col justify-center items-center content-center cursor-pointer' 
    onClick={() => {
      setShowModal(true);
      setSelectedContent(image_data);
    }}>
    <img className='w-150px h-120px object-cover' src={image_data.url}/>
    <div className='flex justify-center items-center w-full h-50px bg-black opacity-50'>
<p className='text-white text=16px font-bold'>{image_data.name}</p><br></br>
<p className='text-white text=16px font-bold'>{image_data.description}</p>
    </div>
    <div className='flex justify-center items-center w-full h-50px bg-black opacity-50'>

<p className='text-white text=16px font-bold'>{image_data.description}</p>
    </div>
    </div>
  )
})}
</div>    
    </div>
    </>
  )
}
export default App;