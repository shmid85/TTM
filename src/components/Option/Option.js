import React from 'react';

export default function Option(props) {
    return (
        <option value={props.id} data-flags={props.flags}>{props.name}</option>
    )
}
