export default function FormLabel({labelName, id, showRequired}){
    return(
        <div className="mb-2 block">
        <label htmlFor={id} className="labelText">
          {labelName} { showRequired ? <sup>*</sup> : null}
        </label>
      </div>
    )
}