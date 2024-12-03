let orders = [
    "001: Alice",
    "002: Bob",
    "003: Charlie",
    "004: David",
    "005: Eve"
  ];
  console.log("Initial Queue:", orders);
  
  let newOrders = ["006: Frank", "007: Grace", "008: Hannah"];
  orders.length += newOrders.length; 
  
  for (let i = orders.length - 1; i >= newOrders.length; i--) {
    orders[i] = orders[i - newOrders.length];
  }
  for (let i = 0; i < newOrders.length; i++) {
    orders[i] = newOrders[i];
  }
  console.log("Queue after adding new orders:", orders);
  
  orders.length -= 2; 
  console.log("Queue after removing two fulfilled orders:", orders);
  
  function processOrders(queue) {
    for (let i = 0; i < queue.length; i++) {
      let orderParts = "";
      let j = 0;
      while (queue[i][j] !== ":") {
        orderParts += queue[i][j];
        j++;
      }
      let orderId = orderParts.trim(); 
      let customerName = queue[i].slice(j + 2).trim(); 
  
      console.log(`Processing ${orderId} for ${customerName}`);
    }
  }
  processOrders(orders);
  
  console.log("Final Queue of Unprocessed Orders:", orders);
  
  function findLongestName(queue) {
    let longestName = "";
    for (let i = 0; i < queue.length; i++) {
      let startIndex = queue[i].indexOf(":") + 2; 
      let customerName = queue[i].slice(startIndex); 
  
      if (customerName.length > longestName.length) {
        longestName = customerName;
      }
    }
    console.log(`Customer with the longest name is: ${longestName}`);
  }
  findLongestName(orders);
  