// TaskListScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const TaskListScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText) {
      setTasks([...tasks, { id: tasks.length + 1, text: taskText }]);
      setTaskText('');
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter task"
        value={taskText}
        onChangeText={text => setTaskText(text)}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={task => task.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Button title="Remove" onPress={() => removeTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default TaskListScreen;
