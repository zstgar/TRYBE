const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheMonth = () => {
 const getDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    const day = decemberDaysList[index];
    const dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    
    if (day === 24 || day === 31) {
      // Caso o dia for 24 ou 31
      dayItem.classList.add = 'holiday'; // Adicione a classe 'holiday' ao li criado
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      // Caso o dia for 4, 11 ou 18
      dayItem.classList.add = 'friday'; // Adicione a classe 'friday' ao li criado
     
    } 
      getDaysList.appendChild(dayItem); // Anexe o li criado como elemento filho do ul
  }
}

createDaysOfTheMonth();

const displayHolidays = () => {
    const holidayButton = document.querySelector('#btn-holiday');
    const holidays = document.querySelectorAll('.holiday')
    const backgroundColor = 'rgb(238,238,238)';
    const setNewColor = 'yellow';
  
    holidayButton.addEventListener('click', () => {
      for (let index = 0; index < holidays.length; index += 1) {
        const currentElement = holidays[index]
        const elementHaveNewColor = currentElement.style.backgroundColor === setNewColor
        if (elementHaveNewColor) {
          holidays[index].style.backgroundColor = backgroundColor;
        } else {
          holidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }

  displayHolidays();

  const displayFridays = (fridaysArray) => {
    const getFridayButton = document.querySelector('#btn-friday');
    const fridays = document.getElementsByClassName('friday');
    const newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', () => {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
          //caso o texto não tenha sido substituído, ao clicar no botão ele será substituído pelo novo texto;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
          //caso o texto já tenha sido substituído, ao clicar no botão ele volta ao texto padrão.
        }
      }
    });
  }

  const decemberFridays = [ 4, 11, 18, 25 ];
displayFridays(decemberFridays);

const dayMouseOver = () => {
    const days = document.querySelector('#days');
    days.addEventListener('mouseover', (event) => {
      event.target.style.fontSize = '30px'; // Ele pega o evento alvo e altera o estilo de fontSize para 30px
    });
  }
  
  const dayMouseOut = () => {
    const days = document.querySelector('#days');
    days.addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px'; // Ele pega o evento alvo e altera o estilo de fontSize para 20px
    });
  }

  dayMouseOver();
dayMouseOut()

const setTaskClass = () => {
    let tasks = document.getElementsByClassName('task');
    for (const task of tasks) {
      task.addEventListener('click', (event) => {
        let isSelectedPrevious = document.querySelector('.selected');
  
        event.target.classList.add('selected');
  
        // verifica se existe uma tarefa que estava selecionada previamente ao clique
        if (isSelectedPrevious !== null) {
          isSelectedPrevious.classList.remove('selected');
        }
  
      });
    }
  };

  setTaskClass();

  const setDayColor = () => {

    let days = document.querySelector('#days');
  
    days.addEventListener('click', (event) => {
  
      let selectedTask = document.querySelector('.selected');
      if (selectedTask === null || 
        event.target.style.color === selectedTask.style.backgroundColor) {
        // Se não houver tarefa selecionada
        // ou se o dia clicado já é da cor selecionada
        // aplicaremos a cor padrão
        event.target.style.color = 'rgb(119,119,119)';
      } else {
        // Se o dia clicado é de cor diferente da selecionada
        // aplica a cor selecionada ao dia
        event.target.style.color = selectedTask.style.backgroundColor;
      }
    });
  };

  setDayColor();

  const addNewTask = () => {
    const getInputField = document.querySelector('#task-input');
    const addInputButton = document.querySelector('#btn-add');
    const getTaskList = document.getElementById('task-list');
  
    addInputButton.addEventListener('click', () => {
      if (getInputField.value.length > 0) {
        const newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    });
  
    getInputField.addEventListener('keyup', (event) => {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        const newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  }
  
  addNewTask();