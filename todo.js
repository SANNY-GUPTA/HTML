let taskFormEl=document.getElementById('task-form');
taskFormEl.addEventListener('submit',function(event)
{
    event.preventDefault(); // stop submission
    let taskEl=document.getElementById('task-el');
    let task=taskEl.value;
    let taskList=localStorage.getItem('task')?JSON.parse(localStorage.getItem('task')):[];
    taskList.unshift(task);
    localStorage.setItem('task',JSON.stringify(taskList));
    displayTask();
    taskEl.value=''
})

//Display task

function displayTask(){
    let taskListEl=document.getElementById('task-list');
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    if(taskList.length>=1){
        let eachtask=" ";
        for(let task of taskList){
            eachtask +=`<li class="list-group-item"><span> ${task}</span><button class="btn-close float-end"><i class="fa fa-times-circles"></i></button></li>`;
        }
        taskListEl.innerHTML=eachtask;
    }
}


