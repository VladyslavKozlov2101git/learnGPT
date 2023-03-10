import React from 'react';
import { CardProps } from './Card.props';
import styles from './Card.module.scss';

const Card: React.FC<CardProps> = ({
  example,
  example_ua,
  value,
  meaning,
  transcription,
  order,
}) => {
  return (
    <div className={styles['card']}>
      <h3>{value}</h3>
      <b>[{transcription}]</b>
      <p>{meaning}</p>
      <i>{example}</i>
      <i>{example_ua}</i>
      <span className={styles['order']}>{order}/10</span>
    </div>
  );
};

export default Card;
