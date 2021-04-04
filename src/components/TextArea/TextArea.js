import Label from '../Label/'
import './TextArea.module.css'

function TextArea(Props) {
    return (
        <div className="TextArea">
            <Label 
                id={Props.id}
                children={Props.children}
            />
            <textarea id={Props.id} value={Props.value} onChange={Props.func} rows="4" cols="50"></textarea>
        </div>
    )
}

export default TextArea