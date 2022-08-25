function todoItemClicked(id) {
    webviewApi.postMessage({
        name: 'sidebar_todo_item_clicked',
        id: id
    });
}

function todoItemChanged(id, checked) {
    if (checked) {
        webviewApi.postMessage({
            name: 'sidebar_todo_item_checked',
            id: id
        })
    }
}

function todoTypeTabItemClicked(id) {
    webviewApi.postMessage({
        name: 'sidebar_todo_type_tab_item_clicked',
        id: id
    });
}
