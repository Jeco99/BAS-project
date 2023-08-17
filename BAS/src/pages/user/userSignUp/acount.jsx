import accountInputFormData from "../../../components/input/accountInputFormData"
import FormInput from "../../../components/input/formInput"

export default function UserAccount({handleChange, getData, errors}){
    return(
        <>
        {accountInputFormData.map((formElements) => (
              <FormInput
                key={formElements.id}
                id={formElements.id}
                type={formElements.type}
                handleChange={handleChange}
                value={getData[formElements.id]}
                labelName={formElements.labelName}
                errors={errors}
                errorsmessage={formElements.errormessage}
                showRequired={formElements.showRequired}
              />
            ))}
        </>
    )
}