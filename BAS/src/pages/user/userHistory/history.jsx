import headerData from "./historyHeader";
import { GrLinkNext } from "react-icons/gr";


export default function History(){
    return(
        <div>
          <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg mb-2 sm:mb-4"
              value={""}
              onChange={""}
            />
            <h1 className="pageHeader">History</h1>
            <table className="table-fixed bg-gray-400 min-w-full">
            <thead>
                <tr>
                  {headerData.map( (data) => (
                    <th key={data.header} className='text-center'>{data.header}</th>
                  ))}
                </tr>
            </thead>
            <tbody>
            <tr>
                  {headerData.map( (data) => (
                    <td key={data.data} className='text-center'>{data.data}</td>
                  ))}
                </tr>
            </tbody>
            
               
            </table>
            <div className=' flex justify-center items-center gap-4 '>
              <p className='items-center pt-4'> Page 1</p>  
              <button className='bg-morningGlory px-5 py-2 mt-4 flex gap-2'>
                Next
                <GrLinkNext className='mt-1' size="20px"/>
                </button>

                 
                 
              </div>  

            
        </div>
    )
}