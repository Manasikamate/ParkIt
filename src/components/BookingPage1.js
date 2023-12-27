
// import Ft from './Ft'
// import img from './assets/logo.png'

function Features(){
    const featuresData=[
      {
          id: 1,
          icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/6c/89/c2/6c89c288-d5ba-cc3a-8997-29fd1c337b94/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
          heading:"Wing-A1",
          desc:"Parking Slot No.605",
      },
      {
          id: 2,
          icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/6c/89/c2/6c89c288-d5ba-cc3a-8997-29fd1c337b94/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
           heading:"Wing-A2",
          desc:"Parking Slot No.608",
      },
      {
          id:3,
          icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/6c/89/c2/6c89c288-d5ba-cc3a-8997-29fd1c337b94/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
          heading:"Wing-B1",
          desc:"Parking Slot No.855",
      },
      {
          id:4,
          icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/6c/89/c2/6c89c288-d5ba-cc3a-8997-29fd1c337b94/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
          heading:"Wing-A1",
          desc:"Parking Slot No.1605",
      },
      {
          id:5,
          icon:"https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/6c/89/c2/6c89c288-d5ba-cc3a-8997-29fd1c337b94/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
          heading:"Wing-D3",
          desc:"Parking Slot No.1005",}
  ];
      return(
          // featuresData.map((data)=>{
          //   return <div>
          //     <Ft data={data}></Ft>
          //   </div>
          // })
         
          <div className='mt-24'>
               <h1 className='text-center font-bold text-2xl '>Welcome to Booking Page</h1>
               <div className='h-1 w-12 rounded-sm mb-7 mt-3 bg-blue-600 mx-auto my-auto'></div>
               <h1 className='text-center font-bold text-lg p-5' >Available Parking Spots</h1>
              <div className="grid-container">
                  
          <div className="grid-item  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md">
              <img className='h-24 rounded-full mx-20 ' src={featuresData[0].icon}/>
              <div>
                  <h2 className='font-bold text-lg p-4 pt-8'>{featuresData[0].heading}</h2>
                  <p>{featuresData[0].desc}</p>
              </div>
              <button className="w-48 bg-blue-700 text-white font-bold rounded-md mt-5">Book</button>
          </div>
          <div className="grid-item shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md">
          <img className='h-24 w-24 rounded-full mx-20'  src={featuresData[1].icon}/>
              <div>
                  <h2 className='font-bold text-lg p-4 pt-8'>{featuresData[1].heading}</h2>
                  <p>{featuresData[1].desc}</p>
              </div>
              <button className="w-48 bg-blue-700 text-white font-bold rounded-md mt-5">Book</button>
          </div>
          <div className="grid-item shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md">
          <img className='h-24 w-24 rounded-full mx-20' src={featuresData[2].icon}/>
              <div>
                  <h2 className='font-bold text-lg p-4 pt-8'>{featuresData[2].heading}</h2>
                  <p>{featuresData[2].desc}</p>
              </div>
              <button className="w-48 bg-blue-700 text-white font-bold rounded-md mt-5">Book</button>
          </div>
          <div className="grid-item shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md"><img className='h-24 w-24 rounded-full mx-20' src={featuresData[3].icon}/>
              <div>
                  <h2 className='font-bold text-lg p-4 pt-8'>{featuresData[3].heading}</h2>
                  <p>{featuresData[3].desc}</p>
              </div>
              <button className="w-48 bg-blue-700 text-white font-bold rounded-md mt-5">Book</button>
              </div>
              <div className="grid-item shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md"><img className='h-24 w-24 rounded-full mx-20' src={featuresData[4].icon}/>
              <div>
                  <h2 className='font-bold text-lg p-4 pt-8'>{featuresData[4].heading}</h2>
                  <p>{featuresData[4].desc}</p>
              </div>
              <button className="w-48 bg-blue-700 text-white font-bold rounded-md mt-5">Book</button>
              </div>
        </div>
          </div>
  
      )
  }
  export default Features
  
  
  
  
  