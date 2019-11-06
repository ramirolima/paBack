class cartSingleton {
    constructor(){
      this._data = [];
    }

    add(item){
      this._data.push(item);
    }

    get(id){
      return this._data.find(item => item.id === id);
    }
  }

  const instance = new cartSingleton();
  Object.freeze(instance);

  export default instance;