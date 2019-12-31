import React, {ChangeEvent} from "react";
import './searchbox.styles.css';

interface SearchBoxProperties {
    placeholder: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export const SearchBox = ({placeholder, onChange}: SearchBoxProperties) => {
    return (
        <input className={'search'} onChange={onChange} type={'search'}
               placeholder={placeholder}/>
    )
};
