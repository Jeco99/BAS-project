import headerData from './historyHeader'

export default function History(){
    return(
        <div>
            <h1>History</h1>
            <table className="table-fixed bg-gray-400 min-w-full">
            <thead>
                <tr>
                  {headerData.map( (data) => (
                    <th key={data.header}>{data.header}</th>
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
                <button>Next</button>
            </table>

            
        </div>
    )
}