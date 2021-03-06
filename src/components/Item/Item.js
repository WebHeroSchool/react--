import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (<div className ={styles.item
}>
<Checkbox
      checked={isDone}
      color="Secondary"
      value="default"
      flex="1"
      inputProps={{ 'aria-label': 'checkbox with default color' }}
      onClick={() => onClickDone(id)}
  />
  <label className={
      classnames ({
          [styles.item]: true,
          [styles.done]: isDone
      })
  }>
      { value }
  </label>
 <button
     className = {styles.button}
     onClick={() => onClickDelete(id)} >
     Delete
  </button>

</div>);

export default Item;
