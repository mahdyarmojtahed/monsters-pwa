import React from "react";
import './card-component.style.scss'


export const Card = (props) => {
      const { name , email } = props.monster;
      return (
            <div className="card">
                  <img
                  src={`https://robohash.org/${props.monster.id}&set=set2&size=180*180`} />
                  <h3> { name } </h3>
                  <p> { email }</p>
            </div>
      )
};
