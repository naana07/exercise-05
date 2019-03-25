/*
Q.Reactを使ってテーブルを表現するコンポーネントを作成して下さい。
　元となるデータは{name: 'Seki', age: 37, skills: ['Math', 'Sports']}
　のようなオブジェクトを配列で格納します。

　１オブジェクト１レコードとなるようにします。
　Skillsの各項目はdivで囲み、改行して見えるような形にしてください。

　テーブル１レコードはテーブルコンポーネントとは
　別ファイル、別コンポーネントとして作成してください。


*/

import React, { Component } from 'react';

class Data extends Component {
  constructor(props){
    super(props);
  }

    returnage(age) {
      return (Number(age))
    }

    returnheaders(headers){
      const headersinth = headers.map((input, i) => (<th key={i}>{input}</th>))
    }

    arrayUnique(array) {
      return array.filter( function( value, index ) {
    		return index === array.indexOf( value ) ;
    	} ) ;
    }

  // 新規追加
  /*

  addTodo(){
    // 追加
    this.state.data.push({
      title: this.refs.newText.value
    });
    // 保存
    this.setState({
      data : []
    });
    // 初期化
    this.refs.newText.value='';
  }

  alert(){
  alert('JavaScript')
  */

  render(){
    return (
      <div>
        <h2>データテーブル</h2>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Hobby</th>
          </tr>
          </thead>
          <tbody>
          {this.props.tabledata.map(data=>{
            return(
            <tr>
            <td>{data.name}</td>
            <td>{this.returnage(data.age)}</td>
            <td>{data.hobby}</td>
            </tr>
          )
          })}

          </tbody>
          </table>
        </div>
      );
    }
  }

  export default Data;
