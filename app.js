const { remote } = require('electron')
const $ = require('jquery')
const { Menu, MenuItem } = remote

const menu = new Menu()
menu.append(new MenuItem({
    label: 'MenuItem1',
    click() {
        $('#button').trigger('click')
    }
}))
menu.append(new MenuItem({ type: 'separator' }))
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true }))

window.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    menu.popup({ window: remote.getCurrentWindow() })
}, false)

$('#button').click(() => {
	console.log('button clicked')
})