import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './Footer.module.css';

const Footer = ({ count }) => (
  <div className={styles.wrap}>
         <Button size="medium" >
         {count} items left
        </Button>
        <div className={styles.filter}>
            <Button size="medium" >
            <Button variant="outlined" color="primary">ALL</Button>
            </Button>
            <Button size="medium" >
            <Button variant="outlined" color="secondary">Active</Button>
            </Button>
            <Button size="medium" >
            <Button variant="outlined" disabled>Completed</Button>
            </Button>
        </div>
        <Button size="medium" >
         Clear Completed
        </Button>
  </div>
);

export default Footer;
