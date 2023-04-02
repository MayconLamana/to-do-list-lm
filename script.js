import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuração do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAenoQPjRh7JOPmVWDa-W_CeBtT8PzaKCU",
    authDomain: "minhas-listas-b3295.firebaseapp.com",
    projectId: "minhas-listas-b3295",
    storageBucket: "minhas-listas-b3295.appspot.com",
    messagingSenderId: "845526087323",
    appId: "1:845526087323:web:b6e2845ded84997694383e",
    measurementId: "G-KN6T0J3FZW"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Referência do banco de dados
  var database = firebase.database().ref();
  const analytics = getAnalytics(app);
  
  // Referências da lista de tarefas
  var todoList = document.getElementById('todo-list');
  var overdueList = document.getElementById('overdue-list');
  var completedList = document.getElementById('completed-list');
  
  // Função para adicionar uma nova tarefa
  function addTask() {
    // Obter os valores dos campos do formulário
    var activity = document.getElementById('activity').value;
    var dueDate = document.getElementById('due-date').value;
  
    // Verificar se o campo de atividade está vazio
    if (activity === '') {
      alert('Por favor, insira uma atividade.');
      return;
    }
  
    // Adicionar a nova tarefa ao banco de dados
    var taskRef = database.child('tasks').push();
    taskRef.set({
      activity: activity,
      dueDate: dueDate,
      completed: false
    });
}
