const Modal = ({data, content, setSelectedContent, setShowModal}) => {

    const { name, url, description, date, type } = content;

    return (
        <div className="flex justify-center align-center w-full h-full bg-black fixed top-0 left-0 bg-opacity-50 z-10">
        <div className="flex flex-col justify-center align-center w-1/2">
        <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-black text-shadow-md text-left">{name}</h1>
        <button className="text-1.5xl font-bold text-black text-shadow-md curser-pointer border-none bg-transparent"
        onClick={() => setShowModal(false)}>Close</button>
        </div>
        <div className="w-full">
        <div className="flex flex-col w-full">
        <img className="h-full w-full object-contain" src={url} alt={name} />
        <p className="font-bold text-grat italic text-1rem text-shadow-md">{description}</p>

        </div>
        <div className="w-full ">
        
        <div className="flex flex-col w-full">
 
        <p className="text-gray-500 italic text-left text-shadow-md w-full mb-4 text-1rem font-bold">Date </p>
        <p className="text-gray-500 italic text-left text-shadow-md w-full mb-4 text-1rem font-bold">{date} </p>
        </div>
        <div>
        <p className="text-gray-500 italic text-left text-shadow-md w-full mb-4 text-1rem font-bold">Type </p>
        <p className="text-gray-500 italic text-left text-shadow-md w-full mb-4 text-1rem font-bold">{type} </p>
        </div>
        </div>
        </div>
        <div className="flex gap-10 max-w-full overflow-x-scroll">
        {data.map((image_data, index) => {
            return (
                <div className="flex flex-col justify-center items-center cursor-pointer"
            )
        })}
        </div>
        </div>

    )
    }