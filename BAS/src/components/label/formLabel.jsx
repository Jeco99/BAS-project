export default function FormLabel({labelName, id}){
    return(
        <div className="mb-2 block ">
        <label htmlFor={id}>
          {labelName} <sup>*</sup>
        </label>
      </div>
    )
}