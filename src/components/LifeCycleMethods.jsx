//?==================================================================
//?                         LIFECYCLE METOTLARI
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamiza imkan saglayan ozel React metotlaridir.
//* Ornegin bir component olsuturuldugunda, DOM'a basildiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)


import React from 'react';


class LifeCycleMethods extends React.Component {
   constructor(props) {
    console.log('constructor running');
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    console.log('mounted');
  }
  componentDidUpdate() {
    console.log('updated');
  }
  componentWillUnmount() {
    //! 5-) Bir component DOM agacindan kaldiriltiktan hemen sonra cagirlir.
    console.log('unmounting');
  }

  render() {
    console.log('rendered');
    return (
      <div className="container text-center mt-4">
        <h1 className="text-red-900">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn bg-rose-300 " onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;

////////////////////////////////// LIFE CYCLE METHODS GENEL BILGI////////////////
// constructor() kurucu, yapıcı metot / binding with this  / state başlangıç değeri verirsek / ilk çalışır
// static getDerivedStateFromProps() çok kullanılmıyor(istisna)
// render() constructor dan sonra çalışır / DOM tree ye render yapar
// componentDidMount() ilk render dan sonra bişey çalıştıracaksak kullanırız /  bir kere çalışır / her refresh den sonra API den veri çekmek gibi..

// static getDerivedStateFromProps() X
// shouldComponentUpdate() X
// render()  ikinci ve sonraki render lar / state ler değişince algıla DOM a bas
// getSnapshotBeforeUpdate() ilki hariç her render dan sonra başka iş yaptırmak için
// componentDidUpdate() ilk render da çalışmaz / comp. in prevState ve prevProps a erişimi var

// componentWillUnmount()  isteği kapatmak için, uygulamayı bellekten kaldırmak için
