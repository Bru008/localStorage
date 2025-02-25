let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

function cadastrar() {
    var tarefa = document.getElementById('inputTarefa').value;
    
    if (tarefa.trim() !== '') {
        tarefas.push({ tarefa: tarefa, concluida: false });
        localStorage.setItem('tarefas', JSON.stringify(tarefas)); 
        exibirTarefas();
    }
}

function exibirTarefas() {
    var listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';

    tarefas.forEach(function(item, indice) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = item.concluida;
        checkbox.onclick = function() {
            item.concluida = checkbox.checked;
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
        };

        var textoTarefa = document.createElement('span');
        textoTarefa.textContent = item.tarefa;

        var btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
       
        btnRemover.onclick = function() {
            remover(indice);
        };

        listaTarefas.appendChild(checkbox);
        listaTarefas.appendChild(textoTarefa);
        listaTarefas.appendChild(btnRemover);
        listaTarefas.appendChild(document.createElement('br'));
    });
}

window.onload = function() {
    exibirTarefas();
}

function remover(indice) {
    tarefas.splice(indice, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    exibirTarefas();
}

function limpar(){

    localStorage.clear()
    location.reload()

}