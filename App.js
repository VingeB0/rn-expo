import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Navbar } from './src/Navbar.js';
import { AddTodo } from './src/AddTodo.js';
import { Todo } from './src/Todo.js';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }
    // setTodos(todos.concat([ newTodo ]));
    // setTodos((prevTodos) => {
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ])
  };

  return (
    // <ScrollView>
    <View>
      <Navbar title={'Todo app'}/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) => <Todo todo={item} /> }
        />

        {/*<View>*/}
        {/*  {todos.map((todo) => (*/}
        {/*    <Todo todo={todo} key={todo.id} />*/}
        {/*  ))}*/}
        {/*</View>*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
