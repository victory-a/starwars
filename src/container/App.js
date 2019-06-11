import React, { Component, Fragment} from 'react';
import NavBar from '../components/NavBar.js'; 
import logo from '../images/logo.png';
import { urls, apiCall } from '../api/apiCall';


class App extends Component {
  constructor() {
    super()
  }


componentDidMount() {
  const [films, planets, starships, people] = urls;
  apiCall(films).then(data=>this.setState({ films: data}))
  apiCall(planets).then(data=>this.setState({ planets: data}))
  apiCall(starships).then(data=>this.setState({ starships: data}))
  apiCall(people).then(data=>this.setState({ people: data}))
}

// //To be modified to assign unique names for search param in state
// onSearch = (e) => {
//   const { target: { name, value } } = e;
//   this.setState({
//     [name]: value
//   })
// } 

// //To be  modified to assign unique names for search param. in state
// onClick = (e) => {
// const { target : { name, value} } = e;
// this.setState({
//   [name]: value
// })
// }
    

  render() {

    return (
      <Fragment>
        <div className="container center">
          <NavBar logo={logo} />
        </div>
      </Fragment>  
    ); 
  }

}

export default App;
