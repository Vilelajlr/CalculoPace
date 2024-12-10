

interface InputProps {
    type: string;
    name: string;
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}


export function Input({type, name, placeholder, onChange, value}: InputProps){
    return(
        <input 
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="border border-gray-300 p-2 outline-none rounded-md w-full bg-white active:"
        />
    )
}