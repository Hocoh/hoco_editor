import React from "react"
import ReactDOM from "react-dom"
import Editor from "./Editor"

// import { BrowserRouter as Router, Route } from 'react-router-dom';

if (module.hot){module.hot.accept()} ;
  
// ReactDOM.render(
//     <Router>
//         <div>
//             <Route exact path="/" component={Editor} />
//         </div>
//     </Router>,
//     document.getElementById("root")
// )

ReactDOM.render(
    <Editor/>,
    document.getElementById("root")
)