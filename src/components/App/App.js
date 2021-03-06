import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
    state = {
        items: [
            {
               value: 'Написать новое приложение',
               isDone: true,
               id: 1
            },
            {
               value: 'Дочитать книгу',
               isDone: true,
               id: 2
            },
            {
               value: 'Закончить обучение',
               isDone: false,
               id: 3
            }
         ],
         count: 6
    };

    onClickDone = id => {
      const newItemList = this.state.items.map(item => {
        const newItem = { ...item };

        if (item.id === id) {
          newItem.isDone = !item.isDone;
        }

        return newItem;
      });

      this.setState({ items: newItemList });
    };

    onClickDelete = id => this.setState(state => ({ items: state.items.filter(item => item.id !== id)}));

    render() {
        return (
            <div className={styles.wrap}>
                 <h1 className={styles.title}>Важные дела!</h1>
                 <div className ={styles.todosWrap}>
                 <InputItem />
                 <ItemList
                  items={this.state.items}
                  onClickDone={this.onClickDone}
                  onClickDelete = {this.onClickDelete}
                 />
                 <Footer count={this.state.count} />
           </div>
     </div>);
 }
};

export default App;
