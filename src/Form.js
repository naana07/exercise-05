// Q.Reactを使ってHTMLフォームを表現するコンポーネントを作成して下さい。
// 　フォームの部品は下記となります
// 　　・名前(text)
// 　　・年齢(text: 正の整数以外が入力されると「数値を入力して下さい」と横に表示する)
// 　　・趣味(select: 音楽/映画/読書)
// 　　・登録(button:名前と年齢が空ではなく、年齢に正の整数が選択されている場合のみクリック可能
// 　　　クリックするとコンソールに名前、年齢、趣味が表示される)
//
//

import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    // this.state = {name:"", age: "", hobby:"music"};
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangeage = this.handleChangeage.bind(this);
    this.handleChangehobby = this.handleChangehobby.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };

  is_Natural(input) {
    if (Number.isInteger(input)==true && input>0){
      return true
    }
    else{
      return false
    }
  }

  handleChangename(event){
    this.props.handleChangeeditingname(event.target.value);
  }

  handleChangeage(event){
    this.props.handleChangeeditingage(Number(event.target.value));
  }

  handleChangehobby(event){
    this.props.handleChangeeditinghobby(event.target.value);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.formdata()
  }

  hasvalue(input){
    if (input.length==0){
    const validvalue=false
      return validvalue
    }

    else{
    const validvalue=true
      return validvalue
    }
  }

render() {
  return (
    <form onSubmit={this.handleSubmit}>
    <h2>追加フォーム</h2>
    <p>
    名前：<input type="text" value={this.props.editingformdata.name} onChange={this.handleChangename}/>
    </p>
    <p>
    年齢：<input type="text" value={this.props.editingformdata.age} onChange={this.handleChangeage}>
    </input>
    </p>
    <p>
    {Number.isInteger(this.props.editingformdata.age) && this.props.editingformdata.age>0 ? "" : "数値を入力してください"}
    </p>
    <p>
    趣味：
    <select value={this.props.editingformdata.hobby} onChange={this.handleChangehobby}>
               <option value="music">音楽</option>
               <option value="movies">映画</option>
               <option value="reading">読書</option>
    </select>
    </p>
    <button type="submit" value="submit" name="登録" disabled={Number.isInteger(this.props.editingformdata.age) && this.props.editingformdata.age>0 && (this.props.editingformdata.name)!= "" ? false : true}>登録</button>
    </form>
  )
}
}

export default Form;
