import data from '../resources/json/data.json'

let table = document.querySelector('.table')

table.addEventListener('click',(e) => {
  e.preventDefault()

  let button = e.target.closest('.cell__button_type_more')
  let closeButton = e.target.closest('.add__button_type_hide')
  let row = e.target.closest('.table__row')
  let rows = [...document.querySelectorAll('.table__row_info')]

  let showAdditionalInfo = (row, rows) => {
    if (!row.classList.contains('hide')) {

      objectInfo(data, row)

      row.classList.add('show')
      rows.forEach(row => {
        if (!row.classList.contains('show')) {
          row.classList.add('hide')
        }
      })
    }
  }

  let hideAdditionalInfo = (row, rows) => {
    row.classList.remove('show')
    rows.forEach(row => {
      row.classList.remove('hide')
    })
  }

  let objectInfo = (data, row) => {
    
    let rowID = row.getAttribute('id')
    let objects = data.organizations.find(object=>object.id===rowID).objectList
    let objectsListContainer = document.getElementById(`${rowID}-container`)
    let objectsQuantityContainer = document.getElementById(`${rowID}-quantity`)

    objects.map(object=>{
      let content = document.createElement('div')

      content.classList.add('add__object')
      content.innerHTML = object.name

      objectsListContainer.appendChild(content)
    })

    objectsQuantityContainer.innerHTML = objects.length
  }

  if (button) {
    if (row.classList.contains('show')) {
      hideAdditionalInfo(row, rows)
    } else {
      showAdditionalInfo(row, rows)
    }
  }

  if (closeButton) {
    hideAdditionalInfo(row, rows)
  }
})