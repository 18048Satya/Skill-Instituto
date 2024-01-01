function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username !== '' && password !== '') {
      alert('Click Ok to Login successfully');
      document.getElementById("button").href = "index1.html";
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  function addItemToCart(product, price,image) {
      var cartTable = document.getElementById("cartTable");
      var tbody = cartTable.getElementsByTagName("tbody")[0];

    //Check if the product is already in the cart
      for (var i = 0; i < tbody.rows.length; i++) {
          var row = tbody.rows[i];
          if (row.cells[1].innerHTML === product) {
              // Increment quantity if product already in the cart
              var quantityCell = row.cells[3];
              var quantity = parseInt(quantityCell.innerHTML);
              quantity++;
              quantityCell.innerHTML = quantity;
              // Update total price for the product
              var totalPriceCell = row.cells[4];
              var total = quantity * price;
              totalPriceCell.innerHTML = '₹' + total.toFixed(0);

              updateCartSummary();
              return;
          }
      }
      // If the product is not in the cart, add the product in the rows
      var newRow = tbody.insertRow(tbody.rows.length);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      var cell4 = newRow.insertCell(3);
      var cell5 = newRow.insertCell(4);
      var cell6 = newRow.insertCell(5);

      cell1.innerHTML =  `<img class="cart-image" src="`+image +`" alt="Product 8">`;
      cell2.innerHTML =  product;
      cell3.innerHTML = '₹' + price.toFixed(0);
      cell4.innerHTML =  1;
      cell5.innerHTML = '₹' + price.toFixed(0);
      cell6.innerHTML = '<button class="btn btn-warning" onclick="removeItem(this)"><span class="material-symbols-outlined">delete</span></button>';


      updateCartSummary();
  }
// remove button logic
  function removeItem(button) {
      var row = button.parentNode.parentNode;
      row.parentNode.removeChild(row);

      updateCartSummary();
  }
// cart summary update logic
  function updateCartSummary() {
      var cartTable = document.getElementById("cartTable");
      var tbody = cartTable.getElementsByTagName("tbody")[0];
      var totalItems = 0;
      var totalQuantity = 0;
      var totalPrice = 0;

      for (var i = 0; i < tbody.rows.length; i++) {
          var row = tbody.rows[i];
          totalItems++;
          totalQuantity += parseInt(row.cells[3].innerHTML);
          totalPrice += parseFloat(row.cells[4].innerHTML.replace('₹', ''));
      }

      document.getElementById("totalItems").innerHTML = totalItems;
      document.getElementById("totalQuantity").innerHTML = totalQuantity;
      document.getElementById("totalPrice").innerHTML = totalPrice.toFixed(2);
  }
// cart display logic
  function display(){
    var x =document.getElementById('cart');
    if (x.style.display === 'none') {
        x.style.display = 'grid';
      } else {
        x.style.display = 'none';
      }
  }