import React from "react";
import './card-list.styles.css';
import {Monster} from "../../App";
import {Card} from "../card/card.component";


interface CardListProps {
    monsters: Monster[]
}

export const CardList = (props: CardListProps) => {
    return (
        <div className='card-list'>
            {
                props.monsters.map(monster => {
                    return <Card key={monster.key} monster={monster}/>
                })
            }
        </div>
    );
};
