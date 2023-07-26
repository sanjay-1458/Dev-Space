const stocks = {
    fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid: ["Water", "Ice"],
    holder: ["Cone", "Cup", "Stick"],
    toppings: ["Chocolate", "Peanuts"],
  };
  
  const order = (fruit_name, call_production) => {
    setTimeout(() => {
      console.log(`${stocks.fruits[fruit_name]} was selected`);
      production();
    }, 2000);
  };
  const production = () => {
    setTimeout(() => {
      console.log("Production has started");
      setTimeout(() => {
        console.log("The fruits has been chopped");
        setTimeout(() => {
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
          setTimeout(() => {
            console.log("Machine was started");
            setTimeout(() => {
              console.log(`${stocks.holder[0]} was selected`);
              setTimeout(() => {
                console.log(`${stocks.toppings[0]} was added as topping`);
                setTimeout(() => {
                  console.log("Serve Ice cream");
                }, 2000);
              }, 3000);
            }, 2000);
          }, 1000);
        }, 1000);
      }, 2000);
    }, 0);
  };
  order(0, production);


//////


  const stocks = {
  fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "Stick"],
  toppings: ["Chocolate", "Peanuts"],
};

const is_shop_open = true;

const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
};

order(2000, () => {
  console.log(`${stocks.fruits[2]} was selected`);
})
  .then(() => {
    return order(0, () => {
      console.log("Production has started");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("The fruits has been chopped");
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} ans ${stocks.liquid[1]} was added`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log("Start the machine");
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.holder[0]} was selected`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[0]} was added as topping`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log("Serve Ice cream");
    });
  })
  .catch(() => {
    console.log("Customer left");
  })
  .finally(() => {
    console.log("Day ended, shop is closed");
  });
  
