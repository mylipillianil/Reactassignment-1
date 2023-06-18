"use client"
import { useEffect } from "react"
import "./style.css"
import axios from "axios"
import InfoWrapper from "./components/infoWrapper"

export default function Home() {

  let [userData, setUserData] = UseState([])
  let [searchQuery, setSearchQuery] = useState("")
  let [filteredUserData, setFilteredUserData] = useState([])
  let [activeRowIndex, setActiveRowIndex] = useState(2);
  let [activeRowId,setActiveRowID] = useState()
  let [activeRowData,setActiveRowData] = useState()

  useEffect(()=>{
    axios.get("https://admin-panel-data-edyoda-sourav.vercel.app/admin/data")
    .then(res => {
      setUserData(res.data)
      setActiveRowID(res.data[activeRowIndex].id)
      setActiveRowdata(res.data[activeRowIndex])
    })
    .catch(err => console.log(err))
  },[])

  const getSearchvalue = (e) => {
    let search = e.target.value;
    let fillteredUser = userDat.filter((item)=>item.firstName.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredUser)
    setFilteredUserData(filteredUser)
    setSearchQuery(e.target.value)

  }
 
  return (
    <main>

    <div id="table-section">

        <form action="/">
            <input type="text" 
            placeholder="Enter something"
            name="search-box" 
            id="search-box"
            onChange = {(e)=>getSearchvalue(e)} 
            value={searchQuery}
            />
        </form>

        <div id="table-wrapper">

            <div id="table-headers">
                <table>
                    <thead>
                        <tr>
                            <th className="column1">Id</th>
                            <th className="column2">FirstName</th>
                            <th className="column3">LastName</th>
                            <th className="column4">Email</th>
                            <th className="column5">Phone</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div id="table-data">
                <table>
                    <tbody>
                        {/*
                         <tr class="data-row">
                            <td class="column1">28</td>
                            <td class="column2">Larisa</td>
                            <td class="column3">Llaneza</td>
                            <td class="column4">SCallison@non.org</td>
                            <td class="column5">(763)248-9034</td>
                        </tr>
                         */}
                         {
                          console.log(activeRowId)
                         }
                         {
                          searchQuert == "" && filteredUserData.length == 0 ?
                          userData.map(item => <TableRow
                             user = {item} 
                             key={item.id}
                             selectedItem = {activeRowId}
                             />):
                          filteredUserData.map(item => <TableRow
                             user = {item} 
                             key={item.id}
                             
                             />)
                         }
                        
                    </tbody>
                </table>
            </div>

        </div>

    </div>

{/*
    <div id="info-wrapper">
        <h1>Details</h1>
        <p>Click on a table item to get detailed information</p>
        <div id="info-content">
            <div><b>User selected:</b> Marcellin Shrestha</div>
            <div>
                <b>Description: </b>
                <textarea cols="50" rows="5" readonly>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                </textarea>
            </div>
            <div><b>Address:</b> 6480 Nec Ct</div>
            <div><b>City:</b> Dinwiddie</div>
            <div><b>State:</b> NV</div>
            <div><b>Zip:</b> 91295</div>
        </div>
    </div> 
  */}
  {
    console.log(activeRowData)
  }
  {
    activeRowData && <InfoWrapper info={activeRowData}/>
  }

</main>
  )
}