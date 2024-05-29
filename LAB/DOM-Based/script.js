// Function to load orders from localStorage and display them
function loadOrders() {
  // Retrieve orders from localStorage
  var orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Loop through each order and create a corresponding order div
  orders.forEach(function(order) {
    var orderDiv = document.createElement("div");
    orderDiv.className = "order";
    orderDiv.innerHTML =
      "<p>Customer Name: " + order.name + "</p><p>Pizza Flavor: " + order.flavor + "</p>";
    document.getElementById("orders").appendChild(orderDiv);
  });
}

// Function to place a new order
function placeOrder() {
  let name1 = document.getElementById("name").value;
  let flavor = document.getElementById("flavor").value;

  // Create a new order object
  var order = {
    name: name1,
    flavor: flavor,
  };

  // Retrieve existing orders from localStorage or initialize an empty array
  var orders = [];

  // Add the new order to the orders array
  orders.push(order);

  // Save the updated orders array back to localStorage
  localStorage.setItem("orders", JSON.stringify(orders));

  // Clear the orders container
  document.getElementById("orders").innerHTML = "";

  // Reload orders from localStorage and display them
  loadOrders();
}

// Load orders from localStorage when the page loads
window.onload = function() {
  loadOrders();
};

//<button onclick="document.body.style.backgroundColor = 'violet'">Click Here </button>