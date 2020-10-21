import React from 'react'

export default function Customer(props) {
    return (
        <div>
            {/* <p>{props.id}</p>
    <p>{props.image}</p>
            <h2>{props.name}</h2>
             <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p> */}
            <CustomerProfile
                id={props.id}
                image={props.image}
                name={props.name}
            />
            <CustomerInfo
                birthday={props.birthday}
                gender={props.gender}
                job={props.job}
            />
        </div>
    )
}

function CustomerProfile(props){
    return(
        <div>
            <img src="{props.image}" alt="profile"/>
    <h2>{props.name}({props.id})</h2>
        </div>
    );
}

function CustomerInfo(props){
    return(
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
    );
}