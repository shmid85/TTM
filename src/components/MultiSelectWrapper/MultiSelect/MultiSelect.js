import Option from "../../Option/Option";
import React from "react";

export default function MultiSelect(props) {
    const visibleItems = props.visibleItems.map(
        item => <Option key={item.id} id={item.id} name={item.name}/>
    );

    return (
        <select multiple>{visibleItems}</select>
    )
}
