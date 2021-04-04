import Label from '../Label/'
import Input from '../Input'
import './Form.module.css'

function Form(Props) {
    return (
        <div>
            <Label 
                id={Props.id}
                children={Props.children}
            />
            <Input 
                id={Props.id}
                value={Props.value}
                func={Props.func}
            />
        </div>
    )
}

export default Form