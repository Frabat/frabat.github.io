import React from 'react';
import {PageHeader} from "antd";
export const Header = (props) => {
    return(
        <PageHeader
            className={'appHeader'}
            onBack={() => console.log('hiehi')}
            title={"Francesco Battista"}
            subTitle={"Front End Developer"}
            />
    )
}
