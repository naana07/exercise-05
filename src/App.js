// Q.画面を複数のファイルで構成します。１ファイル１コンポーネントとして下さい。
// 　画面左または上部にメニューバーを作成し、
// 「追加フォーム」と書かれた文字列をクリックすると、演習２で作成したコンポーネントを表示し
// 「一覧」と書かれた文字列をクリックすると、演習１で作成したコンポーネントを表示してください。
// 「追加フォーム」、「一覧」のいずれか選択されている方の文字色を赤にして、どちらが選択されているかわかるようにして下さい。

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Form from './Form.js'
import Data from './Data.js'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

class BasicExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      editingformdata: {name: "", age:"", hobby: "music"},
      formdata: [],
      location: "/"
    }

    this.handleChangelocation = this.handleChangelocation.bind(this)
    this.changedata = this.changedata.bind(this)
    this.handleChangeeditingname = this.handleChangeeditingname.bind(this)
    this.handleChangeeditingage = this.handleChangeeditingage.bind(this)
    this.handleChangeeditinghobby = this.handleChangeeditinghobby.bind(this)

  };

  handleChangeeditingname(data) {
    let newstate = {...this.state.editingformdata, name: data}
    console.log(newstate);
    this.setState({editingformdata: newstate})
    console.log(this.state);
  }

  handleChangeeditingage(data) {
    let newstate = {...this.state.editingformdata, age: data}
    this.setState({editingformdata: newstate})
  }

  handleChangeeditinghobby(data) {
    let newstate = {...this.state.editingformdata, hobby: data}
    this.setState({editingformdata: newstate})
  }

  changedata() {
    let nowdata = this.state.formdata
    let newstate = {...this.state, formdata: nowdata.concat(this.state.editingformdata)}
    this.setState(newstate)
  }

  handleChangelocation() {
    console.log(window);

    this.setState({location: window.location.pathname});
}

  render() {
    // console.log(this.state.location);
    return(
      <Router>
        <div className="topnav" id="myTopnav">
          <ul>
          <li onClick={this.handleChangelocation}><Link to="/" className={this.state.location==="/" ? "Active" : ""}>Home</Link></li>
          <li onClick={this.handleChangelocation}><Link to="/data" className={this.state.location==="/data" ? "Active" : ""}>一覧</Link></li>
          <li onClick={this.handleChangelocation}><Link to="/forms" className={this.state.location==="/forms" ? "Active" : ""}>追加フォーム</Link></li>
          </ul>

          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/data" render={() => (<Data tabledata={this.state.formdata}/>)}/>
          <Route path="/forms" render={() => (<Form
            handleChangeeditingname={this.handleChangeeditingname}
            handleChangeeditingage={this.handleChangeeditingage}
            handleChangeeditinghobby={this.handleChangeeditinghobby}
            editingformdata={this.state.editingformdata}
            formdata={this.changedata}
          />)}/>
        </div>
      </Router>
    )
  }
}

export default BasicExample
