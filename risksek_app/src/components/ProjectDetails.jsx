import axios from "axios";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import { getData } from "../Redux/action";

const ProjectDetails = () => {
//   let items = useSelector((store) => store.data);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getData());
//   }, []);

const [data, setData] = useState([]);

const getData  = () => {
    axios.get("http://localhost:8080/All").then((res) => {
        console.log(res.data)
        setData(res.data)
    })
}

useEffect(() =>{
    getData()
},[])

  return (
    <div>
      <table
      className="table table-hover"
      style={{
        width: "75%",
        margin: "auto",
        border: "0.01px solid white",
        borderRadius: "50%",
      }}
      >
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Status</th>
            <th> Last Updata</th>
            <th>Resources</th>
            <th>Project Timeline Started</th>
            <th>Project Timeline End</th>
            <th>Estimation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
                <tr>
                  <td>{ele.PROJECTNAME}</td>
                  <td>{ele.STATUS}</td>
                  <td>{ele.LASTUPDATE}</td>
                  <td>{ele.RESOURCES}</td>
                  <td>{ele.PROJECTTIMELINE.start}</td>
                  <td>{ele.PROJECTTIMELINE.end}</td>
                  <td>{ele.ESTIMATION}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectDetails;
