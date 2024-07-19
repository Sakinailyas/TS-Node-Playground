function make_car(manufacturer, model, ...options ){
     let car = {
        manufacturer: manufacturer,
        model: model
     };
      options.forEach(option =>{
        let [key, value]= option.split(":");
        car[key.trim()]= value.trim();
      });
   return car;
}
console.log(make_car("Toyota","Corolla","colour: Black","Sunroof: True","year:2024"));