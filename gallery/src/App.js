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
    <div style={styles.main}>
<Header title= "Food Gallery" subtitle= "Simple food gallery. Check-It_Out"/>
<div className='flex flex-wrap gap-10 max-w-60vw'>
{data.map((image_data, index) => {
  return (
    <div style={styles.imageContainer} 
    onClick={() => {
      setShowModal(true);
      setSelectedContent(image_data);
    }}>
    <img style={styles.image} src={image_data.url}/>
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
const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    flexDirection: "column"
  },
  image: {
    width: '300px',
    height: '300px',
    ObjectFit: 'cover',
  }
  ,
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    cursor: 'pointer',
  }
}
export default App;