import { useState } from "react"

function App() {
  const [color, setColor] = useState('olive');

  return (
    

    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap bottom-12 inset-x-2 px-2 justify-center">
        <div className="flex flex-wrap justify-center bg-white shadow-lg px-3 py-2 rounded-full gap-3">
          <div className="outine-none px-6 py-3 rounded-full shadow-lg text-white"
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >Red</div>
          <div className="outine-none px-6 py-3 rounded-full shadow-lg text-white"
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
          >Green</div>
          <div className="outine-none px-6 py-3 rounded-full shadow-lg"
            style={{ backgroundColor: 'yellow' }}
            onClick={() => setColor('yellow')}
          >Yellow</div>
          <div className="outine-none px-6 py-3 rounded-full shadow-lg text-white"
            style={{ backgroundColor: 'brown' }}
            onClick={() => setColor('brown')}
          >Brown</div>
          <div className="outine-none px-6 py-3 rounded-full shadow-lg text-white"
            style={{ backgroundColor: 'orange' }}
            onClick={() => setColor('orange')}
          >Orange</div>
          <div className="outine-none px-6 py-3 rounded-full shadow-lg text-white"
            style={{ backgroundColor: 'olive' }}
            onClick={() => setColor('olive')}
          >Olive</div>
        </div>
      </div>

      
    </div>  
    
      
    
  )
}

export default App
