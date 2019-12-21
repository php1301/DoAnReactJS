// Với các component chỉ dùng chức năng đọc, làm functional sẽ gọn hơn 
import React from 'react'

export default function Title(props) {
    let { title } = props;
    return (
        <h2 data-text={props.data} class="main-content-container__title glitch ">{title}</h2>
    )
}

