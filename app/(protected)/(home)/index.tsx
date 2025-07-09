import { useSession } from '@/context/ctx';
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://localhost:3000/api/v1/todo'; // ⚠️ Đổi localhost thành IP thật của máy bạn

const HomeScreen = () => {
    const { session: userId } = useSession(); // Lấy userId
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [editingTodo, setEditingTodo] = useState(null);

    // 🔵 Lấy danh sách todo
    const fetchTodos = async () => {
        try {
            const res = await fetch(API_URL, {
                headers: { 'Content-Type': 'application/json', 'userId': userId }
            });
            const data = await res.json();
            setTodos(data);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    // 🟢 Thêm todo mới
    const createTodo = async () => {
        if (!title.trim()) return;

        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'userId': userId },
                body: JSON.stringify({ title })
            });
            setTitle('');
            fetchTodos();
        } catch (err) {
            console.error("Create error:", err);
        }
    };

    // 🟡 Cập nhật todo
    const updateTodo = async () => {
        if (!title.trim() || !editingTodo) return;

        try {
            await fetch(`${API_URL}/${editingTodo._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'userId': userId },
                body: JSON.stringify({ title })
            });
            setTitle('');
            setEditingTodo(null);
            fetchTodos();
        } catch (err) {
            console.error("Update error:", err);
        }
    };

    // 🔴 Xóa todo
    const deleteTodo = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'userId': userId }
            });
            fetchTodos();
        } catch (err) {
            console.error("Delete error:", err);
        }
    };

    const onSubmit = () => {
        editingTodo ? updateTodo() : createTodo();
    };

    useEffect(() => {
        if (userId) fetchTodos();
    }, [userId]);

    return (
        <SafeAreaView style={styles.safeview}>
            <Text style={styles.heading}>Chào {userId}, đây là Todo List!</Text>

            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Nhập todo..."
            />

            <Pressable style={styles.button} onPress={onSubmit}>
                <Text style={styles.buttonText}>{editingTodo ? 'Cập nhật' : 'Thêm'}</Text>
            </Pressable>

            <FlatList
                data={todos}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text style={styles.todoText}>{item.title}</Text>
                        <View style={styles.todoActions}>
                            <Pressable onPress={() => {
                                setTitle(item.title);
                                setEditingTodo(item);
                            }}>
                                <Text style={styles.edit}>Sửa</Text>
                            </Pressable>
                            <Pressable onPress={() => deleteTodo(item._id)}>
                                <Text style={styles.delete}>Xóa</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    safeview: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#2196f3',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    todoText: {
        fontSize: 16
    },
    todoActions: {
        flexDirection: 'row',
        gap: 10
    },
    edit: {
        color: 'blue',
        marginRight: 12
    },
    delete: {
        color: 'red'
    }
});

export default HomeScreen;
