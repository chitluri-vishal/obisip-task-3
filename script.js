document.getElementById('todoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var Input = document.getElementById('Input');
    var Text = Input.value.trim();
    if (Text !== '') {
      addTask(Text);
      Input.value = '';
    }
  });

  function addTask(Text) {
    var Item = document.createElement('li');
    Item.className = 'task-item';

    var cbox = document.createElement('input');
    cbox.type = 'checkbox';
    cbox.addEventListener('change', function() {
      updateTaskStatus(Item, cbox.checked);
    });
    Item.appendChild(cbox);

    var span = document.createElement('span');
    span.textContent = Text;
    Item.appendChild(span);

    var deleteButton = document.createElement('span');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteTask(Item);
    });
    Item.appendChild(deleteButton);

    document.getElementById('pendingList').appendChild(Item);
  }

  function updateTaskStatus(Item, isCompleted) {
    if (isCompleted) {
      Item.classList.add('completed');
      document.getElementById('completedList').appendChild(Item);
    } else {
      Item.classList.remove('completed');
      document.getElementById('pendingList').appendChild(Item);
    }
  }

  function deleteTask(Item) {
    Item.remove();
  }