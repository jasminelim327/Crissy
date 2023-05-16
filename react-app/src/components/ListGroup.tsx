import { Fragment } from "react"


function ListGroup  () {

const listitems = ['A', 'B', 'C', 'D', 'E', 'F'];

listitems.map(listitem => {listitem})

return (

    <ul className="list-group">
        {listitems.map((listitem) => (<li>{listitem}</li>)) }
    </ul>


)
}

export default ListGroup