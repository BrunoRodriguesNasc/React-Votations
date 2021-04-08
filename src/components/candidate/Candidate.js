import React from 'react'
import Info from '../info/Info';
import Name from '../name/Name';
import Percentage from '../percentage/Percentage';
import Picture from '../picture/Picture';
import Position from '../position/Position';
import Votes from '../votes/Votes';
import Populary from '../popularity/popularity';
import css from './candidate.module.css';
import { formatPercentage } from '../helpers/formatHelpers';

export default function Candidate({previousVote , candidate , position}) {

  const { id , name , votes , percentage , popularity  } = candidate;

  const imageSource = `./img/${id}.jpg`;
  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name}/>
      <Info>
        <Name>{name}</Name>
        <Votes value={(votes)} previous={previousVote}/>
        <Percentage>{formatPercentage(percentage)}</Percentage>
        <Populary value={popularity}></Populary>
      </Info>
      
    </div>
  )
}
