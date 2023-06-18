const TableRow = (props) =>{

    let {user} = props;
    console.log(selectedItem)
    return <div>
           <tr className={`data-row ${selectedRow == user.id ? 'active' : ''} `}>
                <td className="column1">{user.id}</td>
                <td className="column2">{user.firstName}</td>
                <td className="column3">{user.lastName}</td>
                <td className="column4">{user.email}</td>
                <td className="column5">{user.phone}</td>
            </tr>

        
    </div>


}

export default TableRow;